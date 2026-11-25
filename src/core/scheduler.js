// src/core/scheduler.js
// Tick system: logika jalan 10x/detik, render 60fps. Hemat baterai HP.

export class Scheduler {
  constructor() {
    this.tickInterval = 100; // ms per tick (10 tick/detik)
    this.lastTick = 0;
    this.running = false;
    this.callback = null;
    this.rafId = null;
  }

  start(callback) {
    this.callback = callback;
    this.running = true;
    this.lastTick = performance.now();
    this.loop();
  }

  stop() {
    this.running = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  loop(now = performance.now()) {
    if (!this.running) return;

    const delta = now - this.lastTick;
    if (delta >= this.tickInterval) {
      this.callback();
      this.lastTick = now - (delta % this.tickInterval);
    }

    this.rafId = requestAnimationFrame((t) => this.loop(t));
  }
}

export const scheduler = new Scheduler();
