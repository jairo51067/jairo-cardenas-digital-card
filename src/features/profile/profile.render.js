

export function renderProfile() {
  const container = document.getElementById("app"); 
  if (!container) return;

  container.innerHTML = `
    <article class="card">
        <header class="card-header">
            <div class="profile-img" aria-label="Foto de perfil de Jairo Cárdenas"></div>
        </header>

        <section class="card-content">
            <h1>Jairo Cárdenas</h1>
            <p class="subtitle">Construyo herramientas digitales que resuelven problemas reales de negocio.</p>

            <!-- Párrafo de Valor Sustituto -->
            <div class="value-proposition">
                <p>
                    Combinación de <strong>Product Manager</strong> y <strong>Full-Stack Dev</strong>. 
                    No solo escribo código; diseño, construyo y llevo al mercado soluciones SaaS completas.
                </p>
            </div>

            <div class="skills-container">
                <!-- <span class="skill-tag">HTML5</span> -->
                <!-- <span class="skill-tag">CSS3</span> -->
                <!-- <span class="skill-tag">JavaScript</span> -->
                <!-- <span class="skill-tag">React - Vite</span> -->
                <!-- <span class="skill-tag">Node.js</span> -->
                <!-- <span class="skill-tag">NoSQL</span> -->
                <!-- <span class="skill-tag">SQL</span> -->
                <!-- <span class="skill-tag">Git - GitHub</span> -->

            </div>

            <nav class="dashboard-grid">
                <div class="badge-wrapper">
                    <span class="badge-new">NUEVO ABRIL 2026</span>
                    <a href="#" id="btn-projects" class="dash-btn">
                        <i class="fa-solid fa-code"></i>
                        <!-- <span>Projects</span> -->
                        <span>Productos que he Creado</span>
                    </a>
                </div>

                <a href="#" id="btn-about" class="dash-btn">
                    <i class="fa-solid fa-user-tie"></i>
                    <span>About Me</span>
                </a>

                <a href="#" id="btn-talk" class="dash-btn primary-dash">
                    <i class="fa-solid fa-paper-plane"></i>
                    <span>Let's Talk</span>
                </a>
            </nav>
            
            <section class="cv-module">
                <p class="section-title">DOWNLOAD CV</p>
                <div class="cv-options">
                    <a href="src/assets/doc/Jairo_Cardenas_CV__es426.pdf" target="_blank" class="cv-link">Español</a>
                    <span class="sep">|</span>
                    <a href="src/assets/doc/Jairo_Cardenas_CV_en426.pdf" target="_blank" class="cv-link">English</a>
                </div>
                <div class="security-note">
        <i class="fa-solid fa-shield-halved"></i>
        <p>Versión simplificada por seguridad de datos. Para detalles técnicos adicionales o referencias, no dudes en contactarme.</p>
    </div>
            </section>
        </section>

        <footer class="card-footer">
            <span>From Venezuela</span>
            <img src="public/images/bandera_venezuela_icon.webp" alt="Bandera de Venezuela" class="flag">
        </footer>
    </article>
  `;
}
