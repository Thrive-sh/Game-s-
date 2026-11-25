// src/render/effects.js
// Screen shake, flash, dsb.

export class Effects {
  constructor() {
    this.shake = 0;
    this.flash = 0;
  }

  shakeScreen(intensity) {
    this.shake = intensity;
  }

  flashScreen(duration) {
    this.flash = duration;
  }

  update() {
    if (this.shake > 0) this.shake *= 0.9;
    if (this.flash > 0) this.flash--;
  }
}
