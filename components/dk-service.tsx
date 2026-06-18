import type { ReactNode } from "react"

export type ServiceContent = {
  crumb: string
  eyebrow: string
  h1: ReactNode
  lede: string
  ghostCta?: { label: string; href: string }
  intro?: { eyebrow: string; h2: ReactNode; paragraphs: ReactNode[] }
  includes: { eyebrow: string; h2: ReactNode; sub?: string; items: { title: string; desc: string }[] }
  stats?: { v: string; l: string }[]
  process?: { eyebrow: string; h2: ReactNode; steps: { title: string; desc: string }[] }
  faqs: { q: string; a: string }[]
  cta: { h2: ReactNode; sub: string }
  /** bloque opcional al final del hero (ej. oferta de auditoría) */
  offer?: { h2: ReactNode; p: string; ctaLabel: string }
}

export default function ServicePage({ c }: { c: ServiceContent }) {
  return (
    <>
      {/* HERO */}
      <section className="dkhero">
        <span className="blob" aria-hidden="true" />
        <div className="wrap">
          <nav className="crumb" aria-label="Migas">
            <a href="/">Inicio</a> <span>/</span> <span>{c.crumb}</span>
          </nav>
          <span className="eyebrow r">{c.eyebrow}</span>
          <h1 className="dkh1">{c.h1}</h1>
          <p className="lede r">{c.lede}</p>
          <div className="hero-cta r">
            <button className="btn mag" data-form data-cursor type="button">Agendar consultoría <span className="a">→</span></button>
            {c.ghostCta && <a className="btn btn-ghost mag" href={c.ghostCta.href} data-cursor>{c.ghostCta.label} <span className="a">→</span></a>}
          </div>
          {c.offer && (
            <div className="offer r">
              <div>
                <h2>{c.offer.h2}</h2>
                <p>{c.offer.p}</p>
              </div>
              <div className="offer-cta">
                <button className="btn mag" data-form data-cursor type="button">{c.offer.ctaLabel} <span className="a">→</span></button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* INTRO */}
      {c.intro && (
        <section className="section inv">
          <div className="wrap">
            <div className="shead">
              <span className="eyebrow r">{c.intro.eyebrow}</span>
              <h2 className="h">{c.intro.h2}</h2>
            </div>
            <div className="manif-cols">
              {c.intro.paragraphs.map((p, i) => <p className="r" key={i}>{p}</p>)}
            </div>
          </div>
        </section>
      )}

      {/* INCLUYE */}
      <section className="section" id="incluye">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow r"><span className="lbl-idx">(01)</span> {c.includes.eyebrow}</span>
            <h2 className="h">{c.includes.h2}</h2>
            {c.includes.sub && <p className="lede r">{c.includes.sub}</p>}
          </div>
          <div className="inc">
            {c.includes.items.map((it, i) => (
              <div className="inc-item r" key={i}>
                <span className="inc-tick" aria-hidden="true">✓</span>
                <div><h3>{it.title}</h3><p>{it.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      {c.stats && (
        <section className="section inv">
          <div className="wrap">
            <div className="shead">
              <span className="eyebrow r"><span className="lbl-idx">(02)</span> Resultados</span>
              <h2 className="h">Números que respaldan.</h2>
            </div>
            <div className="statband">
              {c.stats.map((s, i) => (
                <div className="s r" key={i}><div className="v">{s.v}</div><div className="l">{s.l}</div></div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESO */}
      {c.process && (
        <section className="section">
          <div className="wrap">
            <div className="shead">
              <span className="eyebrow r"><span className="lbl-idx">(03)</span> {c.process.eyebrow}</span>
              <h2 className="h">{c.process.h2}</h2>
            </div>
            <div className="steps">
              {c.process.steps.map((s, i) => (
                <div className="step r" key={i}>
                  <div className="dot" />
                  <div><div className="snum">Paso {String(i + 1).padStart(2, "0")}</div><h3>{s.title}</h3><p>{s.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="wrap">
          <div className="shead">
            <span className="eyebrow r"><span className="lbl-idx">(04)</span> Preguntas frecuentes</span>
            <h2 className="h">Antes de hablar.</h2>
          </div>
          <div className="faq">
            {c.faqs.map((f, i) => (
              <div className="faq-item" key={i}>
                <button className="faq-q" aria-expanded="false" type="button">{f.q}<span className="faq-ic" /></button>
                <div className="faq-a"><div className="faq-a-in">{f.a}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="wrap">
          <span className="eyebrow r">Hablemos</span>
          <h2>{c.cta.h2}</h2>
          <p className="lede r" style={{ color: "var(--ink2)", marginLeft: "auto", marginRight: "auto" }}>{c.cta.sub}</p>
          <div className="hero-cta r" style={{ justifyContent: "center", marginTop: 38, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn btn-dark mag" data-form data-cursor type="button">Agendar consultoría <span className="a">→</span></button>
            <a className="btn btn-ghost mag" href="/#casos" data-cursor>Ver casos <span className="a">→</span></a>
          </div>
        </div>
      </section>
    </>
  )
}

/* JSON-LD helpers reutilizables */
export function serviceJsonLd(opts: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.name,
    areaServed: [
      { "@type": "Place", name: "América Latina" },
      { "@type": "Country", name: "Argentina" },
      { "@type": "Country", name: "Chile" },
      { "@type": "Country", name: "Uruguay" },
      { "@type": "Country", name: "Colombia" },
      { "@type": "Country", name: "España" },
    ],
    provider: { "@type": "Organization", name: "Didakto Marketing", url: "https://didaktomarketing.com" },
  }
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  }
}

export function breadcrumbJsonLd(name: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://didaktomarketing.com" },
      { "@type": "ListItem", position: 2, name, item: url },
    ],
  }
}
