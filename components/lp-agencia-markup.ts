// Landing de campaña (Google Ads · "agencia de publicidad digital").
// BORRADOR para revisión de Ivo. Ruta: /lp/agencia-de-publicidad (noindex). Español neutro (tuteo, sin voseo).
// Hooks que usa components/lp-agencia.tsx: [data-form] [data-loc] [data-count] .rv .lpq #lpForm #form-card
const WA = "https://wa.me/5493573456577?text=" + encodeURIComponent("Hola, vengo desde la web de Didakto. Quiero coordinar una llamada sobre mi publicidad digital.")

// Canal de YouTube de Didakto. Mientras esté vacío, el botón no se muestra.
const YT_URL = "https://www.youtube.com/@ivocrisman"

export const LP_MARKUP = String.raw`
<!-- Intro: la inversión viaja hasta la venta y la pantalla se abre por esa línea -->
<div class="pl" id="pl" aria-hidden="true">
  <div class="pl-h pl-t"></div>
  <div class="pl-h pl-b"></div>
  <div class="pl-core">
    <div class="pl-line"><i></i></div>
    <span class="pl-d" style="--k:0"></span><span class="pl-d" style="--k:1"></span><span class="pl-d" style="--k:2"></span><span class="pl-d" style="--k:3"></span>
    <div class="pl-words"><span style="--k:0">Inversión</span><span style="--k:1">Leads</span><span style="--k:2">Oportunidades</span><span style="--k:3">Ventas</span></div>
  </div>
</div>

<!-- NAV mínimo: sin menú, solo salidas de conversión -->
<header class="lp-nav" id="lpNav">
  <a class="brand" href="#top" aria-label="Didakto"><span class="iso"></span><b>Didakto</b></a>
  <div class="lp-nav-r">
    <a class="lp-wa-link" href="${WA}" target="_blank" rel="noopener" data-wa data-loc="nav">WhatsApp</a>
    <a class="btn" href="#form-card" data-form data-loc="nav">Coordinar llamada <span class="a">→</span></a>
  </div>
</header>

<main id="top">

<!-- HERO -->
<section class="lp-hero">
  <div class="lp-aurora" aria-hidden="true"><i class="a1"></i><i class="a2"></i><i class="a3"></i></div>
  <div class="lp-grid-bg" aria-hidden="true"></div>
  <div class="wrap lp-hero-grid">

    <div class="lp-a">
      <span class="eyebrow fx" style="--d:.0">Agencia de publicidad digital · B2B · Google Partner</span>
      <h1 class="lp-h1 display">
        <span class="lp-ln"><span style="--i:0">Agencia de</span></span>
        <span class="lp-ln"><span style="--i:1">publicidad digital</span></span>
        <span class="lp-ln"><span style="--i:2">que conecta tu pauta</span></span>
        <span class="lp-ln"><span style="--i:3">con <em class="serif lp-hl">ventas reales<i class="bar"></i></em>.</span></span>
      </h1>
      <p class="lp-sub fx" style="--d:.45">Gestionamos Google, Meta y LinkedIn Ads para empresas B2B de LATAM y USA, y medimos todo el camino hasta la venta. Sin leads que nadie atiende ni reportes que no dicen qué hacer.</p>
    </div>

    <!-- FORMULARIO (paso 1 visible sin abrir ningún modal) -->
    <aside class="lp-card fx" style="--d:.6" id="form-card" aria-label="Coordinar una llamada">
      <div class="lp-steps" aria-hidden="true"><span class="on" data-dot="1"></span><span data-dot="2"></span></div>
      <form id="lpForm" novalidate>
        <input type="text" name="_hp" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">

        <div data-step="1">
          <p class="lp-card-k">Paso 1 de 2 · menos de 1 minuto</p>
          <h2 class="lp-card-t">Coordinemos una llamada</h2>
          <p class="lp-card-s">Cuéntanos de tu empresa y conversamos sobre cómo conectar tu publicidad con ventas. Sin compromiso.</p>
          <div class="lp-frow">
            <label>Nombre<input name="nombre" autocomplete="given-name" required></label>
            <label>Apellido<input name="apellido" autocomplete="family-name" required></label>
          </div>
          <label>Email de trabajo<input type="email" name="email" autocomplete="email" inputmode="email" required></label>
          <div class="lp-frow">
            <label>Empresa<input name="empresa" autocomplete="organization" required></label>
            <label>Teléfono / WhatsApp<input type="tel" name="telefono" autocomplete="tel" inputmode="tel" placeholder="+código de país" required></label>
          </div>
          <p class="lp-err" id="lpErr" role="alert"></p>
          <button type="submit" class="btn lp-submit" id="lpSubmit">Coordinar llamada <span class="a">→</span></button>
          <p class="lp-micro">Te contactamos en menos de 24 h hábiles. La llamada no tiene compromiso.</p>
          <p class="lp-legal">Usamos tu teléfono solo para coordinar la llamada. Al enviar, aceptas nuestra <a href="/privacy" target="_blank" rel="noopener">Política de privacidad</a>.</p>
        </div>

        <div data-step="2" hidden>
          <p class="lp-card-k lp-ok">✓ Solicitud recibida</p>
          <h2 class="lp-card-t">Tres datos más y llegamos preparados</h2>
          <p class="lp-card-s">Es opcional: nos ayuda a aprovechar mejor la llamada.</p>
          <label>Sitio web<input name="sitio_web" autocomplete="url" inputmode="url" placeholder="empresa.com"></label>
          <label>¿Cuánto inviertes hoy en publicidad por mes?
            <select name="inversion_actual"><option value="">Elige un rango</option><option>No invertimos aún</option><option>Menos de USD 1.000</option><option>USD 1.000–3.000</option><option>USD 3.000–8.000</option><option>Más de USD 8.000</option></select>
          </label>
          <label>¿Qué es lo que más te preocupa?
            <select name="desafio"><option value="">Elige una opción</option><option>Pocos leads</option><option>Leads de mala calidad</option><option>No sé qué campaña funciona</option><option>CPA o costo por lead muy alto</option><option>Quiero escalar lo que ya funciona</option></select>
          </label>
          <button type="submit" class="btn lp-submit" id="lpSubmit2">Enviar datos <span class="a">→</span></button>
          <button type="button" class="lp-skip" id="lpSkip">Omitir por ahora</button>
        </div>

        <div data-step="done" hidden>
          <p class="lp-card-k lp-ok">✓ Todo listo</p>
          <h2 class="lp-card-t">Gracias. Te contactaremos para coordinar la llamada.</h2>
          <p class="lp-card-s">Si prefieres avanzar más rápido, escríbenos ahora y lo coordinamos por WhatsApp.</p>
          <a class="btn lp-submit" href="${WA}" target="_blank" rel="noopener" data-wa data-loc="done">Hablar por WhatsApp <span class="a">→</span></a>
        </div>
      </form>
      <p class="lp-demo" id="lpDemo" hidden>Modo demo local: no se envía nada.</p>
    </aside>

    <div class="lp-b">
      <ul class="lp-ticks fx" style="--d:.8">
        <li>Google Partner y Meta Certified</li>
        <li>Medición hasta la venta: GA4, GTM y CRM</li>
        <li>Cartera limitada: atención directa en cada cuenta</li>
      </ul>

      <div class="lp-creds-row fx" style="--d:.88">
        <a href="https://www.google.com/partners/agency?id=2992564471" target="_blank" rel="noopener" data-cred="google"><img src="/lp/google-ads-certified-160.png" alt="" width="30" height="30"><span><b>Google Partner</b><small>Ver credencial ↗</small></span></a>
        <a href="https://www.credly.com/badges/37bb50d2-e601-480a-b36c-eca1769e2d50" target="_blank" rel="noopener" data-cred="meta"><img src="/lp/meta-certified-240.png" alt="" width="30" height="30"><span><b>Meta Certified</b><small>Ver credencial ↗</small></span></a>
      </div>

      <!-- Sistema en una línea: inversión → venta, se enciende en secuencia -->
      <div class="lp-pipe fx" style="--d:.95" aria-label="De la inversión a la venta">
        <span class="lp-pipe-line"></span>
        <span class="n" style="--k:0"><i></i>Inversión</span>
        <span class="n" style="--k:1"><i></i>Lead</span>
        <span class="n" style="--k:2"><i></i>MQL</span>
        <span class="n" style="--k:3"><i></i>Oportunidad</span>
        <span class="n" style="--k:4"><i></i>Venta</span>
      </div>

      <div class="lp-proof fx" style="--d:1.1">
        <div class="lp-proof-v"><span data-count="72" data-prefix="−" data-suffix="%">−72%</span><small>CPA</small></div>
        <p><b>Sika USA</b> · rediseñamos la medición y la arquitectura de campañas en Meta y Google. <a href="#casos">Ver el caso</a></p>
      </div>
    </div>

  </div>
</section>

<!-- CLIENTES -->
<section class="lp-clients rv" aria-label="Empresas que confían">
  <p class="eyebrow">Empresas que confían en Didakto</p>
  <div class="lp-marq">
    <div class="lp-track">
      <div class="lp-set">
        <img src="/lp/logos/sika.webp" alt="Sika">
        <img src="/lp/logos/sahiora.webp" alt="Sahiora">
        <img src="/lp/logos/chocon-medio-suites.webp" alt="Chocón Medio Suites">
        <img src="/lp/logos/rio-neuquen.webp" alt="Río Neuquén Distrito Industrial">
        <img src="/lp/logos/confluencia.webp" alt="Confluencia">
        <img src="/lp/logos/deposito-fiscal.webp" alt="Depósito Fiscal y Aduanero del Neuquén">
      </div>
      <div class="lp-set" aria-hidden="true">
        <img src="/lp/logos/sika.webp" alt="">
        <img src="/lp/logos/sahiora.webp" alt="">
        <img src="/lp/logos/chocon-medio-suites.webp" alt="">
        <img src="/lp/logos/rio-neuquen.webp" alt="">
        <img src="/lp/logos/confluencia.webp" alt="">
        <img src="/lp/logos/deposito-fiscal.webp" alt="">
      </div>
    </div>
  </div>
</section>

<!-- RESULTADOS -->
<section class="section" id="casos">
  <div class="wrap">
    <div class="lp-head rv">
      <span class="eyebrow">Resultados</span>
      <h2 class="lp-h2">Números de cuentas reales, no promesas.</h2>
    </div>

    <div class="lp-impact inv rv">
      <p class="lp-impact-k">Sika LATAM · medido en Salesforce</p>
      <div class="lp-impact-main">
        <div class="lp-impact-a"><span class="n" data-count="63" data-prefix="USD " data-suffix=" mil">USD 63 mil</span><small>invertidos en publicidad</small></div>
        <span class="lp-impact-arrow" aria-hidden="true">→</span>
        <div class="lp-impact-b"><span class="n" data-count="850" data-prefix="+USD " data-suffix=" mil">+USD 850 mil</span><small>en oportunidades generadas</small></div>
      </div>
      <div class="lp-impact-stats">
        <div><b data-count="8900" data-format="k">8,9 mil</b><span>leads generados</span></div>
        <div><b data-count="1600" data-format="k">1,6 mil</b><span>oportunidades creadas</span></div>
        <div><b data-count="427">427</b><span>oportunidades ya ganadas, por más de USD 200 mil</span></div>
      </div>
      <p class="lp-impact-note">Datos del CRM de Sika (Salesforce) sobre campañas de Didakto. Son oportunidades generadas, no ventas. Valores originales en francos suizos, convertidos a USD de forma aproximada.</p>
    </div>

    <div class="lp-cases">
      <div class="lp-videos">
        <div class="lp-video rv" data-video-open data-video-id="sika_americas_rodrigo" data-video-src="/testimonios/testimonio-sika-rodrigo.mp4" data-video-poster="/lp/testimonios/rodrigo-poster.webp" data-video-label="Testimonio en video de Rodrigo Silva, Sika Americas" tabindex="0" role="button" aria-label="Reproducir testimonio en video de Rodrigo Silva, Sika Americas">
          <img src="/lp/testimonios/rodrigo-poster.webp" alt="" loading="lazy">
          <span class="lp-play"><i>▶</i>Ver testimonio</span>
        </div>
        <div class="lp-video rv" data-video-open data-video-id="sika_bolivia_albeiro" data-video-src="/testimonios/testimonio-sika-albeiro.mp4" data-video-poster="/lp/testimonios/albeiro-poster.webp" data-video-label="Testimonio en video de Albeiro Ortiz, Sika Bolivia" tabindex="0" role="button" aria-label="Reproducir testimonio en video de Albeiro Ortiz, Sika Bolivia">
          <img src="/lp/testimonios/albeiro-poster.webp" alt="" loading="lazy">
          <span class="lp-play"><i>▶</i>Ver testimonio</span>
        </div>
      </div>
      <div class="lp-kpis">
        <article class="lp-kpi rv"><div class="v" data-count="72" data-prefix="−" data-suffix="%">−72%</div><h3>Sika USA</h3><p>Costo por conversión frente a su agencia anterior, con +2.191 conversiones en Meta y Google en 3 meses.</p></article>
        <article class="lp-kpi rv"><div class="v v-sm" data-count="8000" data-prefix="$">$8.000</div><h3>Río Neuquén</h3><p>Parque industrial privado en Neuquén, Argentina. Captamos clientes potenciales con Google Ads, Meta y LinkedIn: CPA de ARS 8.000 en LinkedIn.</p></article>
        <article class="lp-kpi rv"><div class="v" data-count="90" data-prefix="−" data-suffix="%">−90%</div><h3>Sika Pro Select</h3><p>El CPA pasó de USD 1 a USD 0,10 sin perder calidad de lead.</p></article>
        <article class="lp-kpi rv"><div class="v" data-count="572" data-prefix="+">+572</div><h3>Sika Bolivia</h3><p>Leads en Meta Ads con una estrategia always-on, más TikTok con pauta y contenido orgánico.</p></article>
      </div>
    </div>
    <blockquote class="lp-quote rv">“El diagnóstico inicial nos mostró dónde se perdía el presupuesto. En tres meses los números cambiaron radicalmente.”<cite>Equipo Sika USA · <a href="/blog/caso-sika-agencia-publicidad-digital-b2b">Leer el caso completo</a></cite></blockquote>
  </div>
</section>

<!-- QUIÉN ESTÁ DETRÁS -->
<section class="section" id="equipo">
  <div class="wrap lp-who">
    <figure class="lp-photo rv">
      <img src="/ivo-imagen.jpeg" alt="Ivo Crisman, fundador de Didakto" width="1390" height="1600" loading="lazy">
      <figcaption><b>Ivo Crisman</b><span>Fundador de Didakto</span></figcaption>
    </figure>
    <div class="lp-bio">
      <div class="rv">
        <span class="eyebrow">Quién está detrás</span>
        <h2 class="lp-h2">Hablas directo con quien lidera tu cuenta.</h2>
        <p class="lede">Didakto es una agencia joven con crecimiento sostenido, construida sobre una base clara: no ser una agencia más. Antes de escalar campañas, escalamos el entendimiento del negocio.</p>
      </div>
      <ul class="lp-cred-list rv">
        <li><span><b>+7 años</b> de experiencia en Paid Media y Data Analytics</span></li>
        <li><span>Certificado por <b>Meta y Google Ads</b> como Paid Media Manager</span></li>
        <li><span>Lideramos la publicidad digital de <b>Sika LATAM y Sika USA</b> en simultáneo</span></li>
        <li><span>Principio rector: <em class="serif">“Hacerlo bien desde el principio”</em></span></li>
      </ul>
      <div class="lp-team rv">
        <p class="k">Un equipo full-time de 8 personas, sin freelancers sueltos</p>
        <div><span>2 Paid Media Senior</span><span>1 Paid Media Semi Senior</span><span>2 Diseño</span><span>1 Edición de video</span><span>1 Web Analyst</span><span>Dirección de operaciones</span></div>
      </div>
      <div class="lp-bio-cta rv">
        <p class="k">Mira cómo pienso la publicidad B2B</p>
        <div>
          <a class="btn btn-ghost" href="https://www.linkedin.com/in/ivo-roman-crisman/" target="_blank" rel="noopener" data-loc="bio-linkedin" data-li>LinkedIn de Ivo <span class="a">↗</span></a>
          ${YT_URL ? `<a class="btn btn-ghost" href="${YT_URL}" target="_blank" rel="noopener" data-loc="bio-youtube" data-yt>Canal de YouTube <span class="a">↗</span></a>` : ""}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- QUÉ INCLUYE -->
<section class="section inv" id="incluye">
  <div class="wrap">
    <div class="lp-head rv">
      <span class="eyebrow">Qué incluye</span>
      <h2 class="lp-h2">Una agencia que mide hasta la venta.</h2>
      <p class="lede">La pauta es solo una parte. Trabajamos todo lo que hace que esa inversión se convierta en oportunidades.</p>
    </div>
    <div class="lp-inc">
      <article class="rv"><span>01</span><h3>Paid Media</h3><p>Google, Meta, LinkedIn y TikTok Ads. Estructura de cuentas pensada para medir y escalar.</p></article>
      <article class="rv"><span>02</span><h3>Landing pages y CRO</h3><p>Páginas y formularios diseñados para convertir visitas calificadas en leads.</p></article>
      <article class="rv"><span>03</span><h3>Tracking y analítica</h3><p>GA4, GTM, UTMs y conversiones para saber qué campaña genera qué resultado.</p></article>
      <article class="rv"><span>04</span><h3>Integración con CRM</h3><p>El lead llega completo a Ventas, con su origen, y las plataformas aprenden de lo que cierra.</p></article>
      <article class="rv"><span>05</span><h3>Dashboards</h3><p>Reportes que conectan cada dólar invertido con una oportunidad o una venta.</p></article>
      <article class="rv"><span>06</span><h3>Optimización continua</h3><p>Cada período cierra igual: qué funcionó, qué aprendimos y qué vamos a cambiar.</p></article>
    </div>
  </div>
</section>

<!-- CÓMO TRABAJAMOS -->
<section class="section" id="proceso">
  <div class="wrap">
    <div class="lp-head rv">
      <span class="eyebrow">Cómo trabajamos</span>
      <h2 class="lp-h2">Cuatro etapas, sin sorpresas.</h2>
    </div>
    <ol class="lp-proc">
      <li class="rv"><b>Etapa 1</b><h3>Diagnóstico</h3><p>Auditamos cuenta, medición, funnel y competencia. Encontramos dónde se pierde el presupuesto.</p></li>
      <li class="rv"><b>Etapa 2</b><h3>Estrategia e implementación</h3><p>Definimos cliente ideal y canales; montamos campañas, tracking, landings y CRM.</p></li>
      <li class="rv"><b>Etapa 3</b><h3>Calidad y optimización</h3><p>Evaluamos la calidad real de los leads y optimizamos sobre datos del pipeline.</p></li>
      <li class="rv"><b>Etapa 4</b><h3>Escalamiento</h3><p>Con el sistema validado, escalamos la inversión con criterio.</p></li>
    </ol>
  </div>
</section>

<!-- PARA QUIÉN + PRECIO -->
<section class="section inv" id="para-quien">
  <div class="wrap lp-fit">
    <div class="rv">
      <span class="eyebrow">Para quién es</span>
      <h2 class="lp-h2">Para empresas B2B que quieren pipeline, no solo clics.</h2>
      <ul class="lp-list">
        <li>Empresas B2B con equipo comercial propio</li>
        <li>Ticket medio o alto, venta consultiva</li>
        <li>Disposición a invertir y a medir bien</li>
      </ul>
      <p class="lp-note">No trabajamos e-commerce ni retail: así podemos ser especialistas en un solo tipo de negocio.</p>
    </div>
    <div class="lp-price lp-callcard rv">
      <p class="k">¿Encajamos?</p>
      <h3 class="lp-callcard-t">Conversemos sobre tu caso.</h3>
      <p class="s">Entendemos tu negocio, cómo captas clientes hoy y si podemos aportar valor. Si no es así, te lo decimos igual.</p>
      <a class="btn" href="#form-card" data-form data-loc="para-quien">Coordinar llamada <span class="a">→</span></a>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="section" id="faq">
  <div class="wrap lp-faq-wrap">
    <div class="lp-head rv">
      <span class="eyebrow">Preguntas frecuentes</span>
      <h2 class="lp-h2">Antes de escribirnos.</h2>
    </div>
    <div class="lp-faq">
      <div class="lpq rv"><button type="button" aria-expanded="false"><span>¿Qué pasa en la llamada?</span><i></i></button><div class="a"><div><p>Es una conversación de descubrimiento: conocemos tu negocio, cómo captas clientes hoy y qué está frenando los resultados. Si vemos que podemos aportar valor, te proponemos los próximos pasos. Si no, te lo decimos igual. No tiene compromiso.</p></div></div></div>
      <div class="lpq rv"><button type="button" aria-expanded="false"><span>¿En qué se diferencian de otras agencias de publicidad digital?</span><i></i></button><div class="a"><div><p>Empezamos por el sistema completo (cliente ideal, oferta, tracking, CRM y proceso comercial), no por la campaña. Optimizamos sobre leads que cierran, no sobre formularios.</p></div></div></div>
      <div class="lpq rv"><button type="button" aria-expanded="false"><span>¿Cuánto cuesta y qué incluye la inversión en publicidad?</span><i></i></button><div class="a"><div><p>Los honorarios de Didakto se definen en la llamada según el alcance, los mercados y las plataformas. La inversión en Google, Meta o LinkedIn es aparte y la define tu empresa.</p></div></div></div>
      <div class="lpq rv"><button type="button" aria-expanded="false"><span>¿Cuánto tardan en verse resultados?</span><i></i></button><div class="a"><div><p>Los primeros pasos se enfocan en diagnóstico, medición y estructura. A partir de ahí optimizamos sobre datos reales del pipeline; en casos como Sika, los números cambiaron de forma marcada en torno a los tres meses.</p></div></div></div>
      <div class="lpq rv"><button type="button" aria-expanded="false"><span>¿Puedo contratar solo la gestión de campañas?</span><i></i></button><div class="a"><div><p>Sí, como servicio especializado, con alcance delimitado y un pricing proporcionalmente mayor que dentro del programa completo. Cuéntanos tu caso en la llamada.</p></div></div></div>
      <div class="lpq rv"><button type="button" aria-expanded="false"><span>¿Trabajan con empresas de otros países?</span><i></i></button><div class="a"><div><p>Sí. Operamos en LATAM y USA, en español e inglés. Gestionamos la publicidad digital de Sika para varios países en simultáneo.</p></div></div></div>
    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section class="section cta lp-cta">
  <div class="wrap">
    <h2 class="rv">¿Coordinamos una llamada?</h2>
    <p class="lede rv">Cuéntanos de tu empresa y conversemos sobre cómo convertir tu inversión publicitaria en ventas.</p>
    <div class="lp-cta-b rv">
      <a class="btn btn-dark" href="#form-card" data-form data-loc="cta-final">Coordinar llamada <span class="a">→</span></a>
      <a class="btn btn-ghost" href="${WA}" target="_blank" rel="noopener" data-wa data-loc="cta-final">Escribir por WhatsApp <span class="a">→</span></a>
    </div>
  </div>
</section>

</main>

<footer class="lp-foot">
  <div class="wrap">
    <span>© 2026 Didakto Marketing · Agencia de publicidad digital B2B</span>
    <span><a href="/">Sitio completo</a> · <a href="/privacy">Privacidad</a> · <a href="mailto:ivo@didaktomarketing.com">ivo@didaktomarketing.com</a></span>
  </div>
</footer>

<!-- Barra fija en móvil -->
<div class="lp-bar" id="lpBar">
  <a class="btn" href="#form-card" data-form data-loc="sticky">Coordinar llamada <span class="a">→</span></a>
  <a class="btn btn-ghost" href="${WA}" target="_blank" rel="noopener" data-wa data-loc="sticky" aria-label="WhatsApp">WhatsApp</a>
</div>

<!-- MODAL VIDEO -->
<div class="modal" id="videoModal" aria-hidden="true">
  <div class="modal-bg" data-video-close></div>
  <div class="modal-panel video-panel" role="dialog" aria-modal="true" aria-label="Testimonio en video">
    <button class="modal-x" data-video-close aria-label="Cerrar">✕</button>
    <video id="testimonialVideo" controls playsinline preload="none"><source src="" type="video/mp4"></video>
  </div>
</div>
`
