import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Didakto Marketing | Genera leads calificados",
  description: "En Didakto combinamos estrategia, analítica y diseño para crear campañas publicitarias que convierten.",
  keywords: ["marketing digital", "leads calificados", "publicidad digital", "Google Ads", "Meta Ads", "LinkedIn Ads"],
  authors: [{ name: "Didakto Marketing" }],
  creator: "Didakto Marketing",
  publisher: "Didakto Marketing",
  icons: {
    icon: "/logo-didakto-iso.png",
    shortcut: "/logo-didakto-iso.png",
    apple: "/logo-didakto-iso.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://didaktomarketing.com",
    siteName: "Didakto Marketing",
    title: "Didakto Marketing | Genera leads calificados",
    description:
      "En Didakto combinamos estrategia, analítica y diseño para crear campañas publicitarias que convierten.",
    images: [
      {
        url: "/fondo-verde.png",
        width: 1200,
        height: 630,
        alt: "Didakto Marketing - Agencia de Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Didakto Marketing | Genera leads calificados",
    description:
      "En Didakto combinamos estrategia, analítica y diseño para crear campañas publicitarias que convierten.",
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
  generator: "v0.app",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Didakto Marketing",
  url: "https://didaktomarketing.com",
  logo: "https://didaktomarketing.com/logo-didakto-iso.png",
  description:
    "Agencia especializada en publicidad digital B2B. Generamos leads calificados con Google Ads, LinkedIn Ads y estrategia de datos.",
  serviceType: [
    "Agencia de publicidad digital",
    "Agencia de publicidad B2B",
    "Google Ads",
    "LinkedIn Ads",
    "Meta Ads",
  ],
  areaServed: "Latinoamérica",
  sameAs: ["https://www.google.com/partners/agency?id=2992564471"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
