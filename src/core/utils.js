// src/core/utils.js
// Helper umum: clamp, jarak, koordinat, format angka.

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function distance(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

export function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function tileToPixel(tx, ty, tileSize) {
  return { x: tx * tileSize, y: ty * tileSize };
}

export function pixelToTile(px, py, tileSize) {
  return { tx: Math.floor(px / tileSize), ty: Math.floor(py / tileSize) };
}

export function formatNumber(n) {
  return n >= 1000 ? (n / 1000).toFixed(1) + "k" : n;
}
