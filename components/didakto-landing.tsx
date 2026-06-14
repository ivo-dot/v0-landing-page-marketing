"use client"

import { useEffect, useRef, useState } from "react"
import { createRoot, type Root } from "react-dom/client"
import { MARKUP } from "./didakto-markup"

/* ── Calculadora de leads (idéntica al diseño v4, montada con el React de la app) ── */
function CalcSlider({
  label,
  value,
  min,
  max,
  step,
  fmt,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  fmt: (v: number) => string
  onChange: (v: number) => void
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
        <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink)" }}>{label}</span>
        <span style={{ fontFamily: "var(--d)", fontSize: "20px", fontWeight: 900, letterSpacing: "-.025em", color: "var(--green)" }}>{fmt(value)}</span>
      </div>
      <div style={{ position: "relative", height: "3px", background: "var(--rule2)", borderRadius: "2px" }}>
        <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: pct + "%", background: "var(--green)", borderRadius: "2px", pointerEvents: "none" }} />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{ position: "absolute", top: "50%", left: 0, width: "100%", transform: "translateY(-50%)", margin: 0, opacity: 0, cursor: "pointer", height: "24px" }}
        />
      </div>
    </div>
  )
}

function Calculator() {
  const [budget, setBudget] = useState(5000)
  const [cpa, setCpa] = useState(80)
  const [qual, setQual] = useState(30)
  const [deal, setDeal] = useState(3000)
  const leads = Math.round(budget / cpa)
  const mql = Math.round((leads * qual) / 100)
  const meetings = Math.round(mql * 0.4)
  const pipeline = Math.round(mql * deal * 0.15)
  const fmt$ = (v: number) => (v >= 1000 ? "$" + (v / 1000).toFixed(1) + "K" : "$" + v)
  const rows: { val: number | string; lbl: string; g: boolean }[] = [
    { val: leads, lbl: "Leads brutos / mes", g: false },
    { val: mql, lbl: "Leads calificados", g: true },
    { val: meetings, lbl: "Reuniones estimadas", g: false },
    { val: fmt$(pipeline), lbl: "Pipeline mensual", g: false },
  ]
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "48px", marginTop: "48px", alignItems: "start" }} className="calc-grid">
      <div>
        <CalcSlider label="Presupuesto mensual (USD)" value={budget} min={1000} max={50000} step={500} fmt={(v) => "$" + v.toLocaleString()} onChange={setBudget} />
        <CalcSlider label="CPA objetivo (USD)" value={cpa} min={10} max={500} step={5} fmt={(v) => "$" + v} onChange={setCpa} />
        <CalcSlider label="Tasa de calificación" value={qual} min={5} max={70} step={5} fmt={(v) => v + "%"} onChange={setQual} />
        <CalcSlider label="Ticket promedio (USD)" value={deal} min={500} max={50000} step={500} fmt={(v) => "$" + v.toLocaleString()} onChange={setDeal} />
      </div>
      <div style={{ background: "#0a0a08", border: "1px solid rgba(200,255,0,0.18)", borderRadius: "10px", padding: "28px" }}>
        {rows.map((o, i) => (
          <div key={i} style={{ paddingTop: i === 0 ? 0 : "16px", paddingBottom: "16px", borderBottom: i < 3 ? "1px solid rgba(240,237,230,.06)" : "none" }}>
            <div style={{ fontFamily: "var(--s)", fontStyle: "italic", fontSize: "clamp(36px,3.6vw,48px)", color: o.g ? "var(--green)" : "rgba(240,237,230,.9)", lineHeight: 1 }}>{o.val}</div>
            <div style={{ fontSize: "12px", color: "rgba(240,237,230,.4)", marginTop: "3px" }}>{o.lbl}</div>
          </div>
        ))}
        <p style={{ fontSize: "11px", color: "rgba(240,237,230,.25)", lineHeight: 1.55, marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(240,237,230,.06)" }}>Estimaciones basadas en benchmarks B2B.</p>
        <a href="#contacto" style={{ display: "inline-block", marginTop: "14px", fontFamily: "var(--b)", fontSize: "13px", fontWeight: 700, padding: "10px 20px", borderRadius: "4px", background: "var(--green)", color: "var(--green-on)", textDecoration: "none" }}>Ver mi caso real →</a>
      </div>
    </div>
  )
}

