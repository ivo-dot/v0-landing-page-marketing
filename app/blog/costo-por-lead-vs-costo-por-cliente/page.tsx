import type { Metadata } from "next"
import ArticlePage, { articleJsonLd, articleBreadcrumb, faqJsonLd } from "@/components/dk-article"
import { postBySlug, otherPosts } from "@/components/blog-posts"
import "../../didakto-redesign.css"

const post = postBySlug("costo-por-lead-vs-costo-por-cliente")!
const URL = "https://didaktomarketing.com/blog/" + post.slug
const lede =
  "En B2B, el costo por lead es la métrica más mirada y la que más decisiones malas provoca. Mide cuán barato conseguís un formulario, no cuánto te cuesta conseguir un cliente. Y entre una cosa y la otra hay diferencias de 3x, 5x o más."

const faqs = [
  { q: "¿Qué es el costo por lead (CPL)?", a: "Es lo que pagás, en promedio, por cada formulario o contacto que generás con tus campañas: inversión total dividida por cantidad de leads. Es útil como métrica operativa, pero en B2B es engañosa como métrica de negocio, porque trata igual a un lead que cierra y a uno que tu equipo de ventas descarta en treinta segundos." },
  { q: "¿Qué es el costo por cliente (CAC) o costo por SQL?", a: "Es lo que te cuesta, en pauta, conseguir un cliente real (o una oportunidad calificada / SQL). Se calcula dividiendo la inversión por la cantidad de ventas u oportunidades cerradas que vinieron de esas campañas. Refleja el resultado de negocio, no la actividad de marketing." },
  { q: "¿Por qué dos campañas con el mismo CPL pueden tener resultados tan distintos?", a: "Porque el CPL no mira la calidad. Una campaña puede traer leads baratos pero fríos (gente que descarga un PDF) y otra leads algo más caros pero calientes (gente pidiendo cotización). Mismo CPL, tasas de cierre completamente distintas: el costo por cliente puede diferir varias veces entre una y otra." },
  { q: "¿Cómo empiezo a medir el costo por cliente?", a: "Necesitás conectar tus campañas con tu CRM para saber qué pasó con cada lead después del formulario. En la práctica: capturar el GCLID en el formulario, mapear las etapas del pipeline (MQL, SQL, venta) y devolverle esas conversiones offline a Google Ads. A partir de ahí podés calcular el costo por etapa real y optimizar por la que factura." },
]

