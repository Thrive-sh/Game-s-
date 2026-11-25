// src/ui/panels/help.js
// Panel bantuan: cara main.

export class HelpPanel {
  constructor() {
    this.visible = false;
  }

  toggle() {
    this.visible = !this.visible;
  }
}
