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

let currentRoute = "home";

function setActiveRoute(route) {
  document.querySelectorAll("[data-route]").forEach(el => {
    el.classList.remove("active-route");
  });

  const activeBtn = document.querySelector(`[data-route="${route}"]`);
  if (activeBtn) activeBtn.classList.add("active-route");
}

function transitionRender(callback) {
  const container = document.getElementById("app");

  if (!container) return;

  container.classList.add("app-fade-out");

  setTimeout(() => {
    container.classList.remove("app-fade-out");
    container.classList.add("app-fade-in");

    callback();

    setTimeout(() => {
      container.classList.remove("app-fade-in");
    }, 250);
  }, 150);
}

export function navigate(route, push = true) {
  const view = routes[route];

  if (!view) return;

  currentRoute = route;

  transitionRender(() => {
    if (route === "about") view("es");
    else view();
  });

  setActiveRoute(route);

  if (push) {
    history.pushState({ route }, "", `#${route}`);
  }
}

export function getCurrentRoute() {
  return currentRoute;
}