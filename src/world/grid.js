// src/world/grid.js
// Data grid: simpan & baca tile per koordinat.

export class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tiles = []; // [x][y] = tile string
    this.entities = []; // daftar entitas di dunia
    this.init();
  }

  init() {
    for (let x = 0; x < this.width; x++) {
      this.tiles[x] = [];
      for (let y = 0; y < this.height; y++) {
        this.tiles[x][y] = "grass"; // default
      }
    }
  }

  getTile(x, y) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) return null;
    return this.tiles[x][y];
  }

  setTile(x, y, type) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) return false;
    this.tiles[x][y] = type;
    return true;
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  removeEntity(entity) {
    const idx = this.entities.indexOf(entity);
    if (idx !== -1) this.entities.splice(idx, 1);
  }

  getEntities() {
    return this.entities;
  }

  getEntitiesAt(x, y) {
    return this.entities.filter((e) => e.x === x && e.y === y);
  }

  isPassable(x, y) {
    const tile = this.getTile(x, y);
    const blocked = ["mountain", "water"];
    return tile && !blocked.includes(tile);
  }
}
