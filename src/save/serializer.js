// src/save/serializer.js
// Dunia <-> JSON.

export const serializer = {
  serialize(world) {
    return {
      tiles: world.tiles,
      entities: world.getEntities().map((e) => ({
        id: e.id,
        type: e.type,
        x: e.x,
        y: e.y,
        hp: e.hp,
        hunger: e.hunger,
        age: e.age,
        alive: e.alive,
      })),
    };
  },

  deserialize(data) {
    return data;
  },
};
