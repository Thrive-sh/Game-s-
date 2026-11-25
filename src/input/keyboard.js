// src/input/keyboard.js
// Shortcut keyboard (buat PC nanti).

export class Keyboard {
  constructor() {
    this.keys = new Set();
    this.init();
  }

  init() {
    if (typeof window === "undefined") return;
    window.addEventListener("keydown", (e) => this.keys.add(e.key));
    window.addEventListener("keyup", (e) => this.keys.delete(e.key));
  }

  isPressed(key) {
    return this.keys.has(key);
  }
}
