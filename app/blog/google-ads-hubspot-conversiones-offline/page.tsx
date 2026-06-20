import type { Metadata } from "next"
import ArticlePage, { articleJsonLd, articleBreadcrumb, faqJsonLd } from "@/components/dk-article"
import { postBySlug, otherPosts } from "@/components/blog-posts"
import "../../didakto-redesign.css"

const post = postBySlug("google-ads-hubspot-conversiones-offline")!
const URL = "https://didaktomarketing.com/blog/" + post.slug
const lede =
  "En B2B, el formulario enviado no es la venta: es el principio. Si optimizás Google Ads por leads, le estás enseñando al algoritmo a traerte volumen, no clientes. La integración con HubSpot para medir conversiones offline cambia esa ecuación de raíz."

const faqs = [
  { q: "¿Qué es una conversión offline en Google Ads?", a: "Es una conversión que ocurre después del clic y fuera del sitio web: un lead que se vuelve oportunidad calificada (SQL), una reunión agendada o una venta cerrada en tu CRM. Google no la ve por sí solo; se la tenés que devolver desde HubSpot con el GCLID que identifica ese clic." },
  { q: "¿Por qué integrar Google Ads con HubSpot en vez de medir solo formularios?", a: "Porque el formulario mide intención, no resultado. Dos campañas pueden traer el mismo costo por lead y un costo por cliente que difiere 5x. Devolviéndole a Google las etapas reales del CRM (MQL, SQL, venta), el algoritmo de Smart Bidding optimiza hacia los leads que cierran, no hacia los que solo completan un formulario." },
  { q: "¿Qué es el GCLID y por qué es clave?", a: "El GCLID (Google Click ID) es el identificador único de cada clic en un anuncio. Se captura en una propiedad oculta del formulario de HubSpot y viaja con el contacto por todo el funnel. Cuando ese contacto cambia de etapa, HubSpot le envía a Google el GCLID + la conversión, y Google la atribuye a la campaña, anuncio y palabra clave exactos." },
  { q: "¿Se puede hacer sin programar?", a: "En gran parte sí. HubSpot tiene integración nativa con Google Ads y workflows que disparan conversiones offline por cambio de etapa. Para casos avanzados (atribución por valor, deduplicación, varias unidades de negocio) sumamos la API de Conversiones Offline o un middleware. La captura del GCLID y el mapeo de etapas es lo que más cuidado requiere." },
]

