import type { Metadata } from "next"
import DkPage from "@/components/dk-page"
import ServicePage, { type ServiceContent, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/dk-service"
import "../didakto-redesign.css"

const URL = "https://didaktomarketing.com/automatizacion-ia-b2b"

export const metadata: Metadata = {
  title: "Automatización con IA para Marketing B2B · Lead Scoring & CRM",
  description:
    "Calificamos y nutrimos leads automáticamente con IA para que tu equipo comercial hable solo con prospectos listos para comprar. LATAM y USA.",
  alternates: { canonical: URL },
}

const c: ServiceContent = {
  crumb: "Automatización con IA",
  eyebrow: "Automatización con IA · B2B",
  h1: <>Que tu equipo hable solo con <em>quien está listo</em>.</>,
  lede:
    "Diseñamos flujos de calificación, nurturing y enrutamiento hacia el CRM automatizados con IA, para que el equipo comercial invierta el tiempo en los prospectos con intención real de compra.",
  ghostCta: { label: "Ver qué incluye", href: "#incluye" },
  intro: {
    eyebrow: "El problema real",
    h2: <>Más leads <em>no es más ventas</em>.</>,
    paragraphs: [
      <>Cuando la pauta funciona, el problema cambia de lugar: pasa del volumen a la calificación. Sin un sistema que priorice, el equipo comercial pierde tiempo con leads que <strong>nunca van a comprar</strong>.</>,
      <>Con IA podemos calificar en segundos, nutrir automáticamente a quien todavía no está listo y avisar al equipo comercial solo cuando hay una oportunidad real.</>,
    ],
  },
  includes: {
    eyebrow: "Qué incluye",
    h2: <>Un sistema, no una herramienta suelta.</>,
    items: [
      { title: "Lead Scoring con IA", desc: "Priorización automática según comportamiento, firmográficos e intención de compra." },
      { title: "Nurturing automatizado", desc: "Secuencias que educan y califican a quien todavía no está listo para hablar con ventas." },
      { title: "Enrutamiento al CRM", desc: "Los leads calificados llegan directo al vendedor correcto, con contexto." },
      { title: "Chatbots calificadores", desc: "Primeras preguntas resueltas y leads pre-calificados antes de llegar al equipo." },
      { title: "Reportería de calidad", desc: "Visibilidad de qué fuente y campaña trae los leads que sí cierran." },
      { title: "Integración con tu stack", desc: "HubSpot, Salesforce, WhatsApp Business y las herramientas que ya usás." },
    ],
  },
  stats: [
    { v: "IA", l: "Lead scoring automático" },
    { v: "CRM", l: "Integración nativa" },
    { v: "↓", l: "Tiempo comercial en leads fríos" },
    { v: "+7 años", l: "En demanda B2B" },
  ],
  faqs: [
    { q: "¿Necesito un CRM para automatizar con IA?", a: "Ayuda mucho tenerlo, pero podemos empezar con lo que ya usás (planillas, formularios, WhatsApp) y sumar un CRM en el camino si hace falta." },
    { q: "¿Reemplaza al equipo comercial?", a: "No. Filtra y prioriza para que el equipo comercial invierta el tiempo en las conversaciones correctas, no en calificar manualmente cada lead." },
    { q: "¿Qué tan rápido se implementa?", a: "Un primer sistema de scoring y enrutamiento suele estar funcionando en 2 a 4 semanas, según la complejidad de tu stack actual." },
    { q: "¿Sirve si todavía no tengo mucho volumen de leads?", a: "Sí, igual vale la pena definir las reglas desde el principio para que el sistema escale junto con la inversión en pauta." },
  ],
  cta: { h2: <>Automaticemos tu <em>calificación de leads</em>.</>, sub: "Pedí una consultoría gratuita y te mostramos por dónde empezar." },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd({ name: "Automatización con IA para Marketing B2B", description: metadata.description as string, url: URL })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(c.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("Automatización con IA", URL)) }} />
      <DkPage><ServicePage c={c} showClients showCases /></DkPage>
    </>
  )
}
