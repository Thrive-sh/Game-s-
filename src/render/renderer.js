// src/render/renderer.js
// Loop gambar: grid + entitas per frame.

export class Renderer {
  constructor(world) {
    this.world = world;
    this.canvas = null;
    this.ctx = null;
    this.camera = { x: 0, y: 0, zoom: 1 };
  }

  init(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  draw() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // Gambar grid & entitas di sini
  }

  resize(width, height) {
    if (this.canvas) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  }
}
