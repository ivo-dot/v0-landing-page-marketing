import type { Metadata } from "next"
import DkPage from "@/components/dk-page"
import ServicePage, { type ServiceContent, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/components/dk-service"
import "../didakto-redesign.css"

const URL = "https://didaktomarketing.com/linkedin-ads-b2b"

export const metadata: Metadata = {
  title: "Agencia LinkedIn Ads B2B",
  description:
    "Agencia LinkedIn Ads especializada en B2B. Llegamos a decisores y segmentos técnicos y profesionales con leads calificados a bajo costo. Caso: CPA de USD 5. LATAM y España.",
  alternates: { canonical: URL },
}

const c: ServiceContent = {
  crumb: "LinkedIn Ads",
  eyebrow: "LinkedIn Ads · B2B",
  h1: <>LinkedIn Ads para llegar a quien <em>decide</em>.</>,
  lede:
    "El canal por excelencia para B2B: segmentamos por cargo, industria y empresa para poner tu oferta frente a los decisores correctos, con leads calificados a un costo competitivo.",
  ghostCta: { label: "Ver qué incluye", href: "#incluye" },
  intro: {
    eyebrow: "Nuestro enfoque",
    h2: <>Precisión de segmentación, <em>obsesión por el costo</em>.</>,
    paragraphs: [
      <>LinkedIn permite llegar exactamente al <strong>decisor</strong> que te importa: cargo, seniority, industria y hasta empresa. El desafío es hacerlo sin que el costo por lead se dispare.</>,
      <>Trabajamos la oferta, el formato y la segmentación para bajar el CPA. En MSH Group llevamos el <strong>costo por lead a USD 5</strong> con campañas enfocadas en segmentos técnicos y profesionales.</>,
    ],
  },
  includes: {
    eyebrow: "Qué incluye",
    h2: <>LinkedIn Ads, sin desperdiciar presupuesto.</>,
    items: [
      { title: "Segmentación de decisores", desc: "Por cargo, seniority, industria, tamaño y empresas objetivo (ABM)." },
      { title: "Lead Gen Forms", desc: "Formularios nativos de LinkedIn para bajar la fricción y el costo por lead." },
      { title: "Oferta y mensajes", desc: "Propuestas y copy pensados para el comprador B2B y su ciclo de decisión." },
      { title: "Optimización de costo", desc: "Control fino de pujas, públicos y creatividades para sostener un CPA bajo." },
      { title: "Integración con CRM", desc: "Los leads llegan calificados y sincronizados con tu equipo comercial." },
      { title: "Reportería por segmento", desc: "Qué cargo, industria y mensaje generan las mejores oportunidades." },
    ],
  },
  stats: [
    { v: "$5", l: "CPA en LinkedIn Ads (MSH)" },
    { v: "B2B", l: "Lead gen cualificado" },
    { v: "ABM", l: "Segmentación por empresa" },
    { v: "+7 años", l: "En Paid Media B2B" },
  ],
  faqs: [
    { q: "¿LinkedIn Ads no es muy caro?", a: "El CPC es más alto que en otros canales, pero la calidad y precisión también. Con buena oferta y optimización, el costo por lead calificado puede ser muy competitivo: en MSH lo llevamos a USD 5." },
    { q: "¿Para qué tipo de empresas funciona mejor?", a: "Para B2B con ticket medio-alto y ciclos de venta donde importa llegar al decisor correcto: servicios profesionales, tecnología, industria, RRHH, entre otros." },
    { q: "¿Hacen ABM (account-based marketing)?", a: "Sí. Podemos segmentar por listas de empresas objetivo y cargos específicos para impactar a las cuentas que te interesan." },
    { q: "¿Combinan LinkedIn con Google?", a: "Sí. LinkedIn aporta precisión de segmentación y Google captura intención. Un sistema que use ambos suele dar el mejor costo por oportunidad." },
  ],
  cta: { h2: <>Lleguemos a tus <em>decisores</em>.</>, sub: "Pedí una consultoría gratuita y armamos tu estrategia de LinkedIn Ads B2B." },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd({ name: "Gestión de LinkedIn Ads B2B", description: metadata.description as string, url: URL })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(c.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd("LinkedIn Ads", URL)) }} />
      <DkPage><ServicePage c={c} /></DkPage>
    </>
  )
}
