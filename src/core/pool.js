// src/core/pool.js
// Object pooling agar hemat RAM di HP kentang.
// Digunakan untuk entitas yang sering dibuat/hancurkan (efek, peluru, partikel).

export class Pool {
  constructor(createFn, resetFn, size = 32) {
    this.createFn = createFn;
    this.resetFn = resetFn;
    this.available = [];
    this.inUse = [];
    for (let i = 0; i < size; i++) this.available.push(createFn());
  }

  acquire() {
    const item = this.available.pop() || this.createFn();
    if (this.resetFn) this.resetFn(item);
    this.inUse.push(item);
    return item;
  }

  release(item) {
    this.inUse = this.inUse.filter((i) => i !== item);
    this.available.push(item);
  }

  releaseAll() {
    while (this.inUse.length) this.release(this.inUse[0]);
  }
}
