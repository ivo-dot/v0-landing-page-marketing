import type { Metadata } from "next"
import ArticlePage, { articleJsonLd, articleBreadcrumb, faqJsonLd } from "@/components/dk-article"
import { postBySlug, otherPosts } from "@/components/blog-posts"
import "../../didakto-redesign.css"

const post = postBySlug("caso-sika-agencia-publicidad-digital-b2b")!
const URL = "https://didaktomarketing.com/blog/" + post.slug
const lede =
  "Sika es uno de los fabricantes de materiales de construcción más grandes del mundo. Así trabajamos como su agencia de publicidad digital especializada en B2B en varios mercados de LATAM y USA, y así se ven los números cuando el proceso se hace bien."

const faqs = [
  { q: "¿Qué hace distinto a Didakto de la agencia anterior de Sika?", a: "Empezamos por auditar lo que ya existía en vez de proponer campañas nuevas de entrada. Encontramos gasto mal distribuido, conversiones mal medidas en GA4/GTM y un plan de medios que no reflejaba dónde estaba realmente la demanda. El −72% de CPA es consecuencia de corregir esa base, no de un truco de puja." },
  { q: "¿Cuánto tardó en verse el resultado?", a: "Los cambios más importantes se sintieron en torno a los tres meses, una vez que la medición quedó validada y el plan de medios rediseñado tuvo tiempo de aprender. Es el mismo marco de tiempo que le damos a cualquier cuenta B2B nueva: primero estructura, después optimización." },
  { q: "¿Qué canales usaron para Sika?", a: "Meta y Google Ads como núcleo del plan de medios, con GA4 y Google Tag Manager como base de medición. En otros mercados de Sika (como Bolivia) sumamos TikTok, combinando pauta paga con contenido orgánico para categorías que se compran todo el año." },
  { q: "¿Este proceso se puede replicar en otra industria B2B?", a: "Sí. El proceso —auditoría, validación de medición, rediseño del plan de medios, optimización por calidad— no depende del rubro de Sika. Lo aplicamos igual en recursos humanos (MSH) o en cualquier empresa B2B con un pipeline que se pueda medir." },
]

