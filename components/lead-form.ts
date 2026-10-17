import gsap from "gsap"

/* Lógica ÚNICA del modal de formulario (home + landings): abrir/cerrar, validar, filtros
   anti-spam del lado cliente y envío a /api/contact. El HTML vive en lead-form-html.ts. */

const TS_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""
const TRACK_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"]

declare global {
  interface Window { turnstile?: any; dataLayer?: any[] }
}

// Guarda los parámetros de campaña de la primera visita de la sesión, para que lleguen
// con el lead aunque la persona navegue antes de abrir el formulario.
function campaignData(): Record<string, string> {
  const out: Record<string, string> = {}
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
  Object.assign(out, saved)
  out.pagina = location.pathname
  return out
}

let tsScript: Promise<void> | null = null
function loadTurnstile() {
  if (!TS_KEY) return Promise.resolve()
  if (window.turnstile) return Promise.resolve()
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

type Opts = {
  reduce: boolean
  signal: AbortSignal
  getLenis: () => { stop(): void; start(): void } | null
  /** Evento de dataLayer al enviar. Se conserva el de cada página para no tocar las conversiones de GTM. */
  event: string
}

export function initLeadModal(root: HTMLElement, { reduce, signal, getLenis, event }: Opts) {
  const modal = root.querySelector<HTMLElement>("#modal")
  const form = root.querySelector<HTMLFormElement>("#leadForm")
  if (!modal || !form) return
  const panel = modal.querySelector<HTMLElement>(".modal-panel")!
  const btn = root.querySelector<HTMLButtonElement>("#leadSubmit")!
  const okEl = root.querySelector<HTMLElement>("#formOk")!
  const tsBox = root.querySelector<HTMLElement>("#tsBox")
  const okHtml = okEl.innerHTML
  let openedAt = 0
  let tsId: string | null = null

  const mountTurnstile = async () => {
    if (!TS_KEY || !tsBox || tsId !== null) return
    await loadTurnstile()
    if (!window.turnstile || tsId !== null) return
    tsId = window.turnstile.render(tsBox, { sitekey: TS_KEY, appearance: "interaction-only", theme: "light" })
  }

  const openModal = () => {
    openedAt = Date.now()
    modal.classList.add("on"); modal.setAttribute("aria-hidden", "false")
    getLenis()?.stop(); document.body.style.overflow = "hidden"
    if (!reduce) {
      gsap.fromTo(".modal-bg", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35 })
      gsap.fromTo(panel, { y: 26, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out" })
    }
    setTimeout(() => { (form.querySelector("[name=nombre]") as HTMLElement | null)?.focus() }, 260)
    mountTurnstile()
  }
  const closeModal = () => {
    modal.classList.remove("on"); modal.setAttribute("aria-hidden", "true")
    getLenis()?.start(); document.body.style.overflow = ""
  }

  document.querySelectorAll("[data-form]").forEach((el) => el.addEventListener("click", (e) => { e.preventDefault(); openModal() }, { signal }))
  modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeModal, { signal }))
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("on")) closeModal() }, { signal })

  const showError = (msg: string) => {
    okEl.textContent = msg; okEl.style.color = "#c0392b"; okEl.style.display = "block"
  }

  const getToken = async (): Promise<string> => {
    if (!TS_KEY || tsId === null || !window.turnstile) return ""
    for (let i = 0; i < 30; i++) {            // hasta ~6 s esperando que Turnstile termine
      const t = window.turnstile.getResponse(tsId)
      if (t) return t
      await new Promise((r) => setTimeout(r, 200))
    }
    return ""
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const f = form as any
    if (f._hp.value) { closeModal(); return }          // honeypot: el bot cree que funcionó
    const data: Record<string, string> = {
      nombre: f.nombre.value.trim(), apellido: f.apellido.value.trim(), cargo: f.cargo.value.trim(),
      email: f.email.value.trim(), telefono: f.telefono.value.trim(), empresa: f.empresa.value.trim(),
      sitio_web: f.sitio_web.value.trim(), pais: f.pais.value.trim(), industria: f.industria.value.trim(),
      empleados: f.empleados.value, desafio: f.desafio.value.trim(),
      publicidad_activa: f.publicidad_activa.value, inversion_actual: f.inversion_actual.value,
      usa_crm: f.usa_crm.value, crm_cual: f.crm_cual.value.trim(), objetivo: f.objetivo.value.trim(),
      proceso_leads: f.proceso_leads.value.trim(), atribucion: f.atribucion.value,
      inversion_lista: (f.inversion_lista as RadioNodeList | HTMLInputElement)?.value || "",
      _hp: "",
      _t: String(Date.now() - openedAt),
      ...campaignData(),
    }
    if (!data.nombre || !data.apellido || !data.email || !data.empresa || !data.cargo || !data.desafio || !data.inversion_lista) { form.reportValidity?.(); return }

    const label = btn.textContent
    btn.textContent = "Enviando..."; btn.disabled = true
    okEl.style.display = "none"
    try {
      if (TS_KEY) data.cf_token = await getToken()
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
      const j = await res.json().catch(() => ({}))
      if (res.ok && j.success) {
        btn.textContent = "Solicitud enviada ✓"
        okEl.textContent = ""; okEl.innerHTML = okHtml; okEl.style.color = ""; okEl.style.display = "block"
        form.querySelectorAll("input,select,textarea,button").forEach((x) => ((x as HTMLInputElement).disabled = true))
        window.dataLayer?.push({ event })
      } else if (res.status === 400 && j.message) {
        throw new Error(j.message)                      // dato inválido: se le dice qué corregir
      } else throw new Error("fail")
    } catch (err: any) {
      btn.textContent = label; btn.disabled = false
      if (TS_KEY && tsId !== null && window.turnstile) window.turnstile.reset(tsId)
      showError(err?.message && err.message !== "fail" ? err.message : "No se pudo enviar. Escribinos a ivo@didaktomarketing.com")
    }
  }, { signal })
}
