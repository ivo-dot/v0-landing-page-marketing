import { NextResponse } from "next/server";

// El hook vive en ZAPIER_WEBHOOK_URL (Vercel → Settings → Environment Variables).
// El valor de abajo es el hook viejo, que quedó publicado en la historia de este
// repo (que es público) y por lo tanto hay que darlo por comprometido: queda como
// fallback para no cortar el formulario, y se borra en cuanto se rote el hook en
// Zapier y se cargue la variable de entorno.
const ZAPIER_FALLBACK = "https://hooks.zapier.com/hooks/catch/22126987/u1edvyw/";
const ZAPIER_URL = process.env.ZAPIER_WEBHOOK_URL || ZAPIER_FALLBACK;

// Compartido por el formulario de evaluación de la home (didakto-redesign-markup.ts)
// y el formulario de contacto de las páginas internas (dk-page.tsx) — solo se exige
// lo que ambos envían siempre; los campos extra de la evaluación se validan en el cliente.
const REQUIRED = ["nombre", "apellido", "email", "empresa"]

// Solo se reenvía a Zapier lo que los formularios mandan de verdad. Sin esto el body
// entero viajaba tal cual y cualquiera podía inyectar campos arbitrarios al Zap.
// OJO: si se agrega un campo a cualquiera de los dos formularios, hay que sumarlo acá
// o se descarta en silencio y el dato no llega al Zap.
const ALLOWED = [
  ...REQUIRED,
  // formulario de evaluación de la home (didakto-redesign-markup.ts)
  "telefono", "cargo", "pais", "sitio_web", "industria", "empleados",
  "publicidad_activa", "inversion_actual", "inversion_lista", "objetivo",
  "desafio", "proceso_leads", "usa_crm", "crm_cual", "atribucion",
  // formulario de contacto de las páginas internas (dk-page.tsx)
  "asunto", "mensaje",
]

const MAX_BODY_BYTES = 32 * 1024   // ~32 KB, de sobra para un formulario
const MAX_FIELD_LEN = 2000

// Se rechaza el POST que venga con un Origin de otro sitio. Las llamadas sin Origin
// (curl, server-to-server) pasan para no romper nada; el rate limit es lo que las acota.
const ALLOWED_HOSTS = ["didaktomarketing.com", "www.didaktomarketing.com", "localhost"]

// Rate limit en memoria. En serverless cada instancia tiene su propio mapa, así que
// el límite es por instancia y se pierde en los cold starts: frena el flood naive,
// no a un atacante decidido. Para eso haría falta un store compartido (Vercel KV).
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const prev = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  prev.push(now)
  hits.set(ip, prev)
  if (hits.size > 5000) hits.clear()   // techo de memoria
  return prev.length > MAX_PER_WINDOW
}

export async function POST(request: Request) {
  try {
    // El primer valor de x-forwarded-for lo puede poner el cliente, así que no sirve
    // para limitar. Se prioriza lo que setea la plataforma; de x-forwarded-for se toma
    // el último tramo, que es el que agrega el proxy de adelante.
    const ip =
      request.headers.get("x-vercel-forwarded-for")?.split(",").pop()?.trim() ||
      request.headers.get("x-real-ip")?.trim() ||
      request.headers.get("x-forwarded-for")?.split(",").pop()?.trim() ||
      "desconocida"
    if (rateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Demasiados envíos seguidos. Probá de nuevo en un minuto." },
        { status: 429, headers: { "Retry-After": "60" } }
      )
    }

    const origin = request.headers.get("origin")
    if (origin) {
      let host = ""
      try { host = new URL(origin).hostname } catch { host = "" }
      if (!ALLOWED_HOSTS.includes(host)) {
        return NextResponse.json({ success: false, message: "Origen no permitido" }, { status: 403 })
      }
    }

    const raw = await request.text()
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ success: false, message: "Payload demasiado grande" }, { status: 413 })
    }

    let body: Record<string, unknown>
    try {
      body = JSON.parse(raw)
    } catch {
      return NextResponse.json({ success: false, message: "JSON inválido" }, { status: 400 })
    }
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ success: false, message: "Formato inválido" }, { status: 400 })
    }

    // Honeypot — bots fill _hp, humans don't
    if (body._hp) {
      return NextResponse.json({ success: true, message: "OK" }, { status: 200 })
    }

    // Required fields
    for (const field of REQUIRED) {
      if (!body[field] || !String(body[field]).trim()) {
        return NextResponse.json({ success: false, message: `Campo requerido: ${field}` }, { status: 400 })
      }
    }

    // Basic email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(body.email))) {
      return NextResponse.json({ success: false, message: "Email inválido" }, { status: 400 })
    }

    const payload: Record<string, string> = {}
    for (const k of ALLOWED) {
      if (body[k] === undefined || body[k] === null) continue
      const v = String(body[k]).trim()
      if (v) payload[k] = v.slice(0, MAX_FIELD_LEN)
    }

    // Si se sumó un campo al formulario y no al allowlist, que quede en el log de
    // Vercel en vez de desaparecer sin rastro.
    const descartados = Object.keys(body).filter((k) => k !== "_hp" && !ALLOWED.includes(k))
    if (descartados.length) console.warn("[contact] campos fuera del allowlist:", descartados.join(", "))

    const r = await fetch(ZAPIER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!r.ok) {
      // El detalle queda en el log de Vercel, no se le devuelve al cliente.
      console.error("[contact] Zapier respondió", r.status, await r.text().catch(() => ""))
      return NextResponse.json(
        { success: false, message: "No pudimos registrar tu consulta. Escribinos a ivo@didaktomarketing.com." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "OK" }, { status: 200 });
  } catch (err: any) {
    console.error("[contact] error inesperado:", err?.message || err)
    return NextResponse.json(
      { success: false, message: "Error inesperado. Escribinos a ivo@didaktomarketing.com." },
      { status: 500 }
    );
  }
}
