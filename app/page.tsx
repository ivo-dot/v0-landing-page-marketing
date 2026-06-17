import DidaktoRedesign from "@/components/didakto-redesign"
import "./didakto-redesign.css"

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Trabajan por proyecto o por retainer mensual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ambos. La mayoría de las relaciones son mensuales porque el crecimiento sostenido requiere continuidad, pero arrancamos siempre con una consultoría puntual para validar el encaje antes de cualquier compromiso largo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con qué presupuesto de pauta conviene empezar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos con distintos rangos según el mercado y el objetivo. En la consultoría inicial definimos un piso realista para que la inversión genere aprendizaje y resultados medibles, sin quemar presupuesto en pruebas sin dirección.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye la consultoría inicial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un diagnóstico del funnel, una revisión del estado de la medición (GA4/GTM y conversiones) y un plan de acción con oportunidades concretas y KPIs. Salís con claridad sobre los próximos pasos, trabajes o no con nosotros.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué se diferencian de otras agencias?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Empezamos por el diagnóstico y la medición, no por la campaña. Somos un equipo chico y especializado en B2B, con cartera limitada: sin account executives intermedios ni procesos vacíos. Crecemos si vos crecés.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con empresas fuera de LATAM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Gestionamos campañas en múltiples mercados de LATAM y USA, en español e inglés. Lideramos la publicidad digital de Sika para LATAM + USA en varios mercados simultáneos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tardan en verse resultados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del punto de partida y del ciclo de venta, pero las primeras semanas se enfocan en medición y estructura. A partir de ahí optimizamos sobre datos reales; en casos como Sika los números cambiaron de forma marcada en torno a los tres meses.",
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <DidaktoRedesign />
    </>
  )
}
