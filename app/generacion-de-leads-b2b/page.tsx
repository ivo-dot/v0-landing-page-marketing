import type { Metadata } from "next"
import DkPage from "@/components/dk-page"
import ServicePage, { type ServiceContent, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/dk-service"
import "../didakto-redesign.css"

const URL = "https://didaktomarketing.com/generacion-de-leads-b2b"

export const metadata: Metadata = {
  title: "Generación de Leads B2B · Agencia Especializada",
  description:
    "Agencia especializada en generación de leads B2B con Paid Media, datos e IA. Leads calificados que tu equipo comercial sí cierra, en LATAM y España. Pedí tu consultoría.",
  alternates: { canonical: URL },
}

const c: ServiceContent = {
  crumb: "Generación de leads B2B",
  eyebrow: "Generación de demanda · B2B",
  h1: <>Generamos leads B2B que tu equipo <em>sí cierra</em>.</>,
  lede:
    "No se trata de juntar formularios. Diseñamos un sistema de generación de demanda B2B que prioriza la calidad del prospecto y la intención real de compra, para que tu equipo comercial trabaje sobre leads listos.",
  ghostCta: { label: "Ver qué incluye", href: "#incluye" },
  intro: {
    eyebrow: "El problema",
    h2: <>Volumen no es lo mismo que <em>pipeline</em>.</>,
    paragraphs: [
      <>Se invierte en pauta, llegan leads y el equipo comercial no cierra. Casi nunca es un problema de inversión: es que <strong>nadie audita la calidad ni la intención</strong> del prospecto.</>,
      <>Conectamos pauta, medición y negocio en un solo sistema. Le enseñamos a las plataformas a optimizar por <strong>leads calificados</strong> usando señales reales del pipeline, no solo el envío de formulario.</>,
    ],
  },
  includes: {
    eyebrow: "Qué incluye",
    h2: <>Un sistema de demanda, de punta a punta.</>,
    items: [
      { title: "Estrategia de captación", desc: "Definición de ICP, oferta, mensajes y canales según el ciclo de compra B2B." },
      { title: "Campañas full-funnel", desc: "Google, Meta y LinkedIn Ads orientadas a lead calificado y costo por oportunidad." },
      { title: "Calificación de leads", desc: "Scoring y filtros para que solo los prospectos listos lleguen a tu equipo comercial." },
      { title: "Medición del pipeline", desc: "GA4, GTM y conversiones offline (MQL/SQL/cliente) para optimizar por lo que cierra." },
      { title: "Automatización e integración con CRM", desc: "Nurturing y flujos automáticos para no perder oportunidades por el camino." },
      { title: "Reportería accionable", desc: "Del clic al cierre: qué funciona, qué no y el próximo paso." },
    ],
  },
  stats: [
    { v: "−72%", l: "CPA vs. agencia anterior" },
    { v: "$5", l: "CPA en LinkedIn Ads (B2B)" },
    { v: "+2.191", l: "Conversiones generadas" },
    { v: "+7 años", l: "En Paid Media B2B" },
  ],
  faqs: [
    { q: "¿Qué es un lead calificado para ustedes?", a: "Un prospecto que encaja con tu cliente ideal (ICP), tiene intención real y presupuesto. Por eso medimos calidad (MQL/SQL) y no solo envíos de formulario." },
    { q: "¿Cómo aseguran la calidad y no solo el volumen?", a: "Calificamos en el formulario, importamos la calidad del lead a las plataformas y optimizamos las campañas por reuniones y oportunidades, no por costo por formulario." },
    { q: "¿Cuánto tardan en verse resultados?", a: "Las primeras semanas se enfocan en medición y estructura. A partir de ahí optimizamos sobre datos reales; en casos como Sika los números cambiaron de forma marcada en torno a los tres meses." },
    { q: "¿Trabajan con mi CRM?", a: "Sí. Integramos las campañas con tu CRM y automatizamos el flujo de leads y el nurturing para que nada se pierda entre marketing y ventas." },
  ],
  cta: { h2: <>Hablemos de tu <em>pipeline</em>.</>, sub: "Empezamos con una consultoría gratuita para entender tu negocio y tu funnel." },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd({ name: "Generación de leads B2B", description: metadata.description as string, url: URL })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(c.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("Generación de leads B2B", URL)) }} />
      <DkPage><ServicePage c={c} /></DkPage>
    </>
  )
}
