import type { Metadata } from "next"
import ArticlePage, { articleJsonLd, articleBreadcrumb, faqJsonLd } from "@/components/dk-article"
import { postBySlug, otherPosts } from "@/components/blog-posts"
import "../../didakto-redesign.css"

const post = postBySlug("geo-aeo-como-aparecer-en-chatgpt")!
const URL = "https://didaktomarketing.com/blog/" + post.slug
const lede =
  "Cada vez más compradores B2B le preguntan a ChatGPT o Perplexity antes (o en vez) de buscar en Google. Qué es la optimización para motores de respuesta (GEO/AEO), en qué se diferencia del SEO clásico, y los 6 pasos concretos para que la IA te mencione."

const faqs = [
  { q: "¿Qué es GEO/AEO?", a: "GEO (Generative Engine Optimization) y AEO (Answer Engine Optimization) son dos nombres para el mismo objetivo: optimizar tu presencia digital para que los motores de IA generativa (ChatGPT, Perplexity, Gemini, Copilot, los AI Overviews de Google) te citen o recomienden como respuesta, en vez de solo listarte entre diez links azules." },
  { q: "¿GEO reemplaza al SEO tradicional?", a: "No, lo complementa y depende de él. Los motores de IA siguen rastreando e indexando la web igual que Google; si tu sitio tiene problemas técnicos de indexación, tampoco va a poder ser citado por una IA. El SEO técnico y de contenido sigue siendo la base." },
  { q: "¿Cómo sé si ChatGPT ya me está mandando tráfico?", a: "En GA4, mirá el reporte de eventos o de adquisición filtrado por fuente/medio: el tráfico desde IA suele aparecer como chatgpt.com / referral, chatgpt.com / ai-assistant, perplexity.ai / referral o similar. Si aparece, ya estás siendo citado; el trabajo de GEO es hacer que eso crezca de forma consistente." },
  { q: "¿Cuánto tiempo toma ver resultados en GEO?", a: "Similar al SEO: semanas para empezar a aparecer citado en consultas específicas y de nicho, y meses para consolidar presencia en temas competitivos. Los motores de IA suelen actualizar sus fuentes con más frecuencia que un índice de búsqueda tradicional, así que cambios de contenido bien hechos pueden reflejarse relativamente rápido." },
]

