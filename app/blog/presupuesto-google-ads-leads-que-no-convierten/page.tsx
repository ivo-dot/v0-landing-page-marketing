import type { Metadata } from "next"
import ArticlePage, { articleJsonLd, articleBreadcrumb, faqJsonLd } from "@/components/dk-article"
import { postBySlug, otherPosts } from "@/components/blog-posts"
import "../../didakto-redesign.css"

const post = postBySlug("presupuesto-google-ads-leads-que-no-convierten")!
const URL = "https://didaktomarketing.com/blog/" + post.slug
const lede =
  "Un lead que tu equipo de ventas descarta no es gratis: lo pagaste en la pauta y lo volvés a pagar en el tiempo comercial que se gasta filtrándolo. En B2B, gran parte del presupuesto de Google Ads se fuga por ahí, en silencio. Veamos dónde y cómo cerrar la canilla."

const faqs = [
  { q: "¿Por qué digo que un lead malo se paga dos veces?", a: "Primero lo pagás en la pauta: invertiste para generar ese formulario. Después lo paga tu equipo comercial en horas: alguien lo llama, lo califica y lo descarta. Si la mitad de tus leads no sirven, estás financiando dos veces una actividad que no produce ingresos, y encima distraés a ventas de los leads buenos." },
  { q: "¿Cuáles son las fugas de presupuesto más comunes en Google Ads B2B?", a: "Las más frecuentes: términos de búsqueda irrelevantes sin palabras clave negativas, segmentación geográfica o de público demasiado amplia, optimizar por 'envío de formulario' en vez de por leads calificados, concordancia amplia sin control, y tráfico de búsquedas informativas (gente investigando, no comprando) tratado como si fuera de intención de compra." },
  { q: "¿Las palabras clave negativas realmente mueven la aguja?", a: "Mucho. En cuentas B2B desordenadas es habitual que entre un 20 y un 40 por ciento de la inversión se vaya en términos de búsqueda que nunca iban a comprar. Una lista de negativas bien mantenida es de las acciones de mayor retorno y menor riesgo que existen en una cuenta." },
  { q: "¿Cómo sé si estoy malgastando presupuesto si todo 'parece' funcionar?", a: "Si solo mirás métricas de la plataforma (CPL, CTR, conversiones), todo puede verse bien mientras el dinero se fuga. La señal aparece cuando cruzás la pauta con el CRM: ahí ves qué campañas traen leads que ventas descarta y cuáles traen oportunidades reales. Sin esa conexión, estás optimizando a ciegas." },
]

