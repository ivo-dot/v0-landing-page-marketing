import type { Metadata } from "next"
import ArticlePage, { articleJsonLd, articleBreadcrumb, faqJsonLd } from "@/components/dk-article"
import { postBySlug, otherPosts } from "@/components/blog-posts"
import "../../didakto-redesign.css"

const post = postBySlug("5-errores-publicidad-digital-b2b")!
const URL = "https://didaktomarketing.com/blog/" + post.slug
const lede =
  "Auditamos cuentas de Google Ads y Meta Ads B2B todas las semanas, y los mismos 5 errores aparecen una y otra vez, en empresas de todos los tamaños. Ninguno tiene que ver con presupuesto: tienen que ver con tratar al comprador B2B como si fuera un consumidor final."

const faqs = [
  { q: "¿Cuál es el error más común en publicidad B2B?", a: "Copiar el playbook de B2C: mensajes urgentes, ofertas genéricas y anuncios pensados para una decisión de compra impulsiva, cuando en B2B hay un comité de compra y un ciclo de decisión de semanas o meses. Es la raíz de varios de los otros errores de esta lista." },
  { q: "¿Cuánto tarda una campaña de Google Ads en salir de la fase de aprendizaje?", a: "Depende del volumen, pero como referencia general Google recomienda esperar al menos 1-2 semanas o hasta acumular unas 50 conversiones antes de evaluar el rendimiento real de una campaña con puja automática. Apagarla antes es la forma más común de perder el trabajo que ya invertiste." },
  { q: "¿Por qué es un error medir solo por último clic?", a: "Porque en B2B el camino de compra rara vez es un solo clic: alguien puede ver un anuncio en LinkedIn, buscar la marca en Google dos semanas después y completar el formulario desde orgánico. Medir solo el último clic le da todo el crédito al canal equivocado y te lleva a cortar presupuesto de lo que realmente generó la demanda." },
  { q: "¿Marketing o ventas debería definir qué es un lead calificado?", a: "Ninguno de los dos solo: se define entre ambos, antes de lanzar campañas. Si marketing optimiza por volumen de formularios y ventas descarta la mitad porque no cumplen un criterio que nunca se acordó, ambos equipos terminan midiendo cosas distintas y peleando por los mismos números." },
]

