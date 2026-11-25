// src/ui/components/tooltip.js
// Tooltip saat men hovered tool.

export class Tooltip {
  constructor(text) {
    this.text = text;
    this.visible = false;
  }

  show(x, y) {
    this.visible = true;
    this.x = x;
    this.y = y;
  }

  hide() {
    this.visible = false;
  }
}
