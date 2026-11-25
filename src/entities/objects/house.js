// src/entities/objects/house.js
// Rumah: struktur sederhana (placeholder Fase 1).

import { Entity } from "../entity.js";

export class House extends Entity {
  constructor(x, y) {
    super({ x, y, type: "house", hp: 300, maxAge: 99999 });
    this.trait = ["structure", "shelter"];
  }
}
