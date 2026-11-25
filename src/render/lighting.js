// src/render/lighting.js
// Efek siang/malam & cahaya (nanti).

export class Lighting {
  constructor() {
    this.isDay = true;
  }

  setDay(isDay) {
    this.isDay = isDay;
  }

  apply(ctx) {
    // Overlay gelap untuk malam
  }
}
