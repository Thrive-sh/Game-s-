// src/systems/foodchain.js
// Siapa makan siapa.

export class FoodChain {
  constructor() {
    this.rules = [
      { predator: "wolf", prey: "sheep" },
      { predator: "human", prey: "sheep" },
      { predator: "human", prey: "chicken" },
    ];
  }

  tick(world) {
    // Implementasi predator mencari mangsa di sekitar
  }

  canEat(predatorType, preyType) {
    return this.rules.some((r) => r.predator === predatorType && r.prey === preyType);
  }
}
