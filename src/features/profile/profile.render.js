import { navigate } from "../../router/app.router.js";

export function renderProfile() {
  const container = document.getElementById("app");
  if (!container) return;

  container.innerHTML = `
    <article class="card"> 
      <header class="card-header">

        <!-- NUEVO HERO VISUAL -->
        <div class="profile-hero">

          <div class="profile-img-wrapper">
            <div class="profile-img" aria-label="Foto de perfil de Jairo Cárdenas"></div>
            <span class="status-dot"></span>
          </div>

        </div>

      </header>

      <section class="card-content">

        <!-- IDENTIDAD -->
        <h1 class="hero-title">Jairo Cárdenas</h1>

         <div class="profile-badge">
            Product Builder • SaaS Developer
          </div>

        <p class="subtitle">
          Desarrollo productos digitales listos para usar y vender
        </p>

        <!-- VALUE HOOK (MEJORADO) -->
        <div class="value-proposition">
          <p>
            Construyo <strong>soluciones digitales que generan ingresos</strong>.
            Desde la idea hasta producción — <strong>listas para ser utilizadas en negocio real.</strong>
          </p>
        </div>

        <!-- QUICK STATS (MEJORADOS A NEGOCIO) -->
        <div class="quick-stats">

          <div class="stat">
            <span class="num">20+</span>
            <span class="label">Años resolviendo problemas reales</span>
          </div>

          <div class="stat">
            <span class="num">10+</span>
            <span class="label">Soluciones digitales activas</span>
          </div>

          <div class="stat">
            <span class="num">SaaS</span>
            <span class="label">Productos listos para usar</span>
          </div>

        </div>

        <!-- DASHBOARD -->
        <nav class="dashboard-grid">

          <div class="badge-wrapper">
            <span class="badge-new">DISPONIBLE</span>

            <a href="#" id="btn-projects" data-route="projects" class="dash-btn">
              <i class="fa-solid fa-code"></i>
              <span>Explorar soluciones</span>
            </a>
          </div>

          <a href="#" id="btn-about" data-route="about" class="dash-btn">
            <i class="fa-solid fa-user-tie"></i>
            <span>Sobre mí</span>
          </a>

          <a href="#" id="btn-talk" data-route="contact" class="dash-btn primary-dash">
            <i class="fa-solid fa-paper-plane"></i>
            <span>Hablemos de tu proyecto</span>
          </a>

        </nav>

        <!-- MICRO TRUST (NUEVO) -->
        <p class="trust-line">
          Soluciones diseñadas para negocio real • Sin complejidad técnica
        </p>

        <!-- CV -->
        <section class="cv-module">

          <p class="section-title">CV / PROFILE</p>

          <div class="cv-options">
            <a href="src/assets/doc/Jairo_Cardenas_CV__es426.pdf" target="_blank" class="cv-link">ES</a>
            <span class="sep">|</span>
            <a href="src/assets/doc/Jairo_Cardenas_CV_en426.pdf" target="_blank" class="cv-link">EN</a>
          </div>

          <div class="security-note">
            <i class="fa-solid fa-shield-halved"></i>
            <p>
              Información técnica resumida. 
              Contacto directo para detalles avanzados.
            </p>
          </div>

        </section>

      </section>

      <footer class="card-footer">
        <span>Built for real-world business</span>
        <img src="public/images/bandera_venezuela_icon.webp" class="flag" alt="Venezuela">
      </footer>

    </article>
  `;

  document.querySelectorAll("[data-route]").forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      navigate(btn.dataset.route);
    };
  });
}