export const metadata: Metadata = {
  title: "Costo por lead vs costo por cliente en B2B | Didakto",
  description:
    "Por qué el costo por lead engaña en B2B y cómo medir el costo por cliente real. Dos campañas con el mismo CPL pueden costar 3x distinto en ventas. Guía práctica.",
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
          <p>El <strong>costo por lead</strong> mide cuán barato conseguís un formulario. El <strong>costo por cliente</strong> mide cuánto te cuesta conseguir a alguien que paga. En B2B son números muy distintos, y solo el segundo paga sueldos. Optimizar tu publicidad por CPL es optimizar por la métrica equivocada.</p>
        </div>

        <p>Si pedís un solo número para evaluar una cuenta de paid media B2B, casi siempre te van a dar el <strong>costo por lead</strong>. Es la métrica reina: aparece primero en los reportes, es fácil de calcular y baja con el tiempo, lo que da una linda sensación de progreso. El problema es que mide la cosa equivocada.</p>
        <p>El CPL te dice cuánto cuesta que alguien <em>levante la mano</em>. No te dice nada sobre si esa mano vale algo. Y en B2B —donde el ciclo es largo, el ticket es alto y el equipo comercial filtra duro— la distancia entre "un lead" y "un cliente" es enorme.</p>

        <h2>El espejismo del CPL bajo</h2>
        <p>Imaginá dos campañas, las dos con un costo por lead de USD 30:</p>
        <ul>
          <li><strong>Campaña A:</strong> 100 leads al mes. Ventas califica 10 y cierra 2.</li>
          <li><strong>Campaña B:</strong> 100 leads al mes. Ventas califica 30 y cierra 7.</li>
        </ul>
        <p>En el reporte de CPL son idénticas. Para tu facturación, la B vale más del triple. Si tomás decisiones de presupuesto mirando el costo por lead, no solo no vas a premiar a la B: incluso podrías <strong>matarla</strong> para escalar la A si esta empieza a conseguir formularios un poco más baratos. Estarías pagando para empeorar el resultado.</p>
        <blockquote>El costo por lead es una métrica de vanidad en B2B. La métrica que paga sueldos es el costo por cliente.</blockquote>

        <h2>Por qué pasa esto</h2>
        <p>Un lead barato suele ser barato por algo. La oferta que mejor convierte en formularios (un ebook, un descuento, un "te contactamos") atrae a mucha gente que todavía no está comprando, o que ni siquiera es tu cliente ideal. La oferta que pide más compromiso (una cotización, una demo, una auditoría) convierte menos, cuesta más por lead… y trae a gente que de verdad tiene la billetera en la mano.</p>
        <p>Si tu única métrica es el CPL, el sistema entero —vos, el algoritmo de Google, tu agencia— empuja hacia los leads baratos y fríos. Optimizás para llenar la planilla, no para cerrar negocios.</p>

        <h2>CPL vs costo por cliente, lado a lado</h2>
        <div className="dktable">
          <table>
            <thead>
              <tr><th>Aspecto</th><th>Costo por lead (CPL)</th><th>Costo por cliente (CAC / por SQL)</th></tr>
            </thead>
            <tbody>
              <tr><td>Qué mide</td><td>Cuán barato es un formulario</td><td>Cuánto cuesta una venta real</td></tr>
              <tr><td>Considera la calidad</td><td>No</td><td>Sí</td></tr>
              <tr><td>De dónde sale el dato</td><td>De la plataforma de ads</td><td>Del CRM cruzado con la pauta</td></tr>
              <tr><td>A qué empuja</td><td>Volumen de leads</td><td>Ingresos</td></tr>
              <tr><td>Útil para</td><td>Control operativo diario</td><td>Decidir presupuesto y estrategia</td></tr>
            </tbody>
          </table>
        </div>
        <p>El CPL no es inútil: sirve para detectar si una campaña se rompió o si un anuncio dejó de funcionar. El error es <strong>ascenderlo a métrica de decisión</strong>. Es un signo vital, no el diagnóstico.</p>

        <h2>Cómo empezar a medir el costo por cliente</h2>
        <p>La buena noticia: no hace falta un sistema carísimo. Hace falta conectar dos mundos que suelen vivir separados —la cuenta de ads y el CRM— para poder seguir a cada lead hasta el final del recorrido.</p>
        <ol>
          <li><strong>Capturá el origen de cada lead.</strong> El GCLID de Google (o los parámetros UTM) tiene que entrar al CRM pegado al contacto, en una propiedad oculta del formulario.</li>
          <li><strong>Definí tus etapas.</strong> Lead → MQL → SQL/Oportunidad → Cliente. Sin un pipeline mínimamente ordenado, no hay nada que medir.</li>
          <li><strong>Devolvé las etapas a la plataforma.</strong> Cuando un contacto avanza, le mandás esa conversión offline a Google Ads. Así sabés qué campaña, anuncio y palabra clave generan clientes, no solo formularios.</li>
          <li><strong>Reportá por costo por SQL o por cliente.</strong> Ese es el número que mirás para mover presupuesto.</li>
        </ol>
        <p>El cómo técnico de ese circuito lo desarrollamos en <a href="/blog/google-ads-hubspot-conversiones-offline">Google Ads + HubSpot: medir las conversiones offline que sí importan</a>. Y una vez que tenés los datos en la cuenta, podés dejar que las pujas automáticas trabajen a tu favor: lo vemos en <a href="/blog/smart-bidding-con-datos-del-crm-b2b">Smart Bidding con datos del CRM</a>.</p>

        <h2>Por qué esto te posiciona</h2>
        <p>Cuando una agencia te reporta "bajamos el costo por lead un 20%", suena bien hasta que preguntás cuántos de esos leads se volvieron clientes. Cuando podés decir "esta campaña generó 6 clientes a un costo de USD 280 cada uno y un pipeline de USD 90.000", la conversación cambia: dejás de discutir métricas de marketing y empezás a hablar de negocio. Ese es el trabajo de una <a href="/agencia-de-publicidad-digital">agencia de publicidad digital orientada a datos</a>, y es lo que separa una cuenta que gasta de una que invierte.</p>

        <h2>En resumen</h2>
        <p>El costo por lead es cómodo porque es fácil de medir, pero comodidad no es lo mismo que utilidad. En B2B, la métrica que importa es cuánto te cuesta un cliente, y para conocerla tenés que unir tus campañas con tu CRM. Medí lo que factura, no lo que se completa: el resto de las decisiones se ordena solo.</p>
      </ArticlePage>
    </>
  )
}
