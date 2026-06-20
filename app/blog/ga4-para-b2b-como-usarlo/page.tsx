import type { Metadata } from "next"
import ArticlePage, { articleJsonLd, articleBreadcrumb, faqJsonLd } from "@/components/dk-article"
import { postBySlug, otherPosts } from "@/components/blog-posts"
import "../../didakto-redesign.css"

const post = postBySlug("ga4-para-b2b-como-usarlo")!
const URL = "https://didaktomarketing.com/blog/" + post.slug
const lede =
  "Google Analytics 4 viene configurado para e-commerce: transacciones, carritos, ingresos. Pero en B2B no vendés online, generás leads. Bien adaptado, GA4 deja de ser un panel que nadie mira y se vuelve el centro de tu medición de demanda."

const faqs = [
  { q: "¿GA4 sirve para B2B si no vendo online?", a: "Sí, y mucho. El error es esperar que funcione de fábrica. GA4 está pensado para e-commerce, así que en B2B hay que redefinir qué es una 'conversión': envío de formulario, descarga de material, clic a WhatsApp, reunión agendada. Una vez configurado con tus eventos clave, GA4 te muestra qué canales y contenidos generan demanda real." },
  { q: "¿Qué eventos debería marcar como conversión en B2B?", a: "Los que reflejan intención comercial: envío de formulario de contacto, solicitud de demo o cotización, descarga de un recurso (whitepaper, caso), clic en el teléfono o WhatsApp, y tiempo/profundidad de lectura en páginas clave. Marcá como 'evento clave' solo los que importan; el resto, déjalos como eventos para análisis." },
  { q: "¿Cómo conecto GA4 con mi generación de leads y CRM?", a: "GA4 mide el comportamiento hasta el formulario; el CRM mide qué pasa después. La forma robusta es capturar el origen (UTMs + GCLID) en el lead y devolver las etapas del CRM a Google Ads como conversiones offline. Así unís el clic con la venta. Lo explicamos en nuestro artículo sobre integrar Google Ads con HubSpot." },
  { q: "¿GA4 reemplaza a Search Console o a mi CRM?", a: "No. GA4 mide comportamiento en el sitio y atribución de canales; Search Console mide tu rendimiento orgánico en Google (consultas, impresiones, posición); el CRM mide el funnel comercial. Los tres se complementan: lo ideal es vincularlos para tener la foto completa desde la búsqueda hasta el cierre." },
]

