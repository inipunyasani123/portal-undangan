import HARGA from './harga.json';
// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /undangan-digital) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
/** Harga & kontak dibaca dari ./harga.json (salinan https://www.pintuweb.id/harga.json, diambil scripts/ambil-harga.mjs saat build). */
const P = (slug) => HARGA.paket[slug];
const rp = (n) => (n >= 1e6 ? `Rp${String(n / 1e6).replace('.', ',')} juta` : `Rp${n / 1e3} ribu`);

export const PINTUWEB = 'https://www.pintuweb.id';

/** Kontak dari PintuWeb/app/lib/site.ts (WA_NUMBER, WA_DISPLAY). Ganti di sana = ganti di sini. */
export const WA_NUMBER = HARGA.wa.nomor;
export const WA_DISPLAY = HARGA.wa.tampil;
export const wa = (teks) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`;

/**
 * Angka paket "undangan-digital" dan "situs-acara" dari PintuWeb/app/lib/packages.ts (harga, waktu, masa aktif,
 * revisi). Satu-satunya tempat angka bisnis di portal ini: hero dan FAQ mengambil dari sini.
 */
export const PAKET = {
  nama: 'Undangan Digital',
  mulai: rp(P('undangan-digital').mulai),
  sampai: rp(P('undangan-digital').sampai),
  waktu: P('undangan-digital').waktu,
  aktifBulan: 12,
  revisi: '1× revisi data',
};
export const PAKET_ACARA = {
  nama: 'Situs Acara & Undangan Custom',
  mulai: rp(P('situs-acara').mulai),
  sampai: rp(P('situs-acara').sampai),
  waktu: P('situs-acara').waktu,
  revisi: '2× revisi',
};

/** Galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). Urutan = urutan menu "Galeri lain". */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'toko-online', label: 'Toko Online' },
  { path: 'aplikasi-mobile', label: 'Aplikasi Mobile' },
  { path: 'menu-digital', label: 'Menu Digital' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Konsep Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Portofolio Pribadi' },
  { path: 'website-reservasi', label: 'Reservasi & Booking' },
  { path: 'website-properti', label: 'Properti' },
  { path: 'aplikasi-to-do', label: 'To-Do & Produktivitas' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'undangan-digital');

/** Artikel PintuWeb yang relevan untuk galeri ini ("Baca juga"). */
export const BACA_JUGA = [
  { href: `${PINTUWEB}/artikel/panduan-undangan-digital`, label: 'Panduan memilih undangan digital' },
];

/** Pesan WhatsApp untuk satu tema: jenis undangan + nama contoh + alamat demo. */
export const waTema = (nama, url) => wa(`Halo PintuWeb, saya tertarik undangan digital seperti contoh ${nama} (${url}). Boleh minta info?`);

/** Paket harga (lib/packages.ts), halaman layanan, dan galeri demo PintuWeb untuk kategori ini. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#undangan-digital`, label: 'Harga paket Undangan Digital' },
  { href: `${PINTUWEB}/services/undangan-digital`, label: 'Jasa pembuatan undangan digital' },
  { href: `${PINTUWEB}/demo#undangan`, label: 'Semua demo PintuWeb' },
];
