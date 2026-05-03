// src/router/app.router.js

import { renderProfile } from "../features/profile/profile.render.js";
import { renderAboutPage } from "../features/about/about.render.js";
import { renderProjectsPage } from "../features/projects/projects.render.js";
import { renderContactPage } from "../features/contact/contact.render.js";

const routes = {
  home: renderProfile,
  about: renderAboutPage,
  projects: renderProjectsPage,
  contact: renderContactPage,
};

export function navigate(route, push = true) {
  const container = document.getElementById("app");

  if (!container) return;

  // render
  switch (route) {
    case "about":
      renderAboutPage("es");
      break;
    case "projects":
      renderProjectsPage();
      break;
    case "contact":
      renderContactPage();
      break;
    default:
      renderProfile();
  }

  // history API
  if (push) {
    history.pushState({ route }, "", `#${route}`);
  }
}  