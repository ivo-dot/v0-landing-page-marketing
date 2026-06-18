"use client"

import { useEffect, useRef, type ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import Lenis from "lenis"

/* Chrome compartido (nav + footer + modal) + animaciones GSAP/Lenis.
   Reutiliza el sistema de diseño de la home para páginas internas. */
export default function DkPage({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches
    const touch = matchMedia("(hover:none)").matches
    gsap.registerPlugin(ScrollTrigger, SplitText)

    const ac = new AbortController()
    const { signal } = ac
    const splits: SplitText[] = []
    const tickerFns: Array<(t: number) => void> = []
    let lenis: Lenis | null = null

    const ctx = gsap.context(() => {
      if (!reduce) {
        lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
        lenis.on("scroll", ScrollTrigger.update)
        const raf = (t: number) => lenis!.raf(t * 1000)
        gsap.ticker.add(raf)
        tickerFns.push(raf)
        gsap.ticker.lagSmoothing(0)
      }
      // anchors internos (#...) con smooth scroll; los /#... navegan normal
      root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
        if (a.hasAttribute("data-form")) return
        a.addEventListener("click", (e) => {
          const id = a.getAttribute("href")!
          if (id.length < 2) return
          const el = document.querySelector(id)
          if (!el) return
          e.preventDefault()
          if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -60 })
          else el.scrollIntoView({ behavior: "smooth" })
        }, { signal })
      })

      if (reduce) {
        document.body.classList.add("reduce")
        gsap.set(".r", { clearProps: "all", opacity: 1 })
      }

      // cursor
      if (!touch && !reduce) {
        const cur = root.querySelector<HTMLElement>("#cur")!
        const ring = root.querySelector<HTMLElement>("#curRing")!
        const xT = gsap.quickTo(cur, "x", { duration: 0.15, ease: "power3" })
        const yT = gsap.quickTo(cur, "y", { duration: 0.15, ease: "power3" })
        const rxT = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3" })
        const ryT = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3" })
        gsap.set([cur, ring], { x: -100, y: -100 })
        window.addEventListener("pointermove", (e) => { xT(e.clientX); yT(e.clientY); rxT(e.clientX); ryT(e.clientY) }, { signal })
        document.querySelectorAll("a,button,[data-cursor]").forEach((el) => {
          el.addEventListener("pointerenter", () => gsap.to(ring, { width: 64, height: 64, opacity: 1, duration: 0.3 }), { signal })
          el.addEventListener("pointerleave", () => gsap.to(ring, { width: 42, height: 42, opacity: 0.6, duration: 0.3 }), { signal })
        })
      }

      // botones magnéticos
      if (!touch && !reduce) {
        root.querySelectorAll<HTMLElement>(".mag").forEach((el) => {
          const qx = gsap.quickTo(el, "x", { duration: 0.5, ease: "elastic.out(1,.4)" })
          const qy = gsap.quickTo(el, "y", { duration: 0.5, ease: "elastic.out(1,.4)" })
          el.addEventListener("pointermove", (e) => { const r = el.getBoundingClientRect(); qx((e.clientX - (r.left + r.width / 2)) * 0.4); qy((e.clientY - (r.top + r.height / 2)) * 0.5) }, { signal })
          el.addEventListener("pointerleave", () => { qx(0); qy(0) }, { signal })
        })
      }

      // nav + progreso
      const nav = root.querySelector<HTMLElement>("#nav")!
      const prog = root.querySelector<HTMLElement>("#prog")!
      let lastY = 0
      ScrollTrigger.create({ start: 0, end: "max", onUpdate: (self) => {
        prog.style.width = self.progress * 100 + "%"
        const y = self.scroll()
        nav.classList.toggle("solid", y > 40)
        if (y > lastY && y > 320) nav.classList.add("hide"); else nav.classList.remove("hide")
        lastY = y
      } })

      // reveals
      const rs = gsap.utils.toArray<HTMLElement>(".r").filter((el) => !el.classList.contains("h") && !(el.tagName === "H2" && el.closest(".cta")))
      if (reduce) gsap.set(rs, { opacity: 1, y: 0 })
      else {
        gsap.set(rs, { y: 34, autoAlpha: 0 })
        ScrollTrigger.batch(rs, { start: "top 90%", onEnter: (b) => gsap.to(b, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.09, ease: "power3.out", overwrite: true }) })
      }

      // headings con SplitText
      const heads = root.querySelectorAll<HTMLElement>(".shead .h, .cta h2, .dkh1")
      if (reduce) gsap.set(heads, { autoAlpha: 1 })
      else heads.forEach((el) => {
        gsap.set(el, { autoAlpha: 1 })
        const sp = SplitText.create(el, { type: "lines", mask: "lines", linesClass: "sline" })
        splits.push(sp)
        gsap.from(sp.lines, { yPercent: 115, duration: 1, stagger: 0.1, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 88%" } })
      })

      // contadores
      if (!reduce) root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count!), pre = el.dataset.prefix || "", suf = el.dataset.suffix || "", neg = target < 0, abs = Math.abs(target)
        ScrollTrigger.create({ trigger: el, start: "top 92%", once: true, onEnter: () => {
          const o = { v: 0 }
          gsap.to(o, { v: abs, duration: 1.6, ease: "power2.out", onUpdate: () => { el.textContent = (neg ? "−" : "") + pre + Math.round(o.v).toLocaleString("es-AR") + suf } })
        } })
      })
    }, root)

    // FAQ
    root.querySelectorAll<HTMLButtonElement>(".faq-q").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item")!
        const panel = item.querySelector<HTMLElement>(".faq-a")!
        const isOpen = item.classList.contains("open")
        root.querySelectorAll(".faq-item.open").forEach((o) => {
          if (o !== item) { o.classList.remove("open"); o.querySelector(".faq-q")!.setAttribute("aria-expanded", "false"); gsap.to(o.querySelector(".faq-a"), { height: 0, duration: 0.4, ease: "power2.inOut" }) }
        })
        if (isOpen) { item.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); gsap.to(panel, { height: 0, duration: 0.4, ease: "power2.inOut" }) }
        else { item.classList.add("open"); btn.setAttribute("aria-expanded", "true"); gsap.set(panel, { height: "auto" }); gsap.from(panel, { height: 0, duration: 0.45, ease: "power2.out" }) }
        ScrollTrigger.refresh()
      }, { signal })
    })

    // Modal → /api/contact
    const modal = root.querySelector<HTMLElement>("#modal")
    if (modal) {
      const panel = modal.querySelector<HTMLElement>(".modal-panel")!
      const form = root.querySelector<HTMLFormElement>("#leadForm")!
      const openModal = () => {
        modal.classList.add("on"); modal.setAttribute("aria-hidden", "false")
        if (lenis) lenis.stop(); document.body.style.overflow = "hidden"
        if (!reduce) { gsap.fromTo(".modal-bg", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35 }); gsap.fromTo(panel, { y: 26, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out" }) }
        setTimeout(() => { (form.querySelector("[name=nombre]") as HTMLElement | null)?.focus() }, 260)
      }
      const closeModal = () => { modal.classList.remove("on"); modal.setAttribute("aria-hidden", "true"); if (lenis) lenis.start(); document.body.style.overflow = "" }
      document.querySelectorAll("[data-form]").forEach((el) => el.addEventListener("click", (e) => { e.preventDefault(); openModal() }, { signal }))
      modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeModal, { signal }))
      document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("on")) closeModal() }, { signal })
      form.addEventListener("submit", async (e) => {
        e.preventDefault()
        const f = form as any
        if (f._hp.value) { closeModal(); return }
        const data = { nombre: f.nombre.value.trim(), apellido: f.apellido.value.trim(), email: f.email.value.trim(), empresa: f.empresa.value.trim(), asunto: f.asunto.value, mensaje: f.mensaje.value.trim(), _hp: "" }
        if (!data.nombre || !data.apellido || !data.email || !data.empresa || !data.asunto || !data.mensaje) { form.reportValidity?.(); return }
        const btn = root.querySelector<HTMLButtonElement>("#leadSubmit")!
        const okEl = root.querySelector<HTMLElement>("#formOk")!
        btn.textContent = "Enviando..."; btn.disabled = true
        try {
          const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
          const j = await res.json().catch(() => ({}))
          if (res.ok && j.success) {
            okEl.style.display = "block"
            form.querySelectorAll("input,select,textarea,button").forEach((x) => ((x as HTMLInputElement).disabled = true))
            ;(window as any).dataLayer?.push({ event: "form_submit_contacto" })
          } else throw new Error(j.message || "fail")
        } catch {
          btn.textContent = "Enviar consulta →"; btn.disabled = false
          okEl.textContent = "No se pudo enviar. Escribinos a ivo@didaktomarketing.com"; okEl.style.color = "#c0392b"; okEl.style.display = "block"
        }
      }, { signal })
    }

    if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh())
    window.addEventListener("load", () => ScrollTrigger.refresh(), { signal })
    ScrollTrigger.refresh()

    return () => {
      ac.abort()
      tickerFns.forEach((fn) => gsap.ticker.remove(fn))
      splits.forEach((s) => s.revert())
      if (lenis) lenis.destroy()
      ctx.revert()
      document.body.style.overflow = ""
      document.body.classList.remove("reduce")
    }
  }, [])

  return (
    <div className="dkr" ref={rootRef}>
      <div className="cursor" id="cur" />
      <div className="cursor-ring" id="curRing" />
      <div className="prog" id="prog" />

      <header className="nav" id="nav">
        <a className="brand" href="/" aria-label="Didakto — inicio"><span className="iso" /></a>
        <nav className="nav-links" aria-label="Principal">
          <a href="/#servicios"><span data-t="Servicios">Servicios</span></a>
          <a href="/#casos"><span data-t="Casos">Casos</span></a>
          <a href="/#proceso"><span data-t="Proceso">Proceso</span></a>
          <a href="/#faq"><span data-t="FAQ">FAQ</span></a>
        </nav>
        <button className="btn mag" data-form data-cursor type="button">Agendar <span className="a">→</span></button>
      </header>

      <main>{children}</main>

      <footer className="section inv foot">
        <div className="wrap">
          <div className="foot-top">
            <div>
              <a className="brand" href="/"><span className="iso" /><b style={{ fontFamily: "'Archivo'", fontWeight: 800, letterSpacing: "-.04em", fontSize: 22 }}>Didakto</b></a>
              <p style={{ marginTop: 16, color: "var(--ink2)", fontSize: 14, maxWidth: "30ch" }}>Generación de demanda B2B con criterio. Paid Media, datos e IA.</p>
            </div>
            <div className="foot-cols">
              <div><h4>Servicios</h4>
                <a href="/agencia-de-publicidad-digital">Publicidad digital</a>
                <a href="/generacion-de-leads-b2b">Generación de leads B2B</a>
                <a href="/google-ads">Google Ads</a>
                <a href="/meta-ads">Meta Ads</a>
                <a href="/linkedin-ads-b2b">LinkedIn Ads</a>
              </div>
              <div><h4>Contacto</h4>
                <a href="mailto:ivo@didaktomarketing.com">Email</a>
                <a href="https://www.linkedin.com/in/ivo-roman-crisman/" target="_blank" rel="noopener">LinkedIn</a>
                <button data-form type="button" style={{ display: "block", fontSize: 14, color: "var(--ink2)", padding: "5px 0" }}>Agendar</button>
              </div>
            </div>
          </div>
          <div className="foot-bot"><span>© 2026 Didakto Marketing</span><span>Hacerlo bien desde el principio.</span></div>
        </div>
      </footer>

      <div className="modal" id="modal" aria-hidden="true">
        <div className="modal-bg" data-close />
        <div className="modal-panel" role="dialog" aria-modal="true" aria-label="Agendar consultoría">
          <button className="modal-x" data-close aria-label="Cerrar" type="button">✕</button>
          <span className="eyebrow">Agendá tu consultoría</span>
          <h3 className="modal-title">Hablemos de tu proyecto.</h3>
          <form id="leadForm" noValidate>
            <input type="text" name="_hp" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="frow">
              <label>Nombre<input name="nombre" autoComplete="given-name" required /></label>
              <label>Apellido<input name="apellido" autoComplete="family-name" required /></label>
            </div>
            <div className="frow">
              <label>Email<input type="email" name="email" autoComplete="email" required /></label>
              <label>Empresa<input name="empresa" autoComplete="organization" required /></label>
            </div>
            <label>Asunto
              <select name="asunto" required defaultValue="">
                <option value="">Seleccioná un tema</option>
                <option>Consultoría inicial</option>
                <option>Paid Media</option>
                <option>Medición &amp; Analytics</option>
                <option>Automatización con IA</option>
                <option>Otro</option>
              </select>
            </label>
            <label>Mensaje<textarea name="mensaje" rows={3} required /></label>
            <button type="submit" className="btn btn-dark" id="leadSubmit">Enviar consulta <span className="a">→</span></button>
            <p className="form-ok" id="formOk">✓ ¡Gracias! Te vamos a contactar pronto.</p>
            <p className="form-note">Te respondemos en menos de 24 h hábiles.</p>
          </form>
        </div>
      </div>
    </div>
  )
}
