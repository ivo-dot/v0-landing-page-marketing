import type { Metadata } from "next"
import ArticlePage, { articleJsonLd, articleBreadcrumb, faqJsonLd } from "@/components/dk-article"
import { postBySlug, otherPosts } from "@/components/blog-posts"
import "../../didakto-redesign.css"

const post = postBySlug("smart-bidding-con-datos-del-crm-b2b")!
const URL = "https://didaktomarketing.com/blog/" + post.slug
const lede =
  "Las pujas automáticas de Google son un motor muy potente, pero ciego: optimizan exactamente por la señal que les das. Si esa señal es 'formulario enviado', vas a tener formularios. Si es 'oportunidad calificada' con su valor real, vas a tener clientes. La diferencia está en los datos del CRM."

const faqs = [
  { q: "¿Qué es Smart Bidding?", a: "Es el conjunto de estrategias de puja automática de Google Ads (CPA objetivo, ROAS objetivo, maximizar conversiones o valor) que usan machine learning para decidir, en cada subasta, cuánto pujar según la probabilidad de conversión. Su gran fortaleza —y su gran límite— es que optimiza por la conversión que vos definas como objetivo." },
  { q: "¿Por qué Smart Bidding necesita datos del CRM en B2B?", a: "Porque en B2B la conversión que importa (una venta) ocurre semanas después y fuera del sitio, en el CRM. Si Google solo ve 'formulario enviado', optimiza por volumen de formularios. Devolviéndole las etapas reales del pipeline (SQL, venta) y su valor, el algoritmo aprende a pujar más por los clics que históricamente terminaron en clientes." },
  { q: "¿Qué estrategia de puja conviene en B2B?", a: "Depende del volumen de datos. Con pocas conversiones mensuales, Maximizar conversiones o CPA objetivo sobre una etapa intermedia (como SQL) suele funcionar mejor que apuntar directo a la venta, que da muy pocos datos para aprender. Con más volumen y valores por etapa cargados, ROAS objetivo permite optimizar por ingresos. La clave es no apuntar a una etapa tan profunda que el algoritmo se quede sin señal." },
  { q: "¿Cuánto volumen de conversiones necesita para funcionar?", a: "Como referencia, Google sugiere del orden de 30 a 50 conversiones en los últimos 30 días para que el aprendizaje sea estable. En cuentas B2B chicas eso obliga a optimizar por una etapa más alta del funnel (lead calificado o SQL) y a usar valores de conversión para diferenciar calidad, en lugar de optimizar por la venta final." },
]

