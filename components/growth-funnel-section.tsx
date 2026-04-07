export function GrowthFunnelSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título principal */}
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6 text-balance text-white">
            <span className="text-emerald-400">Growth Funnel + Data Intelligence</span> B2B
          </h2>

          {/* Subtítulo */}
          <p className="text-lg lg:text-xl text-center text-white/60 mb-16 max-w-4xl mx-auto leading-relaxed">
            En Didakto integramos marketing, analítica y CRM para que tus campañas no solo generen leads, sino{" "}
            <span className="font-semibold text-white">clientes reales</span>.
          </p>

          {/* Sección "¿Qué hacemos diferente?" */}
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-white">¿Qué hacemos diferente?</h3>

          <div className="space-y-8 mb-16">
            {/* Item 1 */}
            <div className="p-6 lg:p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    Alineamos tu pipeline de ventas
                  </h4>
                  <p className="text-base lg:text-lg text-white/60 leading-relaxed mb-4">
                    Lead → MQL → SQL → Reunión → Propuesta → Cierre → Revenue.
                  </p>
                  <p className="text-base lg:text-lg text-white">
                    Cada etapa se convierte en un{" "}
                    <span className="font-semibold text-emerald-400">activo de optimización</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="p-6 lg:p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    Conectamos tu CRM con las plataformas publicitarias
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                        Las plataformas aprenden qué perfil de cliente cierra ventas.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">•</span>
                      <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                        Los algoritmos empiezan a buscar más personas como esas.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="p-6 lg:p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    Medimos lo que realmente importa
                  </h4>
                  <p className="text-base lg:text-lg text-white/60 leading-relaxed">No CPL. No clicks.</p>
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="p-6 lg:p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-lg">4</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-4">
                    Optimización avanzada basada en datos
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Cierre final */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 lg:p-12 text-center">
            <p className="text-xl lg:text-2xl font-semibold text-white mb-4">
              Una estrategia diseñada para negocios B2B
            </p>
            <p className="text-2xl lg:text-3xl font-bold text-emerald-400">
              Si tu negocio necesita calidad, no cantidad, Didakto es para vos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
