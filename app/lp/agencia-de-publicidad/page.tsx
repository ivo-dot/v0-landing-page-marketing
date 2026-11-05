import type { Metadata } from "next"
import LpAgencia from "@/components/lp-agencia"
import "../../didakto-redesign.css"
import "../../lp-agencia.css"

// BORRADOR · landing de campaña de Google Ads. noindex: es solo para tráfico pago, no compite con la home en SEO.
export const metadata: Metadata = {
  title: "Agencia de Publicidad Digital B2B · Coordinemos una llamada",
  description:
    "Agencia de publicidad digital B2B y Google Partner. Gestionamos Google, Meta y LinkedIn Ads y medimos hasta la venta. Sika bajó 72% su CPA. Coordinemos una llamada.",
  alternates: { canonical: "https://didaktomarketing.com/lp/agencia-de-publicidad" },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <LpAgencia />
}