export default function DidaktoLanding() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const ac = new AbortController()
    const { signal } = ac
    const disposers: Array<() => void> = []

    /* ── scroll reveal ── */
    const revealObs = new IntersectionObserver(
      (e) => e.forEach((x) => x.isIntersecting && x.target.classList.add("v")),
      { threshold: 0.06 },
    )
    root.querySelectorAll(".fi").forEach((el) => revealObs.observe(el))
    disposers.push(() => revealObs.disconnect())

    /* ── orbit canvas ── */
    const canvas = root.querySelector<HTMLCanvasElement>("#orbit-canvas")
    if (canvas) {
      const ctx = canvas.getContext("2d")!
      const W = 680, H = 680, CX = W / 2, CY = H / 2
      const platforms = [
        { name: "Meta Ads", r: 175, sp: 0.0004, a: 0, col: "#1877F2" },
        { name: "Google Ads", r: 175, sp: 0.0004, a: 2.094, col: "#EA4335" },
        { name: "TikTok", r: 175, sp: 0.0004, a: 4.189, col: "#ffffff" },
        { name: "LinkedIn", r: 289, sp: 0.00024, a: 0.785, col: "#0A66C2" },
        { name: "Pinterest", r: 289, sp: 0.00024, a: 2.356, col: "#E60023" },
        { name: "ChatGPT", r: 289, sp: 0.00024, a: 3.927, col: "#10A37F" },
        { name: "YouTube", r: 289, sp: 0.00024, a: 5.498, col: "#FF0000" },
      ]
      const rr = (x: number, y: number, w: number, h: number, r: number) => {
        ctx.beginPath()
        ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.arcTo(x + w, y, x + w, y + r, r)
        ctx.lineTo(x + w, y + h - r); ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
        ctx.lineTo(x + r, y + h); ctx.arcTo(x, y + h, x, y + h - r, r)
        ctx.lineTo(x, y + r); ctx.arcTo(x, y, x + r, y, r); ctx.closePath()
      }
      let raf = 0
      const draw = (ts: number) => {
        ctx.clearRect(0, 0, W, H)
        ;[175, 289].forEach((r) => {
          ctx.beginPath(); ctx.arc(CX, CY, r, 0, Math.PI * 2)
          ctx.setLineDash([3, 9]); ctx.strokeStyle = "rgba(26,232,106,0.22)"; ctx.lineWidth = 1; ctx.stroke()
          ctx.setLineDash([])
        })
        platforms.forEach((p) => {
          const a = p.a + ts * p.sp
          const x = CX + p.r * Math.cos(a), y = CY + p.r * Math.sin(a)
          ctx.beginPath(); ctx.moveTo(CX, CY); ctx.lineTo(x, y)
          ctx.strokeStyle = "rgba(26,232,106,0.07)"; ctx.lineWidth = 1; ctx.stroke()
          ctx.font = "600 10.5px Inter,sans-serif"
          const tw = ctx.measureText(p.name).width
          const bw = tw + 30, bh = 28
          rr(x - bw / 2, y - bh / 2, bw, bh, bh / 2)
          ctx.fillStyle = "rgba(18,18,14,0.95)"; ctx.fill()
          ctx.strokeStyle = "rgba(26,232,106,0.28)"; ctx.lineWidth = 0.8; ctx.stroke()
          ctx.beginPath(); ctx.arc(x - bw / 2 + 11, y, 4, 0, Math.PI * 2)
          ctx.fillStyle = p.col; ctx.fill()
          ctx.fillStyle = "rgba(240,237,230,0.9)"; ctx.textAlign = "left"; ctx.textBaseline = "middle"
          ctx.fillText(p.name, x - bw / 2 + 19, y)
        })
        const pulse = (Math.sin(ts * 0.0018) + 1) / 2
        ctx.beginPath(); ctx.arc(CX, CY, 83 + pulse * 18, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(26,232,106,${0.28 - pulse * 0.2})`; ctx.lineWidth = 1.5; ctx.stroke()
        ctx.beginPath(); ctx.arc(CX, CY, 83, 0, Math.PI * 2)
        const cGrad = ctx.createRadialGradient(CX - 26, CY - 26, 4, CX, CY, 83)
        cGrad.addColorStop(0, "#1a1a14"); cGrad.addColorStop(0.5, "#0e0e0a"); cGrad.addColorStop(1, "#080808")
        ctx.fillStyle = cGrad; ctx.fill()
        ctx.save()
        ctx.beginPath(); ctx.arc(CX, CY, 83, 0, Math.PI * 2); ctx.clip()
        ctx.strokeStyle = "rgba(26,232,106,0.10)"; ctx.lineWidth = 0.7
        for (let gi = -90; gi <= 90; gi += 16) {
          ctx.beginPath(); ctx.moveTo(CX + gi, CY - 90); ctx.lineTo(CX + gi, CY + 90); ctx.stroke()
          ctx.beginPath(); ctx.moveTo(CX - 90, CY + gi); ctx.lineTo(CX + 90, CY + gi); ctx.stroke()
        }
        ctx.restore()
        ;[0.38, 0.62, 0.82].forEach((r) => {
          ctx.beginPath(); ctx.arc(CX, CY, 83 * r, 0, Math.PI * 2)
          ctx.strokeStyle = "rgba(26,232,106,0.16)"; ctx.lineWidth = 0.8; ctx.stroke()
        })
        ctx.beginPath(); ctx.arc(CX, CY, 83, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(26,232,106,0.54)"; ctx.lineWidth = 1.5; ctx.stroke()
        ctx.fillStyle = "#1AE86A"; ctx.textAlign = "center"; ctx.textBaseline = "middle"
        ctx.font = '800 18px "Bricolage Grotesque",sans-serif'
        ctx.fillText("CRM /", CX, CY - 13); ctx.fillText("Leads", CX, CY + 14)
        raf = requestAnimationFrame(draw)
      }
      ;(document as any).fonts?.ready.then(() => { raf = requestAnimationFrame(draw) }) ?? (raf = requestAnimationFrame(draw))
      disposers.push(() => cancelAnimationFrame(raf))
    }

    /* ── carrusel de casos ── */
    const track = root.querySelector<HTMLElement>("#car-track")
    if (track) {
      const dots = root.querySelectorAll<HTMLElement>(".car-dot")
      const total = track.children.length
      let cur = 0
      let timer: ReturnType<typeof setInterval>
      const go = (n: number) => {
        cur = (n + total) % total
        track.style.transform = "translateX(-" + cur * 100 + "%)"
        dots.forEach((d, i) => d.classList.toggle("active", i === cur))
      }
      const startAuto = () => { timer = setInterval(() => go(cur + 1), 5000) }
      const resetAuto = () => { clearInterval(timer); startAuto() }
      root.querySelector("#car-prev")?.addEventListener("click", () => { go(cur - 1); resetAuto() }, { signal })
      root.querySelector("#car-next")?.addEventListener("click", () => { go(cur + 1); resetAuto() }, { signal })
      dots.forEach((d) => d.addEventListener("click", () => { go(Number(d.dataset.i)); resetAuto() }, { signal }))
      startAuto()
      disposers.push(() => clearInterval(timer))
    }

    /* ── logos flotantes (fondo calculadora) ── */
    const logosWrap = root.querySelector<HTMLElement>("#calc-logos-bg")
    if (logosWrap && !logosWrap.dataset.init) {
      logosWrap.dataset.init = "1"
      const logos = [
        '<svg viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
        '<svg viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/></svg>',
        '<svg viewBox="0 0 24 24" fill="#ffffff"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>',
        '<svg viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
        '<svg viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
        '<svg viewBox="0 0 24 24" fill="#E60023"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.669.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/></svg>',
        '<svg viewBox="0 0 24 24" fill="#1DB954"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>',
      ]
      const positions: Record<string, string>[] = [
        { top: "6%", left: "1%" }, { top: "10%", right: "2%" }, { top: "42%", left: "0%" }, { top: "52%", right: "1%" },
        { top: "78%", left: "3%" }, { top: "76%", right: "2%" }, { top: "26%", left: "47%" }, { top: "62%", left: "44%" },
      ]
      const anims = ["floatA", "floatB", "floatC"]
      const styleEl = document.createElement("style")
      styleEl.textContent =
        "@keyframes floatA{0%{transform:translate(0,0) rotate(0deg)}25%{transform:translate(28px,-38px) rotate(14deg)}55%{transform:translate(-18px,-55px) rotate(-7deg)}80%{transform:translate(38px,-22px) rotate(19deg)}100%{transform:translate(0,0) rotate(0deg)}}@keyframes floatB{0%{transform:translate(0,0) rotate(0deg)}30%{transform:translate(-32px,28px) rotate(-17deg)}60%{transform:translate(22px,48px) rotate(9deg)}85%{transform:translate(-12px,18px) rotate(-11deg)}100%{transform:translate(0,0) rotate(0deg)}}@keyframes floatC{0%{transform:translate(0,0) rotate(0deg)}20%{transform:translate(18px,32px) rotate(21deg)}50%{transform:translate(-28px,12px) rotate(-13deg)}75%{transform:translate(12px,-28px) rotate(17deg)}100%{transform:translate(0,0) rotate(0deg)}}"
      document.head.appendChild(styleEl)
      logos.forEach((svg, i) => {
        const p = positions[i % positions.length]
        const d = document.createElement("div")
        d.style.cssText =
          "position:absolute;width:84px;height:84px;opacity:0.22;animation:" + anims[i % 3] + " " + (8 + i * 1.6).toFixed(1) + "s ease-in-out " + (-(i * 1.3)).toFixed(1) + "s infinite;"
        Object.keys(p).forEach((k) => { (d.style as any)[k] = p[k] })
        d.innerHTML = svg
        logosWrap.appendChild(d)
      })
      disposers.push(() => { styleEl.remove(); logosWrap.innerHTML = ""; delete logosWrap.dataset.init })
    }

    /* ── anillos "por qué" + línea del proceso ── */
    root.querySelectorAll<HTMLElement>(".why-item .why-n").forEach((el, i) => {
      if (el.querySelector(".wring")) return
      const orig = el.textContent?.trim() ?? ""
      el.innerHTML =
        '<svg viewBox="0 0 36 36" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none"><circle cx="18" cy="18" r="15" fill="none" stroke="var(--green)" stroke-width="1.2" stroke-dasharray="94.2" stroke-dashoffset="94.2" class="wring" style="transition:stroke-dashoffset 0.7s cubic-bezier(.25,.46,.45,.94) ' +
        i * 80 + 'ms"/></svg><span style="position:relative;z-index:1">' + orig + "</span>"
    })
    const whyObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          const r = e.target.querySelector<SVGElement>(".wring")
          if (r) r.style.strokeDashoffset = "0"
        }
      }),
      { threshold: 0.4 },
    )
    root.querySelectorAll(".why-item .why-n").forEach((el) => whyObs.observe(el))
    disposers.push(() => whyObs.disconnect())

    const stepsWrap = root.querySelector(".steps-wrap")
    if (stepsWrap) {
      const lineObs = new IntersectionObserver(
        (entries) => { if (entries[0].isIntersecting) { stepsWrap.classList.add("animated"); lineObs.disconnect() } },
        { threshold: 0.1 },
      )
      lineObs.observe(stepsWrap)
      disposers.push(() => lineObs.disconnect())
    }

    /* ── calculadora React ── */
    let calcRoot: Root | null = null
    const calcEl = root.querySelector("#calc-root")
    if (calcEl) {
      calcRoot = createRoot(calcEl)
      calcRoot.render(<Calculator />)
    }

    /* ── formulario → /api/contact ── */
    const form = root.querySelector<HTMLFormElement>("#contact-form")
    if (form) {
      const val = (id: string) => (root.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("#" + id)?.value || "").trim()
      const onSubmit = async (e: Event) => {
        e.preventDefault()
        const btn = root.querySelector<HTMLButtonElement>("#form-submit-btn")!
        const ok = root.querySelector<HTMLElement>("#form-ok")!
        const err = root.querySelector<HTMLElement>("#form-err")!
        err.style.display = "none"
        const presupuesto = val("f-budget")
        let mensaje = val("f-msg")
        if (presupuesto) mensaje += "\n\nPresupuesto mensual: " + presupuesto
        const payload = {
          nombre: val("f-name"),
          apellido: val("f-last"),
          email: val("f-email"),
          empresa: val("f-co"),
          asunto: val("f-subject"),
          mensaje,
          _hp: val("f-hp"),
        }
        if (!payload.nombre || !payload.apellido || !payload.email || !payload.empresa || !payload.asunto || !mensaje) {
          err.textContent = "Completá todos los campos."
          err.style.display = "block"
          return
        }
        btn.textContent = "Enviando..."
        btn.disabled = true
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
          const data = await res.json().catch(() => ({}))
          if (res.ok && data.success) {
            btn.style.display = "none"
            ok.style.display = "block"
            ;(window as any).dataLayer?.push({ event: "form_submit_contacto" })
          } else {
            throw new Error(data.message || "fail")
          }
        } catch {
          btn.textContent = "Enviar consulta →"
          btn.disabled = false
          err.textContent = "No se pudo enviar. Escribinos a ivo@didaktomarketing.com"
          err.style.display = "block"
        }
      }
      form.addEventListener("submit", onSubmit, { signal })
    }

    return () => {
      ac.abort()
      disposers.forEach((d) => d())
      if (calcRoot) {
        const r = calcRoot
        // defer to avoid React "unmount during render" warning
        setTimeout(() => r.unmount(), 0)
      }
    }
  }, [])

  return <div className="dk-page" ref={rootRef} dangerouslySetInnerHTML={{ __html: MARKUP }} />
}
