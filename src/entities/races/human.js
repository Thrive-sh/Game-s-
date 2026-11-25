// src/entities/races/human.js
// Manusia: makan domba, tebang hutan.

import { Entity } from "../entity.js";

export class Human extends Entity {
  constructor(x, y) {
    super({ x, y, type: "human", hp: 100, maxAge: 600 });
    this.trait = ["omnivore", "civilized", "toolUser"];
    this.food = ["sheep", "chicken"];
  }

  update() {
    super.update();
  }
}
