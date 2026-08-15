/* Secciones reutilizables de prueba social, extraídas de la home (didakto-redesign-markup.ts)
   para usarse también en las landings de servicio (Google Ads, Meta Ads, Agencia de Publicidad
   Digital). Reutilizan las mismas clases CSS (app/didakto-redesign.css) y quedan enganchadas por
   las animaciones GSAP registradas en components/dk-page.tsx (marquee de clientes, loop de ads,
   scroll horizontal pineado de casos). */

const LOGOS = [
  { src: "/logos/sika.png", alt: "Sika" },
  { src: "/logos/silat.png", alt: "Silat" },
  { src: "/logos/sahiora.png", alt: "Sahiora" },
  { src: "/logos/chocon-medio-suites.png", alt: "Chocón Medio Suites" },
  { src: "/logos/rio-neuquen.png", alt: "Río Neuquén Distrito Industrial" },
  { src: "/logos/confluencia.png", alt: "Confluencia" },
  { src: "/logos/deposito-fiscal.png", alt: "Depósito Fiscal y Aduanero del Neuquén" },
]

export function ClientsSection() {
  return (
    <section className="clients" id="clientes">
      <p className="eyebrow clients-eyebrow">Empresas que confían</p>
      <div className="clients-marq" aria-hidden="true">
        <div className="clients-track" id="marq">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <div className="client-logo" key={i}><img src={l.src} alt={l.alt} loading="lazy" /></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AdsSection() {
  return (
    <section className="section formats" id="formatos">
      <div className="wrap">
        <div className="shead">
          <span className="eyebrow r">Formatos</span>
          <h2 className="h">Así se ven tus anuncios.</h2>
          <p className="lede r">Creatividades optimizadas para cada plataforma y formato publicitario.</p>
        </div>
      </div>
      <div className="ads-marq">
        <div className="ads-track" id="adsTrack">
          <article className="ad ad-google">
            <span className="ad-plat">Google · Búsqueda</span>
            <div className="gg-meta"><span className="gg-ad">Anuncio</span><span className="gg-url">www.sika.com › impermeabilizantes</span></div>
            <h4 className="gg-title">Impermeabilizantes Sika® — Calidad garantizada</h4>
            <p className="gg-desc">Línea completa para techos, paredes y piscinas. Envío a todo LATAM con asesoramiento técnico.</p>
            <div className="gg-links"><span>Catálogo</span><span>Distribuidores</span><span>Precios</span></div>
          </article>
          <article className="ad ad-phone"><div className="ph"><div className="ph-screen ig">
            <span className="ph-top">Reels</span>
            <div className="ph-foot"><span className="ph-user">sika_latam</span><p>Protección total para tu obra. Sika Roof.</p><span className="ph-sp">Patrocinado</span><button className="ph-cta">Ver más →</button></div>
          </div></div></article>
          <article className="ad ad-phone"><div className="ph"><div className="ph-screen tt">
            <span className="ph-top">Para ti</span>
            <div className="ph-foot"><span className="ph-user">@sika_oficial</span><p>¿Techo con goteras? Conocé Sika Top 107.</p><span className="ph-sp">Anuncio</span><button className="ph-cta green">Ver producto</button></div>
          </div></div></article>
          <article className="ad ad-li">
            <span className="ad-plat blue">LinkedIn · Mensaje</span>
            <div className="li-from"><span className="li-av">IC</span><div><b>Ivo Crisman</b><span>Paid Media · Didakto</span></div></div>
            <p className="li-body">Hola, vi que tu empresa crece en LATAM. ¿Hablamos de reducir tu CPA en Google y Meta un 40%?</p>
            <div className="li-acts"><span className="li-p">Agendar</span><span className="li-s">Ver perfil</span></div>
          </article>
          <article className="ad ad-pin">
            <span className="ad-plat" style={{ color: "#E60023" }}>Pinterest · Pin</span>
            <div className="pin-img" />
            <div className="pin-body"><b>Cómo impermeabilizar tu techo</b><span>Patrocinado · sika.com</span></div>
          </article>
          <article className="ad ad-spot">
            <span className="ad-plat" style={{ color: "#1DB954" }}>Spotify · Audio</span>
            <div className="spot-row"><div className="spot-cover" /><div><b>Sika Pro</b><span>Anuncio · 0:15</span></div></div>
            <div className="spot-bar"><i /></div>
            <button className="spot-cta">Más información</button>
          </article>
          <article className="ad ad-gpt">
            <span className="ad-plat">ChatGPT Plus · Patrocinado</span>
            <div className="gpt-q">¿Mejor impermeabilizante para techos?</div>
            <div className="gpt-a"><span className="gpt-dot" /><p>Una opción confiable es <b>Sika</b>: línea completa con respaldo técnico y envío a LATAM.</p></div>
            <span className="gpt-spon">◆ Resultado patrocinado</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export function CasesSection() {
  return (
    <section className="section inv cases-pin" id="casos">
      <div className="wrap cases-head">
        <div className="shead">
          <span className="eyebrow r">Casos &amp; resultados</span>
          <h2 className="h">Resultados reales, clientes reales.</h2>
        </div>
        <div className="drag-hint r">Scrolleá →</div>
      </div>
      <div className="cases-track" id="casesTrack">
        <article className="case feat">
          <div>
            <div className="ctag">Construcción · USA</div>
            <h3 className="cname display">Sika USA</h3>
            <p className="cdesc">Auditamos lo existente, validamos conversiones en GA4/GTM y rediseñamos el plan de medios en Meta y Google Ads.</p>
          </div>
          <div>
            <div className="ckpis">
              <div className="ckpi"><div className="v g" data-count="-72" data-suffix="%">−72%</div><div className="l">CPA vs. agencia anterior</div></div>
              <div className="ckpi"><div className="v" data-count="2191" data-prefix="+">+2.191</div><div className="l">Conversiones Meta + Google</div></div>
              <div className="ckpi"><div className="v">$5K+</div><div className="l">Inversión · 3 meses</div></div>
              <div className="ckpi"><div className="v">GA4/GTM</div><div className="l">Medición validada</div></div>
            </div>
            <blockquote className="cquote">"El diagnóstico inicial nos mostró dónde se perdía el presupuesto. En tres meses los números cambiaron radicalmente."<cite>— Equipo Sika USA</cite></blockquote>
            <a className="bmore" href="/blog/caso-sika-agencia-publicidad-digital-b2b" data-cursor style={{ display: "inline-block", marginTop: 12 }}>Leer el caso completo <span className="a">→</span></a>
          </div>
        </article>
        <article className="case">
          <div>
            <div className="ctag">Construcción · USA</div>
            <h3 className="cname display">Sika Pro Select</h3>
            <p className="cdesc">Reestructuramos campañas y segmentación con foco agresivo en el costo por lead: bajamos el CPA diez veces.</p>
          </div>
          <div className="ckpis">
            <div className="ckpi"><div className="v g" data-count="-90" data-suffix="%">−90%</div><div className="l">CPA (de $1 a $0,10)</div></div>
            <div className="ckpi"><div className="v">$0,10</div><div className="l">CPA por lead</div></div>
          </div>
        </article>
        <article className="case feat">
          <div>
            <div className="ctag">Construcción · Bolivia</div>
            <h3 className="cname display">Sika Bolivia</h3>
            <p className="cdesc">Partimos desde cero con una estrategia always-on de captación de leads para productos que venden todo el año, y lanzamos el canal de TikTok (pauta + contenido orgánico).</p>
          </div>
          <div>
            <div className="ckpis">
              <div className="ckpi"><div className="v g" data-count="572" data-prefix="+">+572</div><div className="l">Leads en Meta Ads</div></div>
              <div className="ckpi"><div className="v">+$6K</div><div className="l">Invertidos (USD)</div></div>
              <div className="ckpi"><div className="v" data-count="1500" data-prefix="+">+1.500</div><div className="l">Seguidores en TikTok</div></div>
              <div className="ckpi"><div className="v" data-count="200" data-prefix="+">+200</div><div className="l">Registros a eventos</div></div>
            </div>
          </div>
        </article>
        <article className="case">
          <div>
            <div className="ctag">Recursos Humanos · LATAM</div>
            <h3 className="cname display">MSH</h3>
            <p className="cdesc">Estrategia especializada de generación de leads con LinkedIn y Google Ads, con campañas enfocadas en segmentos técnicos y profesionales.</p>
          </div>
          <div className="ckpis">
            <div className="ckpi"><div className="v g" data-count="5" data-prefix="$">$5</div><div className="l">CPA en LinkedIn Ads</div></div>
            <div className="ckpi"><div className="v">B2B</div><div className="l">Lead gen cualificado</div></div>
            <div className="ckpi"><div className="v">2</div><div className="l">Canales: LinkedIn + Google</div></div>
            <div className="ckpi"><div className="v">↑</div><div className="l">Calidad sobre volumen</div></div>
          </div>
          <a className="bmore" href="/blog/caso-msh-linkedin-ads-cpa-5-dolares" data-cursor style={{ display: "inline-block", marginTop: 12 }}>Leer el caso completo <span className="a">→</span></a>
        </article>
        <article className="case ghost">
          <div>
            <div className="ctag">Tu empresa</div>
            <h3 className="cname display">¿La próxima?</h3>
            <p className="cdesc">Quedan lugares para este trimestre. Empezamos siempre con una consultoría sin costo.</p>
          </div>
          <button className="btn mag" data-form data-cursor type="button">Hablemos <span className="a">→</span></button>
        </article>
      </div>
    </section>
  )
}
