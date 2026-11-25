// src/systems/ecosystem.js
// Orkestrator semua sistem. Dipanggil per tick.

export class Ecosystem {
  constructor(world) {
    this.world = world;
    this.day = 1;
    this.tickCount = 0;
    this.systems = [];
  }

  addSystem(system) {
    this.systems.push(system);
  }

  tick() {
    this.tickCount++;
    if (this.tickCount % 100 === 0) this.day++;

    this.systems.forEach((sys) => {
      if (sys.tick) sys.tick(this.world, this);
    });
  }

  getStats() {
    const counts = {};
    this.world.getEntities().forEach((e) => {
      counts[e.type] = (counts[e.type] || 0) + 1;
    });
    return { day: this.day, tick: this.tickCount, counts, total: this.world.getEntities().length };
  }
}
