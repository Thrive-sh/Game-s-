# EcoBox — God Sandbox Mini (Prototipe Ekosistem)

Game sandbox "jadi Tuhan" ala WorldBox, versi mini untuk **1 orang, HP Android 4GB/128GB, modal Rp0**.
Prototipe playable ada di [`index.html`](index.html) — 1 file, tanpa install, tanpa engine, tanpa aset berbayar.

> Cara main: buka `index.html` di browser HP (atau deploy gratis, lihat bawah). Pilih tool di bawah,
> sentuh/seret untuk melukis tanah & spawn makhluk. Domba makan rumput → serigala makan domba →
> manusia makan domba & menebang hutan. Api menyebar, meteor menghancurkan, hujan memadamkan.

---

## 1. Relevan nggak bikin game seperti WorldBox?

**Relevan sebagai inspirasi & genre, TIDAK relevan sebagai target clone 1:1.**

| Fakta WorldBox | Artinya buat kamu |
|---|---|
| Dibuat Maxim Karpenko, mulai **2011 sebagai prototipe Flash di browser**, rilis Newgrounds 2012, iOS 2018, Android 2019, Steam 2019/2021. Engine: **Unity (C#)**. | Jalur suksesnya = *mulai kecil di browser, iterasi bertahun-tahun*, bukan langsung bikin AAA. Kamu bisa meniru jalurnya. |
| Versi sekarang **0.51.4 (Mei 2026)** — changelog-nya ribuan baris: puluhan ras, trait, bencana, kota, perang, UFO, dll. | Itu hasil **14 tahun** kerja. Target MVP kamu harus dipotong 95%: 1 map, 3 spesies, 5 bencana. |
| Genre "god sandbox / ekosistem eksperimen" terbukti laku di PC + Android + iOS + Steam. | Pasar ada. Yang membedakan bukan grafis, tapi *sistem yang terasa hidup* (rantai makanan, reproduksi, bencana). |

Kesimpulan: **bangun "WorldBox versi mini", bukan "WorldBox versi kecil".** Bedanya: sistem dulu, konten belakangan.

## 2. "Pake Google Studio" — perlu diluruskan

Ada 3 hal yang sering tertukar:

| Nama | Apa itu | Relevan buat game? |
|---|---|---|
| **Google AI Studio** (`aistudio.google.com`) | Playground gratis untuk model **Gemini**: test prompt, ambil API key, prototyping app AI dari browser. **Bukan game engine.** | ✅ Relevan sebagai **asisten coding gratis** (generate kode, ide sprite, tuning balance). ❌ Tidak bisa render game / export APK. |
| **Android Studio** | IDE resmi Google untuk app Android native (Kotlin/Java). Berat, butuh PC. | ❌ Tidak perlu untuk game 2D. |
| **Game engine** (Godot/Unity/dll) | Mesin yang me-render dunia, fisika, input, export APK. | ✅ Ini yang kamu butuhkan. |

Jadi: **Google AI Studio = alat bantu, bukan framework game.** Pakai untuk mempercepat coding, bukan untuk membangun gamenya.

## 3. Framework yang cocok untuk kondisi kamu

Kondisi: solo, HP 4GB RAM / 128GB storage, modal Rp0. Editor Unity butuh RAM ≥8GB dan instalasi beberapa GB — di HP 4GB itu praktis tidak bisa. Godot editor ~50–150MB dan bisa jalan di RAM 4GB. Web (HTML5) paling ringan: nol install.

| Kriteria | 🌐 Web HTML5 + Canvas (dipakai prototipe ini) | 🎮 Godot 4 (GDScript) | 🕹️ Unity 6 (C#) |
|---|---|---|---|
| Jalan di HP 4GB? | ✅ Browser saja, <50MB RAM | ✅ Editor ~100MB, APK ~25–35MB | ❌ Editor butuh ≥8GB RAM, install GB-an |
| Biaya | Rp0, deploy gratis | Rp0 (MIT, tanpa royalti) | Gratis tier, tapi berat |
| Export Android | Via WebView/Capacitor (gratis) atau PWA | ✅ Native APK langsung | ✅ Native, tapi build lambat di HP |
| Cocok untuk | **Fase 1: validasi gameplay** | **Fase 2: rilis Android** | Fase 3+ (kalau sudah ada PC) |
| Aset | Emoji = sprite gratis | Sprite sendiri / gratis | Asset Store |

### Rekomendasi: 2 fase

```
Fase 1 (sekarang, di HP)   : Web HTML5 — prototipe ini. Deploy gratis, test langsung di browser HP.
Fase 2 (kalau gameplay seru): Port ke Godot 4 — export APK native ~25MB, rilis Play Store.
Fase 3 (nanti)             : Steam via Godot/Unity kalau sudah ada PC & modal $100.
```

Kenapa tidak langsung Godot? Karena di HP, iterasi web (edit → refresh → main) jauh lebih cepat daripada
install editor + export template + build APK tiap perubahan. Validasi dulu "seru atau tidak", baru kemas jadi APK.

## 4. Roadmap MVP (solo, HP-only)

- [x] **Fase 0 — Prototipe** (`index.html`): grid tanah/air/gunung/hutan, 3 spesies + rantai makanan, api/meteor/hujan, counter populasi.
- [ ] **Fase 1 — Sistem**: musim & siklus hari, penyakit, umur & generasi, rumah/kota sederhana, save/load (localStorage).
- [ ] **Fase 2 — Konten**: +2 spesies (mis. ayam, naga), trait acak, bencana baru (gempa, tornado), suara efek (gratis dari freesound).
- [ ] **Fase 3 — Godot**: port logika `index.html` → Godot 4, export APK, test di HP sendiri.
- [ ] **Fase 4 — Rilis**: itch.io (gratis) → Play Store ($25 sekali bayar, kumpulkan dulu dari donasi/iklan web).

**Aturan performa untuk HP 4GB:** batasi entitas (prototipe: 260), AI jalan 10x/detik bukan tiap frame,
tanpa aset gambar besar (emoji/atlas kecil), APK target <50MB.

## 5. Cara jalanin & deploy gratis (modal Rp0)

```bash
# lokal: buka langsung
#   buka index.html di browser HP, atau:
python3 -m http.server 8000   # lalu buka http://localhost:8000
```

Deploy gratis (pilih satu): **GitHub Pages** (repo ini), **Netlify Drop**, **Vercel**, atau **itch.io** (upload zip HTML5).
Semua Rp0 dan bisa dibuka langsung di browser HP pemain — tanpa install APK.

## 6. Workflow HP-only + AI gratis

1. **Coding:** edit `index.html` langsung di HP (browser/Termux) atau via GitHub web editor.
2. **AI assistant:** Google AI Studio (Gemini) untuk generate/refactor kode, ide balance, teks UI — gratis, tanpa kartu kredit.
3. **Aset:** emoji + warna flat (Rp0). Nanti: generate sprite via AI Studio, atau unduh aset gratis (Kenney.nl, OpenGameArt).
4. **Musik/SFX:** freesound.org / Kenney audio (gratis, cek lisensi).

## Referensi
- WorldBox — situs resmi & changelog: https://www.superworldbox.com/ · https://www.superworldbox.com/changelog
- WorldBox (Wikipedia/Wikiwand): engine Unity, mulai 2011 Flash → 2012 Newgrounds → 2018 iOS → 2019 Android/Steam.
- Google AI Studio: https://aistudio.google.com — playground Gemini, bukan game engine.
- Godot vs Unity (ukuran editor/APK, RAM minimum): editor Godot ~50–150MB & RAM min 4GB vs Unity beberapa GB & ≥8GB.
