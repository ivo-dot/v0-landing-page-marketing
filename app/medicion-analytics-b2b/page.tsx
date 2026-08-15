import type { Metadata } from "next"
import DkPage from "@/components/dk-page"
import ServicePage, { type ServiceContent, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/dk-service"
import "../didakto-redesign.css"

const URL = "https://didaktomarketing.com/medicion-analytics-b2b"

export const metadata: Metadata = {
  title: "Medición & Analytics B2B · GA4, GTM y Atribución",
  description:
    "Implementamos y auditamos GA4, GTM y conversiones para que cada decisión de paid media se tome sobre datos reales, no sobre supuestos. LATAM y USA.",
  alternates: { canonical: URL },
}

const c: ServiceContent = {
  crumb: "Medición & Analytics",
  eyebrow: "Data Intelligence · B2B",
  h1: <>Medí lo que realmente <em>importa</em>.</>,
  lede:
    "Antes de escalar la inversión, hay que confiar en los datos. Auditamos e implementamos GA4, GTM y conversiones para que cada decisión de paid media se apoye en información real del pipeline, no en clics ni formularios sueltos.",
  ghostCta: { label: "Ver qué incluye", href: "#incluye" },
  intro: {
    eyebrow: "Por qué importa",
    h2: <>Sin medición confiable, <em>no hay optimización real</em>.</>,
    paragraphs: [
      <>La mayoría de las cuentas de Google y Meta que auditamos tienen eventos de conversión mal configurados, duplicados o directamente rotos. Eso significa que el algoritmo está <strong>optimizando con datos falsos</strong>.</>,
      <>Empezamos siempre por acá: validamos qué se está midiendo, corregimos lo que haga falta y conectamos la medición con las métricas que sí importan al negocio (MQL, SQL, venta), no solo con formularios enviados.</>,
    ],
  },
  includes: {
    eyebrow: "Qué incluye",
    h2: <>Tu stack de medición, auditado y funcionando.</>,
    items: [
      { title: "Auditoría de GA4 y GTM", desc: "Revisión completa de tags, triggers y eventos de conversión configurados." },
      { title: "Conversiones offline", desc: "Importación de calidad de lead y ventas reales al CRM y a las plataformas de pauta." },
      { title: "Dashboards de negocio", desc: "Reportes que conectan cada métrica con una decisión, no con vanity metrics." },
      { title: "Enhanced Conversions & server-side", desc: "Medición robusta ante bloqueadores y cookies de terceros." },
      { title: "Atribución multi-canal", desc: "Entendé qué canal realmente aporta al pipeline, no solo el último clic." },
      { title: "Documentación y traspaso", desc: "Dejamos todo documentado para que tu equipo entienda el setup." },
    ],
  },
  stats: [
    { v: "GA4/GTM", l: "Medición validada" },
    { v: "100%", l: "Cuentas auditadas con hallazgos" },
    { v: "+7 años", l: "En medición y paid media B2B" },
    { v: "Sika", l: "Medición LATAM + USA" },
  ],
  faqs: [
    { q: "¿Necesito una auditoría si ya tengo GA4 instalado?", a: "Tener GA4 instalado no significa que esté midiendo bien. En la mayoría de las auditorías encontramos eventos duplicados, mal disparados o directamente ausentes. Lo primero es validar, después optimizar." },
    { q: "¿Trabajan solo medición o también gestionan la pauta?", a: "Ambas. La medición suele ser el punto de partida antes de tomar o rediseñar una cuenta de Google, Meta o LinkedIn Ads, pero también la ofrecemos como servicio independiente." },
    { q: "¿Qué es una conversión offline y por qué importa?", a: "Es enviarle a Google o Meta información real de qué leads se convirtieron en clientes, no solo formularios enviados. Así el algoritmo optimiza por calidad, no por volumen." },
    { q: "¿Cuánto tarda una auditoría?", a: "Entre 5 y 10 días hábiles, dependiendo de la cantidad de cuentas y fuentes de datos involucradas." },
  ],
  cta: { h2: <>Confiá en <em>tus datos</em>.</>, sub: "Pedí una auditoría gratuita de tu medición y te mostramos qué se está perdiendo." },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd({ name: "Medición & Analytics B2B (GA4, GTM, Atribución)", description: metadata.description as string, url: URL })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(c.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("Medición & Analytics", URL)) }} />
      <DkPage><ServicePage c={c} showClients showCases /></DkPage>
    </>
  )
}
