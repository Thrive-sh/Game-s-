// src/tools/life/spawn.js
// Tool spawn: domba, serigala, manusia.

import { EntityFactory } from "../../entities/factory.js";

export class SpawnTool {
  constructor() {
    this.id = "spawn";
    this.label = "Spawn Makhluk";
    this.currentType = "sheep";
  }

  apply(grid, x, y, factory) {
    return factory.spawn(this.currentType, x, y);
  }
}
