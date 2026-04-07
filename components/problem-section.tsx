export function ProblemSection() {
  const problems = [
    "Recibís muchos leads… pero muy pocos son de calidad.",
    "Las campañas generan tráfico, pero no se reflejan en ventas reales.",
    "Tu equipo comercial cree una cosa y tus campañas muestran otra.",
    "No podés diferenciar entre un lead bueno y uno que nunca va a avanzar.",
    "No tenés claridad sobre qué canal genera clientes, no solo formularios.",
    "El CPL bajó… pero tu tasa de cierre también.",
    'Google o Meta no terminan de "entender" quién es tu cliente ideal.',
    "Invertís más en publicidad sin saber realmente qué está funcionando.",
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título principal */}
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6 text-balance text-white">
            ¿Cómo saber si <span className="text-emerald-400">Didakto es para tu negocio?</span>
          </h2>

          {/* Subtítulo */}
          <h3 className="text-xl lg:text-2xl font-semibold text-center text-white/60 mb-12">
            ¿Enfrentás estos problemas con tus leads?
          </h3>

          {/* Lista de problemas */}
          <div className="space-y-4 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                  <span className="text-emerald-400 font-bold text-sm">✓</span>
                </div>
                <p className="text-base lg:text-lg text-white/80 leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>

          {/* Cierre destacado */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 lg:p-12 text-center space-y-6">
            <p className="text-xl lg:text-2xl font-semibold text-white">Si te pasa una sola de estas cosas…</p>
            <p className="text-2xl lg:text-3xl font-bold text-emerald-400">Tu negocio no tiene un problema de anuncios.</p>
            <p className="text-xl lg:text-2xl text-white/60 leading-relaxed">
              Tu negocio tiene un problema de{" "}
              <span className="font-semibold text-white">datos, pipeline y optimización comercial.</span>
            </p>
            <p className="text-2xl lg:text-3xl font-bold text-emerald-400 pt-4">Y ahí es donde entra Didakto.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
