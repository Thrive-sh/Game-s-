// src/tools/debug/kill-all.js
// Bunuh semua di area (placeholder).

export class KillAll {
  constructor() {
    this.id = "killAll";
    this.label = "Bunuh Semua";
  }

  apply(grid, x, y) {
    grid.getEntitiesAt(x, y).forEach((e) => e.die());
  }
}
