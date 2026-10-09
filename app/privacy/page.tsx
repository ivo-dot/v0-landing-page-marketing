import { Button } from "@/components/ui/button"
import Link from "next/link"

const URL = "https://didaktomarketing.com/privacy"
const EMAIL = "ivo@didaktomarketing.com"

export const metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Didakto Marketing: qué datos recopilamos, para qué los usamos, con quién los compartimos y cómo ejercer tus derechos.",
  alternates: { canonical: URL },
}

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Responsable del tratamiento",
    body: (
      <p>
        El responsable de los datos personales recopilados en www.didaktomarketing.com es Didakto Marketing (Ivo
        Crisman), con domicilio en Argentina. Para cualquier consulta sobre privacidad escribinos a{" "}
        <a href={`mailto:${EMAIL}`} className="underline">
          {EMAIL}
        </a>
        .
      </p>
    ),
  },
  {
    title: "2. Qué datos recopilamos",
    body: (
      <>
        <p>
          <strong>Datos que nos das vos:</strong> cuando completás un formulario de contacto o de evaluación, o nos
          escribís por email, WhatsApp o redes sociales, recopilamos los datos que ingresás, como nombre, apellido,
          email, teléfono, empresa, cargo, sitio web y la información sobre tu negocio que decidas compartir.
        </p>
        <p>
          <strong>Datos de navegación:</strong> mediante cookies y tecnologías similares recopilamos información
          técnica y de uso, como páginas visitadas, tiempo de permanencia, dispositivo, navegador, ubicación
          aproximada y la fuente desde la que llegaste (por ejemplo, un anuncio).
        </p>
        <p>No recopilamos datos sensibles ni datos de menores de edad.</p>
      </>
    ),
  },
  {
    title: "3. Para qué los usamos",
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>Responder tus consultas y evaluar si podemos ayudarte.</li>
        <li>Enviarte propuestas comerciales y comunicaciones relacionadas con nuestros servicios.</li>
        <li>Prestar los servicios contratados y gestionar la relación comercial.</li>
        <li>Medir el rendimiento del sitio y de nuestras campañas publicitarias, y mejorar nuestros contenidos.</li>
        <li>Mostrarte anuncios relevantes de Didakto en otras plataformas (remarketing).</li>
        <li>Cumplir obligaciones legales.</li>
      </ul>
    ),
  },
  {
    title: "4. Con quién los compartimos",
    body: (
      <>
        <p>
          No vendemos ni alquilamos tus datos. Solo los compartimos con proveedores que nos ayudan a operar, y
          únicamente para los fines descritos:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Vercel (alojamiento del sitio y analítica básica).</li>
          <li>Google (Google Analytics, Google Tag Manager y Google Ads).</li>
          <li>Meta (Facebook e Instagram) y LinkedIn, para medición y publicidad.</li>
          <li>Zapier, Google Workspace y nuestras herramientas de CRM, para gestionar las consultas recibidas.</li>
        </ul>
        <p>
          Algunos de estos proveedores procesan datos fuera de Argentina (por ejemplo, en Estados Unidos). También
          podremos compartir datos cuando lo exija una autoridad competente o la ley.
        </p>
      </>
    ),
  },
  {
    title: "5. Cookies",
    body: (
      <>
        <p>
          Usamos cookies propias y de terceros con fines analíticos y publicitarios. Podés bloquearlas o eliminarlas
          desde la configuración de tu navegador, aunque algunas funciones del sitio podrían verse afectadas.
          También podés gestionar la publicidad personalizada en:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Google:{" "}
            <a href="https://adssettings.google.com" className="underline" target="_blank" rel="noopener noreferrer">
              adssettings.google.com
            </a>{" "}
            y{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              complemento de inhabilitación de Google Analytics
            </a>
          </li>
          <li>Meta y LinkedIn: desde la configuración de anuncios de tu cuenta en cada plataforma.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Cuánto tiempo los conservamos",
    body: (
      <p>
        Conservamos tus datos mientras sean necesarios para las finalidades indicadas o mientras exista una relación
        comercial, y luego durante los plazos que exija la ley. Podés pedirnos que los eliminemos en cualquier
        momento.
      </p>
    ),
  },
  {
    title: "7. Seguridad",
    body: (
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger tus datos, como conexiones cifradas
        (HTTPS) y acceso restringido a la información. Ningún sistema es 100% seguro, pero trabajamos para minimizar
        los riesgos.
      </p>
    ),
  },
  {
    title: "8. Tus derechos",
    body: (
      <>
        <p>
          Podés solicitar en cualquier momento el acceso, la rectificación, la actualización o la supresión de tus
          datos, oponerte a su uso o pedir que dejemos de enviarte comunicaciones, escribiendo a{" "}
          <a href={`mailto:${EMAIL}`} className="underline">
            {EMAIL}
          </a>
          . Responderemos dentro de los plazos legales.
        </p>
        <p>
          De acuerdo con la Ley N° 25.326 de Protección de Datos Personales, el titular de los datos tiene la facultad
          de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses,
          salvo que se acredite un interés legítimo al efecto (art. 14, inc. 3). La AGENCIA DE ACCESO A LA
          INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de
          atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por
          incumplimiento de las normas vigentes en materia de protección de datos personales.
        </p>
      </>
    ),
  },
  {
    title: "9. Cambios en esta política",
    body: (
      <p>
        Podemos actualizar esta política. La versión vigente es siempre la publicada en esta página, con su fecha de
        última actualización.
      </p>
    ),
  },
]

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
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidad</h1>
        <p className="text-muted-foreground mb-12">Última actualización: 8 de octubre de 2026</p>

        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-2xl font-semibold mb-4">{s.title}</h2>
              <div className="text-muted-foreground leading-relaxed space-y-4">{s.body}</div>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contacto</h2>
            <div className="p-6 bg-muted rounded-lg">
              <p className="font-semibold mb-2">Didakto Marketing</p>
              <p className="text-muted-foreground">
                Email:{" "}
                <a href={`mailto:${EMAIL}`} className="underline">
                  {EMAIL}
                </a>
              </p>
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
