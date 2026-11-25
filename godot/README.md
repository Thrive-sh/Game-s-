# Port Godot 4 (Fase 3)

Struktur cerminkan `src/` agar porting mudah.

Peta file:
- `src/main.js` → `godot/scripts/main.gd`
- `src/core/*` → `godot/scripts/core/*.gd`
- `src/world/*` → `godot/scripts/world/*.gd`
- `src/entities/*` → `godot/scripts/entities/*.gd`
- `src/systems/*` → `godot/scripts/systems/*.gd`
- `src/tools/*` → `godot/scripts/tools/*.gd`
- `src/ui/*` → `godot/scripts/ui/*.gd`
- `src/render/*` → digantikan scene Node2D / Camera2D Godot
- `src/data/*.json` → copy ke `godot/data/`

Scene:
- `godot/scenes/main.tscn` — entry point
- `godot/scenes/world.tscn` — grid dunia
- `godot/scenes/ui.tscn` — antarmuka
- `godot/scenes/entity.tscn` — dasar makhluk

File proyek: `godot/project.godot` (buat saat memulai port di Godot Editor).
