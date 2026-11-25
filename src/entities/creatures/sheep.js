// src/entities/creatures/sheep.js
// Domba: makan rumput, berkembang biak cepat.

import { Entity } from "../entity.js";

export class Sheep extends Entity {
  constructor(x, y) {
    super({ x, y, type: "sheep", hp: 50, maxAge: 300 });
    this.trait = ["herbivore", "peaceful"];
    this.food = "grass";
  }

  update() {
    super.update();
    // Logic makan & reproduksi di sistem foodchain / reproduction
  }
}
