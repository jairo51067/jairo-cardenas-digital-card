// src/components/card/card.js

export function createCard({ title, content }) {
  const card = document.createElement('div');
  card.className = 'card';

  const h2 = document.createElement('h2');
  h2.textContent = title;

  const p = document.createElement('p');
  p.textContent = content;

  card.appendChild(h2);
  card.appendChild(p);

  return card;
}