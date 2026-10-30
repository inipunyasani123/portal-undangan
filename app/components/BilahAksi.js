'use client';
import { useEffect, useState } from 'react';
import { MessageCircle, Eye } from 'lucide-react';

/** Bilah aksi lengket di ponsel: muncul setelah hero lewat, hilang saat footer terlihat. */
export default function BilahAksi({ wa }) {
  const [heroTampak, setHeroTampak] = useState(true);
  const [kakiTampak, setKakiTampak] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    const kaki = document.getElementById('kaki');
    const io = new IntersectionObserver((es) => {
      for (const e of es) (e.target === hero ? setHeroTampak : setKakiTampak)(e.isIntersecting);
    });
    if (hero) io.observe(hero);
    if (kaki) io.observe(kaki);
    return () => io.disconnect();
  }, []);

  const tampil = !heroTampak && !kakiTampak;
  return (
    <div
      aria-hidden={!tampil}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-goldu/40 bg-creamu/95 px-3 pt-2.5 shadow-[0_-10px_30px_-14px_rgba(59,49,41,0.35)] backdrop-blur-xl transition duration-300 pb-[calc(0.625rem+env(safe-area-inset-bottom))] md:hidden ${tampil ? 'translate-y-0' : 'invisible translate-y-full'}`}
    >
      <div className="mx-auto flex max-w-md gap-2">
        <a href="#koleksi" className="bingkai inline-flex min-h-11 flex-1 items-center justify-center gap-1.5 bg-creamu font-display text-sm text-inku">
          <Eye size={15} aria-hidden="true" /> Lihat demo
        </a>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 flex-[1.4] items-center justify-center gap-1.5 rounded-full bg-roseu px-3 text-sm font-bold text-creamu">
          <MessageCircle size={15} aria-hidden="true" /> Pesan via WhatsApp
        </a>
      </div>
    </div>
  );
}
