# Balance EcoBox

Angka tuning terpusat. Semua ada di `config/balance.json` dan `src/data/*.json`.

## Dasar (versi prototipe)
- Tick rate: 10 tick/detik
- Batas entitas: 260
- Grid: 56 x 36 tile
- Domba: makan rumput, reproduksi cepat
- Serigala: berburu domba, reproduksi sedang
- Manusia: makan domba, tebang hutan, reproduksi lambat
- Api: menyebar ke tile gangguan, padam oleh hujan

## Catatan tuning
- Jika domba punah terlalu cepat → naikkan reproduksi domba / turunkan lapar serigala
- Jika serigala terlalu banyak → turunkan reproduksi serigala / naikkan kebutuhan makan
