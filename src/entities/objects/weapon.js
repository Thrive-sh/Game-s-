// src/entities/objects/weapon.js
// Senjata (placeholder Fase 2).

import { Entity } from "../entity.js";

export class Weapon extends Entity {
  constructor(x, y) {
    super({ x, y, type: "weapon", hp: 50, maxAge: 99999 });
    this.trait = ["item", "weapon"];
  }
}
