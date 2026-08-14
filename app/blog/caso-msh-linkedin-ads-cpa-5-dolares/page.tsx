import type { Metadata } from "next"
import ArticlePage, { articleJsonLd, articleBreadcrumb, faqJsonLd } from "@/components/dk-article"
import { postBySlug, otherPosts } from "@/components/blog-posts"
import "../../didakto-redesign.css"

const post = postBySlug("caso-msh-linkedin-ads-cpa-5-dolares")!
const URL = "https://didaktomarketing.com/blog/" + post.slug
const lede =
  "MSH Group necesitaba llegar a perfiles técnicos y profesionales de Recursos Humanos, un público que no se deja segmentar bien en la mayoría de las plataformas. Así usamos LinkedIn Ads para bajar el costo por lead calificado a USD 5."

const faqs = [
  { q: "¿USD 5 de CPA en LinkedIn Ads es un caso excepcional?", a: "Es un resultado logrado con una combinación específica de segmentación fina (cargo, industria, seniority) y una oferta pensada para el público exacto de MSH, no un promedio garantizado para cualquier cuenta. El CPC de LinkedIn suele ser el más alto del mercado; llegar a un CPA bajo depende de acertar la segmentación y el mensaje, no de la plataforma sola." },
  { q: "¿Por qué LinkedIn y no solo Google Ads para este caso?", a: "Porque el público de MSH —perfiles técnicos y profesionales de RRHH en industrias específicas— no siempre está buscando activamente en Google. LinkedIn permite construir esa audiencia por cargo y empresa sin depender de que la persona escriba una búsqueda. Comparamos ambos enfoques en Google Ads vs LinkedIn Ads para B2B." },
  { q: "¿Qué tipo de empresa se beneficia más de este enfoque?", a: "Negocios B2B con un comprador identificable por cargo, industria o seniority, y con un ticket que justifique el CPC más alto de LinkedIn. RRHH, servicios profesionales, tecnología e industria son los sectores donde más lo vemos funcionar." },
  { q: "¿Combinaron LinkedIn con otro canal en esta cuenta?", a: "Sí, con Google Ads para capturar la demanda de quienes ya estaban buscando activamente. LinkedIn aportó la precisión de segmentación; Google aportó la intención. La combinación es la que sostiene el costo por lead calificado bajo en el tiempo." },
]

export const metadata: Metadata = {
  title: "Caso MSH: CPA de USD 5 en LinkedIn Ads B2B (Caso Real)",
  description:
    "Cómo bajamos el costo por lead en LinkedIn Ads a USD 5 para MSH Group segmentando por cargo e industria en RRHH. El enfoque completo de nuestra agencia de LinkedIn Ads B2B.",
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
          <p><strong>USD 5 de CPA en LinkedIn Ads</strong>, con leads calificados en segmentos técnicos y profesionales de Recursos Humanos, combinando LinkedIn y Google Ads como los dos canales de la estrategia.</p>
        </div>

        <p>MSH Group opera en Recursos Humanos, un rubro donde el "cliente ideal" no es una persona cualquiera: es un perfil específico —director de RRHH, gerente de talento, según la industria— dentro de empresas de cierto tamaño. Ese tipo de público es exactamente para lo que existe <a href="/linkedin-ads-b2b">LinkedIn Ads</a>, pero también es fácil de desperdiciar si la segmentación es amplia y el mensaje es genérico.</p>
        <p>Como cuenta el propio equipo de MSH:</p>
        <blockquote>"Bajamos el CPA en LinkedIn a USD 5 con leads realmente calificados." — MSH Group, Recursos Humanos</blockquote>

        <h2>El desafío: precisión sin quemar presupuesto</h2>
        <p>El problema que resolvimos no fue "conseguir leads" —eso es relativamente fácil en cualquier plataforma bajando los filtros de calificación. El problema fue conseguir <strong>leads que encajaran con el perfil real de comprador de MSH</strong> sin que el costo por lead se disparara, algo habitual en LinkedIn si la segmentación queda demasiado abierta.</p>

        <h2>Cómo lo trabajamos</h2>
        <h3>1. Segmentación fina por cargo, industria y seniority</h3>
        <p>En vez de apuntar a "profesionales de RRHH" en general, acotamos por cargo específico, nivel de seniority e industria. Cuanto más preciso el público, más caro el CPC individual, pero mucho menor el desperdicio en clics de gente que nunca iba a calificar.</p>
        <h3>2. Lead Gen Forms nativos</h3>
        <p>Usamos los formularios nativos de LinkedIn, que se autocompletan con los datos del perfil profesional del usuario. Bajan la fricción de completar el formulario y, en nuestra experiencia, suben la tasa de conversión sin resignar calidad, porque la información que traen (cargo, empresa) ya viene verificada por LinkedIn.</p>
        <h3>3. Oferta y mensaje pensados para el comprador B2B de RRHH</h3>
        <p>El copy y la oferta se ajustaron al lenguaje y las prioridades reales de ese comprador, no a un mensaje genérico de "generación de leads". En B2B, el mensaje correcto para el cargo correcto es lo que más mueve la aguja del costo por lead calificado.</p>
        <h3>4. Integración con CRM</h3>
        <p>Los leads que entraban por LinkedIn se sincronizaban directo con el equipo comercial de MSH, sin fricción manual entre la plataforma y el pipeline. Esto también nos permitió, con el tiempo, ver qué combinaciones de cargo e industria terminaban en oportunidades reales, no solo en formularios completados — la misma lógica que desarrollamos en <a href="/blog/costo-por-lead-vs-costo-por-cliente">costo por lead vs costo por cliente</a>.</p>

        <h2>Por qué no fue solo LinkedIn</h2>
        <p>LinkedIn aportó la precisión de segmentación, pero sumamos <a href="/google-ads">Google Ads</a> para capturar a quienes ya estaban buscando activamente soluciones de RRHH. Es la misma lógica que explicamos en <a href="/blog/google-ads-vs-linkedin-ads-b2b">Google Ads vs LinkedIn Ads para B2B</a>: LinkedIn parte de la identidad del comprador, Google parte de su intención. Usar los dos canales sostiene un costo por lead calificado más bajo que cualquiera de los dos por separado.</p>

        <h2>Qué de esto es replicable</h2>
        <p>Este enfoque funciona para cualquier negocio B2B con un comprador identificable por cargo o industria y un ticket que justifique el CPC más alto de LinkedIn: servicios profesionales, tecnología, industria, y por supuesto RRHH. Es el mismo proceso de diagnóstico y medición que aplicamos como <a href="/agencia-de-publicidad-digital">agencia de publicidad digital especializada en B2B</a> en cualquier cuenta, incluyendo el caso de <a href="/blog/caso-sika-agencia-publicidad-digital-b2b">Sika, donde bajamos el CPA un 72%</a> en un sector completamente distinto.</p>

        <h2>En resumen</h2>
        <p>El CPA de USD 5 de MSH no vino de bajar los estándares de calificación, vino de subir la precisión: segmentación fina, formularios nativos, mensaje específico y una integración con CRM que permitió seguir aprendiendo. Si tu comprador B2B es un perfil identificable por cargo o industria, esta es la forma correcta de acercarse a LinkedIn Ads.</p>
      </ArticlePage>
    </>
  )
}
