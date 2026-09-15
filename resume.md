# Resume Proyek — TjProfile / sayyimurtaja Personal Portfolio

> Dibuat untuk **Muhammad Sayyid Murtaja — Fullstack Developer Intern**
> Stack: React + Vite + Tailwind CSS (frontend) + NestJS (backend)

---

## 1. Path Proyek

**Path aktif (yang dijalankan):**
```
C:\Users\murtaja\Documents\portofolio_web\
```

**Path lama (WSL, basi — jangan dipakai):**
```
\\wsl.localhost\Ubuntu\home\murtaja\portofolio_web\
```

Struktur aktif (tanpa node_modules/dist):
```
C:\Users\murtaja\Documents\portofolio_web\
├── frontend\
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js              # host 127.0.0.1, port 3000
│   ├── tailwind.config.js          # warna luxury + bento, font pairing
│   ├── postcss.config.js
│   ├── public\
│   │   └── foto-anda.jpg           # foto profil (sudah ada)
│   └── src\
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css               # import fonts + base
│       └── components\
│           ├── Navbar.jsx          # pill bento, logo sayyimurtaja
│           ├── Hero.jsx            # bento-grid 12-col, foto grayscale→color
│           ├── About.jsx
│           ├── Skills.jsx
│           ├── Projects.jsx
│           ├── Contact.jsx
│           └── Footer.jsx
└── backend\
    ├── package.json
    ├── tsconfig.json
    ├── nest-cli.json
    └── src\
        ├── main.ts                 # CORS -> localhost:3000, listen 3001
        ├── app.module.ts
        └── contact\
            ├── contact.module.ts
            ├── contact.controller.ts  # POST /contact
            ├── contact.service.ts
            └── dto/create-contact.dto.ts
```

---

## 2. Apa yang Dikerjakan

### Fase 1 — Pembuatan awal
- 7 komponen React (Navbar, Hero, About, Skills, Projects, Contact, Footer) dengan tema **monochrome premium** (hitam-putih-silver), glass-effect, marquee Skills, hover project cards, dan form kontak.

