import type { Metadata } from "next"
import DkPage from "@/components/dk-page"
import ServicePage, { type ServiceContent, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/dk-service"
import "../didakto-redesign.css"

const URL = "https://didaktomarketing.com/agencia-de-publicidad-digital"

export const metadata: Metadata = {
  title: "Agencia de Publicidad Digital B2B · Google Partner",
  description:
    "Agencia de publicidad digital B2B y Google Partner. Gestionamos Google, Meta y LinkedIn Ads para generar leads calificados en Argentina, Chile, Uruguay, Colombia y España. Pedí tu auditoría gratuita.",
  alternates: { canonical: URL },
}

const c: ServiceContent = {
  crumb: "Agencia de publicidad digital",
  eyebrow: "Agencia de publicidad digital · B2B",
  h1: <>Publicidad digital que genera <em>demanda B2B</em>.</>,
  lede:
    "Somos una agencia de publicidad digital especializada en B2B y Google Partner. Convertimos tu inversión en Google, Meta y LinkedIn en leads calificados que tu equipo comercial sí cierra. LATAM & USA.",
  ghostCta: { label: "Ver qué incluye", href: "#incluye" },
  offer: {
    h2: <>Auditoría gratuita de tus campañas.</>,
    p: "Revisamos tu cuenta de Google y Meta y te mostramos, con datos, dónde estás perdiendo presupuesto y qué oportunidades concretas hay. Sin compromiso y sin permanencia.",
    ctaLabel: "Pedir auditoría gratis",
  },
  intro: {
    eyebrow: "Por qué nosotros",
    h2: <>No vendemos campañas. Diseñamos <em>sistemas de demanda</em>.</>,
    paragraphs: [
      <>La mayoría de las empresas B2B no tiene un problema de inversión, sino de <strong>criterio</strong>. Empezamos por el diagnóstico y la medición, no por la pauta.</>,
      <>Optimizamos sobre datos reales del pipeline y le enseñamos a las plataformas a traerte <strong>leads que cierran</strong>, no formularios vacíos. Crecemos cuando vos crecés.</>,
    ],
  },
  includes: {
    eyebrow: "Qué incluye",
    h2: <>Todo lo que necesitás para escalar con criterio.</>,
    sub: "Un sistema completo de adquisición B2B, no campañas sueltas.",
    items: [
      { title: "Estrategia full-funnel", desc: "Diagnóstico de negocio, funnel y competencia. Plan de medios y KPIs alineados al pipeline." },
      { title: "Paid Media experto", desc: "Campañas en Google, Meta y LinkedIn Ads con foco en costo por lead calificado, no en métricas de vanidad." },
      { title: "Medición correcta", desc: "GA4, GTM, conversiones y dashboards que conectan cada métrica con una decisión de negocio." },
      { title: "Optimización por calidad", desc: "Importamos la calidad del lead (MQL/SQL/cliente) para que las plataformas optimicen por lo que cierra." },
      { title: "Automatización con IA", desc: "Calificación de leads y flujos hacia el CRM para que tu equipo hable solo con prospectos listos." },
      { title: "Reportería que ayuda a decidir", desc: "Reportes claros con interpretación y próximos pasos. Sin dashboards decorativos." },
    ],
  },
  stats: [
    { v: "−72%", l: "CPA vs. agencia anterior (Sika USA)" },
    { v: "$5", l: "CPA en LinkedIn Ads (MSH)" },
    { v: "+2.191", l: "Conversiones Meta + Google" },
    { v: "7", l: "Mercados gestionados" },
  ],
  process: {
    eyebrow: "Cómo trabajamos",
    h2: <>Un proceso, sin atajos.</>,
    steps: [
      { title: "Consultoría y diagnóstico", desc: "Analizamos el funnel y encontramos las oportunidades reales de crecimiento." },
      { title: "Medición completa", desc: "Auditoría e implementación de GA4 y GTM, validación de eventos y conversiones." },
      { title: "Construcción y lanzamiento", desc: "Estructura de campañas, audiencias, creatividades e integraciones técnicas." },
      { title: "Optimización y escala", desc: "Optimizamos por calidad de lead y escalamos lo que funciona, con reportería clara." },
    ],
  },
  faqs: [
    { q: "¿Qué incluye la auditoría gratuita?", a: "Una revisión de tus campañas activas (Google y/o Meta), del estado de tu medición (GA4/GTM) y un diagnóstico con oportunidades concretas y un plan de acción. Salís con claridad, trabajes o no con nosotros." },
    { q: "¿Con qué presupuesto de pauta conviene empezar?", a: "Depende del mercado y el objetivo. En la consultoría inicial definimos un piso realista para que la inversión genere aprendizaje y resultados medibles, sin quemar presupuesto en pruebas sin dirección." },
    { q: "¿En qué se diferencian de otras agencias?", a: "Empezamos por el diagnóstico y la medición, no por la campaña. Somos un equipo chico y especializado en B2B, con cartera limitada y sin permanencia: crecemos si vos crecés." },
    { q: "¿En qué países trabajan?", a: "Gestionamos campañas en Argentina, Chile, Uruguay, Colombia y España, además de USA, en español e inglés. Lideramos la publicidad digital de Sika para LATAM + USA en varios mercados simultáneos." },
  ],
  cta: { h2: <>Hacerlo bien <em>desde el principio.</em></>, sub: "Empezá con una auditoría gratuita de tus campañas. Sin compromisos, sin contratos largos." },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd({ name: "Agencia de publicidad digital B2B", description: metadata.description as string, url: URL })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(c.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("Agencia de publicidad digital", URL)) }} />
      <DkPage><ServicePage c={c} /></DkPage>
    </>
  )
}
