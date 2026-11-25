// src/ui/panels/changelog.js
// Panel patch notes di dalam game.

export class ChangelogPanel {
  constructor() {
    this.visible = false;
  }

  toggle() {
    this.visible = !this.visible;
  }
}
