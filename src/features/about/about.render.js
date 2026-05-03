
import { navigate } from "../../router/app.router.js";

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
    <article class="card fade-in about-elite">

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

        <!-- HERO ABOUT -->
        <header class="about-hero">

          <h2 class="reveal">${data.title}</h2>

          <p class="highlight reveal">
            ${data.highlight}
          </p>

          <div class="underline"></div>

        </header>

        <!-- STORY BLOCK -->
        <div class="story-block">

          <div class="story-item reveal">
            <span class="story-tag">Inicio</span>
            <p>${data.text1}</p>
          </div>

          <div class="story-item reveal">
            <span class="story-tag">Evolución</span>
            <p>${data.text2}</p>
          </div>

          <div class="story-item reveal">
            <span class="story-tag">Enfoque actual</span>
            <p>Construcción de sistemas digitales escalables, SaaS y automatización de procesos.</p>
          </div>

        </div>

        <!-- METRICS (CON ANIMACIÓN) -->
        <div class="metrics-grid elite">

          <div class="metric-card">
            <span class="metric-number counter" data-target="20">0</span>
            <span class="metric-label">Años experiencia</span>
          </div>

          <div class="metric-card">
            <span class="metric-number counter" data-target="10">0</span>
            <span class="metric-label">Proyectos activos</span>
          </div>

          <div class="metric-card">
            <span class="metric-number counter" data-target="100">0</span>
            <span class="metric-label">% enfoque solución</span>
          </div>

        </div>

        <!-- STACK -->
        <div class="tech-stack-grid about-tech reveal">

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

        <!-- VALUE PROPOSITION -->
        <div class="value-elite reveal">

          <h3>¿Por qué trabajar conmigo?</h3>

          <p>
            Combino <strong>experiencia industrial real</strong> + 
            <strong>desarrollo de software moderno</strong>, lo que me permite entender 
            el problema desde el negocio y construir la solución desde la tecnología.
          </p>

        </div>

        <!-- QUOTE -->
        <blockquote class="about-quote reveal">
          "${data.quote}"
        </blockquote>

        <!-- CTA -->
        <footer class="about-footer reveal">

          <a href="#" id="btn-talk" class="btn-primary-about">
            ${data.btnContact}
          </a>

        </footer>

      </section>
    </article>
  `;

  // NAV
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
     navigate("home");
  };

  document.getElementById("btn-talk").onclick = (e) => {
    e.preventDefault();
    navigate("contact");
  }; 

  // 🔥 ANIMACIONES
  initAboutEliteAnimations();
}

function initAboutEliteAnimations() {

  // COUNTERS
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;

      const increment = target / 40;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(update, 30);
      } else {
        counter.innerText = target;
      }
    };

    update();
  });

  // SCROLL REVEAL SIMPLE
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
}