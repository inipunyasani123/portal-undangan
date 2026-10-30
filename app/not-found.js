import Link from 'next/link';
import { templates } from './components/templates-data';

export const metadata = { title: 'Halaman tidak ditemukan', robots: { index: false } };

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-creamu px-6 text-center text-inku">
      <p className="ornamen text-xs uppercase">— Mohon maaf —</p>
      <h1 className="mt-5 font-display text-4xl sm:text-5xl">Undangan ini tidak ditemukan</h1>
      <p className="mt-4 max-w-md text-mutedu">Tautannya mungkin terpotong saat dikirim. {templates.length} tema undangan ada di halaman utama.</p>
      <Link href="/" className="mt-8 rounded-full bg-roseu px-6 py-3 text-sm font-bold text-creamu transition hover:bg-inku">Buka koleksi</Link>
    </main>
  );
}
