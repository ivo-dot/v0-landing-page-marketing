import type { Metadata } from "next"
import DkPage from "@/components/dk-page"
import ServicePage, { type ServiceContent, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/dk-service"
import "../didakto-redesign.css"

const URL = "https://didaktomarketing.com/google-ads"

export const metadata: Metadata = {
  title: "Agencia Google Ads B2B · Google Partner",
  description:
    "Agencia Google Ads y Google Partner especializada en B2B. Campañas de Search, Performance Max y remarketing optimizadas por costo por lead calificado. LATAM y España.",
  alternates: { canonical: URL },
}

const c: ServiceContent = {
  crumb: "Google Ads",
  eyebrow: "Google Ads · Google Partner",
  h1: <>Google Ads que captura <em>intención de compra</em>.</>,
  lede:
    "Como Google Partner, gestionamos tus campañas de Search, Performance Max, Demand Gen y remarketing con un solo objetivo: bajar el costo por lead calificado y alimentar tu pipeline B2B.",
  ghostCta: { label: "Ver qué incluye", href: "#incluye" },
  intro: {
    eyebrow: "Nuestro enfoque",
    h2: <>Capturamos a quien <em>ya te está buscando</em>.</>,
    paragraphs: [
      <>Google Ads es el canal de mayor intención: la gente busca exactamente lo que vende tu empresa. El problema suele estar en la <strong>estructura, la segmentación y la medición</strong>, no en el presupuesto.</>,
      <>Optimizamos por conversiones de calidad y, cuando se puede, importamos la calidad del lead para que Smart Bidding traiga oportunidades reales, no clics caros.</>,
    ],
  },
  includes: {
    eyebrow: "Qué incluye",
    h2: <>Tu cuenta de Google Ads, profesionalizada.</>,
    items: [
      { title: "Auditoría y estructura", desc: "Reorganización de campañas, ad groups, keywords y concordancias con foco en intención." },
      { title: "Search de alta intención", desc: "Captura de términos comerciales con negativos agresivos para filtrar tráfico irrelevante." },
      { title: "Performance Max y Demand Gen", desc: "Escala con señales de audiencia y calidad de lead, sin atraer basura." },
      { title: "Remarketing", desc: "Recuperación de visitantes y leads que no convirtieron, en Search, Display y YouTube." },
      { title: "Medición y conversiones", desc: "GA4, GTM, Enhanced Conversions y, cuando aplica, conversiones offline por calidad." },
      { title: "Smart Bidding bien entrenado", desc: "Estrategias de puja alineadas a tu CPL objetivo y al valor real de cada lead." },
    ],
  },
  stats: [
    { v: "−72%", l: "CPA vs. agencia anterior" },
    { v: "+2.191", l: "Conversiones Meta + Google" },
    { v: "7", l: "Mercados gestionados" },
    { v: "Partner", l: "Acreditación Google" },
  ],
  faqs: [
    { q: "¿Son Google Partner?", a: "Sí, somos Google Partner: acreditación oficial de Google que respalda nuestra experiencia en Google Ads y medición." },
    { q: "¿Qué tipos de campañas manejan?", a: "Search, Performance Max, Demand Gen, Display, YouTube y remarketing. Elegimos la mezcla según tu objetivo, ciclo de venta y presupuesto." },
    { q: "¿Cómo evitan los leads de baja calidad?", a: "Con negativos agresivos, calificación en el formulario y, cuando es posible, importando la calidad del lead a Google para que optimice por oportunidades, no por formularios." },
    { q: "¿Trabajan con cualquier presupuesto?", a: "Definimos un piso realista en la consultoría inicial para que la inversión genere aprendizaje y resultados medibles desde el arranque." },
  ],
  cta: { h2: <>Ordenemos tu <em>Google Ads</em>.</>, sub: "Pedí una auditoría gratuita de tu cuenta y te mostramos dónde estás perdiendo presupuesto." },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd({ name: "Gestión de Google Ads B2B", description: metadata.description as string, url: URL })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(c.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("Google Ads", URL)) }} />
      <DkPage><ServicePage c={c} /></DkPage>
    </>
  )
}
