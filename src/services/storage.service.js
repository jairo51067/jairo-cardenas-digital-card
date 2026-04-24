// src/services/storage.service.js

const PREFIX = 'jairo_card_';

export function save(key, value) {
  localStorage.setItem(PREFIX + key, JSON.stringify(value));
}

export function get(key) {
  const data = localStorage.getItem(PREFIX + key);
  return data ? JSON.parse(data) : null;
}

export function remove(key) {
  localStorage.removeItem(PREFIX + key);
}