// src/tools/registry.js
// Daftar semua tool Tuhan. Tambah tool baru = tambah file + daftarkan di sini.

import { BrushTool } from "./terrain/brush.js";
import { SpawnTool } from "./life/spawn.js";
import { DisasterTool } from "./disaster/fire.js";

export const ToolRegistry = {
  tools: {},

  init() {
    this.register("brush", new BrushTool());
    this.register("spawn", new SpawnTool());
    this.register("disaster", new DisasterTool());
  },

  register(id, tool) {
    this.tools[id] = tool;
  },

  get(id) {
    return this.tools[id];
  },

  list() {
    return Object.keys(this.tools);
  },
};
