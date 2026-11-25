// src/entities/races/alien.js
// Alien (placeholder Fase 2).

import { Entity } from "../entity.js";

export class Alien extends Entity {
  constructor(x, y) {
    super({ x, y, type: "alien", hp: 200, maxAge: 1000 });
    this.trait = ["omnivore", "civilized", "tech"];
  }
}
