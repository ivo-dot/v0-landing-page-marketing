import type { Metadata } from "next"
import ArticlePage, { articleJsonLd, articleBreadcrumb, faqJsonLd } from "@/components/dk-article"
import { postBySlug, otherPosts } from "@/components/blog-posts"
import "../../didakto-redesign.css"

const post = postBySlug("google-ads-vs-meta-ads-b2b")!
const URL = "https://didaktomarketing.com/blog/" + post.slug
const lede =
  "La pregunta no es Google Ads o Meta Ads, sino cuándo usar cada uno. En B2B no son rivales: son momentos distintos del recorrido de compra. Te explicamos cómo elegir y, sobre todo, cómo combinarlos."

const faqs = [
  { q: "¿Qué genera leads B2B más baratos, Google o Meta?", a: "Meta suele tener un costo por lead más bajo, pero Google trae leads con más intención y mejor tasa de cierre. Por eso el costo por lead a secas engaña: hay que mirar el costo por lead calificado." },
  { q: "Si tengo poco presupuesto, ¿por cuál empiezo?", a: "En la mayoría de los casos B2B empezamos por Google Ads (Search): captura a quien ya te está buscando, con la intención más alta. Luego sumamos Meta para generar demanda y remarketing." },
  { q: "¿Meta Ads sirve para B2B o es solo para B2C?", a: "Sirve, y mucho. Los decisores B2B también usan Instagram y Facebook. Bien segmentado y con buenas creatividades, Meta es excelente para generar demanda y nutrir a un costo competitivo." },
  { q: "¿Y LinkedIn Ads dónde entra?", a: "LinkedIn es el tercer vértice: la mayor precisión de segmentación B2B (cargo, industria, empresa). Lo cubrimos en detalle en nuestro artículo sobre LinkedIn Ads para generación de leads B2B." },
]

