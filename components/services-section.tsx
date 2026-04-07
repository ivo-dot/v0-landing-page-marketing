import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, BarChart3, Zap } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Growth Advertising",
    description: "Campañas publicitarias diseñadas para escalar resultados reales, no métricas de vanidad.",
    features: [
      "Google Ads, LinkedIn Ads, Meta Ads y TikTok Ads",
      "Estrategias multicanal y segmentación avanzada",
      "Testing de mensajes y creatividades con IA",
      "Optimización continua orientada a ROI",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Intelligence & Measurement",
    description: "Medición avanzada para tomar decisiones basadas en datos, no en suposiciones.",
    features: [
      "Implementación GA4 y Google Tag Manager",
      "Dashboards personalizados en Looker Studio",
      "Integración con CRM (Salesforce, HubSpot)",
      "Modelos predictivos y reporting automatizado",
    ],
  },
  {
    icon: Zap,
    title: "Automation & AI Flows",
    description: "Automatizamos la conexión entre la publicidad y tus equipos de ventas.",
    features: [
      "Primer contacto automático vía email o WhatsApp",
      "Lead scoring con IA y priorización de oportunidades",
      "Integraciones con Zapier, HubSpot o Salesforce",
      "Secuencias automatizadas de nurturing",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance text-white">
            Servicios que <span className="text-emerald-400">impulsan tu crecimiento</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto text-pretty">
            Creamos y optimizamos sistemas de adquisición B2B diseñados para atraer, medir y convertir leads
            calificados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-emerald-400" />
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-pretty text-white/60">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-white/70">
                      <div className="h-1.5 w-1.5 bg-emerald-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 bg-transparent"
                >
                  Más Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
