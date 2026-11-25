// src/entities/creatures/wolf.js
// Serigala: berburu domba.

import { Entity } from "../entity.js";

export class Wolf extends Entity {
  constructor(x, y) {
    super({ x, y, type: "wolf", hp: 80, maxAge: 400 });
    this.trait = ["carnivore", "predator"];
    this.food = "sheep";
  }

  update() {
    super.update();
  }
}
