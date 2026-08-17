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
    slug: "5-errores-publicidad-digital-b2b",
    title: "5 errores que no debés cometer en publicidad digital B2B",
    excerpt:
      "De copiar el playbook de B2C a apagar campañas por impaciencia. Los 5 errores más comunes que vemos al auditar cuentas de Google y Meta Ads B2B, y cómo evitarlos.",
    date: "2026-08-17",
    dateLabel: "17 de agosto, 2026",
    reading: "8 min",
    tag: "Paid Media",
  },
  {
    slug: "geo-aeo-como-aparecer-en-chatgpt",
    title: "GEO/AEO: cómo lograr que ChatGPT recomiende tu marca B2B",
    excerpt:
      "Cada vez más compradores B2B le preguntan a ChatGPT o Perplexity antes de buscar en Google. Qué es la optimización para motores de respuesta (GEO/AEO), en qué se diferencia del SEO clásico y los 6 pasos para que la IA te mencione.",
    date: "2026-08-17",
    dateLabel: "17 de agosto, 2026",
    reading: "9 min",
    tag: "IA & Medios",
  },
  {
    slug: "seo-tecnico-para-b2b-por-donde-empezar",
    title: "SEO técnico para B2B: por dónde empezar (sin perderte en la lista)",
    excerpt:
      "Antes de escribir un solo artículo, tu sitio necesita una base técnica sólida. Las 7 prioridades reales de SEO técnico para un sitio B2B, en el orden en que hay que atacarlas.",
    date: "2026-08-17",
    dateLabel: "17 de agosto, 2026",
    reading: "9 min",
    tag: "SEO & Contenido",
  },
  {
    slug: "caso-msh-linkedin-ads-cpa-5-dolares",
    title: "Caso MSH: cómo bajamos el CPA en LinkedIn Ads a USD 5",
    excerpt:
      "MSH Group necesitaba leads calificados en segmentos técnicos y profesionales de RRHH. Cómo la segmentación por cargo e industria y una oferta bien pensada llevaron el costo por lead a USD 5.",
    date: "2026-08-14",
    dateLabel: "14 de agosto, 2026",
    reading: "7 min",
    tag: "Caso de éxito",
  },
  {
    slug: "caso-sika-agencia-publicidad-digital-b2b",
    title: "Caso Sika: −72% de CPA con una agencia de publicidad digital B2B",
    excerpt:
      "Cómo auditamos la cuenta, validamos la medición en GA4/GTM y rediseñamos el plan de medios de Sika en Meta y Google Ads. El proceso completo, los números y qué replicamos en cada mercado.",
    date: "2026-08-14",
    dateLabel: "14 de agosto, 2026",
    reading: "8 min",
    tag: "Caso de éxito",
  },
  {
    slug: "como-elegir-agencia-de-publicidad-digital-b2b",
    title: "Cómo elegir una agencia de Paid Media B2B (sin arrepentirte en 3 meses)",
    excerpt:
      "Portfolios lindos y case studies de e-commerce no te dicen si te van a hacer crecer. Las 6 preguntas que sí lo predicen: de la medición al reporte, pasando por con quién vas a hablar cada semana.",
    date: "2026-07-14",
    dateLabel: "14 de julio, 2026",
    reading: "9 min",
    tag: "Agencia & Estrategia",
  },
  {
    slug: "google-ads-vs-linkedin-ads-b2b",
    title: "Google Ads vs LinkedIn Ads para B2B: cuál te conviene",
    excerpt:
      "No es una pelea de canales, es una pregunta sobre tu cliente: ¿ya está buscando lo que vendés o todavía no sabe que existís? Google captura intención; LinkedIn apunta a la identidad. Cuándo usar cada uno y cómo combinarlos.",
    date: "2026-06-26",
    dateLabel: "26 de junio, 2026",
    reading: "9 min",
    tag: "Paid Media",
  },
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
