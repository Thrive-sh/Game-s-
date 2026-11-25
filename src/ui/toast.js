// src/ui/toast.js
// Notifikasi kecil (mis. "Domba punah!").

export class Toast {
  constructor() {
    this.queue = [];
  }

  show(message, duration = 3000) {
    this.queue.push({ message, duration });
  }

  render() {
    // Gambar toast di layar
  }
}
