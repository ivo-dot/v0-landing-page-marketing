import type { Metadata } from "next"
import ArticlePage, { articleJsonLd, articleBreadcrumb, faqJsonLd } from "@/components/dk-article"
import { postBySlug, otherPosts } from "@/components/blog-posts"
import "../../didakto-redesign.css"

const post = postBySlug("como-elegir-agencia-de-publicidad-digital-b2b")!
const URL = "https://didaktomarketing.com/blog/" + post.slug
const lede =
  "Cualquier agencia te va a mostrar un portfolio prolijo y case studies con curvas ascendentes. Lo que no te muestran —y lo que de verdad predice si vas a crecer con ellos— son seis cosas puntuales que podés preguntar en la primera reunión."

const faqs = [
  { q: "¿Cuánto tiempo hay que probar una agencia antes de evaluar resultados?", a: "En B2B, entre 60 y 90 días como mínimo. Las primeras semanas se van en auditoría, medición y estructura; recién ahí empezás a optimizar sobre datos reales. Una agencia que promete resultados en la primera quincena, o no entendió tu ciclo de venta, o te está vendiendo humo. Desconfiá también de la que no te da ningún marco de tiempo." },
  { q: "¿Agencia grande o boutique especializada en B2B?", a: "Depende de qué necesitás. Una agencia grande generalista suele tener más recursos pero también más rotación de cuentas, procesos rígidos y equipos que reparten su atención entre e-commerce, B2C y B2B sin especializarse en ninguno. Una boutique especializada en B2B entiende ciclos de venta largos, ABM y atribución offline sin que se lo tengas que explicar — pero validá su capacidad real (cartera, casos, referencias) antes de asumir que 'chica' es sinónimo de 'buena'." },
  { q: "¿Qué reporte debería exigir como mínimo?", a: "Uno que muestre el pipeline completo, no solo la pauta: leads generados, MQL, SQL, oportunidades y, si es posible, clientes cerrados con su fuente de origen. Si el reporte se corta en 'formularios enviados' o 'costo por lead', estás viendo la mitad de la película y no vas a saber si esos leads terminan facturando." },
  { q: "¿Es mala señal que una agencia no quiera firmar contrato largo?", a: "Al revés: es buena señal. Una agencia segura de sus resultados prefiere arrancar con una consultoría o un proyecto acotado que valide el encaje, y recién después proponer continuidad mensual. Si te presionan a firmar 12 meses antes de haber visto un solo dato tuyo, la urgencia dice más de su necesidad de caja que de tu negocio." },
  { q: "¿Cuántas cuentas debería manejar cada persona en la agencia?", a: "No hay un número mágico, pero sí una pregunta reveladora: '¿cuántas cuentas maneja la persona que va a estar en mi cuenta?'. Si la respuesta es vaga o son más de 8-10 cuentas por persona en equipos chicos, es difícil que te den la atención que un ciclo de venta B2B necesita. Pedí conocer a quien realmente va a operar tu cuenta, no solo al que vende." },
]

