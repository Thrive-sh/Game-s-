# Panduan Kontribusi EcoBox

Proyek ini dikerjakan oleh satu pengembang solo (dengan bantuan AI). Struktur modul sengaja dibuat rapi agar fitur baru bisa ditambah tanpa merusak yang lama.

## Cara nambah fitur
1. **Tool baru** → tambah file di `src/tools/<kategori>/`, lalu daftarkan di `src/tools/registry.js`
2. **Spesies baru** → tambah file di `src/entities/creatures/` atau `src/entities/races/`, daftarkan di `src/entities/factory.js`
3. **Panel UI baru** → tambah file di `src/ui/panels/`
4. **Sistem baru** → tambah file di `src/systems/`, daftarkan di `src/systems/ecosystem.js`
5. Jangan menuliskan logika langsung di `index.html` — `index.html` hanya bootstrap

## Aturan nama file
- Snake case: `food_chain.js`, `population_panel.js`
- Satu file = satu tanggung jawab

## Test sebelum commit
- Buka `index.html` di browser HP, cek sentuh dan tampilan
- Cek konsol browser tidak ada error merah
