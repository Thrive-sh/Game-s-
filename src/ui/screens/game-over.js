// src/ui/screens/game-over.js
// Kepunahan / kemenangan.

export class GameOver {
  constructor() {
    this.visible = false;
    this.reason = "";
  }

  show(reason) {
    this.visible = true;
    this.reason = reason;
  }

  hide() {
    this.visible = false;
  }
}