export const metadata: Metadata = {
  title: "GEO/AEO: cómo lograr que ChatGPT recomiende tu marca B2B",
  description:
    "Qué es la optimización para motores de respuesta (GEO/AEO), en qué se diferencia del SEO clásico y los 6 pasos concretos para que ChatGPT, Perplexity y Google AI Overviews mencionen tu marca B2B.",
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
          <p><strong>GEO/AEO</strong> es optimizar tu contenido y tu sitio para que los motores de IA generativa (ChatGPT, Perplexity, Gemini, AI Overviews de Google) te <strong>citen o recomienden</strong> dentro de una respuesta conversacional, no solo que te posicionen en una lista de links. Se construye sobre la misma base técnica del SEO, pero suma señales nuevas: respuestas claras y directas, datos estructurados, y contenido que una IA pueda citar sin ambigüedad.</p>
        </div>

        <p>El comportamiento de búsqueda cambió más en los últimos dos años que en la década anterior. Cada vez más compradores B2B —sobre todo en las primeras etapas de investigación— le preguntan directo a ChatGPT o Perplexity "¿qué agencia de publicidad digital me conviene para B2B?" en vez de escribir esa misma consulta en Google y revisar diez resultados.</p>
        <p>Si en ese momento tu marca no aparece en la respuesta, prácticamente no existís para esa persona. No importa cuán buena sea tu web si la IA nunca la menciona. A esta disciplina se la empezó a llamar <strong>GEO</strong> (Generative Engine Optimization) o <strong>AEO</strong> (Answer Engine Optimization): dos nombres para el mismo objetivo, optimizar para ser la respuesta, no solo un resultado.</p>

        <h2>En qué se parece y en qué se diferencia del SEO</h2>
        <p>Se parece en la base: los motores de IA generativa no inventan de la nada, en su mayoría rastrean e indexan la web (directamente o vía motores de búsqueda a los que están conectados) igual que Google. Si tu sitio tiene problemas de indexación, velocidad o estructura —lo que repasamos en <a href="/blog/seo-tecnico-para-b2b-por-donde-empezar">SEO técnico para B2B: por dónde empezar</a>—, tampoco vas a poder ser citado por una IA. Esa base no se salta.</p>
        <p>Se diferencia en lo que el motor busca extraer y citar:</p>
        <ul>
          <li><strong>SEO clásico:</strong> optimiza para rankear una página entera frente a una keyword, compitiendo por clics.</li>
          <li><strong>GEO/AEO:</strong> optimiza para que un <em>fragmento</em> específico de tu contenido —una definición, un dato, una recomendación— sea lo suficientemente claro y verificable como para que la IA lo extraiga y lo cite, con o sin clic posterior a tu sitio.</li>
        </ul>
        <blockquote>El SEO pelea por el lugar 1 de 10. El GEO pelea por ser la única frase que la IA decide repetir.</blockquote>

        <h2>Cómo saber si ya te está pasando</h2>
        <p>Antes de armar una estrategia, mirá si ya tenés señal. En GA4, andá al reporte de eventos o de adquisición de tráfico y filtrá por fuente/medio. El tráfico que llega desde una IA generativa suele identificarse como <code>chatgpt.com / referral</code>, <code>chatgpt.com / ai-assistant</code>, <code>perplexity.ai / referral</code> o similar, según cómo la IA arme el link de salida.</p>
        <p>Si ya aparece, aunque sea con pocos eventos, es una señal fuerte: significa que algo de tu contenido ya es lo bastante claro y confiable como para que una IA lo use como fuente. El trabajo de GEO, a partir de ahí, es hacer que esa mención deje de ser casualidad y se vuelva consistente.</p>

        <h2>6 pasos para trabajar GEO/AEO en serio</h2>
        <ol>
          <li>
            <strong>Escribí para responder, no para rankear.</strong> Los motores de IA priorizan contenido que responda una pregunta de forma directa y verificable en las primeras líneas, no que la rodee con 500 palabras de contexto antes de llegar al punto. Estructurá tus artículos con la respuesta corta arriba (como el bloque de "Respuesta corta" de este mismo artículo) y el desarrollo después.
          </li>
          <li>
            <strong>Sumá datos estructurados (schema).</strong> <code>FAQPage</code>, <code>Article</code>, <code>Organization</code> y <code>BreadcrumbList</code> le dan a la IA contexto explícito sobre qué es cada fragmento de tu página. No es opcional: es la misma señal que usan los buscadores tradicionales, y las IAs generativas la aprovechan igual o más para citar con precisión.
          </li>
          <li>
            <strong>Construí autoridad citable.</strong> Los motores de IA tienden a confiar en fuentes que ya son citadas por otros: prensa, estudios, casos con números reales, perfiles profesionales verificables (LinkedIn, autoría clara con nombre y credenciales). Un caso de éxito con cifras concretas —como el que armamos para <a href="/blog/caso-sika-agencia-publicidad-digital-b2b">Sika</a> o <a href="/blog/caso-msh-linkedin-ads-cpa-5-dolares">MSH</a>— es exactamente el tipo de contenido que una IA prefiere citar por sobre una afirmación genérica.
          </li>
          <li>
            <strong>Sé específico, no genérico.</strong> "Nuestra agencia mejora tus resultados" no es citable. "Bajamos el CPA de Sika en Meta y Google Ads un 72% en 4 meses" sí lo es. Cuanto más concreto y verificable el dato, más probable que la IA lo use tal cual.
          </li>
          <li>
            <strong>Cubrí las preguntas reales que hace tu comprador.</strong> Pensá en las consultas literales que alguien le haría a ChatGPT antes de contactarte: "¿cómo elijo una agencia de paid media B2B?", "¿Google Ads o LinkedIn Ads para mi industria?". Cada una de esas preguntas, respondida con claridad en un artículo propio, es una oportunidad de mención.
          </li>
          <li>
            <strong>Medí y ajustá.</strong> Seguí el tráfico de fuentes de IA en GA4 mes a mes. Si un tema empieza a traer visitas desde ChatGPT o Perplexity, profundizá ahí: es la señal más clara de qué contenido está funcionando como fuente.
          </li>
        </ol>

        <h2>Lo que no hay que hacer</h2>
        <p>No se trata de "hackear" el algoritmo con trucos de texto oculto o repetición forzada de keywords: los motores de IA son, si acaso, más sensibles que Google a contenido que suena manipulado o vacío, porque su trabajo es sintetizar información confiable. Tampoco se trata de abandonar el SEO clásico: como vimos, GEO se construye encima, no en lugar de.</p>

        <h2>En resumen</h2>
        <p>La forma en que se busca información cambió, y tu presencia en las respuestas de IA ya no es un experimento a futuro: es medible hoy mismo en tu GA4. Trabajarla no requiere reinventar tu estrategia de contenido, sino afinarla: respuestas más claras, datos más específicos, schema bien implementado y casos con números reales. Es, además, el complemento natural de la <a href="/blog/publicidad-en-chatgpt">publicidad que ya empezó a aparecer dentro de ChatGPT</a>: primero ganás la mención orgánica, después evaluás si vale la pena pagar por más. Si querés que revisemos juntos dónde está parado tu sitio, <a href="/agencia-de-publicidad-digital">hablemos</a>.</p>
      </ArticlePage>
    </>
  )
}
