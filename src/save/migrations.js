// src/save/migrations.js
// Migrasi save lama ke versi baru.

export const migrations = [
  { version: 1, run(data) { return data; } },
];

export function migrate(data, fromVersion) {
  return migrations.reduce((d, m) => (m.version > fromVersion ? m.run(d) : d), data);
}
