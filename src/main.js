// src/main.js
// Bootstrap utama EcoBox. JANGAN menuliskan logika game di sini.
// Hanya inisialisasi modul, pasang input/UI, dan mulai loop.

import { config } from "./core/config.js";
import { bus } from "./core/bus.js";
import { scheduler } from "./core/scheduler.js";
import { Grid } from "./world/grid.js";
import { Terrain } from "./world/terrain.js";
import { Generator } from "./world/generator.js";
import { EntityFactory } from "./entities/factory.js";
import { Ecosystem } from "./systems/ecosystem.js";
import { ToolRegistry } from "./tools/registry.js";
import { PointerInput } from "./input/pointer.js";
import { Renderer } from "./render/renderer.js";
import { HUD } from "./ui/hud.js";
import { Toolbar } from "./ui/toolbar.js";

let world;
let renderer;
let input;
let ecosystem;

export function init() {
  // Inisialisasi dunia
  world = new Grid(config.gridWidth, config.gridHeight);
  Terrain.init(world);
  Generator.generate(world);

  // Inisialisasi entitas & sistem
  EntityFactory.init(world);
  ecosystem = new Ecosystem(world);

  // Inisialisasi tool & UI
  ToolRegistry.init();
  input = new PointerInput(world, ToolRegistry);
  renderer = new Renderer(world);
  const hud = new HUD();
  const toolbar = new Toolbar();

  // Pasang event bus
  bus.on("tick", () => ecosystem.tick());
  bus.on("render", () => renderer.draw());
  bus.on("hud:update", (data) => hud.update(data));

  // Mulai scheduler (tick-based)
  scheduler.start(() => {
    bus.emit("tick");
    bus.emit("render");
    bus.emit("hud:update", ecosystem.getStats());
  });
}

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", init);
}
