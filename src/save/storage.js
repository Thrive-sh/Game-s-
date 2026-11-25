// src/save/storage.js
// Baca / tulis localStorage.

export const storage = {
  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn("[Save] Gagal simpan:", e);
    }
  },

  load(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.warn("[Save] Gagal muat:", e);
      return null;
    }
  },

  remove(key) {
    localStorage.removeItem(key);
  },
};
