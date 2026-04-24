// src/features/social/social.js

export function initSocialLinks() {
  const links = document.querySelectorAll('.social-link');

  links.forEach(link => {
    link.addEventListener('click', () => {
      console.log('Click en red social');
    });
  });
}

import { createButton } from '../../components/button/button.js';

export function initProfile() {
  const container = document.querySelector('.profile-actions');

  if (!container) return;

  const contactBtn = createButton({
    text: 'Contact',
    onClick: () => alert('Contact clicked')
  });

  container.appendChild(contactBtn);
}