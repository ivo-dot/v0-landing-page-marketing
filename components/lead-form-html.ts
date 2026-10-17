// Modal del formulario de evaluación: UNA sola copia para la home y todas las landings.
// Si se agrega un campo acá, sumarlo también en el allowlist de app/api/contact/route.ts
// y en la lectura de datos de components/lead-form.ts.
export const LEAD_MODAL_HTML = String.raw`
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
      <label>¿Están preparados para invertir desde USD 1.500 mensuales en honorarios durante un período mínimo de 6 meses?
        <div class="radio-row">
          <label><input type="radio" name="inversion_lista" value="si" required> Sí</label>
          <label><input type="radio" name="inversion_lista" value="evaluar"> Necesitamos evaluarlo</label>
          <label><input type="radio" name="inversion_lista" value="no"> No</label>
        </div>
      </label>

      <div id="tsBox" class="ts-box"></div>

      <button type="submit" class="btn btn-dark" id="leadSubmit" style="margin-top:26px">Enviar solicitud <span class="a">→</span></button>
      <p class="form-ok" id="formOk">✓ Solicitud recibida. Nuestro equipo revisará la información de tu empresa para evaluar si existe fit entre tus necesidades y nuestro enfoque. Si consideramos que Didakto puede aportar valor al proyecto, nos pondremos en contacto para coordinar una primera conversación.</p>
      <p class="form-note">Te respondemos en menos de 24 h hábiles.</p>
    </form>
  </div>
</div>
`
