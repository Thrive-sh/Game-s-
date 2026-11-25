# Desain Game EcoBox

## Pilar desain
- **God-sandbox**: pemain adalah Tuhan yang mencipta & menghancurkan dunia
- **Ekosistem hidup**: makhluk makan, berkembang biak, mati, bertarung secara mandiri
- **Ringan untuk HP 4GB**: tidak ada aset berat, simulasi tick-based, batas entitas
- **Modular**: setiap fitur terpisah file, mudah diupdate & dipindah ke Godot

## Loop main
1. Pemain memilih tool (terrain, spawn, disaster, magic, dll)
2. Pemain menyentuh layar untuk menerapkan tool
3. Dunia simulasi berjalan di background (makan, reproduksi, bencana)
4. Pemain amati hasil, sesuaikan tool, ulangi

## Genre
God sandbox / ekosistem simulasi (inspirasi WorldBox, tapi versi mini)

## Target platform
- Web (HTML5 Canvas) — validasi gameplay
- Android (Godot 4 export APK) — rilis native
