// src/world/generator.js
// Generate dunia baru (pulau acak).

export class Generator {
  static generate(grid) {
    for (let x = 0; x < grid.width; x++) {
      for (let y = 0; y < grid.height; y++) {
        // Acak sederhana: sebagian air di tepi, sebagian daratan di tengah
        const d = Math.hypot(x - grid.width / 2, y - grid.height / 2);
        const r = Math.random();
        if (d > grid.width / 2.2) {
          grid.setTile(x, y, r > 0.7 ? "water" : "sand");
        } else if (d > grid.width / 3) {
          grid.setTile(x, y, r > 0.8 ? "forest" : "grass");
        } else {
          grid.setTile(x, y, r > 0.9 ? "mountain" : "grass");
        }
      }
    }
  }
}
