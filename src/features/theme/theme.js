// src/features/theme/theme.js

import { getState, setState } from '../../state/app.state.js';
import { save, get } from '../../services/storage.service.js';
import { config } from '../../config/app.config.js';

export function initTheme() {
  const savedTheme = get(config.storageThemeKey);

  if (savedTheme) {
    setState('theme', savedTheme);
    applyTheme(savedTheme);
  }

  const toggle = document.querySelector('#theme-toggle');

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const currentTheme = getState().theme;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    setState('theme', newTheme);
    save(config.storageThemeKey, newTheme);
    applyTheme(newTheme);
  });
}

function applyTheme(theme) {
  document.body.setAttribute('data-theme', theme);
}