export const metadata: Metadata = {
  title: "GA4 para el sector B2B: cómo configurarlo y usarlo",
  description:
    "Guía de GA4 para B2B: qué eventos y conversiones marcar cuando generás leads (no ventas online), audiencias, atribución, integración con CRM y los reportes que sí mueven la aguja.",
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
          <p>GA4 viene optimizado para <strong>e-commerce</strong>, pero en B2B tu "conversión" no es una compra: es un <strong>lead</strong>. El truco es redefinir los eventos clave (formulario, demo, WhatsApp, descargas), construir <strong>audiencias</strong> sobre comportamiento real y <strong>conectar GA4 con tu CRM</strong>. Hecho así, deja de ser un panel decorativo y pasa a guiar dónde invertís.</p>
        </div>

        <p>"Tenemos GA4 instalado, pero no lo miramos." Lo escuchamos casi en cada auditoría B2B. Y es entendible: GA4 abre con reportes de <em>ingresos</em>, <em>compras</em> y <em>artículos vistos</em>, métricas de una tienda online. Si vendés maquinaria, software o servicios profesionales, esa pantalla no te dice nada.</p>
        <p>El problema no es GA4: es que nadie lo adaptó a un negocio que <strong>genera leads en vez de vender online</strong>. Bien configurado, GA4 es la mejor herramienta gratuita para entender qué canales, campañas y contenidos producen demanda real.</p>

        <h2>El cambio de mentalidad: de transacciones a leads</h2>
        <p>En e-commerce el éxito es claro: una venta. En B2B el "éxito" en el sitio es una <strong>señal de intención</strong>: alguien pidió una demo, descargó un caso o escribió por WhatsApp. Tu primer trabajo en GA4 es decirle a la herramienta <em>qué de todo lo que pasa en tu sitio vale la pena contar</em>.</p>
        <p>Todo en GA4 son <strong>eventos</strong>. De esos, vos elegís cuáles son <strong>eventos clave</strong> (lo que antes se llamaba "conversiones"). Esa lista es la columna vertebral de tu medición.</p>

        <h2>Qué eventos clave configurar en B2B</h2>
        <p>No marques todo como conversión: perdés foco. Estos son los que de verdad importan en la mayoría de los negocios B2B:</p>
        <ul>
          <li><strong>Envío de formulario</strong> de contacto / cotización — tu lead principal.</li>
          <li><strong>Solicitud de demo o reunión</strong> — la intención más alta.</li>
          <li><strong>Clic en WhatsApp o teléfono</strong> — clave en LATAM, donde mucho lead entra por ahí.</li>
          <li><strong>Descarga de recurso</strong> (whitepaper, caso, ficha) — lead de etapa temprana.</li>
          <li><strong>Engagement profundo</strong> — scroll del 75% o varios minutos en páginas de servicio / precios.</li>
        </ul>
        <p>Una distinción útil: <strong>micro-conversiones</strong> (descargas, engagement) versus <strong>macro-conversiones</strong> (formulario, demo). Las primeras te dicen si el contenido funciona; las segundas, si el negocio funciona.</p>

        <h2>Audiencias: el activo que casi nadie usa</h2>
        <p>Acá está el valor escondido de GA4. Podés construir <strong>audiencias</strong> a partir del comportamiento y exportarlas a Google Ads para remarketing y para alimentar a las campañas de Performance Max y demanda. Algunas que armamos siempre:</p>
        <ul>
          <li>Visitaron <strong>precios o servicios</strong> pero no convirtieron.</li>
          <li>Descargaron un recurso pero no pidieron demo (lead a nutrir).</li>
          <li>Usuarios de <strong>alto engagement</strong> que volvieron más de una vez.</li>
          <li>Quienes <strong>empezaron el formulario y lo abandonaron</strong>.</li>
        </ul>
        <p>Estas audiencias hacen que tu <a href="/google-ads">inversión en Google Ads</a> deje de hablarle a desconocidos y empiece a recuperar gente que ya mostró interés.</p>

        <h2>Atribución: entender de dónde viene la demanda</h2>
        <p>GA4 trae reportes de adquisición que, leídos bien, responden la pregunta del millón: <em>¿qué canal me trae los leads que valen?</em> Mirá el reporte de adquisición de tráfico filtrando por tus eventos clave, no por sesiones. Una fuente puede traer mucho tráfico y cero leads, y otra lo contrario.</p>
        <blockquote>El tráfico no paga las cuentas. Mirá tus reportes siempre cruzados con eventos clave, nunca con sesiones a secas.</blockquote>
        <p>Tené en cuenta dos límites de GA4: el modelo de atribución (por defecto, basado en datos) puede repartir el crédito distinto a tu CRM, y la ventana de conversión importa cuando el ciclo de venta es largo. Por eso GA4 mide el sitio, pero la verdad del negocio está cuando lo conectás con el CRM.</p>

        <h2>Conectar GA4 con el resto del sistema</h2>
        <p>GA4 no trabaja solo. Las integraciones que multiplican su valor:</p>
        <ul>
          <li><strong>Google Ads</strong> — importás eventos clave y audiencias; las campañas optimizan mejor.</li>
          <li><strong>Search Console</strong> — sumás el rendimiento orgánico (consultas, posición) a tu análisis.</li>
          <li><strong>BigQuery</strong> — exportás los datos crudos para análisis avanzados y dashboards a medida.</li>
          <li><strong>Tu CRM</strong> — el eslabón decisivo: GA4 mide hasta el lead; el CRM, qué leads cierran. Devolverle al canal las etapas reales es lo que cierra el círculo. Lo desarrollamos en <a href="/blog/google-ads-hubspot-conversiones-offline">cómo integrar Google Ads con HubSpot para medir conversiones offline</a>.</li>
        </ul>

        <h2>Errores frecuentes en GA4 para B2B</h2>
        <ul>
          <li><strong>Dejarlo de fábrica</strong> y mirar métricas de e-commerce que no aplican.</li>
          <li><strong>Marcar todo como evento clave</strong>, perdiendo la señal entre el ruido.</li>
          <li><strong>No filtrar tráfico interno y bots</strong>, que inflan los números.</li>
          <li><strong>No definir UTMs consistentes</strong>, lo que rompe la atribución por canal.</li>
          <li><strong>Quedarse en GA4</strong> sin conectarlo al CRM, midiendo intención pero nunca resultado.</li>
        </ul>

        <h2>En resumen</h2>
        <p>GA4 para B2B no se trata de instalarlo, sino de <strong>traducirlo a tu negocio</strong>: definir qué evento es realmente valioso, construir audiencias accionables y conectarlo con tus campañas y tu CRM. Hecho así, deja de ser un panel que nadie abre y se vuelve el sistema nervioso de tu <a href="/generacion-de-leads-b2b">generación de demanda</a>. Los datos no faltan: falta configurarlos para que respondan las preguntas correctas.</p>
      </ArticlePage>
    </>
  )
}