### Fase 2 — Migrasi dari WSL ke Windows
- `npm install` gagal di UNC path `\\wsl.localhost\...` karena `esbuild` menjalankan `node install.js` via `cmd.exe` yang tidak support UNC path.
- Solusi: pindah ke `C:\Users\murtaja\Documents\portofolio_web\`.
- Copy sempat timeout 60s → folder `backend\src` tidak tercopy → `nest build` kosong → port 3001 tidak listen. Diperbaiki dengan menulis ulang 6 file TS backend langsung di lokasi Windows.

### Fase 3 — Landing Page Clean White (request 2)
- Navbar & Hero diganti ke tema **Clean White** (bg-white, border-zinc-100, aksen tipis) dengan logo `TjProfile` (Tj bold + Profile light gradient) dan foto `rounded-[3rem] grayscale → color duration-500`.

### Fase 4 — Landing Page Dark Bento (request 3, referensi Dribbble 26641268)
- Ganti ke **dark bento-grid**: `bg-[#0a0a0a]`, kartu `bg-[#151515] border-white/[0.06] rounded-[32px]` dengan glow `blur-[120px] bg-white/[0.04]`, navbar pill floating `bg-[#141414]/80 backdrop-blur-xl`.
- Logo menjadi **`sayyimurtaja`** (sayyi light tracking 0.18em + murtaja bold gradient).
- Tipografi tidak monoton: `Playfair Display + Lora` (display) + `Plus Jakarta Sans + Inter/Outfit` (sans) via Google Fonts, dikonfigurasi di `tailwind.config.js` dan `index.css`.
- Hero dipecah jadi bento 12 kolom: kartu intro 8-col (nama, role, intro end-to-end, CTA pill) + kartu foto 4-col + 3 kartu stats kecil.
- Foto `public/foto-anda.jpg` ditempatkan di kartu foto dengan `rounded-[24px]` (selaras dengan kartu 32px), `grayscale` default → `hover:grayscale-0 transition-all duration-700`.

### Fase 5 — Fix error build
- **Error 1:** `border-border` di `index.css` (shadcn convention tanpa token) → ganti `border-luxury-silver/10`.
- **Error 2:** `opacity-3` tidak valid → `opacity-[0.03]`.
- **Error 3:** `bg-bento-bg` di `@apply` gagal di HMR Vite (custom color tidak terresolv) → ganti `bg-[#0a0a0a]` dan `bg-[#151515]` (arbitrary value). Build kembali lolos `✓ 93 modules`.

---

## 3. Cara Kerja

**Frontend (SPA + smooth scroll):**
`main.jsx` → `App.jsx` → render berurutan Navbar + Hero + About + Skills + Projects + Contact + Footer dalam satu halaman. Navigasi bukan routing, melainkan `scrollIntoView({behavior:'smooth'})`. Scroll-spy membaca `getBoundingClientRect()` tiap section untuk menandai nav aktif.

**Contact flow:**
`Contact.jsx` (useState) → `axios.post http://localhost:3001/contact` → `ContactController` → `ContactService` (console.log + return `{success, message, data}`) → frontend tampilkan banner sukses 5 detik.

**Bento Hero:**
Grid 12-col Tailwind, kartu utama border tipis + shadow + glow, foto di dalam `group` dengan `grayscale → grayscale-0 duration-700`.

**CORS:**
`backend/src/main.ts` mengizinkan `origin: http://localhost:3000` agar request lintas port tidak diblok browser.

---

## 4. Kenapa Menggunakan Teknologi Ini

**Ditentukan oleh Anda:**
- **React:** komponen per section, mudah maintain.
- **Tailwind CSS:** utility-first, konsisten untuk palet monochrome/bento dan animasi marquee/glow.
- **NestJS:** struktur module/controller/service dengan TypeScript, siap scale jika tambah DB/email/validasi (untuk 1 endpoint saja sebenarnya heavy, Express pun cukup).

**Dipilih oleh saya:**
- **Vite:** HMR & build jauh lebih cepat dari CRA (build ~2.8s).
- **Axios:** handling JSON & error lebih ringkas dari fetch untuk 1 POST.
- **Google Fonts pairing (Playfair/Lora + Plus Jakarta/Inter):** menghindari font monoton, memberi kesan premium sesuai brief Dribbble.
- **Arbitrary values `bg-[#0a0a0a]` di @apply:** menghindari kegagalan HMR untuk custom color.

**Tidak terpakai:**
- `framer-motion` ada di `package.json` tapi semua animasi masih CSS Tailwind — bisa dihapus untuk perkecil bundle.

---

## 5. Status Terverifikasi (terakhir)

- Frontend `http://127.0.0.1:3000` → HTTP 200 (Vite, host 127.0.0.1 agar tidak gagal di IPv4)
- Backend `http://localhost:3001` → LISTEN, `POST /contact` diuji → `success: true`
- `npm run build` frontend → sukses
- Foto `public/foto-anda.jpg` → sudah ada, tampil di Hero bento card

---

## 6. Cara Menjalankan

**Terminal 1 — Frontend:**
```powershell
cd C:\Users\murtaja\Documents\portofolio_web\frontend
npm install   # sekali saja
npm run dev -- --host 127.0.0.1
# buka http://localhost:3000
```

**Terminal 2 — Backend:**
```powershell
cd C:\Users\murtaja\Documents\portofolio_web\backend
npm install
npm run start:dev
# API di http://localhost:3001
```

**Build produksi:**
```powershell
cd frontend; npm run build
cd ../backend; npm run build
```

---

## 7. Catatan & Next Step

1. **WSL copy basi** — masih berisi `border-border` & `bg-bento-bg` yang error, jangan diedit.
2. **Belum ada validasi backend** — `CreateContactDto` hanya tipe TS, perlu `class-validator` + `ValidationPipe`.
3. **Belum ada rate limiting** — pertimbangkan `@nestjs/throttler` sebelum deploy publik.
4. **Pesan hanya console.log** — hilang saat restart, belum simpan DB/kirim email.
5. **Konten masih placeholder** — 6 project, link GitHub/LinkedIn `href="#"` perlu diisi data nyata.
6. `npm audit` melaporkan vulnerabilitas dev — jangan `audit fix --force`.

---

*Diperbarui: 2026-09-05 — Landing Page dark bento sayyimurtaja, foto terpasang, error CSS diperbaiki.*

---

## 8. Update Job-Ready Positioning + Training Split (2026-09-11)

> Tujuan: ubah positioning dari "intern aktif" menjadi profesional job-ready (full-time), dan pecah Training gabungan menjadi 4 kartu individual. Semua teks English. Design system tidak diubah.

### 📄 frontend/src/components/Hero.jsx
**WHAT:** Headline `Building the web, end to end.` → `Fullstack Developer, ready for full-time roles.` Deskripsi `currently a Website Developer Intern at Wiratek` → `Aspiring Fullstack Developer with hands-on internship experience... Former Intern at Wiratek Solusi Asia... Ready to contribute to your team full-time.` Meta row `Open to internships & freelance` + emerald pulse dot → `Open to full-time roles & freelance` + static `bg-ink` dot. Follow-up fix: frasa `Former Intern at Wiratek Solusi Asia` dibungkus satu `<span className="whitespace-nowrap">` agar tampil 1 line utuh.
**HOW:** Edit `motion.h1` (line 38-42), `motion.p` deskripsi (line 44-48), meta row (line 75-77). `whitespace-nowrap` memaksa browser tidak memenggal antara "at" dan "Wiratek".
**WHY:** Hero adalah kesan pertama recruiter — past-tense + "ready full-time" memberi sinyal job-ready. Static neutral dot menghapus cue visual "currently active". `nowrap` dipilih dibanding `<br/>`/`block` karena tidak mengubah layout/tinggi paragraf dan tetap responsif (frasa ±300px muat di `max-w-[580px]` dan mobile ≥360px).

### 📄 frontend/src/components/Experience.jsx
**WHAT:** (1) Wiratek `Jun 2026 to Present` → `Jun 2024 to Dec 2024 [PLACEHOLDER]`, role `Website Developer Intern` → `Website Developer — Internship Experience`, points present-tense → past-tense hasil kerja. (2) 1 blok Training gabungan (`RevoU · Kesatria · Geosoftware · Gim`) → 4 kartu individual: RevoU / Kesatria Academy / Geosoftware / GIM e-Learning (masing-masing: program name, provider, duration [PLACEHOLDER], key skills, Completed). (3) Tambah badge `Completed` netral ke semua kartu.
**HOW:** Array `entries` 4 → 7 objek (`{period, place, role, org, status:'Completed', note, points[3]}`). Header kartu dirender `org + badge + role` dengan style `border-line bg-surface text-muted` + dot `bg-zinc-400` (bukan emerald). Reuse kartu `rounded-2xl border-line shadow-soft`, timeline rail, grid `lg:grid-cols-[220px_1fr]` yang sama — tanpa CSS baru.
**WHY:** Data-driven map menjaga konsistensi visual otomatis dan responsif di semua breakpoint dibanding 4 komponen bespoke. Badge zinc netral memberi sinyal "completed/past" vs "active/current". Past-tense menekankan kontribusi yang sudah delivered.

### 📄 frontend/src/components/About.jsx
**WHAT:** Subtitle `Fullstack Developer Intern` → `Fullstack Developer`. Paragraf `Currently interning as Website Developer at Wiratek` → `Former Intern at Wiratek Solusi Asia as Website Developer... Now actively seeking full-time opportunities`. Stats `{5+, Trainings & bootcamps / Jun 2026, Intern at Wiratek}` → `{4, Trainings completed / 2024, Internship Experience at Wiratek}`.
**HOW:** Edit teks saja (line 22, 50-53, 74-78), tanpa ubah layout grid `lg:col-span-5/7`.
**WHY:** About adalah cerminan Hero untuk yang scroll — kosakata past-tense yang sama menghindari kontradiksi. Perbaikan tanggal menghapus future-date `2026`.

### 📄 frontend/src/components/Resume.jsx
**WHAT:** Summary `Fresh graduate... plus internship as Website Developer` → `Aspiring Fullstack Developer with hands-on internship experience... Internship Experience... Actively seeking full-time`. Kartu gelap Work Experience: tambah pill `Completed`, subline `Website Developer Intern · Jun 2026 to Present` → `Website Developer — Internship Experience · Jun 2024 to Dec 2024 [PLACEHOLDER]`, bullets → past-tense `Delivered/Built/Designed`.
**HOW:** Edit Summary (line 43), header kartu + pill `border-white/15 bg-white/10` (line 50-53), list bullets (line 54-58). Style dark-card dipertahankan.
**WHY:** Section Resume adalah sumber kebenaran CV — badge + tanggal past-tense menghapus cue "Present"/aktif dengan tetap memakai design yang sama.

### 📄 frontend/src/components/Contact.jsx
**WHAT:** `Open to internships, freelance and collaborations...` → `Actively seeking full-time opportunities... Open to full-time roles, freelance and collaborations — I reply fast.`
**HOW:** Edit satu `<p>` (line 33).
**WHY:** CTA kontak harus selaras dengan intent Hero, agar hiring manager tidak menerima sinyal campuran.

### 📄 frontend/src/components/Projects.jsx
**WHAT:** CTA card `Internships, freelance and collaborations. I reply fast.` → `Full-time roles, freelance and collaborations. I reply fast.`
**HOW:** Edit teks di kartu CTA `xl` (line 155).
**WHY:** Kartu kecil tapi terlihat di grid 3-kolom; menjaga funnel konsisten tanpa ubah layout.

### 📄 frontend/src/components/Footer.jsx
**WHAT:** `Fullstack Developer Intern — web development & AI automation...` → `Fullstack Developer — ... Former Intern at Wiratek... Open to full-time roles.`
**HOW:** Edit satu `<p>` (line 19).
**WHY:** Footer tampil di setiap posisi scroll / snippet SEO — past-tense menghindari branding intern yang basi.

**Catatan placeholder:** `[PLACEHOLDER]` dipakai untuk tanggal training, durasi, dan detail skills sertifikat — cari `[PLACEHOLDER]` untuk replace. Build terverifikasi: `vite build ✓ 386 modules`.

*Diperbarui: 2026-09-11 — Job-ready positioning, Experience past-status, Training split 4 kartu, Hero nowrap fix, didokumentasikan di file ini.*
