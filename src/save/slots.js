// src/save/slots.js
// Multi-slot save (3 slot).

export const SaveSlots = {
  count: 3,

  save(slot, data) {
    storage.save(`ecobox_save_${slot}`, data);
  },

  load(slot) {
    return storage.load(`ecobox_save_${slot}`);
  },

  list() {
    const slots = [];
    for (let i = 1; i <= this.count; i++) {
      slots.push({ slot: i, hasSave: !!storage.load(`ecobox_save_${i}`) });
    }
    return slots;
  },
};