export const metadata: Metadata = {
  title: "Google Ads + HubSpot: medir conversiones offline en B2B",
  description:
    "Cómo integrar Google Ads con HubSpot para importar conversiones offline (MQL, SQL, venta) vía GCLID y Smart Bidding. Guía B2B para optimizar por clientes, no por leads.",
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
          <p>Si Google Ads solo sabe que alguien <strong>envió un formulario</strong>, va a optimizar por formularios baratos. Devolviéndole desde HubSpot las <strong>conversiones offline</strong> —el lead que se volvió oportunidad y la oportunidad que se volvió venta— le enseñás a buscar <strong>clientes, no leads</strong>. Es la diferencia entre bajar el costo por lead y bajar el costo por cliente.</p>
        </div>

        <p>Hay un error que cometen casi todas las cuentas de Google Ads en B2B, y es silencioso: <strong>optimizar por el evento equivocado</strong>. Configurás "envío de formulario" como conversión, activás Smart Bidding, y el algoritmo hace exactamente lo que le pediste: traer la mayor cantidad de formularios al menor costo. El problema es que <em>nadie vende formularios</em>.</p>
        <p>En B2B, entre ese formulario y la factura hay un mundo: calificación, reuniones, propuestas, ciclos de semanas o meses. Y la mayoría de eso pasa <strong>fuera del sitio web</strong>, en tu CRM. Si Google no ve esa parte, está optimizando a ciegas la mitad más importante del recorrido.</p>

        <h2>El problema de optimizar por leads</h2>
        <p>Imaginá dos campañas con el mismo costo por lead, digamos USD 30:</p>
        <ul>
          <li><strong>Campaña A:</strong> trae 100 leads/mes. De esos, 8 se vuelven oportunidades reales y 2 cierran.</li>
          <li><strong>Campaña B:</strong> trae 100 leads/mes. De esos, 25 se vuelven oportunidades y 7 cierran.</li>
        </ul>
        <p>Para Google son idénticas: mismo costo por conversión. Para tu negocio, la B vale más del triple. Si optimizás por formularios, el algoritmo puede incluso <strong>matar a la B</strong> para escalar la A si esta consigue formularios un poco más baratos. Estás pagando para empeorar tus resultados.</p>
        <blockquote>El costo por lead es una métrica de vanidad en B2B. La métrica que paga sueldos es el costo por cliente.</blockquote>
        <p>La solución no es dejar de usar automatización: es <strong>alimentarla con mejor información</strong>. Y esa información vive en HubSpot.</p>

        <h2>Qué son las conversiones offline</h2>
        <p>Una conversión offline es cualquier evento de valor que ocurre <strong>después del clic y fuera del sitio</strong>. En un funnel B2B típico medido en HubSpot:</p>
        <ul>
          <li><strong>Lead</strong> — completó el formulario (esto Google ya lo ve).</li>
          <li><strong>MQL</strong> — el lead encaja con tu perfil de cliente ideal.</li>
          <li><strong>SQL / Oportunidad</strong> — ventas lo validó y abrió una negociación.</li>
          <li><strong>Cliente</strong> — cerró. Idealmente con el valor real del contrato.</li>
        </ul>
        <p>Cada una de esas etapas es una conversión offline que le podés <strong>devolver a Google Ads</strong>. Cuanto más abajo en el funnel, más le enseñás al algoritmo qué clic terminó valiendo la pena.</p>

        <h2>Cómo funciona la integración, paso a paso</h2>
        <p>El mecanismo entero gira alrededor de un identificador: el <strong>GCLID</strong> (Google Click ID), un código único que Google le pone a cada clic en un anuncio.</p>
        <h3>1. Capturar el GCLID</h3>
        <p>Cuando alguien llega desde un anuncio, su URL trae el GCLID. Hay que capturarlo (vía cookie / Google Tag) y guardarlo en una <strong>propiedad oculta</strong> del formulario de HubSpot. Desde ese momento, el GCLID queda pegado al contacto para siempre.</p>
        <h3>2. Mapear las etapas del CRM</h3>
        <p>Definís qué etapas de tu pipeline querés devolverle a Google como conversiones (por ejemplo SQL y Venta) y les ponés un valor. Acá se gana o se pierde: el mapeo tiene que reflejar tu negocio real, no la plantilla de fábrica.</p>
        <h3>3. Disparar la conversión offline</h3>
        <p>Cuando un contacto cambia a una de esas etapas, un <strong>workflow de HubSpot</strong> le envía a Google Ads el GCLID + el nombre de la conversión + el valor + la fecha. Google la atribuye a la campaña, grupo, anuncio y palabra clave exactos que generaron ese clic, semanas atrás.</p>
        <h3>4. Optimizar por la etapa correcta</h3>
        <p>Con esos datos cargados, cambiás el objetivo de Smart Bidding: de "envío de formulario" a "SQL" o "Venta". A partir de ahí, el algoritmo puja más fuerte por las búsquedas, audiencias y horarios que históricamente produjeron clientes, y menos por los que solo producen ruido.</p>

        <h2>El antes y el después</h2>
        <div className="dktable">
          <table>
            <thead>
              <tr><th>Aspecto</th><th>Optimizando por formularios</th><th>Optimizando por conversiones offline</th></tr>
            </thead>
            <tbody>
              <tr><td>Señal que recibe Google</td><td>"Alguien dejó sus datos"</td><td>"Este clic se volvió cliente"</td></tr>
              <tr><td>Qué escala el algoritmo</td><td>Volumen de leads baratos</td><td>Leads que cierran</td></tr>
              <tr><td>Métrica de éxito</td><td>Costo por lead</td><td>Costo por SQL / por cliente</td></tr>
              <tr><td>Riesgo</td><td>Inflar leads basura</td><td>Foco en calidad y rentabilidad</td></tr>
              <tr><td>Decisiones</td><td>A ciegas debajo del formulario</td><td>Atadas al pipeline real</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Errores que vemos seguido</h2>
        <ul>
          <li><strong>No capturar el GCLID desde el día uno.</strong> Sin GCLID no hay atribución posible. Es lo primero que hay que dejar andando.</li>
          <li><strong>Devolver demasiado pronto.</strong> Optimizar por "MQL" cuando tu cuello de botella real está en el cierre. Elegí la etapa que mejor predice ingresos sin quedarte sin volumen de datos.</li>
          <li><strong>Ignorar la ventana de conversión.</strong> Si tu ciclo de venta es de 60 días, Google necesita una ventana de atribución acorde, o nunca conectará el clic con la venta.</li>
          <li><strong>Poco volumen.</strong> Smart Bidding necesita suficientes conversiones para aprender. En cuentas chicas conviene optimizar por una etapa intermedia (SQL) y usar valores para diferenciar calidad.</li>
        </ul>

        <h2>Por qué esto te posiciona, no solo te mide</h2>
        <p>Conectar Google Ads con HubSpot no es un capricho técnico: es lo que separa a una cuenta que <em>gasta</em> de una que <em>invierte</em>. Cuando podés decir "esta palabra clave generó 4 clientes y USD 40.000 en pipeline", las decisiones de presupuesto dejan de ser opinión. Es exactamente el tipo de trabajo de <a href="/agencia-de-publicidad-digital">agencia de publicidad digital orientada a datos</a> con el que gestionamos cuentas B2B.</p>
        <p>Y se potencia con el resto del sistema: <a href="/google-ads">Google Ads</a> para capturar la demanda existente, <a href="/meta-ads">Meta</a> para generarla, y una medición que une los puntos. Si todavía estás definiendo el mix, te puede servir <a href="/blog/google-ads-vs-meta-ads-b2b">Google Ads vs Meta Ads para B2B</a>.</p>

        <h2>En resumen</h2>
        <p>Medir conversiones offline no es opcional en B2B serio: es la diferencia entre enseñarle a Google a traer formularios o a traer clientes. La integración con HubSpot, el GCLID y un mapeo de etapas bien pensado convierten tu cuenta en un sistema que aprende de tu pipeline real. Optimizá por lo que factura, no por lo que se completa.</p>
      </ArticlePage>
    </>
  )
}
