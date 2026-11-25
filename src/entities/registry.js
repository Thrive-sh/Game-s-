// src/entities/registry.js
// Daftar semua spesies/ras/objek yang terdaftar di dunia.

export const registry = {
  creatures: [],
  races: [],
  objects: [],
};

export function registerCreature(name, cls) {
  registry.creatures.push({ name, cls });
}

export function registerRace(name, cls) {
  registry.races.push({ name, cls });
}

export function registerObject(name, cls) {
  registry.objects.push({ name, cls });
}