export const metadata: Metadata = {
  title: "Caso Sika: −72% de CPA con una Agencia de Publicidad Digital B2B",
  description:
    "Cómo Didakto, como agencia de publicidad digital especializada en B2B, bajó el CPA de Sika un 72% frente a su agencia anterior: auditoría, medición en GA4/GTM y rediseño del plan de medios.",
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
          <b>Resultado en números</b>
          <p><strong>−72% de CPA</strong> frente a la agencia anterior, <strong>+2.191 conversiones</strong> combinadas entre Meta y Google Ads, y medición validada en GA4/GTM, en unos USD 5.000 de inversión durante los primeros tres meses de la cuenta de Sika USA.</p>
        </div>

        <p>Sika es un fabricante global de materiales para construcción — impermeabilizantes, adhesivos, selladores — con presencia en decenas de países. Cuando su equipo en USA nos buscó, ya venían de trabajar con otra agencia. La pauta corría, había leads, y sin embargo nadie podía responder con confianza una pregunta simple: <strong>¿ese presupuesto estaba bien invertido?</strong></p>
        <p>Esta es la reconstrucción de cómo trabajamos esa cuenta como <a href="/agencia-de-publicidad-digital">agencia de publicidad digital especializada en B2B</a>, y por qué el resultado no vino de "optimizar más fuerte" sino de corregir la base primero.</p>

        <h2>El punto de partida: gasto sin diagnóstico</h2>
        <p>El primer error que encontramos no fue una campaña mal armada, fue algo más básico: la cuenta no tenía un diagnóstico real detrás. Se pauteaba por inercia, replicando estructura de mes a mes, sin auditar si el presupuesto estaba yendo a las audiencias, plataformas y momentos correctos del embudo de construcción (que tiene compradores muy distintos: distribuidores, contratistas, arquitectos).</p>
        <p>Como contó el equipo de Sika USA sobre esa primera etapa:</p>
        <blockquote>"El diagnóstico inicial nos mostró dónde se perdía el presupuesto. En tres meses los números cambiaron radicalmente." — Equipo Sika USA</blockquote>

        <h2>Paso 1: auditar antes de tocar una sola campaña</h2>
        <p>Antes de crear o pausar nada, hicimos lo que hacemos con cualquier cuenta nueva: auditamos la estructura existente en Meta y Google Ads, revisamos qué se estaba midiendo como conversión y comparamos ese gasto contra los productos y mercados que realmente generaban demanda. En una cuenta con múltiples líneas de producto (impermeabilizantes, adhesivos, selladores), es fácil que el presupuesto se reparta parejo en vez de dirigirse a lo que factura.</p>

        <h2>Paso 2: validar la medición en GA4 y GTM</h2>
        <p>Sin medición confiable, cualquier optimización es un tiro a ciegas. Auditamos e implementamos Google Analytics 4 y Google Tag Manager, validando que cada conversión que veía Google Ads reflejara una acción real de negocio (contacto, cotización, distribuidor), no un evento mal configurado inflando el reporte. Este paso —el menos vistoso de todos— es casi siempre el que más presupuesto salva. Lo desarrollamos en detalle, aplicado a B2B, en <a href="/blog/ga4-para-b2b-como-usarlo">GA4 para el sector B2B: cómo usarlo</a>.</p>

        <h2>Paso 3: rediseñar el plan de medios</h2>
        <p>Con el diagnóstico y la medición validados, rediseñamos el plan de medios en <a href="/meta-ads">Meta Ads</a> y <a href="/google-ads">Google Ads</a>: reasignamos presupuesto hacia las campañas y públicos que la auditoría mostró como subinvertidos, y recortamos el gasto que sostenía volumen sin calidad. No fue "subir el presupuesto total", fue moverlo adentro de la cuenta.</p>

        <h2>Los resultados</h2>
        <div className="dktable">
          <table>
            <thead>
              <tr><th>Métrica</th><th>Resultado</th></tr>
            </thead>
            <tbody>
              <tr><td>CPA vs. agencia anterior</td><td>−72%</td></tr>
              <tr><td>Conversiones (Meta + Google)</td><td>+2.191</td></tr>
              <tr><td>Inversión (primeros 3 meses)</td><td>~USD 5.000</td></tr>
              <tr><td>Medición</td><td>GA4 + GTM validados</td></tr>
            </tbody>
          </table>
        </div>
        <p>En otra cuenta de la misma familia de marca, Sika Pro Select, el mismo enfoque —foco agresivo en costo por lead con la segmentación corregida— bajó el CPA de USD 1 a USD 0,10: una reducción del 90%. Y en Sika Bolivia, donde arrancamos desde cero, la estrategia always-on en Meta Ads sumó más de 572 leads y lanzamos TikTok combinando pauta con contenido orgánico, sumando más de 1.500 seguidores y 200 registros a eventos.</p>

        <h2>Qué de esto es replicable (y qué no)</h2>
        <p>El sector de Sika —construcción, con compradores técnicos y ciclos de decisión largos— tiene sus particularidades. Pero el <strong>proceso</strong> que produjo estos números no depende del rubro: auditoría honesta antes de gastar más, medición validada antes de optimizar, y un plan de medios que sigue a los datos y no a la inercia del mes anterior. Es el mismo proceso que aplicamos en <a href="/linkedin-ads-b2b">LinkedIn Ads</a> para MSH Group (recursos humanos), donde llegamos a un CPA de USD 5 en un sector completamente distinto.</p>
        <p>Si tu cuenta lleva meses corriendo y nadie puede explicarte con precisión en qué se está yendo el presupuesto, ese es exactamente el síntoma que resolvimos acá. Podés ver cómo evaluamos ese diagnóstico en <a href="/blog/como-elegir-agencia-de-publicidad-digital-b2b">cómo elegir una agencia de publicidad digital B2B</a>.</p>

        <h2>En resumen</h2>
        <p>El −72% de CPA de Sika no salió de una campaña nueva ni de un truco de puja: salió de auditar antes de gastar, medir antes de optimizar y mover el presupuesto según datos reales del negocio. Ese es el proceso que aplicamos como <a href="/agencia-de-publicidad-digital">agencia de publicidad digital especializada en B2B</a> con cada cliente, sin importar la industria.</p>
      </ArticlePage>
    </>
  )
}
