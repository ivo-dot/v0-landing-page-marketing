import type { Metadata } from "next"
import ArticlePage, { articleJsonLd, articleBreadcrumb, faqJsonLd } from "@/components/dk-article"
import { postBySlug, otherPosts } from "@/components/blog-posts"
import "../../didakto-redesign.css"

const post = postBySlug("seo-tecnico-para-b2b-por-donde-empezar")!
const URL = "https://didaktomarketing.com/blog/" + post.slug
const lede =
  "'Necesitamos más SEO' suele traducirse en escribir artículos. Pero si tu sitio tiene problemas técnicos, ese contenido nunca va a rankear. Las 7 prioridades reales de SEO técnico para un sitio B2B, en el orden en que hay que atacarlas."

const faqs = [
  { q: "¿Por dónde empiezo el SEO técnico de mi sitio B2B?", a: "Por lo que impide que Google rastree e indexe tu sitio correctamente: robots.txt, sitemap.xml, canonical tags y que las páginas clave no estén bloqueadas por error. Recién después tiene sentido optimizar velocidad, Core Web Vitals y datos estructurados." },
  { q: "¿Cuánto tarda en verse el efecto del SEO técnico?", a: "Los cambios técnicos suelen reflejarse en Search Console (rastreo, indexación) en días o pocas semanas. El impacto en rankings y tráfico orgánico es más lento: 2 a 4 meses es un rango realista para empezar a ver movimiento, y varía según la autoridad del dominio y la competencia." },
  { q: "¿El SEO técnico reemplaza al contenido?", a: "No. Es la base sobre la que el contenido puede funcionar. Un sitio técnicamente perfecto sin contenido que responda preguntas reales no rankea; un sitio con contenido excelente pero mal indexado tampoco. Van juntos." },
  { q: "¿Qué es Core Web Vitals y por qué me importa si soy B2B?", a: "Son las métricas de Google para medir la experiencia real de carga y estabilidad de una página (LCP, INP, CLS). Google las usa como señal de ranking, y un sitio B2B lento pierde tanto posiciones como leads: cada segundo extra de carga baja la conversión de formularios." },
]

