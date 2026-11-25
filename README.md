# EcoBox — Konteks Repositori untuk Agen AI

Repositori ini berisi kerangka dan prototipe game god-sandbox ekosistem (inspirasi genre WorldBox, bukan klon 1:1). File ini dibaca oleh agen AI yang akan melanjutkan pengembangan. Baca seluruh file sebelum menulis atau mengubah kode.

## Tujuan

- Membangun game simulasi ekosistem sandbox tempat pemain berperan sebagai "Tuhan" yang mencipta, mengatur, dan menghancurkan dunia.
- Target perangkat utama: satu HP Android dengan RAM 4GB dan penyimpanan 128GB, tanpa modal (Rp0).
- Fase 1: Web HTML5 + Canvas untuk validasi gameplay di browser HP.
- Fase 2: Port ke Godot 4 (GDScript) untuk export APK Android native.
- Unity ditunda karena editor terlalu berat untuk perangkat 4GB.
- Google AI Studio digunakan hanya sebagai asisten coding dan ide, bukan sebagai game engine.

## Aturan

- Satu tanggung jawab = satu file. Contoh: 1 spesies = 1 file, 1 tool = 1 file, 1 panel UI = 1 file, 1 sistem = 1 file.
- Semua kode game ada di folder `src/`, dikelompokkan per modul (`core`, `world`, `entities`, `systems`, `tools`, `ui`, `render`, `audio`, `save`, `i18n`, `data`, dll).
- `index.html` hanya berfungsi sebagai entry point dan pemuat modul (`src/main.js`). Jangan menuliskan logika game di dalam `index.html`.
- Konstanta dan pengaturan global dikumpulkan di folder `config/` (`game.config.json`, `balance.json`, `feature-flags.json`).
- Data murni (angka balancing, definisi spesies, ras, item, sihir, trait) disimpan di `src/data/*.json` agar mudah diubah tanpa sentuh kode.
- Setiap fitur baru ditambah dengan menambah file baru dan mendaftarkannya di `registry.js` atau `factory.js` yang sesuai. Jangan merusak atau menulis ulang file yang sudah ada kecuali diperbaiki bug.
- Dukung bahasa Indonesia dan English melalui folder `src/i18n/`.
- Simulasi berjalan berbasis tick (bukan per frame) untuk hemat baterai dan RAM di HP kentang.

## Larangan

- Emoji/Emoticon dilarang digunakan sebagai ikon atau sprite dalam game. Gunakan gambar ikon (PNG/SVG) atau ilustrasi vektor gratis, bukan emoji.
- Jangan menggunakan React, Next.js, Angular, atau framework web lain sebagai engine game. Ini bukan aplikasi web biasa, ini game.
- Jangan mengkloning WorldBox 1:1. Ambil inspirasi dari genre god-sandbox, lalu buat versi mini dengan cakupan yang sesuai kondisi solo developer dan perangkat rendah.
- Jangan menggunakan Unity di Fase 1 dan Fase 2 karena editor terlalu berat untuk HP 4GB.
- Jangan menambahkan dependensi berbayar atau yang memerlukan kartu kredit. Semua tool dan deploy harus gratis.
- Jangan menyimpan kredensial, API key, atau rahasia dalam repositori ini.
- Game wajib di bangun dalam bahasa Indonesia full. Semua teks dalam game, UI, panel, dan dokumen harus menggunakan bahasa Indonesia.

## Stack Teknologi yang Disetujui

| Fase | Teknologi | Keterangan |
|------|-----------|------------|
| Fase 0–1 | HTML5 Canvas + Vanilla JavaScript | Tidak perlu install, jalan di browser HP, gratis |
| Fase 2 | Godot 4 (GDScript) | Editor ringan, APK kecil, gratis, cocok 2D mobile |
| Fase 4 | itch.io → Google Play Store | Deploy gratis, biaya Pendaftar Play $25 sekali seumur hidup |

## Struktur Repositori Singkat

- `src/` — semua kode game modular
- `config/` — konfigurasi dan balance terpusat
- `docs/` — ROADMAP, DESIGN, BALANCE, PERFORMANCE, TECH_STACK, MODDING
- `assets/` — aset mentah (sprite, audio, fonts, particles), bukan kode
- `godot/` — persiapan port Godot 4 (Fase 3)
- `tests/` — unit, integration, perf, checklist manual
- `tools/` — script bantu development (bukan bagian runtime game)
- `.github/workflows/ci.yml` — CI otomatis cek sintaks JavaScript

## Panduan untuk Agen AI yang Akan Membangun

1. Baca `docs/ROADMAP.md`, `docs/DESIGN.md`, dan `docs/BALANCE.md` sebelum menulis fitur baru.
2. Lihat `src/tools/registry.js` dan `src/entities/factory.js` untuk mengetahui cara mendaftarkan tool dan spesies baru.
3. Jika menambah fitur, buat file baru di folder yang sesuai, lalu daftarkan di registry/factory. Jangan menumpuk logika baru ke file yang sudah ada.
4. Uji perubahan dengan membuka `index.html` di browser HP atau desktop. Pastikan tidak ada error merah di konsol browser.
5. Jika bekerja pada port Godot 4, lihat `godot/README.md` untuk peta pemindahan file dari `src/` ke scene/script Godot.

## Status Saat Ini

- Prototipe web awal sudah ada (commit awal).
- Struktur modular versi ambisius sudah di-scaffold (semua folder dan file kerangka siap).
- Beberapa modul masih berupa stub kosong yang siap diisi logika aslinya oleh agen AI berikutnya.
- Pull Request #2 terbuka dari branch `arena/cee001c4-game-s` ke `main`, belum di-merge.
