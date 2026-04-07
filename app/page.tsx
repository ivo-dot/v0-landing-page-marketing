// app/page.tsx
import dynamic from "next/dynamic"

// Helper para traer default o named export sin romper SSR
const load = <T,>(p: Promise<any>, named?: string) =>
  p.then((m) => (m?.default ? (m.default as T) : named ? (m?.[named] as T) : m))

const Header = dynamic(() => load(import("@/components/header"), "Header"), { ssr: false })
const HeroSection = dynamic(() => load(import("@/components/hero-section"), "HeroSection"), { ssr: false })
const ServicesSection = dynamic(() => load(import("@/components/services-section"), "ServicesSection"), { ssr: false })
const StatsSection = dynamic(() => load(import("@/components/stats-section"), "StatsSection"), { ssr: false })
const WhyChooseSection = dynamic(() => load(import("@/components/why-choose-section"), "WhyChooseSection"), {
  ssr: false,
})
const ProblemSection = dynamic(() => load(import("@/components/problem-section"), "ProblemSection"), { ssr: false })
const GrowthFunnelSection = dynamic(() => load(import("@/components/growth-funnel-section"), "GrowthFunnelSection"), {
  ssr: false,
})
const ClientsSection = dynamic(() => load(import("@/components/clients-section"), "ClientsSection"), { ssr: false })
// const TestimonialsSection = dynamic(() => load(import("@/components/testimonials-section"), "TestimonialsSection"), { ssr: false });
const Footer = dynamic(() => load(import("@/components/footer"), "Footer"), { ssr: false })
const ContactSection = dynamic(() => load(import("@/components/contact-section"), "ContactSection"), { ssr: false })
const CertificationsSection = dynamic(
  () => load(import("@/components/certifications-section"), "CertificationsSection"),
  { ssr: false },
)

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <WhyChooseSection />
        <ProblemSection />
        <GrowthFunnelSection />
        <ClientsSection />
        <CertificationsSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
