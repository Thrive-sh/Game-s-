// src/entities/objects/rock.js
// Batu: objek diam, tambang.

import { Entity } from "../entity.js";

export class Rock extends Entity {
  constructor(x, y) {
    super({ x, y, type: "rock", hp: 500, maxAge: 99999 });
    this.trait = ["mineral", "stone"];
  }
}
