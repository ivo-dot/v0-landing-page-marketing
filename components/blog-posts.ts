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
    slug: "costo-por-lead-vs-costo-por-cliente",
    title: "Costo por lead vs costo por cliente: la métrica que cambia todo",
    excerpt:
      "El costo por lead es la métrica más mirada del B2B y casi siempre la equivocada. Por qué dos campañas con el mismo CPL pueden costar 3x distinto en clientes, y cómo medir lo que de verdad factura.",
    date: "2026-06-25",
    dateLabel: "25 de junio, 2026",
    reading: "8 min",
    tag: "Data & Medición",
  },
  {
    slug: "presupuesto-google-ads-leads-que-no-convierten",
    title: "Presupuesto en Google Ads: dejá de pagar por leads que ventas descarta",
    excerpt:
      "Si tu equipo comercial descarta la mitad de los leads, estás financiando esa basura dos veces: en la pauta y en el tiempo de ventas. Dónde se fuga el presupuesto en B2B y cómo cerrar la canilla.",
    date: "2026-06-24",
    dateLabel: "24 de junio, 2026",
    reading: "8 min",
    tag: "Paid Media",
  },
  {
    slug: "smart-bidding-con-datos-del-crm-b2b",
    title: "Smart Bidding con datos del CRM: que el algoritmo puje por tus clientes",
    excerpt:
      "Las pujas automáticas de Google son tan buenas como los datos que les das. Cómo alimentar Smart Bidding con las etapas y los valores reales de tu CRM para que optimice por ingresos, no por formularios.",
    date: "2026-06-23",
    dateLabel: "23 de junio, 2026",
    reading: "9 min",
    tag: "Paid Media",
  },
  {
    slug: "publicidad-en-chatgpt",
    title: "Publicidad en ChatGPT: la novedad que cambia el paid media",
    excerpt:
      "OpenAI ya muestra anuncios dentro de ChatGPT. Qué es, cómo funcionan las respuestas patrocinadas, qué riesgos trae para las marcas y cómo preparar tu estrategia.",
    date: "2026-06-20",
    dateLabel: "20 de junio, 2026",
    reading: "8 min",
    tag: "IA & Medios",
  },
  {
    slug: "google-ads-hubspot-conversiones-offline",
    title: "Google Ads + HubSpot: medir las conversiones offline que sí importan",
    excerpt:
      "Optimizar por formularios enviados es optimizar por ruido. Cómo integrar Google Ads con HubSpot para subir conversiones offline (MQL, SQL, venta) y enseñarle a Google a traer clientes, no leads.",
    date: "2026-06-19",
    dateLabel: "19 de junio, 2026",
    reading: "9 min",
    tag: "Data & Medición",
  },
  {
    slug: "ga4-para-b2b-como-usarlo",
    title: "GA4 para el sector B2B: cómo usarlo de verdad",
    excerpt:
      "GA4 viene pensado para e-commerce, pero es una mina de oro para B2B si lo configurás bien. Eventos, conversiones, audiencias y los reportes que de verdad mueven la aguja.",
    date: "2026-06-19",
    dateLabel: "19 de junio, 2026",
    reading: "9 min",
    tag: "Data & Analytics",
  },
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
