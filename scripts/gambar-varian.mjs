// Buat ulang varian WebP yang diminta app/gambar-loader.js (gambar statis: portal ini tidak memakai Image Optimization
// Vercel). Setiap kali gambar pratinjau di public/images ditambah atau diganti, jalankan dari akar proyek:
//   node scripts/gambar-varian.mjs                    → semua gambar asli di folder itu
//   node scripts/gambar-varian.mjs u1.webp u5.webp    → hanya berkas tertentu
// Lebar varian dibaca dari VARIAN di app/gambar-loader.js; hasilnya <nama>-<lebar>.webp (sharp, WebP q76) di folder
// yang sama. Berkas aslinya tidak diubah. Commit gambar asli beserta variannya.
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const AKAR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FOLDER = 'public/images';
const ASLI = /^u\d+\.webp$/;
const KUALITAS = 76;

const loader = readFileSync(path.join(AKAR, 'app/gambar-loader.js'), 'utf8');
const VARIAN = JSON.parse(loader.match(/const VARIAN = (\[[\d,\s]+\])/)[1]);
const namaVarian = new RegExp(`-(${VARIAN.join('|')})\\.webp$`);

// sharp ikut terpasang bersama Next.js; kalau tidak ada, pakai milik repo PintuWeb di sebelah folder ini.
function muatSharp() {
  for (const dari of [path.join(AKAR, 'package.json'), path.join(AKAR, '../PintuWeb/package.json')]) {
    try { return createRequire(dari)('sharp'); } catch { /* coba lokasi berikutnya */ }
  }
  throw new Error('sharp tidak ditemukan: jalankan npm install dulu');
}
const sharp = muatSharp();

const dir = path.join(AKAR, FOLDER);
const diminta = process.argv.slice(2).map((a) => path.basename(a));
const berkas = readdirSync(dir).filter((f) => ASLI.test(f) && !namaVarian.test(f) && (!diminta.length || diminta.includes(f)));
const hilang = diminta.filter((f) => !berkas.includes(f));
if (hilang.length) throw new Error(`bukan gambar asli di ${FOLDER}: ${hilang.join(', ')}`);

for (const f of berkas.sort()) {
  const src = path.join(dir, f);
  const { width, height } = await sharp(src).metadata();
  for (const w of VARIAN) {
    // Loader selalu meminta semua lebar di VARIAN, jadi tiap varian harus ada walau gambar aslinya lebih sempit.
    if (w > width) console.warn(`  peringatan: ${f} hanya ${width}px, varian ${w} tidak diperbesar`);
    await sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: KUALITAS }).toFile(path.join(dir, f.replace(/\.[^.]+$/, `-${w}.webp`)));
  }
  console.log(`${FOLDER}/${f} ${width}x${height} → ${VARIAN.join(', ')}`);
}
