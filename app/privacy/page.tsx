import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Política de Privacidad | Didakto Marketing",
  description:
    "Política de privacidad de Didakto Marketing. Conoce cómo protegemos y manejamos tu información personal.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo-didakto-iso.png" alt="Didakto" className="h-8 w-8" />
            <span className="text-xl font-bold">Didakto</span>
          </Link>
          <Link href="/">
            <Button variant="ghost">Volver al inicio</Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidad</h1>
        <p className="text-muted-foreground mb-8">Última actualización: Enero 2025</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Información que Recopilamos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En Didakto Marketing, recopilamos información que nos proporcionas directamente cuando:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Completas nuestro formulario de contacto o consulta gratuita</li>
              <li>Te suscribes a nuestro boletín informativo</li>
              <li>Interactúas con nuestros servicios de marketing digital</li>
              <li>Nos contactas por correo electrónico o redes sociales</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              La información que recopilamos puede incluir: nombre, apellido, correo electrónico, nombre de empresa, y
              cualquier otra información que decidas compartir con nosotros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Cómo Utilizamos tu Información</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Utilizamos la información recopilada para:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Responder a tus consultas y solicitudes de información</li>
              <li>Proporcionarte nuestros servicios de marketing digital</li>
              <li>Enviarte información relevante sobre nuestros servicios</li>
              <li>Mejorar nuestros servicios y experiencia del usuario</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Protección de Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información
              personal contra acceso no autorizado, alteración, divulgación o destrucción. Utilizamos conexiones seguras
              (SSL/TLS) y almacenamiento encriptado para proteger tus datos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Compartir Información</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No vendemos, alquilamos ni compartimos tu información personal con terceros para fines de marketing.
              Podemos compartir tu información únicamente en los siguientes casos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Con proveedores de servicios que nos ayudan a operar nuestro negocio (bajo acuerdos de confidencialidad)
              </li>
              <li>Cuando sea requerido por ley o para proteger nuestros derechos legales</li>
              <li>Con tu consentimiento explícito</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Cookies y Tecnologías Similares</h2>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web, analizar el
              tráfico y personalizar el contenido. Puedes configurar tu navegador para rechazar cookies, aunque esto
              puede afectar algunas funcionalidades del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Tus Derechos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Tienes derecho a:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Acceder a tu información personal que tenemos</li>
              <li>Solicitar la corrección de información inexacta</li>
              <li>Solicitar la eliminación de tu información personal</li>
              <li>Oponerte al procesamiento de tu información</li>
              <li>Solicitar la portabilidad de tus datos</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Para ejercer estos derechos, contáctanos a través de ivo@didaktomarketing.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Retención de Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos
              descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Enlaces a Terceros</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de
              privacidad de estos sitios. Te recomendamos leer las políticas de privacidad de cada sitio que visites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Cambios a esta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos actualizar esta política de privacidad periódicamente. Te notificaremos sobre cambios
              significativos publicando la nueva política en esta página y actualizando la fecha de "última
              actualización".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Si tienes preguntas o inquietudes sobre esta política de privacidad o sobre cómo manejamos tu información
              personal, contáctanos:
            </p>
            <div className="mt-4 p-6 bg-muted rounded-lg">
              <p className="font-semibold mb-2">Didakto Marketing</p>
              <p className="text-muted-foreground">Email: ivo@didaktomarketing.com</p>
              <p className="text-muted-foreground">Sitio web: www.didaktomarketing.com</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/">
            <Button size="lg">Volver al inicio</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
