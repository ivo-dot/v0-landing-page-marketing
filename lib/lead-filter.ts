// Filtro anti-basura para /api/contact. Corre en el servidor, así que no se puede
// saltear desde el navegador. Devuelve:
//   - ok: el lead pasa
//   - ok:false + silent:true  -> es un bot o spam evidente: se responde "OK" sin reenviar,
//     para que el bot no aprenda qué lo bloqueó
//   - ok:false + silent:false -> puede ser una persona real que se equivocó: se le
//     devuelve `message` para que corrija el dato

export type LeadVerdict =
  | { ok: true }
  | { ok: false; silent: boolean; reason: string; message?: string }

const norm = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()

// Palabras que no tienen lugar en ningún campo (ni en nombre ni en mensaje).
const BLOCK_ANYWHERE = [
  "porn", "porno", "pornografia", "pornstar", "xxx", "onlyfans", "hentai", "nudes",
  "escort", "escorts", "camgirl", "sexcam", "webcam sex", "viagra", "cialis", "levitra",
  "casino online", "online casino", "poker online", "sports betting", "payday loan",
  "buy followers", "comprar seguidores", "backlinks", "rank #1", "seo services",
  "telegram:", "t.me/", "whatsapp group",
]

// Palabras que solo se bloquean en campos de identidad (nombre, apellido, empresa, cargo):
// en un mensaje pueden ser legítimas ("segmentación por sexo", "empresa de apuestas").
const BLOCK_IDENTITY = [
  "sex", "sexo", "sexy", "casino", "bet", "bets", "apuestas", "adult", "adulto",
  "fuck", "shit", "puta", "puto", "mierda", "asdf", "qwerty",
]

const DISPOSABLE = new Set([
  "mailinator.com", "guerrillamail.com", "guerrillamail.net", "sharklasers.com", "10minutemail.com",
  "10minutemail.net", "tempmail.com", "temp-mail.org", "temp-mail.io", "yopmail.com", "yopmail.net",
  "trashmail.com", "getnada.com", "dispostable.com", "maildrop.cc", "throwawaymail.com", "fakeinbox.com",
  "mailnesia.com", "mohmal.com", "emailondeck.com", "tempail.com", "tmpmail.org", "moakt.com",
  "mytemp.email", "burnermail.io", "spamgourmet.com", "mintemail.com", "inboxkitten.com",
])

const IDENTITY_FIELDS = ["nombre", "apellido", "empresa", "cargo", "industria", "pais"]
const TEXT_FIELDS = ["desafio", "objetivo", "proceso_leads", "mensaje", "crm_cual"]
const URL_RE = /(https?:\/\/|www\.)/i
const BARE_DOMAIN_RE = /\b[a-z0-9-]+\.(com|net|org|ru|xyz|top|info|biz)\b/i   // solo en nombre/apellido

const hasWord = (haystack: string, word: string) =>
  new RegExp(`(^|[^a-z0-9])${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`).test(haystack)

// Proporción de letras que no son latinas (cirílico, CJK, árabe, etc.).
function nonLatinRatio(s: string) {
  const letters = s.match(/\p{L}/gu) || []
  if (letters.length < 4) return 0
  const latin = s.match(/\p{Script=Latin}/gu) || []
  return 1 - latin.length / letters.length
}

function looksLikeName(s: string) {
  if (s.length < 2 || s.length > 60) return false
  if (!/^[\p{L}][\p{L}\s'.\-]*$/u.test(s)) return false           // sin números ni símbolos
  if (/(.)\1{3,}/u.test(s)) return false                           // "aaaaa"
  const compact = norm(s).replace(/[^a-z]/g, "")
  if (compact.length >= 6 && !/[aeiouy]/.test(compact)) return false // "xcvbnm"
  return true
}

export function evaluateLead(p: Record<string, string>, ctx: { elapsedMs?: number }): LeadVerdict {
  // 1) Tiempo: una persona tarda más de unos segundos en completar el formulario.
  if (typeof ctx.elapsedMs === "number" && ctx.elapsedMs < 3000) {
    return { ok: false, silent: true, reason: "demasiado rápido" }
  }

  const all = norm(Object.values(p).join(" | "))

  // 2) Contenido que no corresponde en ningún campo.
  for (const w of BLOCK_ANYWHERE) {
    if (hasWord(all, norm(w))) return { ok: false, silent: true, reason: `palabra bloqueada: ${w}` }
  }

  // 3) Identidad: palabras bloqueadas, links y nombres sin forma de nombre.
  for (const f of IDENTITY_FIELDS) {
    const v = p[f]
    if (!v) continue
    const n = norm(v)
    for (const w of BLOCK_IDENTITY) {
      if (hasWord(n, w)) return { ok: false, silent: true, reason: `palabra bloqueada en ${f}: ${w}` }
    }
    if (URL_RE.test(v) || v.includes("@") || ((f === "nombre" || f === "apellido") && BARE_DOMAIN_RE.test(v))) {
      return { ok: false, silent: true, reason: `link o email en ${f}` }
    }
  }
  for (const f of ["nombre", "apellido"]) {
    if (p[f] && !looksLikeName(p[f])) {
      return { ok: false, silent: false, reason: `${f} inválido`, message: `Revisá el campo ${f === "nombre" ? "Nombre" : "Apellido"}: tiene que ser un nombre real.` }
    }
  }
  if (p.nombre && p.apellido && norm(p.nombre) === norm(p.apellido) && p.nombre.length > 3) {
    return { ok: false, silent: true, reason: "nombre igual a apellido" }
  }

  // 4) Texto libre: alfabeto no latino y exceso de links.
  for (const f of TEXT_FIELDS) {
    const v = p[f]
    if (!v) continue
    if (nonLatinRatio(v) > 0.3) return { ok: false, silent: true, reason: `alfabeto no latino en ${f}` }
    if ((v.match(/https?:\/\/|www\./gi) || []).length > 1) return { ok: false, silent: true, reason: `muchos links en ${f}` }
    if (/(.)\1{9,}/u.test(v)) return { ok: false, silent: true, reason: `texto repetido en ${f}` }
  }

  // 5) Email: formato y dominios descartables.
  const email = (p.email || "").toLowerCase()
  if (!/^[a-z0-9._%+\-]{1,64}@[a-z0-9.\-]+\.[a-z]{2,24}$/.test(email) || email.includes("..")) {
    return { ok: false, silent: false, reason: "email inválido", message: "Revisá el email." }
  }
  const domain = email.split("@")[1]
  if (DISPOSABLE.has(domain)) {
    return { ok: false, silent: false, reason: `email descartable: ${domain}`, message: "Usá un email corporativo o personal real, no uno temporal." }
  }

  // 6) Teléfono (opcional): si viene, tiene que parecer un teléfono.
  if (p.telefono) {
    const digits = p.telefono.replace(/\D/g, "")
    if (digits.length < 7 || digits.length > 15 || /^(\d)\1+$/.test(digits) || !/^[\d\s+()\-.]+$/.test(p.telefono)) {
      return { ok: false, silent: false, reason: "teléfono inválido", message: "Revisá el teléfono: código de país + número." }
    }
  }

  return { ok: true }
}

// Verificación de Cloudflare Turnstile. Solo se exige si TURNSTILE_SECRET_KEY está
// cargada en el entorno; sin la variable el sitio funciona igual (sin captcha).
export async function verifyTurnstile(token: unknown, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true
  if (typeof token !== "string" || !token) return false
  try {
    const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    })
    const j = (await r.json()) as { success?: boolean }
    return !!j.success
  } catch {
    return false
  }
}
