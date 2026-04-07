import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 text-sm text-white/70 mb-4">
            <span className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Growth Partners para empresas B2B
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight text-white">
              Construimos <span className="text-emerald-400">sistemas de crecimiento B2B</span> impulsados por
              publicidad, datos e inteligencia artificial
            </h1>
            <p className="text-xl text-white/70 text-pretty leading-relaxed max-w-3xl mx-auto">
              En Didakto combinamos Paid Media, Data y Automatización para transformar la inversión publicitaria en
              oportunidades reales de negocio.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
              <a href="#contacto">
                Comenzar Ahora
                <span className="ml-2">→</span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              <a href="#contacto">
                <span className="mr-2">▶</span>
                Solicitar Auditoría de Crecimiento
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">+100K USD</div>
              <div className="text-sm text-white/50">Invertidos Mensualmente</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">+5 Años</div>
              <div className="text-sm text-white/50">En el Mercado</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">+2500</div>
              <div className="text-sm text-white/50">Leads Generados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
