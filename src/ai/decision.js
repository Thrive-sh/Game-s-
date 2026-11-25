// src/ai/decision.js
// State machine: idle, cari makan, kabur, serang.

export const States = {
  IDLE: "idle",
  SEEK_FOOD: "seekFood",
  FLEE: "flee",
  ATTACK: "attack",
  WANDER: "wander",
};

export class Decision {
  constructor(entity) {
    this.entity = entity;
    this.state = States.IDLE;
  }

  update(world) {
    // Override di tipe entitas tertentu
  }
}
