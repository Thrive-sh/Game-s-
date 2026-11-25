// src/world/terrain.js
// Definisi tile dasar: air, pasir, rumput, hutan, gunung, api.

export const Terrain = {
  types: {
    deepWater: "deepWater",
    water: "water",
    sand: "sand",
    grass: "grass",
    forest: "forest",
    mountain: "mountain",
    fire: "fire",
  },

  passable: ["grass", "sand", "forest"],

  init(grid) {
    // Kosong dulu, diisi oleh generator
  },
};
