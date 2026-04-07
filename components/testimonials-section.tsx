import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    company: "TechStart Solutions",
    content:
      "Gracias a DigitalPro, nuestras ventas online aumentaron un 250% en solo 6 meses. Su estrategia de Google Ads fue increíblemente efectiva.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    company: "Restaurante El Buen Sabor",
    content:
      "La campaña en redes sociales que crearon para nosotros nos ayudó a duplicar nuestros pedidos a domicilio. Excelente trabajo.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    company: "Boutique Fashion",
    content:
      "Su enfoque en SEO nos posicionó en la primera página de Google. Ahora recibimos clientes orgánicos todos los días.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance">
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
