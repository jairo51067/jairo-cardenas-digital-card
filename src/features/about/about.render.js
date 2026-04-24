// src/features/about/about.render.js
import { renderContactPage } from '../contact/contact.render.js';

const content = {
  es: {
    title: "Sobre Mí",
    highlight: "Desarrollador Web Full-Stack & Product Manager",
    text1:
      "Con más de <strong>20 años de trayectoria</strong> liderando procesos en el sector industrial, he evolucionado hacia el desarrollo de software para combinar mi capacidad analítica con la creación de soluciones digitales.",
    text2:
      "Mi diferencial radica en un perfil multidisciplinario: la precisión técnica de un <em>T.S.U. en Alimentos</em>, la visión estratégica de un negociador y la creatividad del diseño digital.",
    quote:
      "Enfocado en optimizar procesos y aportar valor mediante soluciones tecnológicas robustas y escalables.",
    btnContact: "Ver Contacto",
    btnBack: "← Volver",
  },
  en: {
    title: "About Me",
    highlight: "Full-Stack Web Developer & Product Manager",
    text1:
      "With over <strong>20 years of experience</strong> leading processes in the industrial sector, I have transitioned to software development to merge my analytical mindset with digital creation.",
    text2:
      "My competitive edge lies in a multidisciplinary profile: the technical precision of a <em>Food Science professional</em>, the strategic vision of a negotiator, and digital design creativity.",
    quote:
      "Focused on optimizing processes and delivering value through robust, scalable, and high-impact technological solutions.",
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
            <nav class="about-nav">
                <a href="#" id="btn-home" class="nav-link">${data.btnBack}</a>
                <div class="lang-selector">
                    <button type="button" id="toggle-en" class="lang-btn ${lang === "en" ? "active" : ""}" data-lang="en">EN</button>
                    <span class="sep">|</span>
                    <button type="button" id="toggle-es" class="lang-btn ${lang === "es" ? "active" : ""}" data-lang="es">ES</button>
                </div>
            </nav>

            <header class="about-header">
                <h2>${data.title}</h2>
                <div class="underline"></div>
            </header>

            <div class="about-body">
                <p class="highlight">${data.highlight}</p>
                <p class="main-text">${data.text1}</p>
                <p class="main-text">${data.text2}</p>
                <blockquote>"${data.quote}"</blockquote>
            </div>

            <footer class="about-footer">
                <a href="#" id="btn-talk" class="btn-primary-about">${data.btnContact}</a>
            </footer>
        </section>
    </article>
    `;

  // --- LÓGICA DE INTERCAMBIO ---

  // 1. Botón Inglés
  document.getElementById("toggle-en").onclick = (e) => {
    e.preventDefault();
    renderAboutPage("en");
  };

  // 2. Botón Español
  document.getElementById("toggle-es").onclick = (e) => {
    e.preventDefault();
    renderAboutPage("es");
  };

  // 3. Botón Volver
  document.getElementById("btn-home").onclick = (e) => {
    e.preventDefault();
    // Si usas una función específica para volver al inicio, llámala aquí
    location.reload();
  };

  // 4. Boton constacto
  document.getElementById("btn-talk").onclick = (e) => {
    e.preventDefault();
    renderContactPage(); // Esto hace la magia de cambiar de vista
  };
}
