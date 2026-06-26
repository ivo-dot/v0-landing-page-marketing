import type { Metadata } from "next"
import ArticlePage, { articleJsonLd, articleBreadcrumb, faqJsonLd } from "@/components/dk-article"
import { postBySlug, otherPosts } from "@/components/blog-posts"
import "../../didakto-redesign.css"

const post = postBySlug("google-ads-vs-linkedin-ads-b2b")!
const URL = "https://didaktomarketing.com/blog/" + post.slug
const lede =
  "Google Ads y LinkedIn Ads parecen competir por el mismo presupuesto, pero hacen trabajos distintos. Google captura a quien ya está buscando una solución; LinkedIn te deja elegir exactamente a quién le hablás, esté buscando o no. La decisión no depende del canal: depende de tu cliente."

const faqs = [
  { q: "¿Qué conviene más para B2B, Google Ads o LinkedIn Ads?", a: "Depende de si existe demanda de búsqueda para lo que vendés. Si tu cliente googlea tu categoría (un servicio, un producto con nombre conocido), Google Ads captura esa intención al menor costo. Si tu cliente es un rol o industria muy específicos que no busca activamente —o tu ticket es alto y tu público chico— LinkedIn te permite apuntarle con una precisión que Google no tiene." },
  { q: "¿Por qué el CPC de LinkedIn es tan alto?", a: "Porque estás pagando por precisión: segmentás por cargo, empresa, industria, seniority y tamaño de compañía. El CPC alto (suele ser varias veces el de Google) no es el problema en sí; el problema es usarlo para vender algo de ticket bajo o para un público amplio. Con el ticket y la segmentación correctos, ese clic caro puede ser el más rentable." },
  { q: "¿Se pueden usar Google y LinkedIn juntos?", a: "Sí, y suele ser lo ideal. LinkedIn genera conocimiento en un público definido que todavía no te busca; Google captura a esa misma gente cuando, semanas después, empieza a buscar una solución. Es la diferencia entre sembrar la demanda y cosecharla. Medirlos en conjunto exige conectar ambos al CRM para no atribuir mal." },
  { q: "¿Cuál da leads más calificados?", a: "Ninguno gana por defecto. Google trae intención (gente que ya tiene el problema) pero con menos control sobre quién es. LinkedIn trae al perfil exacto que definiste, pero puede que todavía no esté en momento de compra. La calidad real solo se sabe cruzando los leads con el pipeline del CRM: ahí ves cuál canal, para tu negocio, termina en clientes." },
]

