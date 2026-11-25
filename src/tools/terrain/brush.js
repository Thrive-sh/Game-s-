// src/tools/terrain/brush.js
// Tool tanah: lukis rumput, hutan, air, gunung, hapus.

export class BrushTool {
  constructor() {
    this.id = "brush";
    this.label = "Lukis Tanah";
    this.currentTile = "grass";
  }

  apply(grid, x, y) {
    grid.setTile(x, y, this.currentTile);
  }
}
