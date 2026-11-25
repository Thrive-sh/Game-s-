// src/entities/races/orc.js
// Orc (placeholder Fase 2).

import { Entity } from "../entity.js";

export class Orc extends Entity {
  constructor(x, y) {
    super({ x, y, type: "orc", hp: 150, maxAge: 400 });
    this.trait = ["carnivore", "civilized", "aggressive"];
  }
}