export const metadata: Metadata = {
  title: "Cómo Elegir una Agencia de Publicidad Digital B2B (6 Preguntas)",
  description:
    "Portfolios lindos no predicen resultados. Las 6 preguntas que sí lo hacen para elegir una agencia de publicidad digital especializada en B2B: medición, especialización, reporting y contrato.",
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
          <p>No elijas por el portfolio ni por lo simpática que sea la primera llamada. Elegí evaluando <strong>seis cosas concretas</strong>: si entienden tu ciclo de venta B2B, cómo miden más allá del formulario, con quién vas a hablar en la práctica, qué reportan, cómo arrancan el contrato y qué te dicen cuando algo no funciona. Cualquier agencia puede mostrarte una curva ascendente; pocas responden bien estas seis preguntas en la primera reunión.</p>
        </div>

        <p>Cada tanto nos llega la misma historia: una empresa B2B que ya pasó por una o dos agencias, invirtió en pauta durante meses, y no puede decir con claridad qué resultado obtuvo. No porque la agencia haya sido negligente —a veces gestionaron bien la plataforma—, sino porque nunca se alinearon en <em>qué</em> significaba "funcionar" para ese negocio en particular.</p>
        <p>Ese desalineamiento casi siempre se puede evitar antes de firmar nada. Elegir una <strong>agencia de publicidad digital especializada en B2B</strong> no es buscar la más linda ni la más barata: es hacer las preguntas correctas para predecir si van a entender tu negocio antes de gastar tu presupuesto aprendiendo a las apuradas.</p>

        <h2>1. ¿Entienden que B2B no es e-commerce?</h2>
        <p>La mayoría de las agencias de publicidad digital nacieron optimizando para e-commerce: compra impulsiva, ciclo de decisión de minutos, un solo decisor. B2B es otro juego — ciclos de semanas o meses, varios decisores, y una conversión que muchas veces no pasa por la web sino por una llamada de ventas semanas después del primer clic. Una <strong>agencia de publicidad digital</strong> genérica puede gestionar bien la plataforma y aun así fallar acá, porque el problema no es técnico: es de especialización.</p>
        <p>Preguntá directamente: <em>"¿cuántas cuentas B2B manejan hoy, y de qué tipo?"</em>. Si la respuesta es vaga o todos los ejemplos son de retail y consumo masivo, esa agencia va a tener que aprender tu negocio con tu presupuesto. No es descalificante per se, pero cambia el marco de tiempo que deberías esperar antes de ver resultados.</p>

        <h2>2. ¿Cómo miden más allá del formulario enviado?</h2>
        <p>Esta es, en nuestra experiencia, la pregunta que más separa a una agencia seria de una que solo administra pauta. Un formulario enviado no es una venta, ni siquiera es necesariamente un lead calificado. Si te venden éxito mostrando solo "leads generados" o costo por lead, están optimizando —y reportando— la mitad de la historia.</p>
        <p>Preguntá si trabajan con conversiones offline, si pueden conectar la plataforma publicitaria a tu CRM, y si saben la diferencia entre optimizar por <strong>costo por lead</strong> y optimizar por <strong>costo por cliente</strong>. Profundizamos esa diferencia — que en la práctica puede significar pagar 3 veces más por resultado sin darte cuenta — en <a href="/blog/costo-por-lead-vs-costo-por-cliente">costo por lead vs costo por cliente</a>. Si nunca oyeron hablar de Enhanced Conversions o de subir conversiones offline a Google Ads, van a optimizar la campaña por la señal equivocada. Lo desarrollamos en <a href="/blog/google-ads-hubspot-conversiones-offline">Google Ads + HubSpot: medir las conversiones offline que sí importan</a>.</p>

        <h2>3. ¿Con quién vas a hablar en la práctica?</h2>
        <p>En la reunión de venta vas a conocer al mejor vendedor de la agencia. La pregunta importante es otra: <em>¿quién va a operar tu cuenta día a día, y cuántas otras cuentas maneja esa persona?</em> Es habitual que agencias grandes vendan con un equipo senior y ejecuten con un junior recién incorporado, repartido entre 15 clientes.</p>
        <p>Pedí conocer, aunque sea por videollamada, a la persona que efectivamente va a tocar tus campañas. Preguntá cuántas cuentas maneja. No hay un número universal correcto, pero si nadie te lo puede responder con precisión, es una señal de que no lo miden internamente — y lo que no se mide, en una agencia como en una campaña, tiende a degradarse.</p>

        <h2>4. ¿Qué te van a reportar, y con qué frecuencia?</h2>
        <p>Pedí ver un reporte real (anonimizado) antes de firmar. Un reporte de nivel superficial se detiene en clics, impresiones y costo por lead. Un reporte que de verdad ayuda a tomar decisiones conecta la pauta con el pipeline: cuántos MQL, cuántos SQL, cuántas oportunidades y, en el mejor de los casos, cuántos clientes salieron de cada canal y campaña.</p>
        <div className="dktable">
          <table>
            <thead>
              <tr><th>Nivel de reporte</th><th>Qué muestra</th><th>Qué decisión permite tomar</th></tr>
            </thead>
            <tbody>
              <tr><td>Básico</td><td>Clics, impresiones, CTR</td><td>Casi ninguna — son métricas de actividad, no de negocio</td></tr>
              <tr><td>Intermedio</td><td>Leads y costo por lead</td><td>Comparar canales por volumen, pero no por calidad</td></tr>
              <tr><td>Avanzado</td><td>MQL / SQL / oportunidades por canal</td><td>Saber qué campaña trae leads que sí avanzan en el funnel</td></tr>
              <tr><td>Completo</td><td>Clientes cerrados y su fuente de origen</td><td>Saber qué canal y campaña generan ingresos, no solo formularios</td></tr>
            </tbody>
          </table>
        </div>
        <p>Si te venden solo con reportes del primer nivel, esperá conversaciones de "por qué gastamos tanto" sin poder responderlas con datos.</p>

        <h2>5. ¿Cómo empieza el contrato?</h2>
        <p>Una agencia que confía en su trabajo prefiere arrancar con algo acotado —una auditoría, una consultoría inicial, un mes de prueba con objetivos claros— antes de pedir un compromiso largo. Eso les da a ambos la chance de validar el encaje con datos reales, no con promesas.</p>
        <p>Sospechá de la presión para firmar 6 o 12 meses antes de haber revisado una sola cuenta tuya. No siempre es mala fe, pero si la urgencia viene de ellos y no de vos, preguntate por qué.</p>
        <blockquote>Una agencia seria de sus resultados no necesita atarte por un año antes de mostrarte el primer número.</blockquote>

        <h2>6. ¿Qué dicen cuando algo no funciona?</h2>
        <p>Esta la podés testear en la primera reunión: contales un canal o una campaña que probaron antes y no funcionó, y prestá atención a la respuesta. Si la reacción es "eso no debería pasar con nosotros" sin preguntar nada más, es venta, no diagnóstico. Una agencia que primero pregunta cómo medían, qué oferta usaban y a quién le hablaban, está pensando como consultor, no como vendedor de clics.</p>
        <p>Lo mismo aplica para el mix de canales. Si insisten en un solo canal sin preguntar primero si tu cliente ya busca lo que vendés o todavía no lo conoce, no están diagnosticando tu negocio — están vendiendo lo que ya saben hacer. Esa distinción, y cómo se combinan canales según el momento de compra, la desarrollamos en <a href="/blog/google-ads-vs-linkedin-ads-b2b">Google Ads vs LinkedIn Ads para B2B</a> y en <a href="/blog/google-ads-vs-meta-ads-b2b">Google Ads vs Meta Ads para B2B</a>.</p>

        <h2>Señales de alerta que valen más que cualquier pregunta</h2>
        <ul>
          <li><strong>Prometen resultados en la primera quincena.</strong> En B2B, con ciclos de venta de semanas o meses, es una promesa que no se puede cumplir con seriedad.</li>
          <li><strong>Su case study estrella es de e-commerce.</strong> No es descalificante, pero si no tienen ningún caso B2B comparable al tuyo, vas a pagar su curva de aprendizaje.</li>
          <li><strong>Hablan solo de "leads", nunca de "pipeline" o "clientes".</strong> Es la señal más clara de que optimizan por lo fácil de medir, no por lo que factura.</li>
          <li><strong>No preguntan por tu CRM en la primera reunión.</strong> Si no les importa de dónde vienen tus datos de venta, no van a poder optimizar en función de ellos.</li>
        </ul>

        <h2>En resumen</h2>
        <p>Elegir una agencia de publicidad digital especializada en B2B no es una decisión de gusto ni de precio: es una decisión que se valida con seis preguntas concretas — especialización en B2B, medición más allá del formulario, quién opera tu cuenta, qué reportan, cómo empieza el contrato y cómo reaccionan frente a lo que no funcionó antes. Cualquier agencia te puede mostrar un portfolio prolijo; muy pocas responden bien las seis. Si querés ver cómo pensamos nosotros esas mismas preguntas aplicadas a tu negocio, arrancá por una consultoría gratuita en nuestra <a href="/agencia-de-publicidad-digital">agencia de publicidad digital especializada en B2B</a> — sin compromiso de continuidad hasta que ambos veamos que el encaje es real.</p>
      </ArticlePage>
    </>
  )
}
