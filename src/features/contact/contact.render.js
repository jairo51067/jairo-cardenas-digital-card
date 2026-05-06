import { navigate } from "../../router/app.router.js";

export function renderContactPage() {
  const container = document.getElementById("app");
  if (!container) return;

  container.innerHTML = `
    <article class="card contact-elite fade-in">

      <section class="card-content contact-view">

        <!-- NAV -->
        <nav class="contact-nav">
          <a href="#" id="btn-home" class="nav-link">← Home</a>
        </nav>

        <!-- HEADER -->
        <header class="contact-header">
          <h2>Let’s build something great</h2>
          <p>Disponible para SaaS, automatización y desarrollo de productos digitales.</p>
        </header>

        <!-- CONTACT GRID -->
        <div class="contact-grid">

          <!-- WHATSAPP -->
          <a href="https://wa.me/5804127055024" target="_blank" class="contact-card whatsapp">
            <i class="fa-brands fa-whatsapp"></i>
            <div>
              <span>WhatsApp</span>
              <p>Respuesta inmediata</p>
            </div>
          </a>

          <!-- EMAIL -->
          <a href="mailto:jairo.cardenas.dev@gmail.com" class="contact-card email">
            <i class="fa-solid fa-envelope"></i>
            <div>
              <span>Email</span>
              <p>Respuesta formal</p>
            </div>
          </a>

                   <!-- LINKEDIN -->
          <a href="https://www.linkedin.com/in/jairocardenas-dev-49b94b25" target="_blank" class="contact-card linkedin">
            <i class="fa-brands fa-linkedin"></i>
            <div>
              <span>LinkedIn</span>
              <p>Perfil profesional</p>
            </div>
          </a>

                    <!-- GITHUB -->
          <a href="https://github.com/jairo51067" target="_blank" class="contact-card github">
            <i class="fa-brands fa-github"></i>
            <div>
              <span>GitHub</span>
              <p>Proyectos reales</p>
            </div>
          </a>
        </div>

        

        <!-- CTA -->
        <div class="contact-cta">
          <h3>¿Tienes una idea en mente?</h3>
          <p>Conversemos y la llevamos a producto real.</p>

          <a href="mailto:jairo.cardenas.dev@gmail.com" class="btn-primary-contact">
            Iniciar conversación
            <i class="fa-solid fa-paper-plane"></i>
          </a>
        </div>

        <!-- NOTE -->
        <div class="contact-note">
          <i class="fa-solid fa-clock"></i>
          <p>Tiempo de respuesta promedio: <strong>menos de 24h</strong></p>
        </div>

      </section>

      <!-- FOOTER RESTAURADO -->
      <footer class="contact-footer">
        <span>San Cristóbal, Venezuela</span>
        <img src="public/images/bandera_venezuela_icon.webp" class="flag" alt="Venezuela">
      </footer>

    </article>
  `;
}