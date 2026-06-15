"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { Draggable } from "gsap/Draggable"
import { InertiaPlugin } from "gsap/InertiaPlugin"
import Lenis from "lenis"
import { MARKUP } from "./didakto-redesign-markup"

export default function DidaktoRedesign() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches
    const touch = matchMedia("(hover:none)").matches

    gsap.registerPlugin(ScrollTrigger, SplitText, Draggable, InertiaPlugin)

    const ac = new AbortController()
    const { signal } = ac
    const splits: SplitText[] = []
    const tickerFns: Array<(t: number) => void> = []
    const matchMedias: ReturnType<typeof gsap.matchMedia>[] = []
    let lenis: Lenis | null = null
    let dragInstance: Draggable | null = null

    const ctx = gsap.context(() => {
      /* ── Lenis smooth scroll ── */
      if (!reduce) {
        lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
        lenis.on("scroll", ScrollTrigger.update)
        const raf = (t: number) => lenis!.raf(t * 1000)
        gsap.ticker.add(raf)
        tickerFns.push(raf)
        gsap.ticker.lagSmoothing(0)
      }
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
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
        gsap.set(".ln>span,.r", { clearProps: "all", opacity: 1 })
        root.querySelectorAll<HTMLElement>(".hl .bar").forEach((b) => (b.style.transform = "scaleX(1)"))
      } else {
        gsap.set(".ln>span", { yPercent: 110 })
      }

      /* ── Cursor + anillo ── */
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

      /* ── Botones magnéticos ── */
      if (!touch && !reduce) {
        root.querySelectorAll<HTMLElement>(".mag").forEach((el) => {
          const qx = gsap.quickTo(el, "x", { duration: 0.5, ease: "elastic.out(1,.4)" })
          const qy = gsap.quickTo(el, "y", { duration: 0.5, ease: "elastic.out(1,.4)" })
          el.addEventListener("pointermove", (e) => { const r = el.getBoundingClientRect(); qx((e.clientX - (r.left + r.width / 2)) * 0.4); qy((e.clientY - (r.top + r.height / 2)) * 0.5) }, { signal })
          el.addEventListener("pointerleave", () => { qx(0); qy(0) }, { signal })
        })
      }

      /* ── Nav (hide/show + solid) + progreso ── */
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

      /* ── HERO ── */
      if (!reduce) {
        gsap.set(".hero .eyebrow,.hero-meta", { opacity: 0, y: 14 })
        const tl = gsap.timeline({ delay: 0.12 })
        tl.to(".ln>span", { yPercent: 0, duration: 1.1, stagger: 0.1, ease: "power4.out" }, 0)
          .to(".hero .eyebrow,.hero-meta", { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" }, 0.2)
          .to(".hl .bar", { scaleX: 1, duration: 0.7, ease: "power3.inOut" }, "-=.35")
          .from(".hero-foot", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=.4")
        gsap.to("#blob", { yPercent: 34, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } })
      }

      /* ── Reveals genéricos ── */
      const rs = gsap.utils.toArray<HTMLElement>(".r").filter((el) => {
        if (el.classList.contains("h") || el.classList.contains("big")) return false
        if (el.tagName === "H2" && el.closest(".cta")) return false
        return true
      })
      if (reduce) gsap.set(rs, { opacity: 1, y: 0 })
      else {
        gsap.set(rs, { y: 34, autoAlpha: 0 })
        ScrollTrigger.batch(rs, { start: "top 88%", onEnter: (b) => gsap.to(b, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.09, ease: "power3.out", overwrite: true }) })
      }

      /* ── Headings con SplitText ── */
      const heads = root.querySelectorAll<HTMLElement>(".shead .h, .cta h2")
      if (reduce) gsap.set(heads, { autoAlpha: 1 })
      else heads.forEach((el) => {
        gsap.set(el, { autoAlpha: 1 })
        const sp = SplitText.create(el, { type: "lines", mask: "lines", linesClass: "sline" })
        splits.push(sp)
        gsap.from(sp.lines, { yPercent: 115, duration: 1, stagger: 0.1, ease: "power4.out", scrollTrigger: { trigger: el, start: "top 86%" } })
      })

      /* ── Marquee continuo + reactivo ── */
      const marqEl = root.querySelector("#marq")
      if (marqEl) {
        const loop = gsap.to(marqEl, { xPercent: -50, repeat: -1, duration: 24, ease: "none" })
        if (reduce) loop.pause()
        else {
          let targetTS = 1
          ScrollTrigger.create({ onUpdate: (self) => { targetTS = gsap.utils.clamp(-6, 6, 1 + self.getVelocity() / 240) } })
          const tick = () => { const c = loop.timeScale(); loop.timeScale(c + (targetTS - c) * 0.08); targetTS += (1 - targetTS) * 0.04 }
          gsap.ticker.add(tick)
          tickerFns.push(tick)
        }
      }

      /* ── Contadores ── */
      if (!reduce) root.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count!), pre = el.dataset.prefix || "", suf = el.dataset.suffix || "", neg = target < 0, abs = Math.abs(target)
        ScrollTrigger.create({ trigger: el, start: "top 92%", once: true, onEnter: () => {
          const o = { v: 0 }
          gsap.to(o, { v: abs, duration: 1.6, ease: "power2.out", onUpdate: () => { el.textContent = (neg ? "−" : "") + pre + Math.round(o.v).toLocaleString("es-AR") + suf } })
        } })
      })

      /* ── Proceso: dots + línea ── */
      gsap.utils.toArray<HTMLElement>(".step").forEach((s) => {
        ScrollTrigger.create({ trigger: s, start: "top 78%", onEnter: () => s.classList.add("on"), onLeaveBack: () => s.classList.remove("on") })
      })
      const stepsEl = root.querySelector<HTMLElement>(".steps")
      if (stepsEl) {
        if (reduce) stepsEl.style.setProperty("--sp", "1")
        else ScrollTrigger.create({ trigger: stepsEl, start: "top 72%", end: "bottom 82%", scrub: true, onUpdate: (self) => stepsEl.style.setProperty("--sp", self.progress.toFixed(3)) })
      }

      /* ── SOMOS / WE ARE ── */
      const stmt = root.querySelector<HTMLElement>(".somos-stmt")
      if (stmt) {
        const words = stmt.querySelectorAll<HTMLElement>(".w")
        if (reduce) gsap.set(words, { opacity: 1 })
        else {
          gsap.set(words, { opacity: 0.14 })
          const mm = gsap.matchMedia(); matchMedias.push(mm)
          mm.add("(min-width:760px)", () => {
            gsap.to(words, { opacity: 1, stagger: 0.4, ease: "none", scrollTrigger: { trigger: ".somos-stage", start: "top top", end: "+=110%", pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1 } })
          })
          mm.add("(max-width:759px)", () => {
            gsap.to(words, { opacity: 1, stagger: 0.05, duration: 0.4, ease: "power1.out", scrollTrigger: { trigger: stmt, start: "top 82%" } })
          })
        }
      }

      /* ── Carrusel de ADs ── */
      const adsTrack = root.querySelector<HTMLElement>("#adsTrack")
      if (adsTrack) {
        if (!adsTrack.dataset.cloned) { adsTrack.innerHTML += adsTrack.innerHTML; adsTrack.dataset.cloned = "1" }
        const loop = gsap.to(adsTrack, { xPercent: -50, repeat: -1, duration: 64, ease: "none" })
        if (reduce) loop.pause()
        else {
          adsTrack.addEventListener("pointerenter", () => gsap.to(loop, { timeScale: 0, duration: 0.4 }), { signal })
          adsTrack.addEventListener("pointerleave", () => gsap.to(loop, { timeScale: 1, duration: 0.4 }), { signal })
        }
      }

      /* ── Casos: scroll horizontal pineado (desktop) ── */
      if (!reduce) {
        const mm = gsap.matchMedia(); matchMedias.push(mm)
        mm.add("(min-width:860px)", () => {
          const track = root.querySelector<HTMLElement>("#casesTrack")!
          const pin = root.querySelector<HTMLElement>(".cases-pin")!
          gsap.to(track, { x: () => -(track.scrollWidth - window.innerWidth), ease: "none", scrollTrigger: { trigger: pin, start: "top top", end: () => "+=" + (track.scrollWidth - window.innerWidth), pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1 } })
        })
      }

      /* ── Draggable testimonios ── */
      if (!reduce) {
        const track = root.querySelector<HTMLElement>("#dragTrack")
        const vp = root.querySelector<HTMLElement>("#dragVp")
        if (track && vp) {
          const bounds = () => ({ minX: Math.min(0, vp.offsetWidth - track.scrollWidth), maxX: 0 })
          dragInstance = Draggable.create(track, { type: "x", bounds: bounds(), edgeResistance: 0.9, inertia: !!InertiaPlugin, dragResistance: 0.04 })[0]
          window.addEventListener("resize", () => { if (dragInstance) dragInstance.applyBounds(bounds()) }, { signal })
        }
      }
    }, root)

    /* ── FAQ acordeón ── */
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

    /* ── Modal de formulario → /api/contact ── */
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

    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener("load", onLoad, { signal })
    if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh())
    ScrollTrigger.refresh()

    return () => {
      ac.abort()
      tickerFns.forEach((fn) => gsap.ticker.remove(fn))
      matchMedias.forEach((mm) => mm.revert())
      splits.forEach((s) => s.revert())
      if (dragInstance) dragInstance.kill()
      if (lenis) lenis.destroy()
      ctx.revert()
      document.body.style.overflow = ""
      document.body.classList.remove("reduce")
    }
  }, [])

  return <div className="dkr" ref={rootRef} dangerouslySetInnerHTML={{ __html: MARKUP }} />
}
