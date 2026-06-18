export type PostMeta = {
  slug: string
  title: string
  excerpt: string
  date: string // ISO (datePublished)
  dateLabel: string
  reading: string
  tag: string
}

// Ordenados del más nuevo al más viejo.
export const POSTS: PostMeta[] = [
  {
    slug: "como-generar-leads-b2b-en-2026",
    title: "Cómo generar leads B2B en 2026",
    excerpt:
      "Tu producto ya está validado. Lo que falta es alcance e impacto. Cómo la presencia digital y los canales pagados llevan tu oferta a los públicos correctos.",
    date: "2026-06-18",
    dateLabel: "18 de junio, 2026",
    reading: "9 min",
    tag: "Generación de leads",
  },
  {
    slug: "google-ads-vs-meta-ads-b2b",
    title: "Google Ads vs Meta Ads para B2B: cuál conviene",
    excerpt:
      "No son rivales, son momentos distintos del funnel. Cuándo usar cada uno, qué esperar de cada canal y cómo combinarlos para bajar tu costo por lead.",
    date: "2026-06-17",
    dateLabel: "17 de junio, 2026",
    reading: "8 min",
    tag: "Paid Media",
  },
  {
    slug: "linkedin-ads-para-generacion-de-leads-b2b",
    title: "LinkedIn Ads para generación de leads B2B, ¿funciona?",
    excerpt:
      "Sí, pero con condiciones. Para qué negocios tiene sentido, por qué el CPC alto no es el problema y cómo logramos un CPA de USD 5 en un caso real.",
    date: "2026-06-16",
    dateLabel: "16 de junio, 2026",
    reading: "8 min",
    tag: "LinkedIn Ads",
  },
]

export const postBySlug = (slug: string) => POSTS.find((p) => p.slug === slug)
export const otherPosts = (slug: string) => POSTS.filter((p) => p.slug !== slug)
