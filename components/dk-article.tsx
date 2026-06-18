import type { ReactNode } from "react"
import DkPage from "./dk-page"
import { faqJsonLd } from "./dk-service"
import type { PostMeta } from "./blog-posts"

const BASE = "https://didaktomarketing.com"

export function BlogCard({ p }: { p: PostMeta }) {
  return (
    <a className="bcard r" href={`/blog/${p.slug}`} data-cursor>
      <span className="btag">{p.tag}</span>
      <h3>{p.title}</h3>
      <p>{p.excerpt}</p>
      <span className="bmeta">{p.dateLabel} · {p.reading}</span>
      <span className="bmore">Leer artículo <span className="a">→</span></span>
    </a>
  )
}

export default function ArticlePage({
  post,
  lede,
  children,
  faqs,
  related,
}: {
  post: PostMeta
  lede: string
  children: ReactNode
  faqs?: { q: string; a: string }[]
  related: PostMeta[]
}) {
  return (
    <DkPage>
      {/* HEADER */}
      <section className="dkhero">
        <span className="blob" aria-hidden="true" />
        <div className="artwrap" style={{ position: "relative", zIndex: 1 }}>
          <nav className="crumb" aria-label="Migas">
            <a href="/">Inicio</a> <span>/</span> <a href="/blog">Blog</a> <span>/</span> <span>{post.tag}</span>
          </nav>
          <span className="eyebrow r">{post.tag}</span>
          <h1 className="dkh1 arth1">{post.title}</h1>
          <p className="lede r" style={{ maxWidth: "none" }}>{lede}</p>
          <div className="meta-line r">
            <span className="au"><i />Ivo Crisman</span>
            <span>·</span><span>{post.dateLabel}</span>
            <span>·</span><span>{post.reading} de lectura</span>
          </div>
        </div>
      </section>

      {/* CUERPO */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="artwrap">
          <article className="dkprose r">{children}</article>
          <div className="author">
            <span className="av" aria-hidden="true" />
            <div>
              <b>Ivo Crisman</b>
              <span>Fundador de Didakto Marketing · +7 años en Paid Media B2B</span>
              <p>Lidera la estrategia de adquisición de Didakto para clientes B2B en LATAM y USA, incluyendo Sika en múltiples mercados. Google Partner y Meta Certified.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="section inv" id="faq">
          <div className="wrap">
            <div className="shead">
              <span className="eyebrow r">Preguntas frecuentes</span>
              <h2 className="h">Lo que más nos preguntan.</h2>
            </div>
            <div className="faq">
              {faqs.map((f, i) => (
                <div className="faq-item" key={i}>
                  <button className="faq-q" aria-expanded="false" type="button">{f.q}<span className="faq-ic" /></button>
                  <div className="faq-a"><div className="faq-a-in">{f.a}</div></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELACIONADOS */}
      {related.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="shead">
              <span className="eyebrow r">Seguí leyendo</span>
              <h2 className="h">Más sobre demanda B2B.</h2>
            </div>
            <div className="blog-grid">
              {related.map((p) => <BlogCard p={p} key={p.slug} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section cta">
        <div className="wrap">
          <span className="eyebrow r">Hablemos</span>
          <h2>¿Lo aplicamos a tu <em>negocio</em>?</h2>
          <p className="lede r" style={{ color: "var(--ink2)", marginLeft: "auto", marginRight: "auto" }}>Empezá con una auditoría gratuita de tus campañas. Sin compromisos.</p>
          <div className="hero-cta r" style={{ justifyContent: "center", marginTop: 38, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button className="btn btn-dark mag" data-form data-cursor type="button">Agendar consultoría <span className="a">→</span></button>
            <a className="btn btn-ghost mag" href="/agencia-de-publicidad-digital" data-cursor>Ver servicios <span className="a">→</span></a>
          </div>
        </div>
      </section>
    </DkPage>
  )
}

export function articleJsonLd(post: PostMeta, lede: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: lede,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: "Ivo Crisman", url: "https://www.linkedin.com/in/ivo-roman-crisman/" },
    publisher: {
      "@type": "Organization",
      name: "Didakto Marketing",
      logo: { "@type": "ImageObject", url: BASE + "/logo-didakto-iso.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/${post.slug}` },
    url: `${BASE}/blog/${post.slug}`,
    inLanguage: "es",
    articleSection: post.tag,
  }
}

export function articleBreadcrumb(post: PostMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE}/blog/${post.slug}` },
    ],
  }
}

export { faqJsonLd }
