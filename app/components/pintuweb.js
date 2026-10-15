// Tautan ke situs utama PintuWeb. Portal ini zona terpisah (basePath /undangan-digital) di domain yang sama, jadi
// semua tautan ke situs utama memakai URL absolut dan <a> biasa: next/link akan menempelkan basePath.
export const PINTUWEB = 'https://www.pintuweb.id';

/** Delapan galeri yang tayang di www.pintuweb.id/<path> (lihat lib/portals.ts di PintuWeb). */
export const GALERI = [
  { path: 'landing-page', label: 'Landing Page' },
  { path: 'link-in-bio', label: 'Link in Bio' },
  { path: 'kontes-desain', label: 'Kontes Desain' },
  { path: 'undangan-digital', label: 'Undangan Digital' },
  { path: 'website-portofolio', label: 'Website Portofolio' },
  { path: 'website-reservasi', label: 'Website Reservasi' },
  { path: 'website-properti', label: 'Website Properti' },
  { path: 'aplikasi-to-do', label: 'Aplikasi To-Do' },
];

export const GALERI_LAIN = GALERI.filter((g) => g.path !== 'undangan-digital');

/** Paket harga (lib/packages.ts), halaman layanan, dan galeri demo PintuWeb untuk kategori ini. */
export const LANJUT = [
  { href: `${PINTUWEB}/paket#undangan-digital`, label: 'Harga paket Undangan Digital' },
  { href: `${PINTUWEB}/services/undangan-digital`, label: 'Jasa pembuatan undangan digital' },
  { href: `${PINTUWEB}/demo#undangan`, label: 'Semua demo PintuWeb' },
];
