/**
 * The `initApp` function sets up event listeners for navigation links to render different pages in a
 * single-page application.
 */

/**

* La función `initApp` configura los detectores de eventos para que los enlaces de navegación muestren diferentes páginas en una
* aplicación de una sola página.

*/

import { renderProfile } from "../features/profile/profile.render.js";
import { renderProjectsPage } from "../features/projects/projects.render.js"; 
import { renderAboutPage } from "../features/about/about.render.js";
import { renderContactPage } from "../features/contact/contact.render.js";

export function initApp() {
  // Por defecto, carga el perfil (Home)
  renderProfile();

  // Listener global de clics para toda la navegación
  document.addEventListener("click", (e) => {
    
    // 1. Clic en "Let's Talk" (Desde la Home o desde About)
    if (e.target.closest("#btn-talk")) {
      e.preventDefault();
      renderContactPage();
    }

    // 2. Clic en "Projects"
    if (e.target.closest("#btn-projects")) {
      e.preventDefault();
      renderProjectsPage();
    }

    // 3. Clic en "About Me"
    if (e.target.closest("#btn-about")) {
      e.preventDefault();
      renderAboutPage();
    }

    // 4. Clic en "Volver", "Home" o el icono de casa en Contacto
    if (
      e.target.closest("#btn-home") || 
      e.target.closest("#btn-volver") || 
      e.target.closest("#btn-home-contact")
    ) {
      e.preventDefault();
      renderProfile(); // En lugar de reload(), usamos renderProfile para que sea instantáneo
    }
  });
}