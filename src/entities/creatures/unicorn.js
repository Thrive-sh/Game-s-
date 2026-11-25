// src/entities/creatures/unicorn.js
// Unikorn (placeholder Fase 2).

import { Entity } from "../entity.js";

export class Unicorn extends Entity {
  constructor(x, y) {
    super({ x, y, type: "unicorn", hp: 200, maxAge: 1000 });
    this.trait = ["herbivore", "magic", "legendary"];
  }
}
