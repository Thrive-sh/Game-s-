// src/input/pointer.js
// Mouse + sentuh unified (pointerdown/move/up).

export class PointerInput {
  constructor(world, toolRegistry) {
    this.world = world;
    this.tools = toolRegistry;
    this.activeTool = null;
    this.isDragging = false;
    this.init();
  }

  init() {
    if (typeof window === "undefined") return;

    window.addEventListener("pointerdown", (e) => this.onDown(e));
    window.addEventListener("pointermove", (e) => this.onMove(e));
    window.addEventListener("pointerup", (e) => this.onUp(e));
  }

  onDown(e) {
    this.isDragging = true;
    this.handle(e.clientX, e.clientY);
  }

  onMove(e) {
    if (!this.isDragging) return;
    this.handle(e.clientX, e.clientY);
  }

  onUp(e) {
    this.isDragging = false;
  }

  handle(px, py) {
    // Konversi piksel ke koordinat grid, lalu terapkan tool aktif
  }

  setTool(toolId) {
    this.activeTool = this.tools.get(toolId);
  }
}
