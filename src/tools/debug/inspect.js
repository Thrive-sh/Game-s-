// src/tools/debug/inspect.js
// Klik buat lihat info detail entitas (placeholder).

export class Inspect {
  constructor() {
    this.id = "inspect";
    this.label = "Inspeksi";
  }

  apply(grid, x, y) {
    const entities = grid.getEntitiesAt(x, y);
    console.log("[Inspect]", entities);
  }
}
