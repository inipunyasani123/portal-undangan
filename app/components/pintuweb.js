// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /undangan-digital) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
export const PINTUWEB = 'https://www.pintuweb.id';

/** Kontak dari PintuWeb/app/lib/site.ts (WA_NUMBER, WA_DISPLAY). Ganti di sana = ganti di sini. */
export const WA_NUMBER = '6285190931399';
export const WA_DISPLAY = '+62 851 9093 1399';
export const wa = (teks) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(teks)}`;

/**
 * Angka paket "undangan-digital" dan "situs-acara" dari PintuWeb/app/lib/packages.ts (harga, waktu, masa aktif,
 * revisi). Satu-satunya tempat angka bisnis di portal ini: hero dan FAQ mengambil dari sini.
 */
export const PAKET = {
  nama: 'Undangan Digital',
  mulai: 'Rp75 ribu',
  sampai: 'Rp225 ribu',
  waktu: '1 hari kerja',
  aktifBulan: 12,
  revisi: '1× revisi data',
};
export const PAKET_ACARA = {
  nama: 'Situs Acara & Undangan Custom',
  mulai: 'Rp500 ribu',
  sampai: 'Rp1,25 juta',
  waktu: '2–4 hari kerja',
  revisi: '2× revisi',
};

/** Galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Kontes Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Website Portofolio' },
  { path: 'website-reservasi', label: 'Website Reservasi' },
  { path: 'website-properti', label: 'Website Properti' },
  { path: 'aplikasi-to-do', label: 'Aplikasi To-Do' },
  { path: 'toko-online', label: 'Toko Online' },
  { path: 'menu-digital', label: 'Menu Digital' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'undangan-digital');

/** Paket harga (lib/packages.ts), halaman layanan, dan galeri demo PintuWeb untuk kategori ini. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#undangan-digital`, label: 'Harga paket Undangan Digital' },
  { href: `${PINTUWEB}/services/undangan-digital`, label: 'Jasa pembuatan undangan digital' },
  { href: `${PINTUWEB}/demo#undangan`, label: 'Semua demo PintuWeb' },
];
