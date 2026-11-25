# Changelog EcoBox

Semua perubahan penting di catat di sini.

## [0.2.0] - Struktur Modular Ambisius
- Tambah struktur folder modular per modul (core, world, entities, systems, tools, ui, render, save, dll)
- Tambah `manifest.webmanifest` untuk install sebagai PWA di Android
- Tambah `.github/workflows/ci.yml` untuk CI cek sintaks otomatis
- Tambah `CHANGELOG.md`, `CONTRIBUTING.md`
- Folder `godot/` siap untuk port Fase 3

## [0.1.0] - Prototipe Web (index.html)
- Grid dunia: air/pasir/rumput/hutan/gunung, generate pulau acak
- Ekosistem: domba makan rumput → serigala makan domba → manusia makan domba & tebang hutan
- Bencana: api menyebar, meteor, hujan, hapus
- Tool: terrain brush, spawn, disaster (sentuh + mouse)
- HUD populasi & hari, jeda, speed 1x–4x, dunia baru acak
- Simulasi tick-based 10x/detik, batas 260 entitas, sprite emoji gratis
