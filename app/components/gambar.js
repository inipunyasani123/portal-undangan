// Gambar statis tanpa optimizer Vercel: varian WebP dibuat scripts/gambar-varian.mjs.
// Kartu memakai <picture>: potret ponsel (p<N>) di bawah 768 px, sampul lebar (u<N>) di layar lebar.
const VARIAN = [320, 480, 640];

export const srcSetVarian = (src, asli) =>
  [...VARIAN.map((w) => `${src.replace(/\.[^.]+$/, `-${w}.webp`)} ${w}w`), `${src} ${asli}w`].join(', ');
export const kecil = (src, w = 320) => src.replace(/\.[^.]+$/, `-${w}.webp`);

export const PINTU_LOGO = '/undangan-digital/images/logo-pintuweb.png';
