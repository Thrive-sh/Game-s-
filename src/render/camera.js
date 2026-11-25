// src/render/camera.js
// Kamera: posisi, zoom, pan (nanti).

export class Camera {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.zoom = 1;
  }

  follow(entity) {
    this.x = entity.x;
    this.y = entity.y;
  }

  pan(dx, dy) {
    this.x += dx;
    this.y += dy;
  }

  zoomTo(level) {
    this.zoom = level;
  }
}
