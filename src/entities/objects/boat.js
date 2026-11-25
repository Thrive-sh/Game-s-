// src/entities/objects/boat.js
// Kapal (placeholder Fase 2).

import { Entity } from "../entity.js";

export class Boat extends Entity {
  constructor(x, y) {
    super({ x, y, type: "boat", hp: 100, maxAge: 99999 });
    this.trait = ["vehicle", "water"];
  }
}
