// src/entities/races/elf.js
// Elf (placeholder Fase 2).

import { Entity } from "../entity.js";

export class Elf extends Entity {
  constructor(x, y) {
    super({ x, y, type: "elf", hp: 90, maxAge: 800 });
    this.trait = ["herbivore", "civilized", "magic"];
  }
}
