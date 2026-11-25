// src/entities/creatures/dragon.js
// Naga (placeholder Fase 2).

import { Entity } from "../entity.js";

export class Dragon extends Entity {
  constructor(x, y) {
    super({ x, y, type: "dragon", hp: 500, maxAge: 2000 });
    this.trait = ["carnivore", "fire", "legendary"];
  }
}