export const metadata: Metadata = {
  title: "Presupuesto Google Ads: leads que no convierten | Didakto",
  description:
    "Dónde se fuga el presupuesto de Google Ads en B2B y cómo dejar de pagar por leads que tu equipo de ventas descarta. Palabras clave negativas, segmentación y medición real.",
  alternates: { canonical: URL },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post, lede)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleBreadcrumb(post)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <ArticlePage post={post} lede={lede} faqs={faqs} related={otherPosts(post.slug).slice(0, 3)}>
        <div className="keytakeaway">
          <b>Respuesta corta</b>
          <p>Cada lead que ventas descarta lo pagaste <strong>dos veces</strong>: en la pauta y en el tiempo comercial. La mayor parte de esa fuga se corta con tres cosas: <strong>palabras clave negativas</strong>, <strong>segmentación más fina</strong> y <strong>optimizar por leads calificados</strong>, no por formularios. No es gastar más; es dejar de gastar mal.</p>
        </div>

        <p>Cuando una cuenta de Google Ads B2B "no rinde", el primer reflejo suele ser pedir más presupuesto. Pero antes de abrir más la canilla, conviene revisar cuánta agua se está yendo por las grietas. Y en la mayoría de las cuentas que auditamos, la respuesta es: bastante.</p>
        <p>El gasto desperdiciado en B2B es traicionero porque es invisible desde la plataforma. El reporte muestra clics, conversiones y un costo por lead que hasta puede ser bueno. Lo que no muestra es que una parte de esos leads nunca tuvo posibilidad de comprar.</p>

        <h2>Un lead malo no es gratis</h2>
        <p>Hay una idea peligrosa que circula: "un lead de más no hace daño, total ya pagué el clic". Falso. Un lead que no califica te cuesta en dos monedas:</p>
        <ul>
          <li><strong>Pauta:</strong> invertiste para generar ese formulario.</li>
          <li><strong>Tiempo comercial:</strong> alguien de ventas lo tiene que contactar, calificar y descartar. Multiplicá eso por decenas de leads flojos al mes.</li>
        </ul>
        <p>Y hay un tercer costo, más sutil: cuando ventas se acostumbra a que "los leads de marketing no sirven", deja de atenderlos rápido, y los buenos se enfrían en la cola junto con los malos. La mala calidad contamina a la buena.</p>
        <blockquote>No tenés un problema de cantidad de leads. Tenés un problema de cuántos de ellos tu equipo puede convertir en plata.</blockquote>

        <h2>Dónde se fuga el presupuesto</h2>
        <div className="dktable">
          <table>
            <thead>
              <tr><th>Fuga</th><th>Qué pasa</th><th>Cómo se corta</th></tr>
            </thead>
            <tbody>
              <tr><td>Sin palabras clave negativas</td><td>Pagás clics de búsquedas que nunca iban a comprar</td><td>Revisar el informe de términos de búsqueda y sumar negativas cada semana</td></tr>
              <tr><td>Concordancia amplia sin control</td><td>Google muestra el anuncio en búsquedas tangenciales</td><td>Combinar tipos de concordancia y vigilar de cerca</td></tr>
              <tr><td>Segmentación muy amplia</td><td>Llega a zonas o públicos fuera de tu cliente ideal</td><td>Acotar geografía, idioma y públicos</td></tr>
              <tr><td>Intención informativa</td><td>Captás a quien investiga, no a quien compra</td><td>Separar campañas por intención y ofertas distintas</td></tr>
              <tr><td>Optimizar por formulario</td><td>El algoritmo escala leads baratos, no buenos</td><td>Optimizar por leads calificados (conversiones offline)</td></tr>
            </tbody>
          </table>
        </div>

        <h2>El orden para taparlas</h2>
        <p>No hace falta hacer todo a la vez. El orden de mayor retorno y menor riesgo suele ser este:</p>
        <ol>
          <li><strong>Palabras clave negativas.</strong> Es lo más rápido y de mayor impacto. Entrá al informe de términos de búsqueda y vas a encontrar dinero tirado en términos que ni sabías que estabas comprando.</li>
          <li><strong>Afiná la segmentación.</strong> Geografía, horarios y públicos que reflejen a quién le vendés de verdad.</li>
          <li><strong>Revisá la oferta de cada campaña.</strong> Una landing que pide cotización filtra mejor que una que regala un PDF. A veces subir la "fricción" correcta mejora la calidad.</li>
          <li><strong>Cambiá la señal de optimización.</strong> Pasá de "envío de formulario" a "lead calificado", devolviéndole a Google las conversiones offline desde tu CRM.</li>
        </ol>

        <h2>La diferencia entre recortar y afinar</h2>
        <p>Cerrar fugas no es lo mismo que recortar presupuesto. Recortar baja el volumen de todo, lo bueno y lo malo. Afinar saca lo que no sirve y deja más aire para escalar lo que sí. Después de una limpieza, es habitual que la misma inversión genere menos leads totales pero más oportunidades reales: exactamente lo que querés.</p>
        <p>Y para saber qué es "lo bueno" y qué es "lo malo" necesitás ver más allá del formulario. Esa medición —el costo por cliente, no por lead— es la que vuelve accionable todo lo anterior; la desarrollamos en <a href="/blog/costo-por-lead-vs-costo-por-cliente">Costo por lead vs costo por cliente</a>.</p>

        <h2>En resumen</h2>
        <p>Antes de pedir más presupuesto, asegurate de no estar regándolo. En B2B, las grandes fugas son casi siempre las mismas: falta de negativas, segmentación floja y optimizar por la métrica equivocada. Taparlas no cuesta plata, la ahorra. Es el trabajo menos glamoroso de una <a href="/google-ads">cuenta de Google Ads</a> bien gestionada, y el de mayor retorno.</p>
      </ArticlePage>
    </>
  )
}
