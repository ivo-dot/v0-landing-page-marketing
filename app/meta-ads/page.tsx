import type { Metadata } from "next"
import DkPage from "@/components/dk-page"
import ServicePage, { type ServiceContent, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/dk-service"
import "../didakto-redesign.css"

const URL = "https://didaktomarketing.com/meta-ads"

export const metadata: Metadata = {
  title: "Agencia Meta Ads (Facebook e Instagram) B2B",
  description:
    "Agencia Meta Ads (Facebook e Instagram) certificada, especializada en B2B. Generación de demanda y leads calificados con creatividades y medición que convierten. LATAM y España.",
  alternates: { canonical: URL },
}

const c: ServiceContent = {
  crumb: "Meta Ads",
  eyebrow: "Meta Ads · Meta Certified",
  h1: <>Meta Ads que genera <em>demanda</em>, no solo alcance.</>,
  lede:
    "Facebook e Instagram Ads para empresas B2B: creatividades que detienen el scroll, segmentación inteligente y medición real para convertir audiencias frías en leads calificados.",
  ghostCta: { label: "Ver qué incluye", href: "#incluye" },
  intro: {
    eyebrow: "Nuestro enfoque",
    h2: <>Creamos demanda donde tu cliente <em>pasa el tiempo</em>.</>,
    paragraphs: [
      <>Meta es el canal para <strong>generar demanda</strong> y llegar a quienes todavía no te buscan. La clave está en el ángulo creativo, la oferta y una medición que no se rompa con iOS.</>,
      <>Combinamos creatividad y datos: testeamos ángulos, optimizamos por leads de calidad y nutrimos con remarketing para acompañar todo el ciclo de compra B2B.</>,
    ],
  },
  includes: {
    eyebrow: "Qué incluye",
    h2: <>Meta Ads con estrategia y creatividad.</>,
    items: [
      { title: "Estrategia full-funnel", desc: "De awareness a conversión: estructura de campañas por etapa del funnel." },
      { title: "Creatividades que convierten", desc: "Ángulos, copy y formatos (Reels, video, estáticos) testeados de forma sistemática." },
      { title: "Segmentación y audiencias", desc: "Públicos, lookalikes y retargeting alineados a tu cliente ideal B2B." },
      { title: "Medición a prueba de iOS", desc: "API de Conversiones, GTM server-side y eventos bien configurados." },
      { title: "Optimización por calidad", desc: "Optimizamos por leads calificados y oportunidades, no por costo por formulario." },
      { title: "Reportería clara", desc: "Qué creatividad y qué público generan pipeline, con próximos pasos." },
    ],
  },
  stats: [
    { v: "+2.191", l: "Conversiones Meta + Google" },
    { v: "−72%", l: "CPA vs. agencia anterior" },
    { v: "Certified", l: "Acreditación Meta" },
    { v: "7", l: "Mercados gestionados" },
  ],
  faqs: [
    { q: "¿Meta Ads sirve para B2B?", a: "Sí. Bien usado, Meta es excelente para generar demanda y captar leads B2B a un costo competitivo, sobre todo combinado con creatividades fuertes y buena medición." },
    { q: "¿Cómo manejan la medición con las limitaciones de iOS?", a: "Implementamos la API de Conversiones de Meta y GTM (incluido server-side cuando corresponde) para recuperar señal y optimizar con datos confiables." },
    { q: "¿Hacen las creatividades?", a: "Trabajamos los ángulos, el copy y la dirección creativa, y testeamos formatos de forma sistemática para encontrar lo que genera leads de calidad." },
    { q: "¿Combinan Meta con Google?", a: "Sí. Meta genera demanda y Google la captura. Lo ideal es un sistema full-funnel que use ambos según el momento del comprador." },
  ],
  cta: { h2: <>Llevemos tu <em>Meta Ads</em> al siguiente nivel.</>, sub: "Pedí una auditoría gratuita de tus campañas de Facebook e Instagram." },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd({ name: "Gestión de Meta Ads B2B", description: metadata.description as string, url: URL })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(c.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("Meta Ads", URL)) }} />
      <DkPage><ServicePage c={c} /></DkPage>
    </>
  )
}