export const metadata: Metadata = {
  title: "Google Ads vs LinkedIn Ads para B2B | Didakto",
  description:
    "¿Google Ads o LinkedIn Ads para generar leads B2B? Intención de búsqueda vs segmentación por cargo e industria. Cuándo usar cada uno, qué esperar y cómo combinarlos.",
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
          <p><strong>Google Ads</strong> captura a quien <em>ya está buscando</em> lo que vendés: cosechás demanda existente. <strong>LinkedIn Ads</strong> te deja elegir <em>exactamente a quién</em> le hablás por cargo, empresa e industria, esté buscando o no: sembrás demanda en un público definido. La pregunta que decide no es "¿cuál es mejor?", sino "<strong>¿mi cliente ya está buscando, o todavía no sabe que existo?</strong>".</p>
        </div>

        <p>Es una de las preguntas que más nos llegan: "¿pongo la plata en Google o en LinkedIn?". Y casi siempre viene mal planteada, porque asume que los dos canales hacen lo mismo y compiten por el resultado. No es así. Hacen trabajos diferentes en momentos diferentes del recorrido de compra.</p>
        <p>Entender esa diferencia es lo que evita el error más caro: usar el canal correcto para el negocio equivocado, o esperar de uno lo que solo da el otro.</p>

        <h2>La diferencia de fondo: intención vs identidad</h2>
        <p>Todo se reduce a dos preguntas distintas que responde cada plataforma.</p>
        <ul>
          <li><strong>Google responde a la intención.</strong> Alguien escribe "software de gestión para constructoras" y, por ese instante, te está diciendo qué necesita. Google te deja aparecer justo ahí. No sabés quién es, pero sabés qué quiere.</li>
          <li><strong>LinkedIn responde a la identidad.</strong> Vos decís "quiero hablarle a directores de compras, de empresas de construcción de más de 50 empleados, en Argentina", y LinkedIn te muestra a esa gente. No sabés si hoy te necesitan, pero sabés exactamente quiénes son.</li>
        </ul>
        <p>Google parte del <em>problema</em>; LinkedIn parte de la <em>persona</em>. Esa es toda la película.</p>
        <blockquote>Google te encuentra clientes que ya tienen el problema. LinkedIn te deja elegir a quién plantarle el problema antes de que lo busque.</blockquote>

        <h2>Cuándo gana Google Ads</h2>
        <p>Google es tu canal cuando <strong>existe búsqueda</strong> para lo que ofrecés:</p>
        <ul>
          <li>Vendés algo que la gente activamente busca (un servicio, un repuesto, una categoría con nombre).</li>
          <li>Querés capturar demanda <em>ahora</em>, no construirla en meses.</li>
          <li>Tu público es lo bastante amplio como para que haya volumen de búsquedas.</li>
        </ul>
        <p>La ventaja: estás frente a alguien en momento de necesidad, lo que suele dar el menor costo por oportunidad. El límite: no podés crear demanda que no existe, y no elegís quién es la persona detrás de la búsqueda. Si nadie busca tu categoría, Google no tiene a quién mostrarte.</p>

        <h2>Cuándo gana LinkedIn Ads</h2>
        <p>LinkedIn es tu canal cuando <strong>el quién importa más que el cuándo</strong>:</p>
        <ul>
          <li>Tu cliente ideal es un rol o industria muy específicos (ABM, nichos).</li>
          <li>Vendés algo nuevo o poco conocido: nadie lo busca todavía porque no sabe que existe.</li>
          <li>Tu ticket es alto, así que un puñado de clientes correctos justifica un clic caro.</li>
          <li>Querés construir reconocimiento en un mercado acotado antes de que llegue el momento de compra.</li>
        </ul>
        <p>El famoso "CPC alto de LinkedIn" asusta, pero rara vez es el verdadero problema. Lo desarrollamos en <a href="/blog/linkedin-ads-para-generacion-de-leads-b2b">LinkedIn Ads para generación de leads B2B</a>: con el ticket y la segmentación correctos, ese clic caro puede ser el más rentable de tu mix. El error no es pagar caro; es pagar caro por el público o la oferta equivocados.</p>

        <h2>Google vs LinkedIn, lado a lado</h2>
        <div className="dktable">
          <table>
            <thead>
              <tr><th>Aspecto</th><th>Google Ads (búsqueda)</th><th>LinkedIn Ads</th></tr>
            </thead>
            <tbody>
              <tr><td>Parte de</td><td>La intención (qué busca)</td><td>La identidad (quién es)</td></tr>
              <tr><td>Tipo de demanda</td><td>La cosecha (existente)</td><td>La siembra (la genera)</td></tr>
              <tr><td>Segmentación</td><td>Por palabra clave</td><td>Por cargo, empresa, industria, seniority</td></tr>
              <tr><td>Costo por clic</td><td>Más bajo</td><td>Más alto (pagás precisión)</td></tr>
              <tr><td>Momento de compra</td><td>Activo, ahora</td><td>Puede ser futuro</td></tr>
              <tr><td>Ideal para</td><td>Categorías que se buscan</td><td>Nichos, ABM, ticket alto, productos nuevos</td></tr>
            </tbody>
          </table>
        </div>

        <h2>La pregunta que define la decisión</h2>
        <p>Si tenés que quedarte con una sola idea, es esta: <strong>¿tu cliente ya está buscando lo que vendés?</strong></p>
        <ul>
          <li><strong>Sí, lo busca.</strong> Empezá por Google. Hay demanda esperando; cosechala antes de gastar en crearla.</li>
          <li><strong>No, todavía no.</strong> Empezá por LinkedIn. Necesitás llegar a un público definido y plantarles la necesidad, porque no van a buscarte solos.</li>
          <li><strong>Algunos sí y otros no.</strong> Es el caso más común en B2B, y la respuesta es combinarlos (sigue abajo).</li>
        </ul>
        <p>El presupuesto, el CPC y el formato vienen <em>después</em> de responder esa pregunta, no antes.</p>

        <h2>No es uno u otro: cómo se combinan</h2>
        <p>En la mayoría de los negocios B2B serios, la respuesta madura es "los dos, con roles claros":</p>
        <ol>
          <li><strong>LinkedIn siembra.</strong> Le muestra tu marca y tu propuesta a un público elegido a dedo, que hoy no te busca.</li>
          <li><strong>Google cosecha.</strong> Cuando parte de ese público —ya tibio— empieza a buscar una solución, estás ahí para capturarlo al menor costo.</li>
        </ol>
        <p>Usados así no compiten: se potencian. LinkedIn aumenta el volumen y la calidad de las búsquedas de marca que después captura Google. Si estás definiendo todo el mix, también te sirve <a href="/blog/google-ads-vs-meta-ads-b2b">Google Ads vs Meta Ads para B2B</a>, que cubre el otro eje (captar vs generar demanda en redes).</p>

        <h2>Cómo medirlos sin engañarte</h2>
        <p>Acá está la trampa más común al combinar canales: atribuir mal. Si mirás solo el costo por lead de cada plataforma, LinkedIn casi siempre "pierde" (clics más caros) aunque sea el que arrancó la conversación. La única forma de comparar en serio es <strong>conectar ambos al CRM</strong> y mirar qué canal termina en clientes, no en formularios. Esa medición de costo por cliente —no por lead— la desarrollamos en <a href="/blog/costo-por-lead-vs-costo-por-cliente">Costo por lead vs costo por cliente</a> y en <a href="/blog/google-ads-hubspot-conversiones-offline">conversiones offline con HubSpot</a>.</p>

        <h2>En resumen</h2>
        <p>Google y LinkedIn no compiten: cubren momentos distintos. Google captura intención existente al menor costo; LinkedIn te deja elegir a quién le hablás y crear demanda donde no la hay. Decidí con una sola pregunta —¿tu cliente ya está buscando?— y, si la respuesta es mixta, combinalos con roles claros y medilos contra el pipeline real. Ese es el trabajo de una <a href="/agencia-de-publicidad-digital">agencia de publicidad digital</a> que piensa en clientes, no en clics.</p>
      </ArticlePage>
    </>
  )
}
