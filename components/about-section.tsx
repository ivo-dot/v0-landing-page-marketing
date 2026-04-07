import { Users, Target, TrendingUp, Linkedin } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/fondo-verde.png')" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-balance text-white">
              Quiénes <span className="text-primary">Somos</span>
            </h2>
            <p className="text-lg text-white/90 text-pretty leading-relaxed max-w-4xl mx-auto">
              Somos Didakto, una agencia de marketing digital que combina la sabiduría estratégica clásica con las
              herramientas tecnológicas más avanzadas. Nuestro equipo de expertos se dedica a crear campañas
              publicitarias que no solo generan tráfico, sino que convierten visitantes en clientes leales.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white text-center">Nuestros Fundadores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 space-y-4 border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Ivo Crisman</h4>
                    <p className="text-white/80">Founder & CEO</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  Especialista en estrategia digital con más de 10 años de experiencia en generación de leads y campañas
                  publicitarias.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="text-sm">Ver perfil en LinkedIn</span>
                </a>
              </div>

              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 space-y-4 border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Gabriel Ruiz</h4>
                    <p className="text-white/80">Co-founder & CTO</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  Experto en analítica digital y reportería, especializado en optimización de campañas y diseño de
                  piezas gráficas.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="text-sm">Ver perfil en LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center space-y-2 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="mx-auto w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-white">Equipo Experto</h3>
              <p className="text-sm text-white/80">Profesionales certificados</p>
            </div>

            <div className="text-center space-y-2 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="mx-auto w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-white">Estrategia Precisa</h3>
              <p className="text-sm text-white/80">Campañas orientadas a resultados</p>
            </div>

            <div className="text-center space-y-2 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="mx-auto w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-white">Crecimiento Sostenible</h3>
              <p className="text-sm text-white/80">Resultados a largo plazo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
