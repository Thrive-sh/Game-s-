// src/entities/entity.js
// Kelas dasar semua makhluk & objek: posisi, lapar, umur, mati.

export class Entity {
  constructor({ x, y, type, hp = 100, hunger = 0, maxAge = 300 }) {
    this.id = Entity._nextId++;
    this.x = x;
    this.y = y;
    this.type = type;
    this.hp = hp;
    this.hunger = hunger;
    this.maxAge = maxAge;
    this.age = 0;
    this.alive = true;
    this.trait = [];
  }

  update() {
    this.age++;
    this.hunger += 0.1;
    if (this.age >= this.maxAge || this.hp <= 0) this.die();
  }

  die() {
    this.alive = false;
  }

  isHungry() {
    return this.hunger >= 100;
  }
}

Entity._nextId = 1;