export const metadata: Metadata = {
  title: "5 errores que no debés cometer en publicidad digital B2B",
  description:
    "Los 5 errores más comunes en campañas de Google Ads y Meta Ads B2B: copiar el playbook de B2C, no alinear con ventas, apagar campañas temprano, medir por último clic y landing pages genéricas.",
  alternates: { canonical: URL },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post, lede)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleBreadcrumb(post)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <ArticlePage post={post} lede={lede} faqs={faqs} related={otherPosts(post.slug)}>
        <div className="keytakeaway">
          <b>Respuesta corta</b>
          <p>Los 5 errores que más vemos al auditar cuentas B2B: <strong>copiar el playbook de B2C</strong>, <strong>no alinear con ventas qué es un lead calificado</strong>, <strong>apagar campañas por impaciencia</strong> antes de que terminen de aprender, <strong>medir todo por último clic</strong> sin mirar el CRM, y <strong>mandar el tráfico pago a una landing genérica</strong>. Ninguno se arregla con más presupuesto; se arreglan con criterio.</p>
        </div>

        <p>Auditamos cuentas de Google Ads y Meta Ads B2B todas las semanas, de empresas chicas y de compañías con equipos de marketing armados. Y casi siempre aparecen los mismos errores, sin importar el tamaño del presupuesto. Ninguno de los cinco es sofisticado ni requiere una herramienta cara para resolverlo: son decisiones de criterio, no de recursos.</p>

        <h2>1. Copiar el playbook de B2C</h2>
        <p>Es la raíz de la que se desprenden varios de los otros errores. Un anuncio pensado para vender un par de zapatillas —urgencia, descuento, "comprá ahora"— no funciona igual cuando del otro lado hay un comité de compra: un gerente que investiga, un jefe que aprueba presupuesto, y a veces un área de IT o compras que audita al proveedor. La decisión no se toma en un scroll de 3 segundos, se toma en semanas o meses, con varias personas involucradas.</p>
        <p>Lo que funciona en B2B es distinto: contenido que eduque en la etapa de investigación, prueba social específica del sector (no genérica), y ofertas que respeten que la primera interacción casi nunca es la compra, sino el primer paso de una relación.</p>

        <h2>2. No alinear con ventas qué es un "lead calificado"</h2>
        <p>Marketing lanza campañas optimizando por volumen de formularios. Ventas recibe esos leads y descarta la mitad porque "no califican". Nadie se puso de acuerdo antes en qué significa calificar. El resultado: marketing reporta éxito (bajó el costo por lead), ventas reporta frustración (la mitad es basura), y la conversación se vuelve una pelea de números en vez de una estrategia compartida.</p>
        <p>La solución no es compleja, pero sí requiere una reunión incómoda antes de lanzar: definir juntos qué cargo, qué tamaño de empresa, qué señal de intención convierte a un contacto en un lead que vale la pena trabajar. Profundizamos esto en <a href="/blog/costo-por-lead-vs-costo-por-cliente">costo por lead vs. costo por cliente</a>: dos campañas con el mismo CPL pueden valer 3 veces distinto según qué tan bien calificado llegue ese lead.</p>

        <h2>3. Apagar campañas por impaciencia</h2>
        <p>Las campañas con puja automática (Smart Bidding, CBO en Meta) necesitan un período de aprendizaje para que el algoritmo entienda a quién mostrarle el anuncio. Como referencia, Google recomienda esperar al menos 1-2 semanas o unas 50 conversiones antes de sacar conclusiones. Es común ver campañas apagadas al tercer día "porque no estaban funcionando", justo cuando el algoritmo recién empezaba a encontrar su punto óptimo.</p>
        <p>Esto no significa dejar correr una campaña mala indefinidamente: significa distinguir entre "no está funcionando" y "todavía no terminó de aprender", y tener un criterio de tiempo mínimo antes de decidir.</p>

        <h2>4. Medir todo por último clic</h2>
        <p>En B2B, el camino de compra rara vez es un solo clic. Alguien ve un anuncio en LinkedIn, busca la marca en Google dos semanas después, y completa el formulario llegando desde orgánico. Si medís por último clic, ese resultado se lo lleva "orgánico" y LinkedIn queda como un canal que "no generó nada", cuando en realidad inició todo el proceso.</p>
        <p>La forma de evitarlo es conectar la pauta con lo que pasa después del formulario: eventos bien configurados en <a href="/blog/ga4-para-b2b-como-usarlo">GA4</a> y, si es posible, conversiones offline devueltas desde el CRM (lo explicamos en <a href="/blog/google-ads-hubspot-conversiones-offline">Google Ads + HubSpot</a>). Sin esa vista completa, estás tomando decisiones de presupuesto con información parcial.</p>

        <h2>5. Mandar el tráfico pago a una landing genérica</h2>
        <p>Pagaste por el clic, prometiste algo específico en el anuncio, y el visitante llega... al home general de la empresa, sin relación directa con lo que le prometiste. Ese desajuste entre la promesa del anuncio y lo que encuentra la persona es una de las formas más silenciosas de tirar presupuesto: el clic ya está pagado, pero la conversión se pierde en el camino.</p>
        <p>La landing tiene que responder la misma pregunta que trajo el clic, con el mismo lenguaje del anuncio, y un solo objetivo claro (agendar, dejar el contacto, pedir una demo). Nada de navegación que distraiga ni de mensajes que no coincidan con lo que el anuncio prometió.</p>

        <h2>En resumen</h2>
        <p>Ninguno de estos cinco errores se arregla subiendo el presupuesto. Se arreglan con una campaña bien pensada desde el principio: un mensaje que respete cómo compra realmente una empresa, un criterio de calificación acordado con ventas, paciencia con el algoritmo, medición completa y una landing que cumpla lo que el anuncio prometió. Si querés que revisemos tu cuenta y te digamos con cuáles de estos cinco estás lidiando hoy, <a href="/agencia-de-publicidad-digital">hablemos</a>.</p>
      </ArticlePage>
    </>
  )
}
