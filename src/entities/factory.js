// src/entities/factory.js
// Pabrik spawn entitas. Tambah spesies baru = tambah file di entities/ + daftarkan di sini.

import { Sheep } from "./creatures/sheep.js";
import { Wolf } from "./creatures/wolf.js";
import { Human } from "./races/human.js";

const SPECIES = {
  sheep: Sheep,
  wolf: Wolf,
  human: Human,
};

export class EntityFactory {
  constructor(grid) {
    this.grid = grid;
  }

  spawn(type, x, y) {
    const Cls = SPECIES[type];
    if (!Cls) {
      console.warn(`[Factory] Spesies "${type}" tidak terdaftar`);
      return null;
    }
    const entity = new Cls(x, y);
    this.grid.addEntity(entity);
    return entity;
  }

  static getRegisteredSpecies() {
    return Object.keys(SPECIES);
  }
}
