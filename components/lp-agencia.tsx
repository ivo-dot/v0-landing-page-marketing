"use client"

import { useEffect, useRef } from "react"
import { LP_MARKUP } from "./lp-agencia-markup"
import { campaignData, loadTurnstile, TS_KEY } from "./lp-lead-utils"

/* Landing de campaña: sin GSAP ni scroll suave (menos JS, mejor LCP; la animación de entrada es CSS).
   Mide el embudo completo en dataLayer: cta_click, form_open, form_start, lp_form_step1 / step2,
   form_submit_evaluacion (la conversión que ya existe en GTM), whatsapp_click, scroll_depth. */

type DL = Record<string, unknown>
const push = (o: DL) => { ;(window as any).dataLayer?.push(o) }

export default function LpAgencia() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches
    const ac = new AbortController()
    const { signal } = ac
    const $ = <T extends HTMLElement>(s: string) => root.querySelector<T>(s)
    const $$ = <T extends HTMLElement>(s: string) => Array.from(root.querySelectorAll<T>(s))

    /* ── Preloader: solo la primera vez de la sesión ── */
    let seen = false
    try { seen = sessionStorage.getItem("lp_seen") === "1"; sessionStorage.setItem("lp_seen", "1") } catch {}
    const first = !seen && !reduce
    if (!first) root.classList.add("skip")
    root.classList.add("lp-js")

    /* ── Nav sólida + barra fija móvil ── */
    const nav = $("#lpNav")!
    const bar = $("#lpBar")!
    const card = $("#form-card")!
    let cardVisible = true
    const onScroll = () => nav.classList.toggle("solid", scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true, signal })
    onScroll()
    const io = new IntersectionObserver(([e]) => { cardVisible = e.isIntersecting; bar.classList.toggle("on", !cardVisible && scrollY > 300) }, { threshold: 0.15 })
    io.observe(card)
    window.addEventListener("scroll", () => bar.classList.toggle("on", !cardVisible && scrollY > 300), { passive: true, signal })

    /* ── Grilla que se enciende cerca del cursor (solo con mouse) ── */
    const hero = $(".lp-hero")!
    if (!reduce && matchMedia("(hover:hover)").matches) {
      let raf = 0
      hero.addEventListener("pointermove", (e) => {
        const r = hero.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => { hero.style.setProperty("--mx", x + "px"); hero.style.setProperty("--my", y + "px"); hero.classList.add("hov") })
      }, { signal })
      hero.addEventListener("pointerleave", () => hero.classList.remove("hov"), { signal })
    }

    /* ── Movimiento con mouse: aurora con parallax, botones magnéticos y halo en cards ── */
    if (!reduce && matchMedia("(hover:hover) and (pointer:fine)").matches) {
      let tx = 0, ty = 0, cx = 0, cy = 0, running = false
      const loop = () => {
        cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06
        hero.style.setProperty("--px", cx.toFixed(3)); hero.style.setProperty("--py", cy.toFixed(3))
        if (!signal.aborted && (Math.abs(tx - cx) > 0.002 || Math.abs(ty - cy) > 0.002)) requestAnimationFrame(loop); else running = false
      }
      window.addEventListener("pointermove", (e) => {
        tx = (e.clientX / innerWidth) * 2 - 1; ty = (e.clientY / innerHeight) * 2 - 1
        if (!running) { running = true; requestAnimationFrame(loop) }
      }, { signal })
      $$(".btn").forEach((b) => {
        b.addEventListener("pointermove", (e) => {
          if ((b as HTMLButtonElement).disabled) return
          const r = b.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top
          b.style.setProperty("--bx", x + "px"); b.style.setProperty("--by", y + "px")
          b.style.translate = `${((x - r.width / 2) * 0.2).toFixed(1)}px ${((y - r.height / 2) * 0.32).toFixed(1)}px`
        }, { signal })
        b.addEventListener("pointerleave", () => { b.style.translate = "" }, { signal })
      })
      $$(".lp-kpi,.lp-inc article,.lp-price,.lp-proof").forEach((c) => c.addEventListener("pointermove", (e) => {
        const r = c.getBoundingClientRect()
        c.style.setProperty("--mx", e.clientX - r.left + "px"); c.style.setProperty("--my", e.clientY - r.top + "px")
      }, { signal }))
    }

    /* ── Reveal al hacer scroll ── */
    const rv = $$(".rv")
    rv.forEach((el, i) => el.style.setProperty("--rd", ((i % 3) * 0.08).toFixed(2) + "s"))
    const rvIO = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); rvIO.unobserve(e.target) } }), { rootMargin: "0px 0px -8% 0px" })
    rv.forEach((el) => rvIO.observe(el))

    /* ── Contadores ── */
    const run = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.count!), pre = el.dataset.prefix || "", suf = el.dataset.suffix || ""
      if (reduce) return
      const t0 = performance.now(), dur = 1500
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur), v = 1 - Math.pow(1 - p, 3)
        el.textContent = el.dataset.format === "k"
          ? ((target * v) / 1000).toFixed(1).replace(".", ",") + " mil"
          : pre + Math.round(target * v).toLocaleString("es-AR") + suf
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
    const cIO = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return
      cIO.unobserve(e.target)
      const el = e.target as HTMLElement
      // el del hero espera a que termine la entrada (preloader + titular)
      const wait = el.closest(".lp-hero") ? (first ? 2000 : 1500) : 0
      setTimeout(() => run(el), wait)
    }), { threshold: 0.6 })
    $$("[data-count]").forEach((el) => { if (!reduce) el.textContent = (el.dataset.prefix || "") + "0" + (el.dataset.suffix || ""); cIO.observe(el) })

    /* ── CTAs: llevan al formulario del hero ── */
    const goForm = () => {
      const r = card.getBoundingClientRect()
      const inView = r.top >= 0 && r.bottom <= innerHeight
      if (!inView) card.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" })
      setTimeout(() => (card.querySelector("[data-step]:not([hidden]) input:not(.hp)") as HTMLElement | null)?.focus({ preventScroll: true }), inView ? 0 : 650)
    }
    $$("[data-form]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault()
      push({ event: "cta_click", cta_location: a.dataset.loc || "" })
      push({ event: "form_open" })
      goForm()
    }, { signal }))
    $$("[data-wa]").forEach((a) => a.addEventListener("click", () => push({ event: "whatsapp_click", cta_location: a.dataset.loc || "" }), { signal }))

    $$("[data-cred]").forEach((a) => a.addEventListener("click", () => push({ event: "credential_click", credential: a.dataset.cred }), { signal }))
    $$("[data-yt]").forEach((a) => a.addEventListener("click", () => push({ event: "youtube_click", cta_location: a.dataset.loc || "" }), { signal }))
    $$("[data-li]").forEach((a) => a.addEventListener("click", () => push({ event: "linkedin_click", cta_location: a.dataset.loc || "" }), { signal }))

    /* ── Profundidad de scroll ── */
    const marks = new Set<number>()
    window.addEventListener("scroll", () => {
      const p = (scrollY + innerHeight) / document.documentElement.scrollHeight * 100
      for (const m of [25, 50, 75, 100]) if (p >= m - 2 && !marks.has(m)) { marks.add(m); push({ event: "scroll_depth", percent: m }) }
    }, { passive: true, signal })

    /* ── FAQ ── */
    $$<HTMLElement>(".lpq").forEach((q) => q.querySelector("button")!.addEventListener("click", () => {
      const open = q.classList.toggle("open")
      q.querySelector("button")!.setAttribute("aria-expanded", String(open))
      if (open) push({ event: "faq_open", question: q.querySelector("span")?.textContent || "" })
    }, { signal }))

    /* ── Video testimonio ── */
    const vm = $("#videoModal")
    if (vm) {
      const video = vm.querySelector<HTMLVideoElement>("#testimonialVideo")!
      const srcEl = video.querySelector("source")!
      const close = () => { vm.classList.remove("on"); vm.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; video.pause() }
      const open = (el: Element) => {
        const src = el.getAttribute("data-video-src"), poster = el.getAttribute("data-video-poster")
        if (src && srcEl.src !== new URL(src, location.href).href) { srcEl.src = src; video.load() }
        if (poster) video.poster = poster
        vm.classList.add("on"); vm.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"
        video.currentTime = 0; video.play().catch(() => {})
        push({ event: "video_play", video: el.getAttribute("data-video-id") || "testimonio" })
      }
      $$("[data-video-open]").forEach((el) => {
        el.addEventListener("click", () => open(el), { signal })
        el.addEventListener("keydown", (e) => { const k = (e as KeyboardEvent).key; if (k === "Enter" || k === " ") { e.preventDefault(); open(el) } }, { signal })
      })
      vm.querySelectorAll("[data-video-close]").forEach((el) => el.addEventListener("click", close, { signal }))
      document.addEventListener("keydown", (e) => { if (e.key === "Escape" && vm.classList.contains("on")) close() }, { signal })
    }

    /* ── Formulario en 2 pasos ── */
    const form = $<HTMLFormElement>("#lpForm")!
    const errEl = $("#lpErr")!
    const demo = ["localhost", "127.0.0.1"].includes(location.hostname)   // en local NUNCA se envía nada
    if (demo) $("#lpDemo")!.hidden = false
    let started = false, tsId: string | null = null
    const f = form as any

    const setStep = (n: "1" | "2" | "done") => {
      form.querySelectorAll<HTMLElement>("[data-step]").forEach((s) => (s.hidden = s.dataset.step !== n))
      $$("[data-dot]").forEach((d) => d.classList.toggle("on", n === "done" || d.dataset.dot === "1" || (n === "2" && d.dataset.dot === "2")))
      ;(form.querySelector("[data-step]:not([hidden]) input:not(.hp), [data-step]:not([hidden]) select") as HTMLElement | null)?.focus({ preventScroll: true })
    }
    const say = (m: string) => { errEl.textContent = m; errEl.classList.toggle("on", !!m) }

    form.addEventListener("focusin", () => {
      if (!started) { started = true; push({ event: "form_start" }) }
      if (TS_KEY && tsId === null) loadTurnstile().then(() => {
        const w = window as any
        if (!w.turnstile || tsId !== null) return
        const box = document.createElement("div"); box.id = "tsBox"; form.appendChild(box)
        tsId = w.turnstile.render(box, { sitekey: TS_KEY, appearance: "interaction-only", theme: "light" })
      })
    }, { signal })

    const getToken = async () => {
      const w = window as any
      if (!TS_KEY || tsId === null || !w.turnstile) return ""
      for (let i = 0; i < 30; i++) { const t = w.turnstile.getResponse(tsId); if (t) return t; await new Promise((r) => setTimeout(r, 200)) }
      return ""
    }

    // _t = ms desde que cargó la página (no desde que se abrió el formulario): el filtro del servidor
    // descarta envíos < 3 s, y con autocompletado del navegador una persona real puede completar el paso 1 muy rápido.
    const post = async (data: Record<string, string>) => {
      if (demo) { await new Promise((r) => setTimeout(r, 700)); return { ok: true } }
      if (TS_KEY) data.cf_token = await getToken()
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, _hp: "", _t: String(Math.round(performance.now())), ...campaignData() }) })
      const j = await res.json().catch(() => ({}))
      return { ok: res.ok && j.success, message: res.status === 400 ? (j.message as string) : "" }
    }

    const base = () => ({ nombre: f.nombre.value.trim(), apellido: f.apellido.value.trim(), email: f.email.value.trim(), empresa: f.empresa.value.trim(), telefono: f.telefono.value.trim() })
    let sent1 = false

    form.addEventListener("submit", async (e) => {
      e.preventDefault()
      if (f._hp.value) { setStep("done"); return }
      const step = form.querySelector<HTMLElement>("[data-step]:not([hidden])")!.dataset.step

      if (step === "1") {
        const d = base()
        const bad = (["nombre", "apellido", "email", "empresa", "telefono"] as const).filter((k) => !d[k] || (k === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d[k])) || (k === "telefono" && d[k].replace(/\D/g, "").length < 7))
        form.querySelectorAll("input").forEach((i) => i.classList.toggle("bad", bad.includes(i.name as any)))
        if (bad.length) { say("Completa todos los campos con un email y un teléfono válidos."); (form.querySelector(`[name=${bad[0]}]`) as HTMLElement).focus(); return }
        say("")
        const btn = $<HTMLButtonElement>("#lpSubmit")!, label = btn.innerHTML
        btn.disabled = true; btn.textContent = "Enviando..."
        try {
          const r = await post({ ...d, asunto: "LP agencia de publicidad digital · paso 1 (llamada)" })
          if (!r.ok) throw new Error(r.message || "fail")
          sent1 = true
          push({ event: "form_submit_evaluacion", form_step: 1, landing: "lp-agencia-de-publicidad" })   // misma conversión que la home
          push({ event: "lp_form_step1" })
          setStep("2")
        } catch (err: any) {
          btn.disabled = false; btn.innerHTML = label
          say(err?.message && err.message !== "fail" ? err.message : "No se pudo enviar. Escríbenos a ivo@didaktomarketing.com o por WhatsApp.")
        }
        return
      }

      if (step === "2") {
        const btn = $<HTMLButtonElement>("#lpSubmit2")!
        btn.disabled = true; btn.textContent = "Enviando..."
        const extra: Record<string, string> = { sitio_web: f.sitio_web.value.trim(), inversion_actual: f.inversion_actual.value, desafio: f.desafio.value }
        try {
          if (sent1 && Object.values(extra).some(Boolean)) await post({ ...base(), ...extra, asunto: "LP agencia de publicidad digital · paso 2 (datos adicionales)" })
          push({ event: "lp_form_step2", completed: true })
        } catch {}
        setStep("done")
      }
    }, { signal })

    $("#lpSkip")!.addEventListener("click", () => { push({ event: "lp_form_step2", completed: false }); setStep("done") }, { signal })

    return () => { ac.abort(); io.disconnect(); rvIO.disconnect(); cIO.disconnect(); document.body.style.overflow = "" }
  }, [])

  return <div className="lp" ref={rootRef} dangerouslySetInnerHTML={{ __html: LP_MARKUP }} />
}
