"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const successCases = [
  {
    company: "Sika",
    subtitle: "Líder global en soluciones de impermeabilización",
    result: "74% ↓ CPA",
    description:
      "Gracias a esta implementación de Growth Funnel + Data Intelligence B2B y una estrategia multicanal logramos reducir el Coste por adquisición un 74%. Esta estrategia se implementó en Sika USA, Sika Bolivia, Sika Perú y Sika Paraguay.",
    metrics: "74% ↓ CPA",
    logo: "/logos/sika.png",
  },
  {
    company: "MSH Group y MSH Custom",
    subtitle: "Soluciones empresariales B2B",
    result: "$5 USD CPA promedio en LinkedIn",
    description:
      "MSH confió sus dos unidades de negocio a Didakto y gracias a nuestra metodología logramos diseñar un sistema de adquisición de leads con LinkedIn y Google Ads + Odoo. Esta integración nos permitió lograr un Coste por adquisición de tan solo 5 USD promedio en LinkedIn Ads.",
    metrics: "$5 USD CPA LinkedIn",
    logo: "/logos/msh.png",
  },
  {
    company: "Silat SA",
    subtitle: "Más de 40 años de experiencia en Argentina",
    result: "+40% MQLs",
    description:
      "Empresa argentina reconocida y con más de 40 años de experiencia confía en Didakto para su plan de digitalización donde construimos una estrategia de reconocimiento y generación de leads logrando un aumento del 40% en sus MQLs totales.",
    metrics: "+40% MQLs",
    logo: "/logos/silat.png",
  },
  {
    company: "RP Urbano",
    subtitle: "Desarrolladora inmobiliaria",
    result: "Leads calificados Real Estate",
    description:
      "Desarrolladora inmobiliaria de Argentina con un gran producto en Nuñez se enfrenta a la necesidad de obtener leads calificados para generar ventas en el sector Real Estate.",
    metrics: "Real Estate B2C",
    logo: "/logos/rp-urbano.png",
  },
]

export function ClientsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => api.scrollNext(), 4500)
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
    return () => clearInterval(interval)
  }, [api])

  return (
    <section id="casos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance text-white">
            Estos clientes ya lo están{" "}
            <span className="text-emerald-400">aplicando</span>
          </h2>
          <p className="text-lg text-white/60 text-pretty max-w-2xl mx-auto">
            Resultados reales que transforman negocios
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-10">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: "start" }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {successCases.map((case_, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/2">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start gap-5 mb-6">
                      {/* Logo normalizado — fondo blanco, tamaño fijo */}
                      <div className="w-[72px] h-[72px] rounded-xl bg-white flex items-center justify-center flex-shrink-0 p-2">
                        <Image
                          src={case_.logo}
                          alt={`Logo ${case_.company}`}
                          width={60}
                          height={60}
                          className="object-contain w-full h-full"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                          {case_.company}
                        </h3>
                        <p className="text-white/50 text-sm mb-3">
                          {case_.subtitle}
                        </p>
                        <div className="bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-lg inline-block font-semibold text-sm">
                          {case_.metrics}
                        </div>
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-3">
                      {case_.result}
                    </h4>
                    <p className="text-white/70 leading-relaxed text-sm flex-1">
                      {case_.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-emerald-600 hover:border-emerald-600 -left-2" />
            <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-emerald-600 hover:border-emerald-600 -right-2" />
          </Carousel>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {successCases.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-emerald-400 w-6"
                  : "bg-white/20 w-2 hover:bg-white/40"
              }`}
              aria-label={`Ir al caso ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
