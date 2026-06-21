import type React from "react"
import type { Metadata } from "next"
import { Inter, Archivo, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://didaktomarketing.com"),
  title: {
    default: "Didakto Marketing | Agencia de Publicidad Digital B2B · Google Partner",
    template: "%s | Didakto Marketing",
  },
  description:
    "Agencia de publicidad digital B2B y Google Partner. Paid Media experto (Google, Meta y LinkedIn), Data Intelligence y automatización con IA para generar leads calificados en LATAM y USA.",
  keywords: [
    "agencia de publicidad digital",
    "agencia google partner",
    "agencia google ads",
    "agencia meta ads",
    "publicidad digital B2B",
    "generación de leads B2B",
    "Paid Media",
    "LinkedIn Ads",
    "marketing digital LATAM",
    "agencia de marketing digital",
  ],
  authors: [{ name: "Ivo Crisman" }, { name: "Didakto Marketing" }],
  creator: "Didakto Marketing",
  publisher: "Didakto Marketing",
  category: "Marketing",
  alternates: { canonical: "https://didaktomarketing.com" },
  icons: {
    icon: "/logo-didakto-iso.png",
    shortcut: "/logo-didakto-iso.png",
    apple: "/logo-didakto-iso.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://didaktomarketing.com",
    siteName: "Didakto Marketing",
    title: "Didakto Marketing | Agencia de Publicidad Digital B2B · Google Partner",
    description:
      "Paid Media experto, Data Intelligence y automatización con IA. Generamos demanda B2B que tu equipo comercial sí cierra. LATAM & USA.",
    images: [
      {
        url: "/fondo-verde.png",
        width: 1200,
        height: 630,
        alt: "Didakto Marketing — Agencia de Publicidad Digital B2B y Google Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Didakto Marketing | Agencia de Publicidad Digital B2B · Google Partner",
    description:
      "Paid Media experto, Data Intelligence y automatización con IA para generar leads calificados B2B. LATAM & USA.",
    images: ["/fondo-verde.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  "@id": "https://didaktomarketing.com/#organization",
  name: "Didakto Marketing",
  alternateName: "Didakto",
  url: "https://didaktomarketing.com",
  logo: "https://didaktomarketing.com/logo-didakto-iso.png",
  image: "https://didaktomarketing.com/fondo-verde.png",
  description:
    "Agencia de publicidad digital B2B y Google Partner. Paid Media (Google, Meta y LinkedIn), Data Intelligence y automatización con IA para generar leads calificados en LATAM y USA.",
  slogan: "Hacerlo bien desde el principio.",
  email: "ivo@didaktomarketing.com",
  founder: {
    "@type": "Person",
    name: "Ivo Crisman",
    jobTitle: "Fundador",
    sameAs: "https://www.linkedin.com/in/ivo-roman-crisman/",
  },
  knowsAbout: [
    "Google Ads",
    "Meta Ads",
    "LinkedIn Ads",
    "Paid Media B2B",
    "Google Analytics 4",
    "Google Tag Manager",
    "Generación de leads B2B",
    "Automatización con IA",
  ],
  serviceType: [
    "Agencia de publicidad digital",
    "Agencia Google Partner",
    "Paid Media B2B",
    "Google Ads",
    "Meta Ads",
    "LinkedIn Ads",
    "Medición y Analytics",
    "Automatización con IA",
  ],
  areaServed: [
    { "@type": "Place", name: "América Latina" },
    { "@type": "Country", name: "Estados Unidos" },
    { "@type": "Country", name: "Argentina" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paid Media B2B", description: "Campañas full-funnel en Google, Meta y LinkedIn con foco en costo por lead calificado." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Intelligence", description: "Medición con GA4, GTM, conversiones y dashboards orientados a decisiones de negocio." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatización con IA", description: "Calificación de leads, nurturing y flujos hacia el CRM automatizados con IA." } },
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "ivo@didaktomarketing.com",
    contactType: "sales",
    availableLanguage: ["es", "en"],
  },
  sameAs: [
    "https://www.google.com/partners/agency?id=2992564471",
    "https://www.linkedin.com/in/ivo-roman-crisman/",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} ${archivo.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMFXJ978"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* JSON-LD Schema */}
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":
new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=
"https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,"script","dataLayer","GTM-KMFXJ978");`,
          }}
        />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
