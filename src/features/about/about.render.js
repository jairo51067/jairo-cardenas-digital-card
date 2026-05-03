
// src/features/about/about.render.js
import { renderContactPage } from '../contact/contact.render.js'; 


const content = { 
  es: {
    title: "Sobre Mí",
    highlight: "Desarrollador Web Full-Stack & Product Manager",
    text1: "Con más de <strong>20 años de trayectoria</strong> liderando procesos en el sector industrial, he evolucionado hacia el desarrollo de software para combinar mi capacidad analítica con la creación de soluciones digitales.",
    text2: "Mi diferencial radica en un perfil multidisciplinario: la precisión técnica de un <em>T.S.U. en Alimentos</em>, la visión estratégica de un negociador y la creatividad del diseño digital.",
    // Categorías de tecnologías
    techLabels: ["Frontend", "Backend", "Datos", "Herramientas"],
    quote: "Enfocado en optimizar procesos y aportar valor mediante soluciones tecnológicas robustas y escalables.",
    btnContact: "Ver Contacto",
    btnBack: "← Volver",
  },
  en: {
    title: "About Me",
    highlight: "Full-Stack Web Developer & Product Manager",
    text1: "With over <strong>20 years of experience</strong> leading processes in the industrial sector, I have transitioned to software development to merge my analytical mindset with digital creation.",
    text2: "My competitive edge lies in a multidisciplinary profile: the technical precision of a <em>Food Science professional</em>, the strategic vision of a negotiator, and digital design creativity.",
    // Tech categories
    techLabels: ["Frontend", "Backend", "Data", "Tools"],
    quote: "Focused on optimizing processes and delivering value through robust, scalable, and high-impact technological solutions.",
    btnContact: "Get in Touch",
    btnBack: "← Back",
  },
};

export function renderAboutPage(lang = "es") {
  const container = document.getElementById("app");
  const data = content[lang];

  container.innerHTML = `
    <article class="card fade-in">

      <section class="card-content about-view">

        <!-- NAV -->
        <nav class="about-nav">
          <a href="#" id="btn-home" class="nav-link">${data.btnBack}</a>

          <div class="lang-selector">
            <button id="toggle-en" class="lang-btn ${lang === "en" ? "active" : ""}">EN</button>
            <span class="sep">|</span>
            <button id="toggle-es" class="lang-btn ${lang === "es" ? "active" : ""}">ES</button>
          </div>
        </nav>

        <!-- HEADER -->
        <header class="about-header">
          <h2>${data.title}</h2>
          <div class="underline"></div>
        </header>

        <div class="about-body">

          <p class="highlight">${data.highlight}</p>

          <!-- INTRO -->
          <div class="about-card">
            <p class="main-text">${data.text1}</p>
            <p class="main-text">${data.text2}</p>
          </div>

          <!-- METRICS -->
          <div class="metrics-grid">

            <div class="metric-card">
              <span class="metric-number">20+</span>
              <span class="metric-label">Años de experiencia</span>
            </div>

            <div class="metric-card">
              <span class="metric-number">10+</span>
              <span class="metric-label">Proyectos digitales</span>
            </div>

            <div class="metric-card">
              <span class="metric-number">100%</span>
              <span class="metric-label">Enfoque en soluciones</span>
            </div>

          </div>

          <!-- TIMELINE -->
          <div class="timeline">

            <div class="timeline-item">
              <span class="dot"></span>
              <div>
                <h4>Industria & Procesos</h4>
                <p>+20 años liderando operaciones y optimización industrial.</p>
              </div>
            </div>

            <div class="timeline-item">
              <span class="dot"></span>
              <div>
                <h4>Transición Digital</h4>
                <p>Especialización en desarrollo web y automatización.</p>
              </div>
            </div>

            <div class="timeline-item">
              <span class="dot"></span>
              <div>
                <h4>Actualidad</h4>
                <p>Desarrollo de soluciones SaaS, apps y sistemas escalables.</p>
              </div>
            </div>

          </div>

          <!-- STACK -->
          <div class="tech-stack-grid about-tech">

            <div class="tech-group">
              <p class="group-label">${data.techLabels[0]}</p>
              <div class="group-icons">
                <i class="fa-brands fa-react"></i>
                <i class="fa-solid fa-bolt"></i>
              </div>
            </div>

            <div class="tech-group">
              <p class="group-label">${data.techLabels[1]}</p>
              <div class="group-icons">
                <i class="fa-brands fa-node-js"></i>
              </div>
            </div>

            <div class="tech-group">
              <p class="group-label">${data.techLabels[2]}</p>
              <div class="group-icons">
                <i class="fa-solid fa-database"></i>
              </div>
            </div>

            <div class="tech-group">
              <p class="group-label">${data.techLabels[3]}</p>
              <div class="group-icons">
                <i class="fa-brands fa-github"></i>
              </div>
            </div>

          </div>

          <!-- VALUE STATEMENT -->
          <div class="value-box">
            <h3>Why me?</h3>
            <p>
              Combino experiencia en procesos industriales + desarrollo digital moderno, 
              lo que me permite entender tanto el problema como la solución de negocio.
            </p>
          </div>

          <!-- QUOTE -->
          <blockquote class="about-quote">
            "${data.quote}"
          </blockquote>

        </div>

        <!-- CTA -->
        <footer class="about-footer">
          <a href="#" id="btn-talk" class="btn-primary-about">
            ${data.btnContact}
          </a>
        </footer>

      </section>
    </article>
  `;

  // EVENTS
  document.getElementById("toggle-en").onclick = (e) => {
    e.preventDefault();
    renderAboutPage("en");
  };

  document.getElementById("toggle-es").onclick = (e) => {
    e.preventDefault();
    renderAboutPage("es");
  };

  document.getElementById("btn-home").onclick = (e) => {
    e.preventDefault();
    location.reload();
  };

  document.getElementById("btn-talk").onclick = (e) => {
    e.preventDefault();
    renderContactPage();
  };
}