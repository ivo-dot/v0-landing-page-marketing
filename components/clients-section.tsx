import { TrendingDown, Target, TrendingUp, Building2 } from "lucide-react"

export function ClientsSection() {
  const successCases = [
    {
      company: "Sika",
      subtitle: "Líder global en soluciones de impermeabilización",
      result: "74% ↓ CPA",
      description:
        "Gracias a esta implementación de Growth Funnel + Data Intelligence B2B y una estrategia multicanal logramos reducir el Coste por adquisición un 74%. Esta estrategia se implementó en Sika USA, Sika Bolivia, Sika Perú y Sika Paraguay.",
      icon: TrendingDown,
      metrics: "74% ↓ CPA",
      image: "/griegos-laptop.png",
    },
    {
      company: "MSH Group y MSH Custom",
      subtitle: "Soluciones empresariales B2B",
      result: "$5 USD CPA promedio en LinkedIn",
      description:
        "MSH confió sus dos unidades de negocio a Didakto y gracias a nuestra metodología logramos diseñar un sistema de adquisición de leads con LinkedIn y Google Ads + Odoo. Esta integración nos permitió lograr un Coste por adquisición de tan solo 5 USD promedio en LinkedIn Ads.",
      icon: Target,
      metrics: "$5 USD CPA LinkedIn",
      image: "/griegos-sunglasses.png",
    },
    {
      company: "Silat SA",
      subtitle: "Más de 40 años de experiencia en Argentina",
      result: "+40% MQLs",
      description:
        "Empresa argentina reconocida y con más de 40 años de experiencia confía en Didakto para su plan de digitalización donde construimos una estrategia de reconocimiento y generación de leads logrando un aumento del 40% en sus MQLs totales.",
      icon: TrendingUp,
      metrics: "+40% MQLs",
      image: "/griegos-laptop.png",
    },
    {
      company: "RP Urbano",
      subtitle: "Desarrolladora inmobiliaria",
      result: "Leads calificados Real Estate",
      description:
        "Desarrolladora inmobiliaria de Argentina con un gran producto en Nuñez se enfrenta a la necesidad de obtener leads calificados para generar ventas en el sector Real Estate.",
      icon: Building2,
      metrics: "Real Estate B2C",
      image: "/griegos-sunglasses.png",
    },
  ]

  return (
    <section id="casos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance text-white">
            Estos clientes ya lo están <span className="text-emerald-400">aplicando</span>
          </h2>
          <p className="text-lg text-white/60 text-pretty max-w-2xl mx-auto">
            Resultados reales que transforman negocios
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {successCases.map((case_, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 p-3 flex items-center justify-center flex-shrink-0">
                  <img
                    src={case_.image || "/placeholder.svg"}
                    alt={case_.company}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{case_.company}</h3>
                  <p className="text-white/50 mb-3">{case_.subtitle}</p>
                  <div className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg inline-block font-semibold">
                    {case_.metrics}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-xl font-semibold text-white mb-2">{case_.result}</h4>
              </div>

              <p className="text-white/70 leading-relaxed">{case_.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
