// src/ui/panels/settings.js
// Panel pengaturan: suara, kualitas, bahasa, reset.

export class SettingsPanel {
  constructor() {
    this.visible = false;
  }

  toggle() {
    this.visible = !this.visible;
  }
}
