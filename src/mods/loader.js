// src/mods/loader.js
// Sistem mod (jangka panjang).

export class ModLoader {
  constructor() {
    this.mods = [];
  }

  load(mod) {
    this.mods.push(mod);
  }
}
