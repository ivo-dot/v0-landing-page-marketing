const stats = [
  { number: "+300%", label: "Crecimiento promedio en ROI" },
  { number: "+100K USD", label: "Gestionados mensualmente" },
  { number: "+2500", label: "Leads B2B generados" },
  { number: "98%", label: "Tasa de satisfacción de clientes" },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance text-white">
            Resultados que <span className="text-emerald-400">hablan por sí solos</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto text-pretty">
            Cada dato representa una oportunidad convertida. Nuestro objetivo no es aumentar clics, sino multiplicar
            resultados.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-5xl font-bold text-emerald-400 mb-2">{stat.number}</div>
              <div className="text-white/60 text-pretty">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
