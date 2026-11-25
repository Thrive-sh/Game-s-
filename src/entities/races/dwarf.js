// src/entities/races/dwarf.js
// Dwarf (placeholder Fase 2).

import { Entity } from "../entity.js";

export class Dwarf extends Entity {
  constructor(x, y) {
    super({ x, y, type: "dwarf", hp: 120, maxAge: 500 });
    this.trait = ["omnivore", "civilized", "miner"];
  }
}
