import DidaktoRedesign from "@/components/didakto-redesign"
import "./didakto-redesign.css"

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Por qué el programa dura 6 meses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La adquisición B2B necesita tiempo para diagnosticar, implementar, generar datos reales y optimizar sobre el pipeline. Es el mismo criterio que aplicamos con Sika: los resultados serios llegan con continuidad, no con un sprint de campaña.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué el precio está publicado en el sitio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Porque no buscamos la mayor cantidad de reuniones posibles, sino empresas con capacidad y voluntad real de invertir. El precio funciona también como un filtro. El programa arranca desde USD 1.500 mensuales y el fee final se define según el alcance del sistema, los mercados y las plataformas involucradas.",
      },
    },
    {
      "@type": "Question",
      name: "¿El precio incluye la inversión publicitaria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Desde USD 1.500 mensuales corresponde a los honorarios de Didakto por diseñar y operar el sistema de adquisición. La inversión en plataformas es aparte y la define tu empresa, según los mercados y canales que definamos en la estrategia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo contratar solo publicidad digital sin el programa completo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Paid Media, medición y analítica, contenido y contenido generado con IA pueden contratarse como servicios especializados. En esa modalidad el alcance es específico y delimitado, no incluye la intervención sobre todo el sistema, y el pricing es proporcionalmente mayor que dentro del programa End-to-End.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa después de enviar la solicitud de evaluación?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Revisamos la información de tu empresa para evaluar si existe fit real entre tu necesidad y nuestro enfoque. Si lo hay, coordinamos una primera conversación. Si no, te lo decimos igual.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué se diferencian de una agencia de publicidad tradicional?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Empezamos por el diagnóstico del sistema completo — ICP, oferta, tracking, CRM y proceso comercial — no por la campaña. La pauta es una parte del trabajo, no el producto.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con empresas fuera de LATAM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Operamos en múltiples mercados de LATAM y USA, en español e inglés. Lideramos la publicidad digital de Sika para LATAM + USA en simultáneo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tardan en verse resultados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los primeros meses se enfocan en diagnóstico, medición y estructura. A partir de ahí optimizamos sobre datos reales del pipeline; en casos como Sika, los números cambiaron de forma marcada en torno a los tres meses.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si mi empresa no tiene CRM o su tracking está incompleto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es habitual, y forma parte de lo que evaluamos e implementamos dentro del programa. No hace falta que llegues con todo resuelto.",
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
