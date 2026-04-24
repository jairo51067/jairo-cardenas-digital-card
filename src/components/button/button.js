// src/components/button/button.js

export function createButton({ text, className = '', onClick }) {
  const button = document.createElement('button');

  button.textContent = text;
  button.className = `btn ${className}`;

  if (onClick) {
    button.addEventListener('click', onClick);
  }

  return button;
}