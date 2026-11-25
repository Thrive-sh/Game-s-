// src/core/rng.js
// Random dengan seed agar dunia dapat direproduksi (debug & save/load).

export class RNG {
  constructor(seed = Date.now()) {
    this.seed = seed;
  }

  next() {
    // xorshift sederhana
    this.seed ^= this.seed << 13;
    this.seed ^= this.seed >> 17;
    this.seed ^= this.seed << 5;
    return (this.seed >>> 0) / 0xffffffff;
  }

  range(min, max) {
    return min + this.next() * (max - min);
  }

  int(min, max) {
    return Math.floor(this.range(min, max + 1));
  }
}

export const rng = new RNG();
