import { Brain, Zap, Puzzle, BarChart3 } from "lucide-react"

export function WhyChooseSection() {
  const reasons = [
    {
      icon: Brain,
      title: "Experiencia Comprobada",
      description:
        "Más de 5 años ayudando a empresas B2B a optimizar su funnel comercial y escalar ventas con estrategias medibles.",
      image: "/griegos-sunglasses.png",
    },
    {
      icon: Zap,
      title: "Resultados en Semanas",
      description: "Nuestras campañas generan impacto visible desde los primeros ciclos de optimización.",
      image: "/griegos-laptop.png",
    },
    {
      icon: Puzzle,
      title: "Calidad + Data",
      description: "Usamos las mejores herramientas del mercado y procesos basados en analítica avanzada.",
      image: "/griegos-laughing.png",
    },
    {
      icon: BarChart3,
      title: "Análisis Profundo",
      description:
        "Reportes completos que muestran no solo el rendimiento de las campañas, sino su impacto real en tus ingresos.",
      image: "/griegos-headphones.png",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance text-white">
            Combinamos <span className="text-emerald-400">precisión técnica y visión de crecimiento</span>
          </h2>
          <p className="text-lg text-white/60 text-pretty max-w-2xl mx-auto">
            No somos una agencia tradicional de publicidad digital. Somos un Growth Partner que utiliza datos e
            inteligencia artificial para acelerar tu proceso de adquisición de clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                <div className="aspect-square mb-6 rounded-xl bg-emerald-500/10 p-4 flex items-center justify-center">
                  <img
                    src={reason.image || "/placeholder.svg"}
                    alt={reason.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                      <reason.icon className="h-5 w-5 text-emerald-400" />
                    </div>
                    <h3 className="font-semibold text-lg text-white">{reason.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
