// Reposicionamiento: de "agencia de Paid Media B2B" a "sistemas de adquisición B2B"
// (publicidad + datos + CRM + ventas). Reutiliza los mismos hooks GSAP de didakto-redesign.tsx
// (clases .r, .h, .steps/.step, .somos-stmt, #adsTrack, #casesTrack, #dragTrack, .faq-q, #modal).
export const MARKUP = String.raw`
<div class="cursor" id="cur"></div>
<div class="cursor-ring" id="curRing"></div>
<div class="prog" id="prog"></div>

<!-- NAV -->
<header class="nav" id="nav">
  <a class="brand" href="#top" aria-label="Didakto — inicio"><span class="iso"></span></a>
  <nav class="nav-links" aria-label="Principal">
    <a href="#enfoque"><span data-t="Nuestro enfoque">Nuestro enfoque</span></a>
    <a href="#como-trabajamos"><span data-t="Cómo trabajamos">Cómo trabajamos</span></a>
    <a href="#resultados"><span data-t="Resultados">Resultados</span></a>
    <a href="#nosotros"><span data-t="Nosotros">Nosotros</span></a>
    <a href="/blog"><span data-t="Contenido">Contenido</span></a>
  </nav>
  <a class="btn mag" href="#evaluacion" data-form data-cursor>Solicitar evaluación <span class="a">→</span></a>
</header>

<main id="top">

<!-- HERO -->
<section class="hero">
  <div class="hero-blob" id="blob"></div>
  <div class="wrap">
    <div class="hero-top">
      <span class="eyebrow">Sistemas de adquisición · B2B</span>
      <p class="hero-meta">Publicidad, datos, CRM y ventas conectados en un mismo sistema. LATAM &amp; USA · est. 2019.</p>
      <p class="hero-meta" style="display:inline-flex;align-items:center;gap:8px;margin-top:10px;padding:6px 14px;border:1px solid var(--line2);border-radius:100px;width:fit-content"><strong style="color:var(--green)">−72% CPA</strong> en Sika, rediseñando el sistema completo — no solo la pauta</p>
    </div>
    <h1 class="hero-title display">
      <span class="ln"><span>Diseñamos e</span></span>
      <span class="ln"><span>implementamos sistemas</span></span>
      <span class="ln"><span>de <em class="serif hl">adquisición B2B<i class="bar"></i></em>.</span></span>
    </h1>
    <div class="hero-foot">
      <div class="hero-cta">
        <a class="btn mag" href="#evaluacion" data-form data-cursor>Solicitar evaluación <span class="a">→</span></a>
        <a class="btn btn-ghost mag" href="#resultados" data-cursor>Ver resultados <span class="a">→</span></a>
      </div>
      <div class="scrollcue">Scrolleá <i>↓</i></div>
    </div>
  </div>
</section>

<!-- CLIENTES -->
<section class="clients" id="clientes">
  <p class="eyebrow clients-eyebrow">Empresas que confían</p>
  <div class="clients-marq" aria-hidden="true">
    <div class="clients-track" id="marq">
      <div class="client-logo"><img src="/logos/sika.png" alt="Sika" loading="lazy" /></div>
      <div class="client-logo"><img src="/logos/silat.png" alt="Silat" loading="lazy" /></div>
      <div class="client-logo"><img src="/logos/sahiora.png" alt="Sahiora" loading="lazy" /></div>
      <div class="client-logo"><img src="/logos/chocon-medio-suites.png" alt="Chocón Medio Suites" loading="lazy" /></div>
      <div class="client-logo"><img src="/logos/rio-neuquen.png" alt="Río Neuquén Distrito Industrial" loading="lazy" /></div>
      <div class="client-logo"><img src="/logos/confluencia.png" alt="Confluencia" loading="lazy" /></div>
      <div class="client-logo"><img src="/logos/deposito-fiscal.png" alt="Depósito Fiscal y Aduanero del Neuquén" loading="lazy" /></div>
      <div class="client-logo"><img src="/logos/sika.png" alt="Sika" loading="lazy" /></div>
      <div class="client-logo"><img src="/logos/silat.png" alt="Silat" loading="lazy" /></div>
      <div class="client-logo"><img src="/logos/sahiora.png" alt="Sahiora" loading="lazy" /></div>
      <div class="client-logo"><img src="/logos/chocon-medio-suites.png" alt="Chocón Medio Suites" loading="lazy" /></div>
      <div class="client-logo"><img src="/logos/rio-neuquen.png" alt="Río Neuquén Distrito Industrial" loading="lazy" /></div>
      <div class="client-logo"><img src="/logos/confluencia.png" alt="Confluencia" loading="lazy" /></div>
      <div class="client-logo"><img src="/logos/deposito-fiscal.png" alt="Depósito Fiscal y Aduanero del Neuquén" loading="lazy" /></div>
    </div>
  </div>
</section>

<!-- EL PROBLEMA -->
<section class="section" id="problema">
  <div class="wrap">
    <div class="shead">
      <span class="eyebrow r"><span class="lbl-idx">(01)</span> El problema</span>
      <h2 class="h">Más presupuesto no es la respuesta.</h2>
      <p class="lede r">Podés invertir bien en Google, Meta o LinkedIn Ads y aun así no crecer. En B2B, el problema casi nunca está solo en la pauta.</p>
    </div>
    <div class="probs">
      <div class="prob r"><div class="pn">01</div><div><h3>Cliente ideal mal definido</h3><p>Se le habla a todo el mercado en lugar de al segmento correcto, y la pauta paga esa falta de foco.</p></div></div>
      <div class="prob r"><div class="pn">02</div><div><h3>Oferta y propuesta de valor débiles</h3><p>La campaña puede estar bien hecha y aun así no convertir, porque el problema está antes: en lo que se ofrece.</p></div></div>
      <div class="prob r"><div class="pn">03</div><div><h3>Landing pages que no convierten</h3><p>Tráfico calificado que llega a páginas y formularios que no están pensados para convertir.</p></div></div>
      <div class="prob r"><div class="pn">04</div><div><h3>Tracking incompleto</h3><p>GA4, GTM y conversiones a medias: nadie sabe con certeza qué campaña generó qué oportunidad.</p></div></div>
      <div class="prob r"><div class="pn">05</div><div><h3>CRM desconectado</h3><p>Los leads llegan, pero la información no viaja completa hasta Ventas.</p></div></div>
      <div class="prob r"><div class="pn">06</div><div><h3>Marketing y Ventas sin criterio común</h3><p>Cada equipo mide algo distinto: uno cuenta leads, el otro cuenta ventas. Nadie mide lo mismo.</p></div></div>
    </div>
  </div>
</section>

<!-- NUESTRO ENFOQUE -->
<section class="inv somos" id="enfoque">
  <div class="somos-stage">
    <div class="somos-bg"><span class="blob b1"></span><span class="blob b2"></span><span class="blob b3"></span></div>
    <div class="wrap">
      <p class="somos-eyebrow">(Nuestro enfoque)</p>
      <h2 class="somos-stmt">
        <span class="w">En</span> <span class="w">B2B,</span> <span class="w">muchas</span> <span class="w">veces</span> <span class="w">el</span> <span class="w">problema</span> <span class="w">no</span> <span class="w">está</span> <span class="w">en</span> <span class="w serif">la publicidad</span>.
      </h2>
    </div>
  </div>
  <div class="wrap manif-cols somos-cols">
    <p class="r">Podés invertir bien en Google, Meta o LinkedIn Ads y aun así no crecer. El problema puede estar en el ICP, la oferta, el tracking, o en que Marketing y Ventas miden cosas distintas.</p>
    <p class="r">Por eso no optimizamos campañas sueltas: analizamos el sistema completo, desde la inversión en publicidad hasta la venta, y lo intervenimos donde realmente se rompe.</p>
    <p class="r">Publicidad, datos, CRM y ventas trabajando como una sola máquina de generar pipeline medible — no como piezas sueltas que nadie termina de conectar.</p>
    <div class="funnel r">
      <span class="funnel-step on">Inversión</span><span class="funnel-arrow">→</span>
      <span class="funnel-step">Demanda</span><span class="funnel-arrow">→</span>
      <span class="funnel-step">Lead</span><span class="funnel-arrow">→</span>
      <span class="funnel-step">MQL</span><span class="funnel-arrow">→</span>
      <span class="funnel-step">SQL</span><span class="funnel-arrow">→</span>
      <span class="funnel-step">Oportunidad</span><span class="funnel-arrow">→</span>
      <span class="funnel-step on">Venta</span>
    </div>
  </div>
</section>

<!-- LOS 12 PUNTOS DEL SISTEMA -->
<section class="section" id="sistema">
  <div class="wrap">
    <div class="shead">
      <span class="eyebrow r"><span class="lbl-idx">(02)</span> El sistema</span>
      <h2 class="h">Doce puntos, un solo sistema.</h2>
      <p class="lede r">No vendemos servicios sueltos. Analizamos e intervenimos estos doce puntos, según dónde esté realmente el problema de tu empresa.</p>
    </div>
    <div class="pts">
      <div class="pt r" data-cursor><div class="pt-n">01</div><h3>Cliente ideal (ICP)</h3><p>Definimos con precisión a quién le vendés, para dejar de gastar presupuesto hablándole a todo el mercado.</p></div>
      <div class="pt r" data-cursor><div class="pt-n">02</div><h3>Segmentos prioritarios</h3><p>Ordenamos los segmentos por potencial real, para saber dónde conviene invertir primero.</p></div>
      <div class="pt r" data-cursor><div class="pt-n">03</div><h3>Oferta y propuesta de valor</h3><p>Revisamos qué estás ofreciendo y cómo lo estás comunicando, antes de tocar una sola campaña.</p></div>
      <div class="pt r" data-cursor><div class="pt-n">04</div><h3>Estrategia de adquisición</h3><p>Definimos el plan general: qué canales, en qué orden y con qué objetivo de negocio.</p></div>
      <div class="pt r" data-cursor><div class="pt-n">05</div><h3>Publicidad digital</h3><p>Google Ads, LinkedIn Ads, Meta Ads y más, ejecutados dentro de una estrategia, no de forma aislada.</p></div>
      <div class="pt r" data-cursor><div class="pt-n">06</div><h3>Arquitectura de campañas</h3><p>Estructura de cuentas y campañas pensada para medir y escalar, no para improvisar sobre la marcha.</p></div>
      <div class="pt r" data-cursor><div class="pt-n">07</div><h3>Landing pages y formularios</h3><p>Páginas y formularios diseñados para convertir visitas en leads de calidad, no solo en clics.</p></div>
      <div class="pt r" data-cursor><div class="pt-n">08</div><h3>Tracking y medición</h3><p>GA4, GTM, UTMs, GCLID y eventos configurados para saber qué campaña generó qué resultado.</p></div>
      <div class="pt r" data-cursor><div class="pt-n">09</div><h3>Integración con CRM</h3><p>Conectamos la pauta con tu CRM para que la información llegue completa hasta Ventas.</p></div>
      <div class="pt r" data-cursor><div class="pt-n">10</div><h3>Lead → MQL → SQL → Oportunidad</h3><p>Definimos en conjunto qué es cada etapa, para que Marketing y Ventas hablen el mismo idioma.</p></div>
      <div class="pt r" data-cursor><div class="pt-n">11</div><h3>Dashboards y atribución</h3><p>Reportes que conectan cada peso invertido con una oportunidad o una venta real.</p></div>
      <div class="pt r" data-cursor><div class="pt-n">12</div><h3>Optimización y escalamiento</h3><p>Una vez que el sistema funciona, escalamos presupuesto con criterio, no a ciegas.</p></div>
    </div>
  </div>
</section>

<!-- CÓMO TRABAJAMOS · 6 MESES -->
<section class="section" id="como-trabajamos">
  <div class="wrap">
    <div class="shead">
      <span class="eyebrow r"><span class="lbl-idx">(03)</span> Cómo trabajamos</span>
      <h2 class="h">Seis meses, un sistema completo.</h2>
      <p class="lede r">El mismo criterio que aplicamos con Sika: diagnóstico, implementación y optimización sobre datos reales. Sin importar cómo llegues, todo empieza acá.</p>
    </div>
    <div class="steps">
      <div class="step r"><div class="dot"></div><div><div class="snum">Mes 01</div><h3>Diagnóstico</h3><p>Auditamos tu negocio, tu funnel y tu competencia. Encontramos dónde se está perdiendo pipeline.</p></div></div>
      <div class="step r"><div class="dot"></div><div><div class="snum">Mes 02</div><h3>Estrategia</h3><p>Definimos ICP, propuesta de valor, canales y el plan de adquisición completo.</p></div></div>
      <div class="step r"><div class="dot"></div><div><div class="snum">Mes 03</div><h3>Implementación</h3><p>Montamos campañas, tracking, landing pages e integraciones con tu CRM.</p></div></div>
      <div class="step r"><div class="dot"></div><div><div class="snum">Mes 04</div><h3>Calidad</h3><p>Evaluamos la calidad real de los leads y ajustamos segmentación y mensajes.</p></div></div>
      <div class="step r"><div class="dot"></div><div><div class="snum">Mes 05</div><h3>Optimización</h3><p>Optimizamos sobre datos del pipeline real, no sobre métricas de vanidad.</p></div></div>
      <div class="step r"><div class="dot"></div><div><div class="snum">Mes 06</div><h3>Escalamiento</h3><p>Con el sistema validado, escalamos presupuesto e inversión con criterio.</p></div></div>
    </div>
  </div>
</section>

<!-- ÁREAS QUE PODEMOS INTERVENIR -->
<section class="section" id="areas">
  <div class="wrap">
    <div class="shead">
      <span class="eyebrow r"><span class="lbl-idx">(04)</span> Áreas que podemos intervenir</span>
      <h2 class="h">Herramientas dentro de un sistema mayor.</h2>
      <p class="lede r">Google Ads, GA4, CRM, dashboards, IA. No vendemos plataformas: usamos las que hagan falta para que el sistema funcione.</p>
    </div>
    <div class="auth-grid areas">
      <div class="auth r" data-cursor><div class="num">01</div><h3><a href="/agencia-de-publicidad-digital" style="color:inherit;text-decoration:none">Paid Media</a></h3><p>Google Ads, LinkedIn Ads, Meta Ads y más.</p></div>
      <div class="auth r" data-cursor><div class="num">02</div><h3><a href="/medicion-analytics-b2b" style="color:inherit;text-decoration:none">Analytics</a></h3><p>GA4, GTM y medición de conversiones.</p></div>
      <div class="auth r" data-cursor><div class="num">03</div><h3>CRM</h3><p>Integración y flujo de datos hacia Ventas.</p></div>
      <div class="auth r" data-cursor><div class="num">04</div><h3><a href="/medicion-analytics-b2b" style="color:inherit;text-decoration:none">Tracking</a></h3><p>UTMs, GCLID, eventos y atribución.</p></div>
      <div class="auth r" data-cursor><div class="num">05</div><h3>Landing pages</h3><p>Páginas y formularios que convierten.</p></div>
      <div class="auth r" data-cursor><div class="num">06</div><h3><a href="/medicion-analytics-b2b" style="color:inherit;text-decoration:none">Dashboards</a></h3><p>Reportes conectados con el negocio.</p></div>
      <div class="auth r" data-cursor><div class="num">07</div><h3><a href="/automatizacion-ia-b2b" style="color:inherit;text-decoration:none">Automatizaciones</a></h3><p>Flujos y nurturing sin fricción.</p></div>
      <div class="auth r" data-cursor><div class="num">08</div><h3><a href="/automatizacion-ia-b2b" style="color:inherit;text-decoration:none">IA</a></h3><p>Calificación de leads y contenido asistido.</p></div>
      <div class="auth r" data-cursor><div class="num">09</div><h3>Marketing + Ventas</h3><p>Definiciones y procesos alineados.</p></div>
    </div>
  </div>
</section>

<!-- FORMATOS / ADS (carrusel horizontal estilo hub) -->
<section class="section formats" id="formatos">
  <div class="wrap">
    <div class="shead">
      <span class="eyebrow r"><span class="lbl-idx">(05)</span> Formatos</span>
      <h2 class="h">Así se ven tus anuncios.</h2>
      <p class="lede r">Creatividades optimizadas para cada plataforma y formato publicitario.</p>
    </div>
  </div>
  <div class="ads-marq">
    <div class="ads-track" id="adsTrack">
      <article class="ad ad-google">
        <span class="ad-plat">Google · Búsqueda</span>
        <div class="gg-meta"><span class="gg-ad">Anuncio</span><span class="gg-url">www.sika.com › impermeabilizantes</span></div>
        <h4 class="gg-title">Impermeabilizantes Sika® — Calidad garantizada</h4>
        <p class="gg-desc">Línea completa para techos, paredes y piscinas. Envío a todo LATAM con asesoramiento técnico.</p>
        <div class="gg-links"><span>Catálogo</span><span>Distribuidores</span><span>Precios</span></div>
      </article>
      <article class="ad ad-phone"><div class="ph"><div class="ph-screen ig">
        <span class="ph-top">Reels</span>
        <div class="ph-foot"><span class="ph-user">sika_latam</span><p>Protección total para tu obra. Sika Roof.</p><span class="ph-sp">Patrocinado</span><button class="ph-cta">Ver más →</button></div>
      </div></div></article>
      <article class="ad ad-phone"><div class="ph"><div class="ph-screen tt">
        <span class="ph-top">Para ti</span>
        <div class="ph-foot"><span class="ph-user">@sika_oficial</span><p>¿Techo con goteras? Conocé Sika Top 107.</p><span class="ph-sp">Anuncio</span><button class="ph-cta green">Ver producto</button></div>
      </div></div></article>
      <article class="ad ad-li">
        <span class="ad-plat blue">LinkedIn · Mensaje</span>
        <div class="li-from"><span class="li-av">IC</span><div><b>Ivo Crisman</b><span>Didakto</span></div></div>
        <p class="li-body">Hola, vi que tu empresa crece en LATAM. ¿Hablamos de cómo está armado tu sistema de adquisición?</p>
        <div class="li-acts"><span class="li-p">Agendar</span><span class="li-s">Ver perfil</span></div>
      </article>
      <article class="ad ad-pin">
        <span class="ad-plat" style="color:#E60023">Pinterest · Pin</span>
        <div class="pin-img"></div>
        <div class="pin-body"><b>Cómo impermeabilizar tu techo</b><span>Patrocinado · sika.com</span></div>
      </article>
      <article class="ad ad-spot">
        <span class="ad-plat" style="color:#1DB954">Spotify · Audio</span>
        <div class="spot-row"><div class="spot-cover"></div><div><b>Sika Pro</b><span>Anuncio · 0:15</span></div></div>
        <div class="spot-bar"><i></i></div>
        <button class="spot-cta">Más información</button>
      </article>
      <article class="ad ad-gpt">
        <span class="ad-plat">ChatGPT Plus · Patrocinado</span>
        <div class="gpt-q">¿Mejor impermeabilizante para techos?</div>
        <div class="gpt-a"><span class="gpt-dot"></span><p>Una opción confiable es <b>Sika</b>: línea completa con respaldo técnico y envío a LATAM.</p></div>
        <span class="gpt-spon">◆ Resultado patrocinado</span>
      </article>
    </div>
  </div>
</section>

<!-- PARA QUIÉN ES DIDAKTO -->
<section class="section inv" id="para-quien">
  <div class="wrap">
    <div class="shead">
      <span class="eyebrow r"><span class="lbl-idx">(06)</span> Para quién es Didakto</span>
      <h2 class="h">No trabajamos con cualquier empresa.</h2>
      <p class="lede r">Buscamos un número limitado de empresas B2B con las que exista un fit real entre su necesidad y nuestro enfoque.</p>
    </div>
    <div class="inc">
      <div class="inc-item r"><div class="inc-tick">✓</div><div><h3>Empresas B2B</h3><p>No trabajamos e-commerce ni retail.</p></div></div>
      <div class="inc-item r"><div class="inc-tick">✓</div><div><h3>Con equipo comercial propio</h3><p>No solo un área de marketing aislada.</p></div></div>
      <div class="inc-item r"><div class="inc-tick">✓</div><div><h3>Ticket medio o alto</h3><p>Con procesos comerciales de cierta complejidad.</p></div></div>
      <div class="inc-item r"><div class="inc-tick">✓</div><div><h3>Necesidad real de pipeline</h3><p>No solo "más leads", sino más oportunidades reales.</p></div></div>
      <div class="inc-item r"><div class="inc-tick">✓</div><div><h3>Disposición a invertir</h3><p>Desde USD 1.800 mensuales en el programa.</p></div></div>
      <div class="inc-item r"><div class="inc-tick">✓</div><div><h3>Compromiso mínimo de 6 meses</h3><p>El tiempo necesario para ver el sistema funcionar.</p></div></div>
    </div>
  </div>
</section>

<!-- PRECIO -->
<section class="section" id="precio">
  <div class="wrap">
    <div class="shead" style="margin-inline:auto;text-align:center;max-width:640px">
      <span class="eyebrow r" style="justify-content:center"><span class="lbl-idx">(07)</span> Precio</span>
      <h2 class="h" style="margin-inline:auto">Sin sorpresas, desde el principio.</h2>
    </div>
    <div class="price-box r" style="margin-top:56px">
      <p class="price-tag">Programa de Adquisición B2B</p>
      <div class="price-num">USD 1.800<span>/mes</span></div>
      <p class="price-sub">Compromiso mínimo de 6 meses. Cartera limitada de cuentas por trimestre para sostener el estándar de trabajo en cada una.</p>
      <ul class="price-list">
        <li>Sin contratos ocultos</li>
        <li>Diagnóstico incluido</li>
        <li>Cartera limitada</li>
      </ul>
      <a class="btn mag" href="#evaluacion" data-form data-cursor>Solicitar evaluación <span class="a">→</span></a>
    </div>
  </div>
</section>

<!-- RESULTADOS (inv · horizontal pin) -->
<section class="section inv cases-pin" id="resultados">
  <div class="wrap cases-head">
    <div class="shead">
      <span class="eyebrow r"><span class="lbl-idx">(08)</span> Resultados</span>
      <h2 class="h">Resultados reales, clientes reales.</h2>
    </div>
    <div class="drag-hint r">Scrolleá →</div>
  </div>
  <div class="cases-track" id="casesTrack">
    <article class="case feat">
      <div>
        <div class="ctag">Construcción · USA</div>
        <h3 class="cname display">Sika USA</h3>
        <div class="cdesc">
          <p><b>Problema:</b> invertían en Meta y Google Ads con una agencia anterior, sin forma de saber qué campaña generaba oportunidades reales.</p>
          <p><b>Detectamos:</b> conversiones mal configuradas en GA4/GTM y un plan de medios sin relación con el funnel comercial.</p>
          <p><b>Cambiamos:</b> auditamos y corregimos la medición, y rediseñamos la arquitectura de campañas en Meta y Google Ads con foco en calidad de lead.</p>
        </div>
      </div>
      <div>
        <div class="ckpis">
          <div class="ckpi"><div class="v g" data-count="-72" data-suffix="%">−72%</div><div class="l">CPA vs. agencia anterior</div></div>
          <div class="ckpi"><div class="v" data-count="2191" data-prefix="+">+2.191</div><div class="l">Conversiones Meta + Google</div></div>
          <div class="ckpi"><div class="v">$5K+</div><div class="l">Inversión · 3 meses</div></div>
          <div class="ckpi"><div class="v">GA4/GTM</div><div class="l">Medición validada</div></div>
        </div>
        <p class="cs-row"><b>Impacto comercial:</b> con la medición validada, el equipo pudo identificar por primera vez qué campañas generaban oportunidades reales — no solo leads.</p>
        <blockquote class="cquote">“El diagnóstico inicial nos mostró dónde se perdía el presupuesto. En tres meses los números cambiaron radicalmente.”<cite>— Equipo Sika USA</cite></blockquote>
        <a class="bmore" href="/blog/caso-sika-agencia-publicidad-digital-b2b" data-cursor style="display:inline-block;margin-top:12px">Leer el caso completo <span class="a">→</span></a>
      </div>
    </article>
    <article class="case">
      <div>
        <div class="ctag">Construcción · USA</div>
        <h3 class="cname display">Sika Pro Select</h3>
        <p class="cdesc">Reestructuramos campañas y segmentación con foco agresivo en el costo por lead calificado: bajamos el CPA diez veces sin resignar calidad.</p>
      </div>
      <div class="ckpis">
        <div class="ckpi"><div class="v g" data-count="-90" data-suffix="%">−90%</div><div class="l">CPA (de $1 a $0,10)</div></div>
        <div class="ckpi"><div class="v">$0,10</div><div class="l">CPA por lead</div></div>
      </div>
    </article>
    <article class="case feat">
      <div>
        <div class="ctag">Construcción · Bolivia</div>
        <h3 class="cname display">Sika Bolivia</h3>
        <div class="cdesc">
          <p><b>Problema:</b> productos que se venden todo el año, sin una estrategia always-on de captación ni presencia en canales nuevos.</p>
          <p><b>Detectamos:</b> dependencia de campañas puntuales y ausencia total en TikTok, canal donde ya estaba su público.</p>
          <p><b>Cambiamos:</b> montamos una estrategia always-on en Meta Ads y lanzamos TikTok con pauta y contenido orgánico en simultáneo.</p>
        </div>
      </div>
      <div>
        <div class="ckpis">
          <div class="ckpi"><div class="v g" data-count="572" data-prefix="+">+572</div><div class="l">Leads en Meta Ads</div></div>
          <div class="ckpi"><div class="v">+$6K</div><div class="l">Invertidos (USD)</div></div>
          <div class="ckpi"><div class="v" data-count="1500" data-prefix="+">+1.500</div><div class="l">Seguidores en TikTok</div></div>
          <div class="ckpi"><div class="v" data-count="200" data-prefix="+">+200</div><div class="l">Registros a eventos</div></div>
        </div>
        <p class="cs-row"><b>Impacto comercial:</b> el equipo comercial pasó a tener un flujo constante de leads durante todo el año, no solo en picos de campaña.</p>
      </div>
    </article>
    <article class="case">
      <div>
        <div class="ctag">Recursos Humanos · LATAM</div>
        <h3 class="cname display">MSH</h3>
        <p class="cdesc">Estrategia de generación de leads con LinkedIn y Google Ads, enfocada en segmentos técnicos y profesionales de Recursos Humanos.</p>
      </div>
      <div class="ckpis">
        <div class="ckpi"><div class="v g" data-count="5" data-prefix="$">$5</div><div class="l">CPA en LinkedIn Ads</div></div>
        <div class="ckpi"><div class="v">B2B</div><div class="l">Lead gen cualificado</div></div>
        <div class="ckpi"><div class="v">2</div><div class="l">Canales: LinkedIn + Google</div></div>
        <div class="ckpi"><div class="v">↑</div><div class="l">Calidad sobre volumen</div></div>
      </div>
      <a class="bmore" href="/blog/caso-msh-linkedin-ads-cpa-5-dolares" data-cursor style="display:inline-block;margin-top:12px">Leer el caso completo <span class="a">→</span></a>
    </article>
    <article class="case ghost">
      <div>
        <div class="ctag">Tu empresa</div>
        <h3 class="cname display">¿La próxima?</h3>
        <p class="cdesc">Trabajamos con una cartera limitada de cuentas por trimestre. Si hay lugar, arrancamos con una evaluación de tu empresa.</p>
      </div>
      <a class="btn mag" href="#evaluacion" data-form data-cursor>Solicitar evaluación <span class="a">→</span></a>
    </article>
  </div>
</section>

<!-- TESTIMONIOS -->
<section class="section drag-sec">
  <div class="wrap">
    <div class="drag-head">
      <div class="shead"><span class="eyebrow r">Lo que dicen</span><h2 class="h">En sus palabras.</h2></div>
      <div class="drag-hint r">← arrastrá →</div>
    </div>
  </div>
  <div class="wrap drag-vp" id="dragVp">
    <div class="drag-track" id="dragTrack">
      <div class="tcard tcard-video" data-video-open data-video-src="/testimonios/testimonio-sika-rodrigo.mp4" data-video-poster="/testimonios/testimonio-sika-rodrigo-poster.png" data-video-label="Testimonio en video de Rodrigo Silva, Sika Americas" tabindex="0" role="button" aria-label="Reproducir testimonio en video de Rodrigo Silva, Sika Americas"><img class="sika-badge" src="/logos/sika.png" alt="Sika" loading="lazy"><div class="tplay">▶</div><p>Ver testimonio en video</p><div class="who"><span class="av"></span><div><b>Rodrigo Silva</b><span>Sika Americas</span></div></div></div>
      <div class="tcard tcard-video" data-video-open data-video-src="/testimonios/testimonio-sika-albeiro.mp4" data-video-poster="/testimonios/testimonio-sika-albeiro-poster.png" data-video-label="Testimonio en video de Albeiro Ortiz, Sika Bolivia" tabindex="0" role="button" aria-label="Reproducir testimonio en video de Albeiro Ortiz, Sika Bolivia"><img class="sika-badge" src="/logos/sika.png" alt="Sika" loading="lazy"><div class="tplay">▶</div><p>Ver testimonio en video</p><div class="who"><span class="av"></span><div><b>Albeiro Ortiz</b><span>Sika Bolivia</span></div></div></div>
      <div class="tcard">“El diagnóstico inicial nos mostró dónde se perdía el presupuesto.”<div class="who"><span class="av"></span><div><b>Equipo Sika</b><span>LATAM &amp; USA</span></div></div></div>
      <div class="tcard">“Bajamos el CPA en LinkedIn a $5 con leads realmente calificados.”<div class="who"><span class="av"></span><div><b>MSH Group</b><span>Recursos Humanos</span></div></div></div>
      <div class="tcard">“Por fin reportes que se entienden y dicen qué hacer después.”<div class="who"><span class="av"></span><div><b>Dirección</b><span>Cliente B2B</span></div></div></div>
      <div class="tcard">“Empezaron por entender el negocio, no por gastar en pauta.”<div class="who"><span class="av"></span><div><b>Marketing</b><span>Industria</span></div></div></div>
    </div>
  </div>
</section>

<!-- QUIÉNES SOMOS -->
<section class="section" id="nosotros">
  <div class="wrap">
    <div class="shead">
      <span class="eyebrow r"><span class="lbl-idx">(09)</span> Quiénes somos</span>
      <h2 class="h">Un equipo, no una cuenta más.</h2>
    </div>
    <div class="manif-cols" style="margin-top:40px">
      <p class="r">Somos un equipo especializado en adquisición B2B: publicidad, datos, tecnología y procesos comerciales. No administramos plataformas, entendemos negocios.</p>
      <p class="r">La mayoría de las empresas B2B no tiene un problema de inversión, sino de <strong>criterio</strong>. Empezamos por el diagnóstico, no por la campaña, y crecemos cuando <strong>vos crecés</strong>.</p>
      <p class="r">No trabajamos e-commerce ni retail: todo nuestro foco es <strong>B2B</strong>. Eso nos permite ser especialistas en un solo tipo de negocio, no generalistas de todos.</p>
    </div>
    <div class="auth-grid">
      <div class="auth r" data-cursor><div class="num">G</div><h3>Google Partner</h3><p>Acreditación oficial en Google Ads y medición.</p><a class="bmore" href="https://www.google.com/partners/agency?id=2992564471" target="_blank" rel="noopener" style="display:inline-block;margin-top:8px">Ver credencial <span class="a">→</span></a></div>
      <div class="auth r" data-cursor><div class="num">M</div><h3>Meta Certified</h3><p>Certificación en compra de medios en Meta.</p><a class="bmore" href="https://www.credly.com/badges/37bb50d2-e601-480a-b36c-eca1769e2d50" target="_blank" rel="noopener" style="display:inline-block;margin-top:8px">Ver credencial <span class="a">→</span></a></div>
      <div class="auth r" data-cursor><div class="num">7</div><h3>LATAM &amp; USA</h3><p>Operación multi-mercado en español e inglés.</p></div>
      <div class="auth r" data-cursor><div class="num">B2B</div><h3>Foco B2B</h3><p>Cartera limitada y especializada. Cada cliente importa.</p></div>
    </div>
  </div>
</section>

<!-- CONTENIDO -->
<section class="section inv" id="blog">
  <div class="wrap">
    <div class="shead">
      <span class="eyebrow r">Contenido</span>
      <h2 class="h">Ideas para diseñar tu sistema de adquisición B2B.</h2>
    </div>
    <div class="blog-grid">
      <a class="bcard r" href="/blog/publicidad-en-chatgpt" data-cursor>
        <span class="btag">IA & Medios</span>
        <h3>Publicidad en ChatGPT: la novedad</h3>
        <p>OpenAI ya muestra anuncios dentro de ChatGPT. Qué es, qué riesgos trae y cómo preparar tu marca.</p>
        <span class="bmeta">20 de junio, 2026 · 8 min</span>
        <span class="bmore">Leer artículo <span class="a">→</span></span>
      </a>
      <a class="bcard r" href="/blog/google-ads-hubspot-conversiones-offline" data-cursor>
        <span class="btag">Data & Medición</span>
        <h3>Google Ads + HubSpot: conversiones offline</h3>
        <p>Optimizar por formularios es optimizar por ruido. Cómo medir lo que sí factura: MQL, SQL, venta.</p>
        <span class="bmeta">19 de junio, 2026 · 9 min</span>
        <span class="bmore">Leer artículo <span class="a">→</span></span>
      </a>
      <a class="bcard r" href="/blog/caso-sika-agencia-publicidad-digital-b2b" data-cursor>
        <span class="btag">Caso de éxito</span>
        <h3>Caso Sika: −72% de CPA rediseñando el sistema completo</h3>
        <p>Auditoría, medición en GA4/GTM y rediseño del plan de medios. El proceso completo y los números.</p>
        <span class="bmeta">14 de agosto, 2026 · 8 min</span>
        <span class="bmore">Leer artículo <span class="a">→</span></span>
      </a>
    </div>
    <div style="text-align:center;margin-top:36px"><a class="btn btn-ghost mag" href="/blog" data-cursor>Ver todos los artículos <span class="a">→</span></a></div>
  </div>
</section>

<!-- FAQ -->
<section class="section" id="faq">
  <div class="wrap">
    <div class="shead">
      <span class="eyebrow r"><span class="lbl-idx">(10)</span> Preguntas frecuentes</span>
      <h2 class="h">Antes de hablar.</h2>
    </div>
    <div class="faq" id="faqList">
      <div class="faq-item"><button class="faq-q" aria-expanded="false">¿Por qué el programa dura 6 meses?<span class="faq-ic"></span></button><div class="faq-a"><div class="faq-a-in">La adquisición B2B necesita tiempo para diagnosticar, implementar, generar datos reales y optimizar sobre el pipeline. Es el mismo criterio que aplicamos con Sika: los resultados serios llegan con continuidad, no con un sprint de campaña.</div></div></div>
      <div class="faq-item"><button class="faq-q" aria-expanded="false">¿Por qué el precio es fijo y visible desde el sitio?<span class="faq-ic"></span></button><div class="faq-a"><div class="faq-a-in">Porque no buscamos la mayor cantidad de reuniones posibles, sino empresas con capacidad y voluntad real de invertir. El precio funciona también como un filtro.</div></div></div>
      <div class="faq-item"><button class="faq-q" aria-expanded="false">¿Qué pasa después de enviar la solicitud de evaluación?<span class="faq-ic"></span></button><div class="faq-a"><div class="faq-a-in">Revisamos la información de tu empresa para evaluar si existe fit real entre tu necesidad y nuestro enfoque. Si lo hay, coordinamos una primera conversación. Si no, te lo decimos igual.</div></div></div>
      <div class="faq-item"><button class="faq-q" aria-expanded="false">¿En qué se diferencian de una agencia de publicidad tradicional?<span class="faq-ic"></span></button><div class="faq-a"><div class="faq-a-in">Empezamos por el diagnóstico del sistema completo — ICP, oferta, tracking, CRM y proceso comercial — no por la campaña. La pauta es una parte del trabajo, no el producto.</div></div></div>
      <div class="faq-item"><button class="faq-q" aria-expanded="false">¿Trabajan con empresas fuera de LATAM?<span class="faq-ic"></span></button><div class="faq-a"><div class="faq-a-in">Sí. Operamos en múltiples mercados de LATAM y USA, en español e inglés. Lideramos la publicidad digital de Sika para LATAM + USA en simultáneo.</div></div></div>
      <div class="faq-item"><button class="faq-q" aria-expanded="false">¿Cuánto tardan en verse resultados?<span class="faq-ic"></span></button><div class="faq-a"><div class="faq-a-in">Los primeros meses se enfocan en diagnóstico, medición y estructura. A partir de ahí optimizamos sobre datos reales del pipeline; en casos como Sika, los números cambiaron de forma marcada en torno a los tres meses.</div></div></div>
      <div class="faq-item"><button class="faq-q" aria-expanded="false">¿Qué pasa si mi empresa no tiene CRM o su tracking está incompleto?<span class="faq-ic"></span></button><div class="faq-a"><div class="faq-a-in">Es habitual, y forma parte de lo que evaluamos e implementamos dentro del programa. No hace falta que llegues con todo resuelto.</div></div></div>
    </div>
  </div>
</section>

<!-- CTA FINAL (green) -->
<section class="section cta" id="evaluacion">
  <div class="wrap">
    <span class="eyebrow r">Hablemos</span>
    <h2>Quizás no necesitás <em>más publicidad.</em></h2>
    <p class="lede r" style="color:var(--ink2);margin-left:auto;margin-right:auto">Quizás necesitás entender mejor tu sistema de adquisición. Por eso empezamos siempre con una evaluación, no con una campaña.</p>
    <div class="hero-cta r">
      <a class="btn btn-dark mag" href="#evaluacion" data-form data-cursor>Solicitar evaluación <span class="a">→</span></a>
      <a class="btn btn-ghost mag" href="#sistema" data-cursor>Ver los 12 puntos <span class="a">→</span></a>
    </div>
    <div class="cta-meta r">
      <span><b>ivo@didaktomarketing.com</b></span>
      <span>Lun–Vie · 9:00–18:00</span>
      <span>100% online · LATAM &amp; USA</span>
      <span>Cartera limitada</span>
    </div>
  </div>
</section>

</main>

<!-- FOOTER (inv) -->
<footer class="section inv foot">
  <div class="wrap">
    <div class="foot-top">
      <div>
        <a class="brand" href="#top"><span class="iso"></span><b style="font-family:'Archivo';font-weight:800;letter-spacing:-.04em;font-size:22px">Didakto</b></a>
        <p style="margin-top:16px;color:var(--ink2);font-size:14px;max-width:30ch">Sistemas de adquisición B2B. Publicidad, datos, CRM y ventas conectados.</p>
      </div>
      <div class="foot-cols">
        <div><h4>Capacidades</h4><a href="/agencia-de-publicidad-digital">Publicidad digital</a><a href="/generacion-de-leads-b2b">Generación de leads B2B</a><a href="/google-ads">Google Ads</a><a href="/meta-ads">Meta Ads</a><a href="/linkedin-ads-b2b">LinkedIn Ads</a><a href="/medicion-analytics-b2b">Medición &amp; Analytics</a><a href="/automatizacion-ia-b2b">Automatización con IA</a></div>
        <div><h4>Mapa</h4><a href="#enfoque">Nuestro enfoque</a><a href="#como-trabajamos">Cómo trabajamos</a><a href="#resultados">Resultados</a><a href="#nosotros">Nosotros</a><a href="/blog">Contenido</a></div>
        <div><h4>Contacto</h4><a href="mailto:ivo@didaktomarketing.com">Email</a><a href="https://www.linkedin.com/in/ivo-roman-crisman/" target="_blank" rel="noopener">LinkedIn</a><a href="#evaluacion">Solicitar evaluación</a></div>
      </div>
    </div>
    <div class="foot-bot"><span>© 2026 Didakto Marketing</span><span>Sistemas de adquisición B2B.</span></div>
  </div>
</footer>

<!-- MODAL FORMULARIO -->
<div class="modal" id="modal" aria-hidden="true">
  <div class="modal-bg" data-close></div>
  <div class="modal-panel" data-lenis-prevent role="dialog" aria-modal="true" aria-label="Solicitud de evaluación">
    <button class="modal-x" data-close aria-label="Cerrar">✕</button>
    <span class="eyebrow">Solicitud de evaluación</span>
    <h3 class="modal-title">Contanos sobre tu empresa.</h3>
    <form id="leadForm" novalidate>
      <input type="text" name="_hp" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">

      <p class="fsec">Sobre tu empresa</p>
      <div class="frow">
        <label>Nombre<input name="nombre" autocomplete="given-name" required></label>
        <label>Apellido<input name="apellido" autocomplete="family-name" required></label>
      </div>
      <div class="frow">
        <label>Cargo<input name="cargo" autocomplete="organization-title" required></label>
        <label>Email corporativo<input type="email" name="email" autocomplete="email" required></label>
      </div>
      <div class="frow">
        <label>Teléfono / WhatsApp<input type="tel" name="telefono" autocomplete="tel" inputmode="tel" placeholder="Cód. país + número"></label>
        <label>Empresa<input name="empresa" autocomplete="organization" required></label>
      </div>
      <div class="frow">
        <label>Sitio web<input name="sitio_web" autocomplete="url" placeholder="https://"></label>
        <label>País<input name="pais" autocomplete="country-name"></label>
      </div>
      <div class="frow">
        <label>Industria<input name="industria"></label>
        <label>Cantidad de empleados<select name="empleados"><option value="">Seleccioná un rango</option><option>1–10</option><option>11–50</option><option>51–200</option><option>201–500</option><option>Más de 500</option></select></label>
      </div>

      <p class="fsec">Sobre tu situación actual</p>
      <label>Principal desafío de adquisición o crecimiento<textarea name="desafio" rows="3" required></textarea></label>
      <div class="frow">
        <label>¿Hacen publicidad digital hoy?<select name="publicidad_activa"><option value="">Seleccioná una opción</option><option value="si">Sí</option><option value="no">No</option></select></label>
        <label>Inversión mensual aprox. en publicidad<select name="inversion_actual"><option value="">Seleccioná un rango</option><option>No invertimos aún</option><option>Menos de USD 1.000</option><option>USD 1.000–3.000</option><option>USD 3.000–8.000</option><option>Más de USD 8.000</option></select></label>
      </div>
      <div class="frow">
        <label>¿Utilizan CRM?<select name="usa_crm"><option value="">Seleccioná una opción</option><option value="si">Sí</option><option value="no">No</option></select></label>
        <label>¿Cuál CRM? (si aplica)<input name="crm_cual"></label>
      </div>
      <label>Objetivo principal para los próximos 6–12 meses<textarea name="objetivo" rows="2"></textarea></label>
      <label>¿Qué ocurre con los leads una vez que Marketing los genera?<textarea name="proceso_leads" rows="2"></textarea></label>
      <label>¿Pueden identificar hoy qué campañas generan oportunidades o ventas?<select name="atribucion"><option value="">Seleccioná una opción</option><option value="si">Sí, con claridad</option><option value="parcial">Parcialmente</option><option value="no">No</option></select></label>

      <p class="fsec">Sobre inversión</p>
      <label>¿Están preparados para invertir desde USD 1.800 mensuales durante un período mínimo de 6 meses?
        <div class="radio-row">
          <label><input type="radio" name="inversion_lista" value="si" required> Sí</label>
          <label><input type="radio" name="inversion_lista" value="evaluar"> Necesitamos evaluarlo</label>
          <label><input type="radio" name="inversion_lista" value="no"> No</label>
        </div>
      </label>

      <button type="submit" class="btn btn-dark" id="leadSubmit" style="margin-top:26px">Enviar solicitud <span class="a">→</span></button>
      <p class="form-ok" id="formOk">✓ Solicitud recibida. Nuestro equipo revisará la información de tu empresa para evaluar si existe fit entre tus necesidades y nuestro enfoque. Si consideramos que Didakto puede aportar valor al proyecto, nos pondremos en contacto para coordinar una primera conversación.</p>
      <p class="form-note">Te respondemos en menos de 24 h hábiles.</p>
    </form>
  </div>
</div>

<!-- MODAL VIDEO TESTIMONIO -->
<div class="modal" id="videoModal" aria-hidden="true">
  <div class="modal-bg" data-video-close></div>
  <div class="modal-panel video-panel" data-lenis-prevent role="dialog" aria-modal="true" aria-label="Testimonio en video">
    <button class="modal-x" data-video-close aria-label="Cerrar">✕</button>
    <video id="testimonialVideo" controls playsinline preload="none">
      <source src="" type="video/mp4">
    </video>
  </div>
</div>
`;
