// src/ui/modal.js
// Popup konfirmasi / dialog.

export class Modal {
  constructor() {
    this.visible = false;
    this.content = "";
  }

  show(content, onConfirm) {
    this.visible = true;
    this.content = content;
    this.onConfirm = onConfirm;
  }

  hide() {
    this.visible = false;
  }
}
