// src/entities/creatures/chicken.js
// Ayam (placeholder Fase 2).

import { Entity } from "../entity.js";

export class Chicken extends Entity {
  constructor(x, y) {
    super({ x, y, type: "chicken", hp: 30, maxAge: 200 });
    this.trait = ["herbivore", "peaceful"];
  }
}
