"use client"

import "./slide-deck.css"
import { useState, useEffect, useRef, type FormEvent } from "react"

const TOTAL = 12

export default function SlideDeck() {
  const [cur, setCur] = useState(0)
  const [sending, setSending] = useState(false)
  const [showOk, setShowOk] = useState(false)
  const [formError, setFormError] = useState("")
  const touchX = useRef(0)
  const touchY = useRef(0)
  const curRef = useRef(0)
  const formLoadTime = useRef(0)
  const [utms, setUtms] = useState({
    utm_source: "", utm_medium: "", utm_campaign: "",
    utm_term: "", utm_content: "", url: "", referrer: "",
  })

  const isMobile = () => typeof window !== "undefined" && window.innerWidth <= 768

  // Lock body scroll (desktop only) + capture UTMs
  useEffect(() => {
    if (!isMobile()) {
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
    }
    const p = new URLSearchParams(window.location.search)
    setUtms({
      utm_source: p.get("utm_source") || "",
      utm_medium: p.get("utm_medium") || "",
      utm_campaign: p.get("utm_campaign") || "",
      utm_term: p.get("utm_term") || "",
      utm_content: p.get("utm_content") || "",
      url: window.location.href,
      referrer: document.referrer || "",
    })
    return () => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }
  }, [])

  const goTo = (i: number) => {
    const next = Math.max(0, Math.min(TOTAL - 1, i))
    curRef.current = next
    setCur(next)
    if (next === 11) formLoadTime.current = Date.now()
  }

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", " "].includes(e.key)) { e.preventDefault(); goTo(curRef.current + 1) }
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) { e.preventDefault(); goTo(curRef.current - 1) }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Wheel / scroll nav — desktop only
  useEffect(() => {
    if (isMobile()) return
    let cooldown = false
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (cooldown) return
      cooldown = true
      if (e.deltaY > 0) goTo(curRef.current + 1)
      else goTo(curRef.current - 1)
      setTimeout(() => { cooldown = false }, 750)
    }
    const el = document.getElementById("sd-deck")
    el?.addEventListener("wheel", onWheel, { passive: false })
    return () => el?.removeEventListener("wheel", onWheel)
  }, [])

  // Touch / swipe — desktop only (mobile scrolls naturally)
  const onTouchStart = (e: React.TouchEvent) => {
    if (isMobile()) return
    touchX.current = e.touches[0].clientX
    touchY.current = e.touches[0].clientY
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (isMobile()) return
    const dx = e.changedTouches[0].clientX - touchX.current
    const dy = e.changedTouches[0].clientY - touchY.current
    if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 50) {
      dy < 0 ? goTo(curRef.current + 1) : goTo(curRef.current - 1)
    } else if (Math.abs(dx) > 40) {
      dx < 0 ? goTo(curRef.current + 1) : goTo(curRef.current - 1)
    }
  }

  // Contact form submit — same Zapier endpoint as current site
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending) return
    setFormError("")
    const fd = new FormData(e.currentTarget)
    // Honeypot check — bots fill this field, humans don't
    if (fd.get("_hp") as string) return
    // Timing check — reject if submitted in under 3 seconds
    if (formLoadTime.current && Date.now() - formLoadTime.current < 3000) {
      setFormError("Por favor, completa el formulario con calma.")
      return
    }
    setSending(true)
    setShowOk(false)
    const payload: Record<string, string> = {}
    fd.forEach((v, k) => { if (k !== "_hp") payload[k] = String(v) })
    Object.assign(payload, utms, { site: "didaktomarketing.com", submitted_at: new Date().toISOString() })
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      })
      setShowOk(true);
      (e.currentTarget as HTMLFormElement).reset()
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({ event: "generate_lead" })
      }
    } catch {
      setShowOk(true)
    } finally {
      setSending(false)
    }
  }

  const progress = ((cur + 1) / TOTAL) * 100
  const s = (n: number) => `sd-slide${cur === n ? " active" : ""}`

  return (
    <div id="sd-deck" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>

      {/* Progress bar */}
      <div id="sd-pbar" style={{ width: `${progress}%` }} />

      {/* Fixed header */}
      <header id="sd-header">
        <a href="/" className="sd-logo">
          <img src="/logo-didakto-horizontal.png" alt="Didakto" />
        </a>
        <nav className="sd-header-nav">
          <button className="sd-hnav-btn" onClick={() => goTo(6)}>Servicios</button>
          <button className="sd-hnav-btn" onClick={() => goTo(8)}>Casos</button>
          <button className="sd-hnav-btn" onClick={() => goTo(9)}>Clientes</button>
          <button className="sd-hnav-btn" onClick={() => goTo(10)}>¿Por qué?</button>
        </nav>
        <button className="sd-header-cta" onClick={() => goTo(11)}>Hablemos →</button>
      </header>

      {/* Dot navigation */}
      <div id="sd-dots">
        {Array.from({ length: TOTAL }, (_, i) => (
          <div key={i} className={`sd-dot${i === cur ? " on" : ""}`} onClick={() => goTo(i)} />
        ))}
      </div>

      {/* ══ SLIDE 1 · HERO ══ */}
      <div className={s(0)} id="sd-s1">
        <div className="sd-blob" style={{ width: 700, height: 700, top: -200, right: -200 }} />
        <div className="s1-inner">
          <div className="s1-copy">
            <div className="sd-eyebrow">
              <span className="sd-live-dot" />
              Agencia Boutique · Solo B2B
            </div>
            <h1 className="s1-headline">
              Hacerlo bien<br />desde el<br />
              <span className="sd-g">principio.</span>
            </h1>
            <p className="s1-sub">
              Paid Media experto + Data Intelligence + Automatización con IA — todo en un equipo boutique
              dedicado exclusivamente a tu crecimiento B2B.
            </p>
            <div className="s1-btns">
              <button className="sd-btn-main" onClick={() => goTo(11)}>
                Agendar consultoría →
              </button>
              <button className="sd-btn-ghost" onClick={() => goTo(8)}>
                Ver caso Sika
              </button>
            </div>
            <div className="s1-trust">
              <div className="sd-trust-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Google Partner
              </div>
              <div className="sd-trust-div" />
              <div className="sd-trust-item">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
                Meta Certified
              </div>
              <div className="sd-trust-div" />
              <div className="sd-trust-item">+7 años · LATAM &amp; USA</div>
            </div>
            <div className="s1-stats">
              <div><div className="sd-stat-val">−72%</div><div className="sd-stat-lbl">CPA vs. agencia anterior (Sika)</div></div>
              <div><div className="sd-stat-val">$5 USD</div><div className="sd-stat-lbl">CPA LinkedIn Ads (MSH Group)</div></div>
              <div><div className="sd-stat-val">7+</div><div className="sd-stat-lbl">países LATAM &amp; USA gestionados</div></div>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="sd-dash-wrap">
            <div className="sd-dash-win">
              <div className="sd-dash-tb">
                <div className="sd-dash-dots">
                  <span className="sd-dd-r" /><span className="sd-dd-y" /><span className="sd-dd-g" />
                </div>
                <div className="sd-dash-url">didakto · intelligence dashboard</div>
              </div>
              <div className="sd-dash-body">
                <div className="sd-kpi-row">
                  <div className="sd-kpi"><div className="kl">CPA</div><div className="kv">$12.4</div><div className="kc">↓72%</div></div>
                  <div className="sd-kpi"><div className="kl">MQLs</div><div className="kv">284</div><div className="kc">↑40%</div></div>
                  <div className="sd-kpi"><div className="kl">ROAS</div><div className="kv">8.2x</div><div className="kc">↑23%</div></div>
                </div>
                <div className="sd-chart-b">
                  <div className="ct">Leads Calificados · 8 semanas</div>
                  <div className="sd-bars">
                    {[28,40,34,52,48,66,75,92].map((h, i) => (
                      <div key={i} className="sd-bar" style={{
                        height: `${h}%`,
                        background: i === 7 ? "rgba(0,229,160,0.95)" : i === 6 ? "rgba(0,229,160,0.70)" : `rgba(0,229,160,${0.25 + i * 0.04})`
                      }} />
                    ))}
                  </div>
                </div>
                <div className="sd-funnel-b">
                  <div className="ft">Pipeline B2B</div>
                  {[["Leads","100%"],["MQLs","62%"],["SQLs","38%"],["Reuniones","18%"]].map(([l,w]) => (
                    <div key={l} className="sd-f-row">
                      <div className="sd-f-label">{l}</div>
                      <div className="sd-f-track"><div className="sd-f-fill" style={{ width: w }} /></div>
                    </div>
                  ))}
                </div>
                <div className="sd-ns-b">
                  <div className="nt">📝 Próximos pasos · Semana 17</div>
                  <div className="nd">Aumentar budget Search +20% · Nueva creative video · Excluir Junior en LinkedIn</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ SLIDE 2 · PROBLEMA ══ */}
      <div className={s(1)} id="sd-s2">
        <div className="s2-inner">
          <div className="s2-left">
            <div className="sd-lbl">El contexto</div>
            <h2 className="sd-h2" style={{ marginBottom: 20 }}>
              La mayoría no tiene un<br />problema de inversión.<br />
              <span className="sd-g">Tiene un problema<br />de criterio.</span>
            </h2>
            <p className="sd-body" style={{ marginBottom: 24 }}>
              Las empresas B2B invierten en pauta, reciben leads y… el equipo comercial no cierra.
              Nadie sabe por qué. El marketing sigue igual.
            </p>
            <div className="sd-accent-box">
              <p>El problema no es la pauta.<br /><span className="sd-g">El problema es el marketing a ciegas.</span></p>
            </div>
          </div>
          <div className="s2-right">
            {[
              { icon: "📉", title: "Leads que no cierran", desc: "Volumen sin calidad. Nadie audita la segmentación ni la intención de compra real." },
              { icon: "📊", title: "Reportes que no ayudan a decidir", desc: "Dashboards llenos de métricas que no conectan con ninguna decisión de negocio." },
              { icon: "🎯", title: "Optimización sin dirección", desc: "Cambios de campaña basados en intuición, no en datos validados del pipeline." },
              { icon: "🔁", title: "Agencias que ejecutan sin entender", desc: "Empiezan por la pauta, no por el diagnóstico. Cada mes es empezar de nuevo." },
            ].map((p) => (
              <div key={p.title} className="sd-pain">
                <div className="sd-pain-icon">{p.icon}</div>
                <div><h4>{p.title}</h4><p>{p.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ SLIDE 3 · STATEMENT ══ */}
      <div className={s(2)} id="sd-s3">
        <div className="sd-lbl">Nuestra postura</div>
        <div className="s3-big">
          <span className="sd-g">+ Resultados</span><br />
          <span className="sd-minus">− Excusas</span>
        </div>
        <p className="s3-sub">Impulsamos empresas que quieren crecer de verdad.<br />No con más inversión, sino con más criterio.</p>
        <div className="s3-pills">
          {["Decisiones basadas en datos","Soluciones reales, no excusas","Impacto antes que volumen","Escalar lo que funciona"].map((t) => (
            <div key={t} className="sd-pill">{t}</div>
          ))}
        </div>
      </div>

      {/* ══ SLIDE 4 · QUÉ ES DIDAKTO ══ */}
      <div className={s(3)} id="sd-s4">
        <div className="s4-inner">
          <div className="s4-left">
            <div className="sd-lbl">Qué es Didakto</div>
            <h2 className="sd-h2" style={{ marginBottom: 20 }}>
              No somos una agencia<br /><span className="sd-g">tradicional.</span>
            </h2>
            <p className="sd-body" style={{ maxWidth: 380 }}>
              Somos un <strong style={{ color: "var(--sd-w)" }}>partner estratégico de performance</strong> que diseña sistemas de crecimiento basados en medición real.
            </p>
            <div className="sd-tagline-big">No vendemos campañas.<br />Diseñamos sistemas que escalan.</div>
            <div className="sd-vision-box">
              <h4>Misión</h4>
              <p>Cambiar la forma en que las empresas hacen marketing digital, enfocándonos solo en resultados reales que generan negocio — no en métricas vacías.</p>
            </div>
          </div>
          <div className="s4-right">
            {[
              { t: "Diseñamos sistemas de adquisición de leads", d: "con base en los datos reales del negocio." },
              { t: "Integramos medición, publicidad y negocio", d: "en un solo enfoque coherente y medible." },
              { t: "Trabajamos con los recursos reales", d: "de cada empresa, sin propuestas infladas." },
              { t: "Priorizamos impacto antes que volumen:", d: "menos leads, más calidad, más cierres." },
              { t: "Empezamos siempre entendiendo.", d: "Cada relación arranca con una consultoría, sin excepciones." },
            ].map((d) => (
              <div key={d.t} className="sd-diff">
                <div className="sd-diff-dot" />
                <p><strong>{d.t}</strong> {d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ SLIDE 5 · IVO ══ */}
      <div className={s(4)} id="sd-s-ivo">
        <div className="sivo-inner">
          <div className="sivo-avatar-col">
            <div className="sd-avatar">
              <img src="/ivo-imagen.jpeg" alt="Ivo Crisman"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }} />
            </div>
            <a href="https://www.linkedin.com/in/ivo-roman-crisman/" target="_blank" rel="noopener noreferrer" className="sd-li-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#5BA4CF"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn
            </a>
            <div className="sd-mini-stats">
              <div className="sd-mstat"><div className="val">7+</div><div className="lbl2">años en<br />Paid Media</div></div>
              <div className="sd-mstat"><div className="val">2</div><div className="lbl2">certs<br />Meta · Google</div></div>
            </div>
          </div>
          <div className="sivo-bio">
            <div className="sd-lbl">Un poco de contexto</div>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 900, letterSpacing: -1, marginBottom: 4 }}>Ivo Crisman</h2>
            <div className="sd-bio-role">Fundador de Didakto</div>
            <p className="sd-body" style={{ maxWidth: 520 }}>
              Didakto es una agencia joven con crecimiento sostenido, construida sobre una base clara:{" "}
              <strong style={{ color: "var(--sd-w)" }}>no ser una agencia más.</strong> Creemos que antes de escalar campañas, hay que escalar entendimiento.
            </p>
            <div className="sd-creds">
              <div className="sd-cred"><strong style={{ color: "var(--sd-w)" }}>+7 años de experiencia</strong> en Paid Media &amp; Data Analytics</div>
              <div className="sd-cred">Certificado por <strong style={{ color: "var(--sd-w)" }}>Meta y Google Ads</strong> como Paid Media Manager</div>
              <div className="sd-cred">Experiencia con marcas como <strong style={{ color: "var(--sd-w)" }}>SIKA, VANS, Omoda, Jaecoo, Raghsa, Burton</strong> y más</div>
              <div className="sd-cred">Lideramos publicidad digital para <strong style={{ color: "var(--sd-w)" }}>SIKA LATAM, SIKA USA</strong> y múltiples mercados</div>
              <div className="sd-cred">Principio rector: <em style={{ color: "var(--sd-g)" }}>"Hacerlo bien desde el principio"</em></div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ SLIDE 6 · PROCESO ══ */}
      <div className={s(5)} id="sd-s5">
        <div className="sd-lbl">Cómo trabajamos</div>
        <h2 className="sd-h2">Nuestro proceso completo</h2>
        <div className="s5-steps">
          {[
            { n: 1, phase: "Etapa 1", name: "Consultoría +\nPlan de Acción", desc: "Análisis del funnel e identificación de oportunidades reales de crecimiento." },
            { n: 2, phase: "Etapa 2", name: "Medición\nCompleta", desc: "Auditoría GA4 y GTM, validación de eventos y métricas clave de negocio." },
            { n: 3, phase: "Etapa 3", name: "Creación del\nSistema", desc: "Setup completo de cuentas, estructura publicitaria e integraciones técnicas." },
            { n: 4, phase: "Etapa 4", name: "Estrategia y\nCrecimiento", desc: "Full funnel, selección de canales y KPIs alineados con el negocio." },
            { n: 5, phase: "Etapa 5", name: "Reportería y\nMejora Continua", desc: "Reportes claros, interpretación de datos y ajustes estratégicos constantes." },
          ].map((step) => (
            <div key={step.n} className="sd-step">
              <div className="sd-step-circle">{step.n}</div>
              <div className="sd-step-line" />
              <div className="sd-step-phase">{step.phase}</div>
              <div className="sd-step-name">{step.name.split("\n").map((l, i) => <span key={i}>{l}{i < 1 && <br />}</span>)}</div>
              <div className="sd-step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
        <div className="sd-note"><strong>Regla de oro:</strong> siempre empezamos con una consultoría, sin importar cómo llegaste a nosotros.</div>
      </div>

      {/* ══ SLIDE 7 · SERVICIOS ══ */}
      <div className={s(6)} id="sd-s6">
        <div className="sd-lbl">Lo que hacemos</div>
        <h2 className="sd-h2">Nuestros <span className="sd-g">servicios</span></h2>
        <div className="s6-grid">
          {[
            { icon: "📣", title: "Paid Media", desc: "Diseñamos y optimizamos campañas con foco en crecimiento rentable. Escalamos lo que funciona, cortamos lo que no.", tags: ["Google Ads","Meta Ads","LinkedIn Ads","Full Funnel"] },
            { icon: "📐", title: "Medición & Analytics", desc: "Configuramos la base de datos desde cero. Sin medición correcta, no hay optimización posible. Cada conversión validada.", tags: ["GA4","GTM","Conversiones","Dashboards"] },
            { icon: "🧭", title: "Consultoría Estratégica", desc: "Diagnóstico profundo del negocio, funnel y competencia. Plan de acción priorizado por impacto real.", tags: ["Diagnóstico","Plan de Acción","KPIs","Auditoría"] },
            { icon: "🚀", title: "Sistemas de Demanda", desc: "Integramos medición, pauta y negocio en un sistema escalable. No dependemos de un solo canal ni de una sola campaña.", tags: ["Lead Gen","Automatización","CRM","Escala"] },
          ].map((svc) => (
            <div key={svc.title} className="sd-svc">
              <div className="sd-svc-icon">{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <div className="sd-tags">{svc.tags.map((t) => <span key={t} className="sd-tag">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ SLIDE 8 · AI CONTENT ══ */}
      <div className={s(7)} id="sd-s-ai">
        <div className="sd-blob" style={{ width: 600, height: 600, bottom: -150, right: -150 }} />
        <div className="sd-lbl">Creatividad + Tecnología</div>
        <h2 className="sd-h2" style={{ maxWidth: 700, textAlign: "center" }}>
          Este tipo de contenido<br /><span className="sd-g">también lo hacemos para tu marca</span>
        </h2>
        <p className="sd-body" style={{ maxWidth: 580, textAlign: "center", marginTop: 8 }}>
          Producimos conceptos creativos con IA: videos, personajes de marca, piezas visuales y campañas
          con identidad propia. Como hicimos para <strong style={{ color: "var(--sd-w)" }}>nuestros clientes.</strong>
        </p>
        <div className="sai-grid">
          {[
            { ico: "🎬", title: "Concepto Creativo", desc: "Personaje de marca, slogan e identidad visual generados con IA para campañas digitales con impacto real.", fmt: "NUESTROS CLIENTES" },
            { ico: "📱", title: "Video Ads con IA", desc: "Producción de videos publicitarios optimizados para Meta, Google y TikTok con generación IA a escala.", fmt: "REELS · STORIES · PRE-ROLL" },
            { ico: "🖼️", title: "Piezas Visuales", desc: "Banners, creatividades y assets de campaña generados y optimizados con herramientas de IA.", fmt: "META · GOOGLE DISPLAY" },
          ].map((c) => (
            <div key={c.title} className="sd-ai-card">
              <div className="ico">{c.ico}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
              <div className="format">{c.fmt}</div>
            </div>
          ))}
        </div>
        <div className="sai-btns">
          <a href="https://drive.google.com/drive/folders/1fz0oClLursoK4NxGVWQWtCdtTjJdoh8r?usp=drive_link"
            target="_blank" rel="noopener noreferrer" className="sd-btn-ghost" style={{ fontSize: 13, padding: "11px 22px" }}>
            ▶ &nbsp;Ver ejemplo de contenido
          </a>
          <span className="sd-btn-ghost" style={{ fontSize: 13, padding: "11px 22px", cursor: "default" }}>
            + Ejemplos disponibles a pedido
          </span>
        </div>
      </div>

      {/* ══ SLIDE 9 · CASO SIKA ══ */}
      <div className={s(8)} id="sd-s7">
        <div className="s7-inner">
          <div className="s7-left">
            <div className="sd-case-badge">Caso de éxito</div>
            <div className="sd-client-name">Sika</div>
            <div className="sd-client-cat">Marca global en impermeabilización y construcción · LATAM &amp; USA</div>
            <div className="sd-sec-lbl">El desafío</div>
            <div className="sd-challenge">Aumentar las conversiones y reducir el costo por lead heredado de la agencia anterior. Mercados simultáneos en LATAM y USA con estructuras de campaña distintas.</div>
            <div className="sd-sec-lbl">La estrategia</div>
            <div className="sd-strategy">Auditamos lo existente, validamos las conversiones reales en GA4 y GTM, rediseñamos el plan de medios para Meta y Google Ads. Tomamos lo que funcionaba, eliminamos el ruido y reconstruimos desde la medición.</div>
          </div>
          <div className="s7-right">
            <div className="sd-metrics">
              {[
                { v: "−72%", d: "Reducción en costo por lead vs. agencia anterior" },
                { v: "+2.191", d: "Conversiones entre Meta Ads y Google Ads" },
                { v: "+5K USD", d: "Inversión gestionada en USA en los primeros 3 meses" },
                { v: "LATAM & USA", d: "Dos mercados gestionados en paralelo con estrategias distintas" },
              ].map((m) => (
                <div key={m.v} className="sd-metric">
                  <div className="mval" style={{ fontSize: m.v.length > 8 ? 24 : 36 }}>{m.v}</div>
                  <div className="mdesc">{m.d}</div>
                </div>
              ))}
            </div>
            <div className="sd-testimonial">
              <p>"El diagnóstico inicial nos mostró dónde se estaba perdiendo el presupuesto. En tres meses los números cambiaron radicalmente."</p>
              <div className="who">Equipo Sika LATAM</div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ SLIDE 10 · CLIENTES + HERRAMIENTAS ══ */}
      <div className={s(9)} id="sd-s8">
        <div className="s8-inner">
          <div className="s8-col">
            <div className="sd-col-title">Con quiénes trabajamos</div>
            <h2 className="sd-h2" style={{ marginBottom: 24 }}>Algunos de nuestros<br /><span className="sd-g">clientes</span></h2>
            <div className="sd-client-chips">
              {["🌎 Sika Bolivia","🌎 Sika Perú","🌎 Sika Uruguay","🌎 Sika USA","🌎 Sika México","🌎 Sika Panamá","🌎 Sika Rep. Dom."].map((c) => (
                <div key={c} className="sd-cc hl">{c}</div>
              ))}
              {["MSH Group","MSH Custom","Silat SA","RP Urbano","Sahiora","Chocon Medio","Rio Neuquén"].map((c) => (
                <div key={c} className="sd-cc">{c}</div>
              ))}
            </div>
            <div className="sd-geo-note">Gestión en <strong>7 países LATAM + USA</strong> · Construcción, Real Estate, Turismo y más.</div>
          </div>
          <div className="s8-col">
            <div className="sd-col-title">Tecnología</div>
            <h2 className="sd-h2" style={{ marginBottom: 24 }}>Mejores herramientas<br /><span className="sd-g">del mercado</span></h2>
            <div className="sd-tools-grid">
              {["Meta Ads","Google Ads","LinkedIn Ads","TikTok Ads","GA4","Google Tag Manager","Looker Studio","Supermetrics","HubSpot","Salesforce","Zapier","n8n","Klaviyo","SEMrush","Funnel.io","ClickUp","Notion","Figma"].map((t) => (
                <div key={t} className="sd-tool">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ SLIDE 11 · POR QUÉ ELEGIRNOS ══ */}
      <div className={s(10)} id="sd-s9">
        <div className="sd-lbl">La diferencia</div>
        <h2 className="sd-h2">¿Por qué <span className="sd-g">Didakto</span>?</h2>
        <div className="s9-grid">
          {[
            { ico: "🔬", title: "Diagnóstico antes de ejecución", desc: "No lanzamos campañas sin entender el negocio. Cada relación empieza con una consultoría real." },
            { ico: "📈", title: "Medición como base, no como extra", desc: "Configuramos GA4, GTM y conversiones correctamente antes de invertir un peso en pauta." },
            { ico: "🤝", title: "Incentivos alineados a resultados", desc: "Crecemos si vos crecés. No vendemos campañas por volumen, sino sistemas que escalan." },
            { ico: "🧠", title: "Experiencia con marcas reales", desc: "Marcas globales y regionales. Sabemos lo que funciona a escala y lo que no." },
            { ico: "📋", title: "Reportes que ayudan a decidir", desc: "No entregamos dashboards decorativos. Entregamos interpretación y próximos pasos concretos." },
            { ico: "⚡", title: "Equipo pequeño, foco total", desc: "Cartera limitada. Cada cliente importa. Sin account executives intermedios ni procesos vacíos." },
          ].map((c) => (
            <div key={c.title} className="sd-card2">
              <div className="ico">{c.ico}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══ SLIDE 12 · CONTACTO ══ */}
      <div className={s(11)} id="sd-s10">
        <div className="sd-blob" style={{ width: 700, height: 700, bottom: -200, left: -250 }} />
        <div className="s10-inner">
          <div className="s10-copy">
            <div className="sd-lbl">El siguiente paso</div>
            <div className="sd-big-q">¿Construimos<br /><span className="sd-g">crecimiento real</span><br />juntos?</div>
            <p className="sd-tagline">"Hacerlo bien desde el principio."</p>
            <div className="sd-contact-links">
              <a href="mailto:ivo@didaktomarketing.com" className="sd-c-link">
                <span className="sd-c-icon">✉</span>ivo@didaktomarketing.com
              </a>
              <div className="sd-c-link"><span className="sd-c-icon">⏰</span>Lunes a Viernes · 9:00–18:00</div>
              <div className="sd-c-link"><span className="sd-c-icon">🌎</span>100% online · LATAM &amp; USA</div>
            </div>
            <div className="sd-guarantee">
              <strong>Sin compromisos, sin contratos largos</strong>
              Trabajamos mes a mes porque creemos que los resultados hablan por sí solos.
              Si en 90 días no ves el impacto, te lo decimos nosotros primero.
            </div>
          </div>

          <div className="sd-contact-form">
            <div className="sd-form-title">Consulta Gratuita</div>
            <div className="sd-form-sub">Cuéntanos sobre tu negocio y te mostramos cómo podemos ayudarte</div>
            <form onSubmit={handleSubmit}>
              {/* Honeypot — must stay empty; bots fill it */}
              <input name="_hp" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }} />
              <div className="sd-form-row">
                <input name="nombre" className="sd-input" style={{ marginBottom: 0 }} placeholder="Nombre *" required />
                <input name="apellido" className="sd-input" style={{ marginBottom: 0 }} placeholder="Apellido *" required />
              </div>
              <input name="email" type="email" className="sd-input" style={{ marginTop: 10 }} placeholder="Correo electrónico *" required />
              <input name="empresa" className="sd-input" placeholder="Empresa *" required />
              <input name="asunto" className="sd-input" placeholder="¿Cuál es tu principal desafío de crecimiento? *" required />
              <textarea name="mensaje" className="sd-input" placeholder="Cuéntanos sobre tu negocio, modelo de ventas y objetivos... *" required />
              {/* UTMs */}
              <input type="hidden" name="utm_source"   value={utms.utm_source} />
              <input type="hidden" name="utm_medium"   value={utms.utm_medium} />
              <input type="hidden" name="utm_campaign" value={utms.utm_campaign} />
              <input type="hidden" name="utm_term"     value={utms.utm_term} />
              <input type="hidden" name="utm_content"  value={utms.utm_content} />
              <input type="hidden" name="url"          value={utms.url} />
              <input type="hidden" name="referrer"     value={utms.referrer} />
              <button type="submit" className="sd-submit" disabled={sending}>
                {sending ? "Enviando..." : "Solicitar Consulta Gratuita →"}
              </button>
              {formError && (
                <div className="sd-form-err">{formError}</div>
              )}
              {showOk && (
                <div className="sd-form-ok">
                  ¡Gracias! Tu consulta fue enviada correctamente. Te contactamos pronto.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div id="sd-nav">
        <button onClick={() => goTo(cur - 1)} title="Anterior">&#8592;</button>
        <span className="sd-counter">{cur + 1} / {TOTAL}</span>
        <button onClick={() => goTo(cur + 1)} title="Siguiente">&#8594;</button>
      </div>

    </div>
  )
}
