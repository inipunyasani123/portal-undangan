'use client';
import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { templates, slugOf } from './templates-data';
import { PAKET, PAKET_ACARA, waTema } from './pintuweb';
import { srcSetVarian, kecil } from './gambar';

const KATEGORI = ['Semua', ...new Set(templates.map((t) => t.kategori))];

/** Ganti saringan dengan View Transition bila peramban mendukung dan pengguna tidak meminta gerak minimal. */
function useSaringan(awal) {
  const [nilai, setNilai] = useState(awal);
  const ganti = (v) => {
    if (v === nilai) return;
    const diam = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || diam) return setNilai(v);
    document.startViewTransition(() => flushSync(() => setNilai(v)));
  };
  return [nilai, ganti, setNilai];
}

export default function Katalog() {
  const [kat, setKat, setKatLangsung] = useSaringan('Semua');
  const [sorot, setSorot] = useState(null);
  const list = kat === 'Semua' ? templates : templates.filter((t) => t.kategori === kat);

  // Tautan langsung #slug: setel saringan ke "Semua" bila kartu tersembunyi, gulir ke kartu, lalu sorot ±2 detik.
  const [target, setTarget] = useState(null);
  useEffect(() => {
    const baca = () => {
      const slug = decodeURIComponent(window.location.hash.slice(1));
      if (!templates.some((t) => slugOf(t) === slug)) return;
      setKatLangsung('Semua');
      setTarget({ slug, n: Date.now() });
    };
    baca();
    window.addEventListener('hashchange', baca);
    return () => window.removeEventListener('hashchange', baca);
  }, [setKatLangsung]);
  useEffect(() => {
    if (!target) return;
    const el = document.getElementById(target.slug);
    if (!el) return;
    const diam = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ block: 'center', behavior: diam ? 'auto' : 'smooth' });
    setSorot(target.slug);
    const t = setTimeout(() => setSorot(null), 2200);
    return () => clearTimeout(t);
  }, [target]);

  return (
    <>
      {/* Ponsel: satu baris chip yang bisa digeser (tidak menggeser halaman); layar lebar: rata tengah */}
      <div role="group" aria-label="Saring menurut suasana" className="-mx-4 mt-7 flex w-[calc(100%+2rem)] gap-2 overflow-x-auto px-4 py-1 [scrollbar-width:none] sm:mx-0 sm:w-auto sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
        {KATEGORI.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKat(k)}
            aria-pressed={kat === k}
            className={`min-h-10 shrink-0 rounded-full px-5 text-sm font-semibold transition ${kat === k ? 'bg-inku text-creamu' : 'border border-goldu/45 text-mutedu hover:border-roseu hover:text-roseu'}`}
          >
            {k}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{list.length} tema ditampilkan</p>

      <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-12 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4">
        {list.map((t) => {
          const slug = slugOf(t);
          return (
            <li key={t.name} id={slug} className={`group relative flex scroll-mt-28 flex-col text-center ${sorot === slug ? 'sorot' : ''}`} style={{ viewTransitionName: `und-${slug}` }}>
              {/* Kartu undangan berbingkai + segel lilin */}
              <div className="relative">
                <div className="bingkai relative overflow-hidden bg-white p-1.5 transition duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_18px_40px_-18px_rgba(59,49,41,0.4)] sm:p-2">
                  <div className="relative aspect-[390/844] overflow-hidden md:aspect-[3/4]">
                    <picture>
                      <source media="(max-width: 767px)" srcSet={srcSetVarian(t.potret, 780)} sizes="45vw" />
                      <img src={kecil(t.image, 480)} srcSet={srcSetVarian(t.image, 960)} sizes="(max-width: 1023px) 30vw, 260px" width={960} height={1280} loading="lazy" decoding="async" alt={`Sampul undangan ${t.momen}`} className="absolute inset-0 h-full w-full object-cover object-top" />
                    </picture>
                  </div>
                </div>
                <span className="segel absolute -top-3 left-1/2 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full font-display text-[11px] text-creamu transition group-hover:rotate-12 sm:h-9 sm:w-9" aria-hidden="true">
                  {t.momen[0]}
                </span>
              </div>
              <p className="ornamen mt-4 text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.6em]">{t.kategori}</p>
              <h3 className="mt-1 font-display text-xl sm:text-2xl">{t.momen}</h3>
              <p className="mx-auto mt-1.5 line-clamp-3 max-w-[15rem] text-[13px] leading-snug text-mutedu sm:line-clamp-none sm:text-sm sm:leading-normal">{t.description}</p>
              {t.terjual > 0 && <p className="mt-2 text-xs font-semibold tracking-[0.15em] text-inku"><span className="text-goldu" aria-hidden="true">✦</span> {t.terjual} terjual <span className="text-goldu" aria-hidden="true">✦</span></p>}
              <p className="mt-2 text-xs text-mutedu">mulai <strong className="font-display text-sm font-normal text-roseu">{(slug === 'corporate' ? PAKET_ACARA : PAKET).mulai}</strong> · {(slug === 'corporate' ? PAKET_ACARA : PAKET).waktu}</p>
              <a href={waTema(`Undangan ${t.momen}`, t.url)} target="_blank" rel="noopener noreferrer" className="relative z-10 mx-auto mt-2 inline-flex min-h-10 items-center gap-1.5 rounded-full border border-roseu px-3.5 text-xs font-bold text-roseu transition hover:bg-roseu hover:text-creamu">
                <MessageCircle size={13} aria-hidden="true" /> Pesan yang mirip<span className="sr-only"> {t.momen}</span>
              </a>
              {/* Satu tautan per kartu; ::after membentang menutupi seluruh kartu */}
              <a href={t.url} target="_blank" rel="noopener noreferrer" className="tautan-kartu mx-auto mt-auto inline-flex min-h-6 items-center gap-1 pt-3 text-sm font-bold text-roseu underline-offset-4 after:absolute after:inset-0 group-hover:underline">
                Buka undangan<span className="sr-only"> {t.momen} (tab baru)</span> <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
