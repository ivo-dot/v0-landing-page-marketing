/* Utilidades de la landing de campaña. Copia de lo necesario de lead-form.ts para NO tocar el archivo que usa la home. */
export const TS_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""
const TRACK_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"]

// Guarda los parámetros de campaña de la primera visita de la sesión (misma clave que la home: "dk_campaign").
export function campaignData(): Record<string, string> {
  let saved: Record<string, string> = {}
  try { saved = JSON.parse(sessionStorage.getItem("dk_campaign") || "{}") } catch {}
  const q = new URLSearchParams(location.search)
  let changed = false
  for (const k of TRACK_KEYS) {
    const v = q.get(k)
    if (v && !saved[k]) { saved[k] = v.slice(0, 200); changed = true }
  }
  if (!saved.referrer && document.referrer && !document.referrer.includes(location.hostname)) {
    saved.referrer = document.referrer.slice(0, 300); changed = true
  }
  if (changed) { try { sessionStorage.setItem("dk_campaign", JSON.stringify(saved)) } catch {} }
  return { ...saved, pagina: location.pathname }
}

let tsScript: Promise<void> | null = null
export function loadTurnstile() {
  if (!TS_KEY) return Promise.resolve()
  if ((window as any).turnstile) return Promise.resolve()
  if (!tsScript) {
    tsScript = new Promise<void>((res) => {
      const s = document.createElement("script")
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
      s.async = true
      s.onload = () => res()
      s.onerror = () => res()
      document.head.appendChild(s)
    })
  }
  return tsScript
}
