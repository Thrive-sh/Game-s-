// src/ai/needs.js
// Kebutuhan makhluk: lapar, energi, sosial, takut.

export const Needs = {
  HUNGER: "hunger",
  ENERGY: "energy",
  SOCIAL: "social",
  FEAR: "fear",

  increase(entity, need, amount) {
    entity[need] = (entity[need] || 0) + amount;
  },

  isCritical(entity, need, threshold = 80) {
    return (entity[need] || 0) >= threshold;
  },
};