export const metadata: Metadata = {
  title: "SEO técnico para B2B: por dónde empezar",
  description:
    "Las 7 prioridades reales de SEO técnico para un sitio B2B: indexación, velocidad, Core Web Vitals, datos estructurados, arquitectura y más. En el orden correcto de ataque.",
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
          <p>El SEO técnico es la infraestructura que decide si Google puede <strong>rastrear, indexar y entender</strong> tu sitio antes de evaluar si tu contenido merece rankear. El orden de ataque correcto es: indexación → velocidad y Core Web Vitals → arquitectura y enlazado interno → datos estructurados → mobile → seguridad → limpieza de contenido duplicado. Sin esta base, el mejor artículo del mundo no va a aparecer en ningún lado.</p>
        </div>

        <p>"Hagamos SEO" casi siempre se convierte en un calendario de artículos. Tiene sentido: el contenido es lo visible, lo que se puede mostrar en una reunión. El problema es que el contenido es la última capa de una pila con seis capas debajo, y si esas capas fallan, el contenido nunca llega a competir.</p>
        <p>Vemos esto todo el tiempo en auditorías de sitios B2B: empresas con blogs activos, artículos bien escritos, y tráfico orgánico plano durante meses porque Google ni siquiera está indexando la mitad de esas páginas, o porque el sitio tarda 6 segundos en cargar en mobile. Acá está el orden real de prioridades, de lo que rompe todo a lo que suma marginal.</p>

        <h2>1. Indexación: que Google pueda ver tu sitio</h2>
        <p>Es el paso cero. Si Google no rastrea e indexa una página, no existe para efectos de SEO, sin importar qué tan bueno sea el contenido. Revisá:</p>
        <ul>
          <li><strong>robots.txt</strong> no esté bloqueando por error secciones que querés indexadas.</li>
          <li><strong>sitemap.xml</strong> exista, esté actualizado y enviado en Google Search Console.</li>
          <li><strong>Etiquetas canonical</strong> apunten a la URL correcta (un error común: todas las páginas apuntando al home por una plantilla mal configurada).</li>
          <li><strong>Cobertura de indexación</strong> en Search Console: cuántas páginas están indexadas vs. las que existen realmente en el sitio.</li>
        </ul>
        <p>Si nunca revisaste esto, es el primer lugar donde mirar. Encontramos sitios enteros con "noindex" pegado desde una migración vieja que nadie sacó.</p>

        <h2>2. Velocidad y Core Web Vitals</h2>
        <p>Google usa la experiencia de carga como señal de ranking, y en B2B además es un tema de conversión: cada segundo extra de carga baja la tasa de envío de formularios. Las métricas que importan (Core Web Vitals):</p>
        <ul>
          <li><strong>LCP</strong> (Largest Contentful Paint): qué tan rápido carga el contenido principal. Objetivo: menos de 2.5s.</li>
          <li><strong>INP</strong> (Interaction to Next Paint): qué tan rápido responde el sitio a una interacción. Objetivo: menos de 200ms.</li>
          <li><strong>CLS</strong> (Cumulative Layout Shift): que la página no "salte" mientras carga. Objetivo: menos de 0.1.</li>
        </ul>
        <p>PageSpeed Insights te da estos tres números gratis, con datos reales de usuarios cuando hay volumen suficiente. Las causas más comunes en sitios B2B: imágenes sin optimizar, scripts de terceros (chats, trackers) cargando de forma bloqueante, y fuentes web mal implementadas.</p>

        <h2>3. Arquitectura del sitio y enlazado interno</h2>
        <p>Google entiende qué páginas son importantes en parte por cómo están conectadas entre sí. Una arquitectura plana, donde todas las páginas cuelgan directo del home sin jerarquía, diluye la autoridad. Buenas prácticas:</p>
        <ul>
          <li>Estructura clara: home → categorías/servicios → contenido de detalle, en máximo 3 clics de profundidad.</li>
          <li>Enlaces internos con texto ancla descriptivo (no "click acá"), conectando artículos relacionados y páginas de servicio.</li>
          <li>URLs limpias y descriptivas: <code>/blog/seo-tecnico-para-b2b</code>, no <code>/blog/post?id=482</code>.</li>
        </ul>
        <p>Este es también el momento de revisar enlaces rotos (404) y redirecciones innecesarias, que desperdician el "presupuesto de rastreo" que Google le asigna a tu sitio.</p>

        <h2>4. Datos estructurados (schema)</h2>
        <p>El schema markup le da a Google (y cada vez más a los motores de IA) contexto explícito sobre qué es cada página: un artículo, una organización, una pregunta frecuente, una reseña. No garantiza mejor ranking por sí solo, pero habilita resultados enriquecidos (rich snippets) y es la misma señal que usan los motores conversacionales para citar fuentes con precisión.</p>
        <p>Para un sitio B2B, lo mínimo indispensable: <code>Organization</code> en el home, <code>BlogPosting</code> en artículos, <code>BreadcrumbList</code> en toda página con jerarquía, y <code>FAQPage</code> donde haya preguntas frecuentes reales. Si además pensás en presencia dentro de respuestas de IA, este paso conecta directo con lo que explicamos en <a href="/blog/geo-aeo-como-aparecer-en-chatgpt">GEO/AEO: cómo lograr que ChatGPT recomiende tu marca</a>.</p>

        <h2>5. Mobile y usabilidad</h2>
        <p>Google indexa con "mobile-first": evalúa la versión móvil de tu sitio como referencia principal, no la de escritorio. Un sitio B2B que se ve perfecto en laptop pero rompe en celular está perdiendo posiciones aunque nadie en tu equipo lo note, porque en la oficina todos navegan desde desktop.</p>

        <h2>6. HTTPS y seguridad básica</h2>
        <p>Es un estándar mínimo desde hace años, pero vale confirmarlo: certificado SSL activo y sin advertencias, sin contenido mixto (recursos http cargando dentro de una página https), y sin alertas de seguridad en Search Console.</p>

        <h2>7. Contenido duplicado y canibalización</h2>
        <p>Con el sitio técnicamente sano, el último chequeo es que no compitas contra vos mismo: dos páginas apuntando a la misma keyword, o contenido duplicado entre versiones (con/sin www, http/https, con parámetros de tracking). Search Console y una auditoría con Screaming Frog o similar lo detectan rápido.</p>

        <h2>Y ahora sí, el contenido</h2>
        <p>Recién con esta base resuelta el contenido empieza a competir en igualdad de condiciones. Es la razón por la que, cuando auditamos un sitio B2B, empezamos siempre por acá y no por la estrategia editorial: escribir sobre una casa sin cimientos es tiempo perdido.</p>
        <p>Si querés saber en qué estado está tu sitio hoy, <a href="/agencia-de-publicidad-digital">hablemos</a> y lo revisamos juntos.</p>
      </ArticlePage>
    </>
  )
}
