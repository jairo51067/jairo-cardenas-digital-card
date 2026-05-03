// src/main.js

import { navigate } from "./router/app.router.js";

// inicializar SPA
function init() {
  const route = window.location.hash.replace("#", "");

  if (!route) {
    navigate("home", false);
  } else {
    navigate(route, false);
  }

  window.onpopstate = (e) => {
    const route = e.state?.route || "home";
    navigate(route, false);
  };
}

init(); 