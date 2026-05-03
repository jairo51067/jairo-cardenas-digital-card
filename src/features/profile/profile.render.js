export function renderProfile() {
  const container = document.getElementById("app");
  if (!container) return;

  container.innerHTML = `
    <article class="card profile-elite">

      <header class="card-header">
        <div class="profile-img" aria-label="Foto de perfil de Jairo Cárdenas"></div>
      </header>

      <section class="card-content">

        <!-- IDENTIDAD -->
        <h1 class="hero-title">Jairo Cárdenas</h1>

        <p class="subtitle">
          Full-Stack Developer & Product Builder
        </p>

        <!-- VALUE HOOK -->
        <div class="value-proposition">
          <p>
            Construyo <strong>productos digitales reales</strong> combinando desarrollo web y visión de producto.
            No solo programo — <strong>transformo ideas en sistemas funcionales escalables.</strong>
          </p>
        </div>

        <!-- QUICK STATS (NUEVO NIVEL) -->
        <div class="quick-stats">

          <div class="stat">
            <span class="num">20+</span>
            <span class="label">Años experiencia</span>
          </div>

          <div class="stat">
            <span class="num">10+</span>
            <span class="label">Sistemas creados</span>
          </div>

          <div class="stat">
            <span class="num">Full</span>
            <span class="label">Stack mindset</span>
          </div>

        </div>

        <!-- DASHBOARD -->
        <nav class="dashboard-grid">

          <div class="badge-wrapper">
            <span class="badge-new">ACTIVO 2026</span>

            <a href="#" id="btn-projects" class="dash-btn">
              <i class="fa-solid fa-code"></i>
              <span>Ver productos</span>
            </a>
          </div>

          <a href="#" id="btn-about" class="dash-btn">
            <i class="fa-solid fa-user-tie"></i>
            <span>Sobre mí</span>
          </a>

          <a href="#" id="btn-talk" class="dash-btn primary-dash">
            <i class="fa-solid fa-paper-plane"></i>
            <span>Hablemos de tu proyecto</span>
          </a>

        </nav>

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
              Información técnica resumida por enfoque profesional.
              Contacto directo para detalles avanzados.
            </p>
          </div>

        </section>

      </section>

      <footer class="card-footer">
        <span>Based in Venezuela</span>
        <img src="public/images/bandera_venezuela_icon.webp" class="flag" alt="Venezuela">
      </footer>

    </article>
  `;
}