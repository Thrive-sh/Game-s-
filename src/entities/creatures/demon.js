// src/entities/creatures/demon.js
// Iblis (placeholder Fase 2).

import { Entity } from "../entity.js";

export class Demon extends Entity {
  constructor(x, y) {
    super({ x, y, type: "demon", hp: 300, maxAge: 1500 });
    this.trait = ["carnivore", "fire", "demon"];
  }
}
