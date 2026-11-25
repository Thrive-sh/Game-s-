// src/i18n/index.js
// Loader bahasa.

import id from "./id.json";
import en from "./en.json";

const languages = { id, en };
let current = "id";

export function setLang(lang) {
  if (languages[lang]) current = lang;
}

export function t(key) {
  return languages[current][key] || key;
}

export function getLang() {
  return current;
}
