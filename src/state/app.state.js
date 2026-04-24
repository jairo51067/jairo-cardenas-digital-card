// src/state/app.state.js

const state = {
  theme: 'light',
  user: {
    name: 'Jairo Cárdenas',
    role: 'Full-Stack Developer & Product Manager'
  },
  projects: [
    {
      id: 'ecommerce-2026',
      title: 'VendeMás E-commerce',
      description: 'Plataforma de ventas online y landing page de alta conversión.',
      url: 'https://vendemas-landing.vercel.app/',
      isNew: true, // Propiedad clave para el badge
      icon: 'fa-shopping-cart'
    },
    {
      id: 'metabolic-app',
      title: 'Metabolic Tracking',
      description: 'Seguimiento de métricas de salud con visualización de datos.',
      url: 'https://jairo51067.github.io/jairo-cardenas-digital-card/', // O tu link de proyecto
      isNew: false,
      icon: 'fa-chart-line'
    }
    // Puedes añadir más aquí...
  ]
};

export function getState() {
  return state;
}

export function setState(key, value) {
  state[key] = value;
}

export function updateNestedState(path, value) {
  const keys = path.split('.');
  let current = state;

  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value;
    } else {
      current = current[key];
    }
  });
}