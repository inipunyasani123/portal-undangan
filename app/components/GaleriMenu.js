'use client';
import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { GALERI_LAIN, PINTUWEB } from './pintuweb';

/** Tombol "Galeri lain" di bilah atas: daftar 10 galeri PintuWeb lainnya. Esc menutup dan mengembalikan fokus; klik di luar menutup. */
export default function GaleriMenu() {
  const [buka, setBuka] = useState(false);
  const tombol = useRef(null);
  const kotak = useRef(null);
  const id = useId();

  useEffect(() => {
    if (!buka) return;
    const esc = (e) => { if (e.key === 'Escape') { setBuka(false); tombol.current?.focus(); } };
    const luar = (e) => { if (!kotak.current?.contains(e.target)) setBuka(false); };
    document.addEventListener('keydown', esc);
    document.addEventListener('pointerdown', luar);
    return () => { document.removeEventListener('keydown', esc); document.removeEventListener('pointerdown', luar); };
  }, [buka]);

  return (
    <div ref={kotak} className="relative ms-auto" onBlur={(e) => { if (buka && !e.currentTarget.contains(e.relatedTarget)) setBuka(false); }}>
      <button
        ref={tombol}
        type="button"
        aria-expanded={buka}
        aria-controls={id}
        onClick={() => setBuka((b) => !b)}
        className="inline-flex min-h-8 items-center gap-1 rounded-full border border-[#d6b77f]/50 px-3 font-semibold text-creamu transition hover:bg-creamu/10"
      >
        Galeri lain <ChevronDown size={14} aria-hidden="true" className={`transition-transform ${buka ? 'rotate-180' : ''}`} />
      </button>
      {buka && (
        <ul id={id} className="bingkai absolute end-0 top-full z-50 mt-2 w-[min(18rem,calc(100vw-2rem))] bg-creamu p-2 text-sm text-inku shadow-[0_18px_40px_-18px_rgba(59,49,41,0.55)]">
          {GALERI_LAIN.map((g) => (
            <li key={g.path}>
              <a href={`${PINTUWEB}/${g.path}`} className="flex min-h-10 items-center rounded px-3 font-semibold transition hover:bg-roseu/10 hover:text-roseu">{g.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