export const metadata: Metadata = {
  title: "Smart Bidding con datos del CRM en B2B | Didakto",
  description:
    "Cómo alimentar el Smart Bidding de Google Ads con etapas y valores reales de tu CRM para optimizar por ingresos, no por formularios. Estrategias de puja para B2B.",
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
          <p>Smart Bidding es tan bueno como los datos que le das. Si lo alimentás con <strong>"formulario enviado"</strong>, te trae formularios. Si le devolvés desde el CRM las <strong>etapas reales</strong> (SQL, venta) y sus <strong>valores</strong>, el algoritmo aprende a pujar por los clics que terminan en clientes. No es magia: es enseñarle a la máquina qué es ganar.</p>
        </div>

        <p>Hay una discusión que ya quedó vieja: "puja manual o automática". En cuentas serias, el Smart Bidding gana casi siempre, porque ajusta la puja en cada subasta con miles de señales que ningún humano puede procesar en tiempo real. La discusión que importa hoy es otra: <strong>por qué señal lo hacés optimizar</strong>.</p>
        <p>Porque el algoritmo es obediente y literal. Le pedís formularios baratos y te trae formularios baratos, aunque ninguno compre. La potencia está intacta; lo que falla es el objetivo que le pusiste.</p>

        <h2>El motor es bueno, el combustible es malo</h2>
        <p>Pensá el Smart Bidding como un motor de altísimo rendimiento. En la mayoría de las cuentas B2B, ese motor corre con el peor combustible posible: la conversión "envío de formulario". El resultado es predecible: el sistema se vuelve un experto en conseguir formularios, que es justo lo que no se factura.</p>
        <blockquote>El algoritmo no optimiza por tu negocio. Optimiza por la conversión que vos elegiste. Elegí bien.</blockquote>
        <p>El cambio de fondo no es tocar la estrategia de puja, sino cambiar <strong>qué cuenta como conversión</strong>. Y esa información —quién calificó, quién compró, por cuánto— vive en tu CRM, no en el sitio.</p>

        <h2>Cómo se alimenta con datos del CRM</h2>
        <p>El circuito es el mismo que hace posible medir conversiones offline, ahora puesto a trabajar para las pujas:</p>
        <ol>
          <li><strong>Capturás el GCLID</strong> de cada clic y lo guardás pegado al contacto en el CRM.</li>
          <li><strong>Mapeás las etapas</strong> que querés que Google trate como conversión (por ejemplo SQL y Venta) y les asignás un valor que refleje su importancia.</li>
          <li><strong>Devolvés la conversión offline</strong> cuando el contacto avanza de etapa, con su GCLID, su valor y su fecha.</li>
          <li><strong>Cambiás el objetivo de la puja</strong> a esa etapa, y dejás que el algoritmo reoriente la inversión.</li>
        </ol>
        <p>El paso a paso técnico de esa integración lo detallamos en <a href="/blog/google-ads-hubspot-conversiones-offline">Google Ads + HubSpot: conversiones offline</a>. Acá nos importa qué hacés con esos datos una vez que llegan a la cuenta.</p>

        <h2>Qué estrategia elegir según tu volumen</h2>
        <div className="dktable">
          <table>
            <thead>
              <tr><th>Situación</th><th>Etapa a optimizar</th><th>Estrategia sugerida</th></tr>
            </thead>
            <tbody>
              <tr><td>Pocas conversiones/mes</td><td>Lead calificado o SQL</td><td>Maximizar conversiones o CPA objetivo</td></tr>
              <tr><td>Volumen medio</td><td>SQL con valores por calidad</td><td>CPA objetivo o Maximizar valor</td></tr>
              <tr><td>Buen volumen y valores cargados</td><td>Venta / valor de pipeline</td><td>ROAS objetivo</td></tr>
            </tbody>
          </table>
        </div>
        <p>La regla de oro: <strong>no apuntes a una etapa tan profunda que el algoritmo se quede sin datos para aprender</strong>. Si cerrás 5 ventas al mes, optimizar por "venta" le da muy poca señal; conviene optimizar por SQL y usar valores para que igual distinga calidad. A medida que crece el volumen, vas bajando el objetivo hacia el final del funnel.</p>

        <h2>Errores frecuentes</h2>
        <ul>
          <li><strong>Cambiar la estrategia con poca data.</strong> Smart Bidding necesita un período de aprendizaje; si lo tocás cada tres días, nunca estabiliza.</li>
          <li><strong>Valores de conversión inventados.</strong> Si todos los SQL valen "1", no le estás enseñando nada sobre calidad. Los valores tienen que reflejar diferencias reales.</li>
          <li><strong>Ventana de conversión corta.</strong> Si tu ciclo es de 60 días y la ventana está en 30, el algoritmo nunca conecta el clic con la venta.</li>
          <li><strong>Optimizar por venta sin volumen.</strong> El error más común en cuentas chicas: ambición de medir el cierre, pero sin datos suficientes para que el sistema aprenda.</li>
        </ul>

        <h2>Por qué esto te posiciona</h2>
        <p>Cualquiera activa una estrategia de puja automática con dos clics. Lo difícil —y lo valioso— es darle al algoritmo la información correcta para que trabaje a favor de tu facturación y no de tu planilla de leads. Eso requiere tener el <a href="/blog/costo-por-lead-vs-costo-por-cliente">costo por cliente</a> medido y el CRM conectado a la cuenta. Es el tipo de trabajo de fondo que hace una <a href="/agencia-de-publicidad-digital">agencia de publicidad digital orientada a datos</a>: no apretar botones, sino enseñarle al sistema qué es un buen resultado.</p>

        <h2>En resumen</h2>
        <p>Smart Bidding no es ni bueno ni malo: es un amplificador. Amplifica la señal que le das. Dale "formulario" y vas a escalar formularios; dale "cliente" con su valor real y vas a escalar ingresos. La ventaja competitiva no está en la estrategia de puja, sino en la calidad de los datos del CRM con los que la alimentás.</p>
      </ArticlePage>
    </>
  )
}
