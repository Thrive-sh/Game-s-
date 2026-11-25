// src/ui/panels/info.js
// Panel info tile/spesies yang di-tap.

export class InfoPanel {
  constructor() {
    this.visible = false;
    this.target = null;
  }

  show(entityOrTile) {
    this.visible = true;
    this.target = entityOrTile;
  }

  hide() {
    this.visible = false;
  }
}