export const metadata: Metadata = {
  title: "Google Ads vs Meta Ads para B2B: cuál conviene",
  description:
    "Google Ads vs Meta Ads para B2B: diferencias, cuándo usar cada uno, tabla comparativa y cómo combinarlos en una estrategia full-funnel para bajar tu costo por lead.",
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
          <p><strong>Google Ads captura demanda</strong> (gente que ya te busca, alta intención) y <strong>Meta Ads genera demanda</strong> (gente que todavía no te conoce). En B2B no elegís uno: usás Google para cosechar y Meta para sembrar. La combinación es la que baja el costo por lead calificado.</p>
        </div>

        <p>Es la pregunta que más nos hacen las empresas B2B: "¿invierto en Google o en Meta?". Y casi siempre está mal planteada. Son canales que resuelven <strong>problemas distintos</strong> del recorrido de compra. Compararlos de frente es como preguntar si conviene un martillo o un destornillador.</p>

        <h2>La diferencia clave: intención vs. descubrimiento</h2>
        <p>Todo se reduce a una distinción:</p>
        <ul>
          <li><strong>Google Ads = intención.</strong> La persona escribe lo que necesita. Ya tiene un problema consciente y busca solución. Vos aparecés en ese momento exacto. Es <em>capturar</em> demanda que ya existe.</li>
          <li><strong>Meta Ads = descubrimiento.</strong> La persona está scrolleando, no te busca. Vos interrumpís con una propuesta relevante y le creás el interés. Es <em>generar</em> demanda nueva.</li>
        </ul>
        <p>Esta diferencia lo explica casi todo: por qué Google suele cerrar mejor, por qué Meta suele ser más barato por lead, y por qué necesitás los dos.</p>

        <h2>Cuándo conviene Google Ads</h2>
        <p>Google brilla cuando <strong>existe búsqueda activa</strong> de tu categoría. Si tus clientes buscan "proveedor de [tu producto]", "software de [tu rubro]" o "agencia de [tu servicio]", ahí hay dinero esperando.</p>
        <ul>
          <li>Mejor para: productos/servicios con demanda consciente y ciclos donde la intención manda.</li>
          <li>Fortaleza: la tasa de cierre más alta, porque llegás en el momento de necesidad.</li>
          <li>A cuidar: la competencia puja por las mismas palabras, así que el CPC puede ser alto. La estructura, los negativos y la medición lo son todo.</li>
        </ul>
        <p>Lo desarrollamos en <a href="/google-ads">gestión de Google Ads</a>.</p>

        <h2>Cuándo conviene Meta Ads</h2>
        <p>Meta brilla cuando necesitás <strong>crear conciencia</strong> o tu categoría todavía no se busca masivamente. También es el mejor canal para remarketing: recuperar a quien visitó tu sitio y no convirtió.</p>
        <ul>
          <li>Mejor para: generar demanda, awareness, remarketing y volumen de leads a costo competitivo.</li>
          <li>Fortaleza: alcance enorme, segmentación por intereses y comportamiento, y un terreno creativo donde un buen ángulo cambia los números.</li>
          <li>A cuidar: la intención es menor, así que la calidad del lead exige más filtros y una medición sólida (API de Conversiones).</li>
        </ul>
        <p>Lo desarrollamos en <a href="/meta-ads">gestión de Meta Ads</a>.</p>

        <h2>Google Ads vs Meta Ads: comparación rápida</h2>
        <div className="dktable">
          <table>
            <thead>
              <tr><th>Criterio</th><th>Google Ads</th><th>Meta Ads</th></tr>
            </thead>
            <tbody>
              <tr><td>Tipo de demanda</td><td>Captura (intención)</td><td>Genera (descubrimiento)</td></tr>
              <tr><td>Intención del usuario</td><td>Alta</td><td>Baja / media</td></tr>
              <tr><td>Costo por lead</td><td>Más alto</td><td>Más bajo</td></tr>
              <tr><td>Tasa de cierre</td><td>Mayor</td><td>Menor (requiere nutrición)</td></tr>
              <tr><td>Segmentación</td><td>Por palabra clave e intención</td><td>Por interés, comportamiento y perfil</td></tr>
              <tr><td>Rol en el funnel</td><td>Fondo (decisión)</td><td>Arriba y medio (interés)</td></tr>
              <tr><td>Mejor para</td><td>Demanda existente</td><td>Awareness y remarketing</td></tr>
            </tbody>
          </table>
        </div>

        <h2>La respuesta real: combinarlos</h2>
        <p>Las empresas que mejor escalan no eligen. Arman un <strong>sistema full-funnel</strong>: Meta genera el interés y el alcance, Google captura a quien ya decidió, y el remarketing (en ambos) acompaña la decisión. El resultado es un costo por lead calificado más bajo que el de cualquier canal aislado.</p>
        <p>Una secuencia típica que aplicamos:</p>
        <ol>
          <li>Arrancamos con Google Search para cosechar la demanda existente y validar oferta y medición.</li>
          <li>Sumamos Meta para ampliar alcance, generar demanda y hacer remarketing de los visitantes de Google.</li>
          <li>Optimizamos todo por calidad de lead, no por costo por formulario.</li>
        </ol>

        <h2>¿Y LinkedIn Ads?</h2>
        <p>Si vendés a un perfil muy específico (por cargo, industria o empresa), LinkedIn aporta una precisión que ni Google ni Meta tienen. Es más caro por clic, pero para ciertos negocios B2B es el canal de mejor costo por oportunidad. Lo analizamos en <a href="/blog/linkedin-ads-para-generacion-de-leads-b2b">LinkedIn Ads para generación de leads B2B, ¿funciona?</a></p>

        <h2>En resumen</h2>
        <p>Google Ads y Meta Ads no compiten: se complementan. La verdadera pregunta no es "¿cuál?", sino "¿cómo los orquesto según mi funnel?". Y esa respuesta empieza siempre por entender tu negocio, no por abrir cuentas.</p>
      </ArticlePage>
    </>
  )
}
