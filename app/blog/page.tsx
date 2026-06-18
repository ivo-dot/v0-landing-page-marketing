import type { Metadata } from "next"
import DkPage from "@/components/dk-page"
import { BlogCard } from "@/components/dk-article"
import { POSTS } from "@/components/blog-posts"
import "../didakto-redesign.css"

const URL = "https://didaktomarketing.com/blog"

export const metadata: Metadata = {
  title: "Blog · Publicidad digital y generación de leads B2B",
  description:
    "Ideas y estrategias de Paid Media, datos e IA para generar demanda B2B. Lo que aplicamos con nuestros clientes en LATAM y España, sin humo.",
  alternates: { canonical: URL },
}

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog de Didakto Marketing",
  url: URL,
  description: "Estrategia de publicidad digital y generación de leads B2B.",
  publisher: { "@type": "Organization", name: "Didakto Marketing", url: "https://didaktomarketing.com" },
  blogPost: POSTS.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: `https://didaktomarketing.com/blog/${p.slug}`,
    datePublished: p.date,
    author: { "@type": "Person", name: "Ivo Crisman" },
  })),
}

export default function BlogIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      <DkPage>
        <section className="dkhero">
          <span className="blob" aria-hidden="true" />
          <div className="wrap">
            <nav className="crumb" aria-label="Migas"><a href="/">Inicio</a> <span>/</span> <span>Blog</span></nav>
            <span className="eyebrow r">Blog · Recursos</span>
            <h1 className="dkh1 arth1">Ideas para generar <em>demanda B2B</em>.</h1>
            <p className="lede r" style={{ maxWidth: "none" }}>Estrategia de Paid Media, datos e IA, sin humo. Lo que realmente aplicamos con nuestros clientes para conseguir leads que cierran.</p>
          </div>
        </section>
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="blog-grid">
              {POSTS.map((p) => <BlogCard p={p} key={p.slug} />)}
            </div>
          </div>
        </section>
      </DkPage>
    </>
  )
}
