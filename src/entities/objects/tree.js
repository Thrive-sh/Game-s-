// src/entities/objects/tree.js
// Pohon: objek diam, dapat ditebang manusia.

import { Entity } from "../entity.js";

export class Tree extends Entity {
  constructor(x, y) {
    super({ x, y, type: "tree", hp: 200, maxAge: 99999 });
    this.trait = ["plant", "wood"];
  }
}
