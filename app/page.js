'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowDown, ArrowUpRight, MessageCircle, Heart, MailOpen, Timer, Images, MapPin, Music, MessagesSquare, Gift, Users, ChevronDown, PenLine, Send, PartyPopper } from 'lucide-react';
import { templates } from './components/templates-data';
import { LANJUT, GALERI_LAIN, PINTUWEB } from './components/pintuweb';

const WA = 'https://wa.me/6285190931399?text=Halo%2C%20saya%20ingin%20memesan%20undangan%20digital%20di%20PintuWeb';

const FITUR = [
  { icon: MailOpen, title: 'Amplop Pembuka', desc: 'Nama tamu tersapa lebih dulu. Tiap tamu mendapat tautan bernama sendiri, dibuat lewat halaman /kirim.' },
  { icon: Timer, title: 'Hitung Mundur', desc: 'Countdown menuju hari-H yang membuat tamu ikut menanti.' },
  { icon: Images, title: 'Galeri Momen', desc: 'Foto-foto terbaik kalian tersusun dalam galeri yang elegan.' },
  { icon: MapPin, title: 'Peta Lokasi', desc: 'Google Maps tertanam — tamu tinggal ketuk untuk berangkat.' },
  { icon: Music, title: 'Musik Latar', desc: 'Lagu pilihanmu mengiringi setiap gulir layar — dengan tombol jeda untuk tamu.' },
  { icon: Users, title: 'RSVP Kehadiran', desc: 'Tamu konfirmasi hadir dalam satu ketukan; kamu tinggal menghitung kursi.' },
  { icon: MessagesSquare, title: 'Ucapan & Doa', desc: 'Buku tamu digital yang menyimpan setiap doa terbaik.' },
  { icon: Gift, title: 'Amplop Digital', desc: 'Kado tanpa repot — nomor rekening & e-wallet tersaji sopan.' },
];

const LANGKAH = [
  { icon: Heart, no: 'I', title: 'Pilih Tema', desc: 'Telusuri delapan tema di koleksi, pilih yang paling terasa "kalian".' },
  { icon: PenLine, no: 'II', title: 'Kirim Cerita', desc: 'Nama, tanggal, lokasi, foto, dan kisahmu — kirim lewat WhatsApp.' },
  { icon: Send, no: 'III', title: 'Kami Rangkai', desc: 'Undangan kami rangkai dari ceritamu, lalu kamu periksa dulu sebelum dibagikan.' },
  { icon: PartyPopper, no: 'IV', title: 'Sebarkan', desc: 'Ketik daftar tamu di halaman /kirim — tiap nama dapat tautan dan pesan WhatsApp siap kirim.' },
];

const TANYA = [
  { q: 'Berapa lama undangan selesai dibuat?', a: 'Undangan dari tema di galeri ini biasanya selesai 1 hari kerja setelah data acara lengkap; situs acara dengan desain khusus 2–4 hari kerja. Sampaikan tanggal acaramu lewat WhatsApp supaya jadwalnya pas.' },
  { q: 'Berapa harganya?', a: 'Undangan dari tema galeri Rp75 ribu–Rp225 ribu, aktif 12 bulan tanpa biaya perpanjangan. Untuk acara kantor, seminar, atau desain khusus, paket Situs Acara & Undangan Custom Rp500 ribu–Rp1,25 juta.' },
  { q: 'Apakah nama, foto, dan cerita bisa diganti sesuai acara saya?', a: 'Tentu. Semua teks, foto, warna aksen, musik, dan detail acara disesuaikan sepenuhnya dengan momenmu. Tema hanyalah kanvas awalnya.' },
  { q: 'Apakah tamu bisa konfirmasi kehadiran?', a: 'Bisa. Formulir RSVP (atau pendaftaran peserta untuk acara kantor) dan buku ucapan bisa dipasang di tema mana pun. Contoh di galeri ini berjalan dalam mode demo, jadi isian tidak disimpan.' },
  { q: 'Bagaimana cara membagikan undangannya?', a: 'Setiap tema punya halaman /kirim: ketik daftar tamu, lalu tiap nama mendapat tautan yang menyapanya di sampul beserta pesan WhatsApp siap kirim. Tamu tinggal membuka, tanpa unduh aplikasi apa pun.' },
  { q: 'Apakah ada revisi jika ada yang keliru?', a: 'Ada. Kamu memeriksa undangan sebelum dibagikan, dan kesalahan teks atau detail kami perbaiki. Paket Undangan Digital mencakup 1× revisi data; paket Situs Acara & Undangan Custom 2× revisi.' },
];

export default function PortalUndangan() {
  const [kat, setKat] = useState('Semua');
  const [buka, setBuka] = useState(0);
  const kategoris = ['Semua', ...new Set(templates.map((t) => t.kategori))];
  const list = kat === 'Semua' ? templates : templates.filter((t) => t.kategori === kat);

  return (
    <div id="top" className="min-h-screen">
      {/* Jejak: portal ini bagian dari PintuWeb */}
      <nav aria-label="Jejak" className="bg-inku text-creamu text-xs">
        <ol className="mx-auto flex max-w-6xl px-4 sm:px-6 items-center gap-2 py-1.5">
          <li><a href="https://www.pintuweb.id" className="font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
          <li aria-hidden="true" className="opacity-60">/</li>
          <li aria-current="page">Undangan Digital</li>
        </ol>
      </nav>
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-goldu/30 bg-creamu/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5 font-display text-xl">
            <span className="segel grid h-9 w-9 place-items-center rounded-full text-creamu"><Mail size={15} /></span>
            <span className="flex flex-col leading-none">
              PintuWeb{' '}
              <span className="mt-1 font-sans text-[9px] font-semibold uppercase tracking-[0.3em] text-goldu">Undangan Digital</span>
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-semibold text-mutedu md:flex" role="navigation" aria-label="Navigasi">
            <a href="#koleksi" className="transition hover:text-roseu">Koleksi</a>
            <a href="#fitur" className="transition hover:text-roseu">Fitur</a>
            <a href="#cara" className="transition hover:text-roseu">Cara Pesan</a>
            <a href="#tanya" className="transition hover:text-roseu">Tanya Jawab</a>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-full bg-roseu px-5 py-2 text-sm font-bold text-creamu transition hover:bg-inku">
            Pesan Undangan
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative px-4 pt-16 pb-12 text-center sm:px-6">
        <span className="floaty absolute left-[8%] top-16 font-display text-2xl text-goldu/50" aria-hidden="true">✦</span>
        <span className="floaty absolute right-[10%] top-28 font-display text-xl text-roseu/40" style={{ animationDelay: '1.4s' }} aria-hidden="true">❦</span>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto max-w-3xl">
          <p className="ornamen text-xs uppercase">— Dengan hormat mengundang —</p>
          <h1 className="mt-5 font-display text-4xl leading-[1.12] sm:text-6xl">
            Setiap momen berharga,<br />layak <span className="italic text-roseu">diundang dengan indah</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-mutedu">
            Delapan undangan digital dengan karakter berbeda — dari akad yang khidmat sampai pesta yang meriah. Dibuka seperti amplop, dibagikan lewat satu tautan.
          </p>
          <a href="#koleksi" className="bingkai mt-9 inline-flex items-center gap-2 rounded-none bg-creamu px-8 py-3.5 font-display text-sm tracking-wide text-inku transition hover:bg-goldu/10">
            Buka Koleksi <ArrowDown size={15} />
          </a>

          {/* Angka kecil yang meyakinkan */}
          <div className="mx-auto mt-10 flex max-w-md items-center justify-center divide-x divide-goldu/30 border-y border-goldu/25 py-4">
            {[
              { v: '8', l: 'Tema Berbeda' },
              { v: '7', l: 'Musik Latar' },
              { v: '360 px', l: 'Ramah Layar Kecil' },
            ].map((s) => (
              <div key={s.l} className="min-w-0 flex-1 px-2 text-center sm:px-3">
                <p className="font-display text-2xl text-roseu">{s.v}</p>
                <p className="ornamen mt-0.5 text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.6em]">{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pembatas ornamen */}
      <div className="ornamen mx-auto max-w-lg pb-4 text-center text-goldu/60">✦ ✦ ✦</div>

      {/* Koleksi */}
      <section id="koleksi" className="scroll-mt-24 px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {kategoris.map((k) => (
              <button
                key={k}
                onClick={() => setKat(k)}
                aria-pressed={kat === k}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${kat === k ? 'bg-inku text-creamu' : 'border border-goldu/40 text-mutedu hover:border-roseu hover:text-roseu'}`}
              >
                {k}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {list.map((t, i) => (
                <motion.article
                  key={t.name}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: (i % 4) * 0.07, duration: 0.5 } }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="group text-center"
                >
                  <a href={t.url} aria-label={`Lihat undangan ${t.momen}`} className="relative block">
                    {/* Kartu undangan berbingkai */}
                    <div className="bingkai relative overflow-hidden bg-white p-2 transition duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[0_18px_40px_-18px_rgba(59,49,41,0.4)]">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <Image src={t.image} alt={`Preview undangan ${t.momen}`} fill sizes="(max-width:640px) 100vw, 25vw" className="object-cover object-top" priority={i < 4} />
                      </div>
                    </div>
                    {/* Segel lilin */}
                    <span className="segel absolute -top-3 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full font-display text-[10px] text-creamu transition group-hover:rotate-12">
                      {t.momen[0]}
                    </span>
                  </a>
                  <p className="ornamen mt-4 text-[10px] uppercase">{t.kategori}</p>
                  <h3 className="mt-1 font-display text-2xl">{t.momen}</h3>
                  <p className="mx-auto mt-1.5 max-w-[15rem] text-sm text-mutedu">{t.description}</p>
                  {t.terjual > 0 && <p className="mt-2 text-xs font-semibold tracking-[0.15em] text-inku"><span className="text-goldu" aria-hidden="true">✦</span> {t.terjual} terjual <span className="text-goldu" aria-hidden="true">✦</span></p>}
                  <a href={t.url} className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-roseu underline-offset-4 hover:underline">
                    Buka undangan <ArrowUpRight size={14} />
                  </a>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Fitur — isi amplop */}
      <section id="fitur" className="scroll-mt-24 border-t border-goldu/25 bg-white/60 px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="ornamen text-xs uppercase">— Di dalam setiap amplop —</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Lengkap sampai <span className="italic text-roseu">detail terkecil</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-mutedu">Delapan fitur yang membuat undangan digitalmu terasa hidup — bukan sekadar halaman berisi tanggal.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FITUR.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
                className="bingkai bg-creamu p-6 text-center transition duration-300 hover:-translate-y-1"
              >
                <span className="mx-auto grid h-11 w-11 place-items-center rounded-full border border-goldu/40 text-roseu">
                  <f.icon size={19} />
                </span>
                <h3 className="mt-4 font-display text-xl">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-mutedu">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cara pesan — empat bab */}
      <section id="cara" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="ornamen text-xs uppercase">— Dari cerita menjadi undangan —</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Empat bab <span className="italic text-roseu">menuju hari bahagia</span></h2>
          </div>
          <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <span className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-goldu/50 to-transparent lg:block" aria-hidden="true" />
            {LANGKAH.map((s, i) => (
              <motion.div
                key={s.no}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative text-center"
              >
                <span className="segel relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full text-creamu">
                  <s.icon size={20} />
                </span>
                <p className="ornamen mt-4 text-[10px] uppercase">Bab {s.no}</p>
                <h3 className="mt-1 font-display text-2xl">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-mutedu">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tanya jawab */}
      <section id="tanya" className="scroll-mt-24 border-t border-goldu/25 bg-white/60 px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="ornamen text-xs uppercase">— Sebelum kamu bertanya —</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Tanya <span className="italic text-roseu">jawab</span></h2>
          </div>
          <div className="mt-10 space-y-3">
            {TANYA.map((t, i) => {
              const open = buka === i;
              return (
                <div key={t.q} className={`bingkai bg-creamu transition ${open ? 'shadow-[0_12px_30px_-18px_rgba(59,49,41,0.45)]' : ''}`}>
                  <button
                    onClick={() => setBuka(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  >
                    <span className="font-display text-lg leading-snug">{t.q}</span>
                    <ChevronDown size={18} className={`shrink-0 text-roseu transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>
                  {open && (
                    <div className="border-t border-goldu/25 px-6 py-4">
                      <p className="text-sm leading-relaxed text-mutedu">{t.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-goldu/25 bg-inku px-4 py-16 text-center text-creamu sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-xl">
          <span className="segel mx-auto grid h-14 w-14 place-items-center rounded-full text-creamu"><Heart size={20} /></span>
          <h2 className="mt-6 font-display text-3xl leading-snug md:text-4xl">Momen spesialmu berikutnya?</h2>
          <p className="mt-3 text-creamu/60">Nama, tanggal, dan cerita — kami rangkai jadi undangan yang tak terlupakan.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-roseu px-8 py-4 text-sm font-bold text-creamu transition hover:scale-[1.03] active:scale-95">
            <MessageCircle size={16} /> Pesan via WhatsApp
          </a>
        </motion.div>
      </section>

      <footer className="border-t border-creamu/10 bg-inku px-4 pb-6 pt-10 text-creamu/60">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <p className="flex items-center justify-center gap-2 font-display text-lg text-creamu sm:justify-start">
              <span className="segel grid h-7 w-7 place-items-center rounded-full text-creamu"><Mail size={12} /></span>
              <span className="flex flex-col text-left leading-none">
                PintuWeb{' '}
                <span className="mt-1 font-sans text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d6b77f]">Undangan Digital</span>
              </span>
            </p>
            <p className="mt-2 text-sm leading-relaxed">Undangan digital untuk setiap momen — dibuka seperti amplop, dibagikan lewat satu tautan.</p>
          </div>
          <nav aria-label="Tautan footer" className="text-sm">
            <p className="ornamen text-[10px] uppercase text-[#d6b77f]">Jelajahi</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#koleksi" className="transition hover:text-creamu">Koleksi Tema</a></li>
              <li><a href="#fitur" className="transition hover:text-creamu">Fitur Undangan</a></li>
              <li><a href="#cara" className="transition hover:text-creamu">Cara Pesan</a></li>
              <li><a href="#tanya" className="transition hover:text-creamu">Tanya Jawab</a></li>
            </ul>
          </nav>
          <div className="text-sm">
            <p className="ornamen text-[10px] uppercase text-[#d6b77f]">Hubungi</p>
            <ul className="mt-3 space-y-2">
              <li><a href={WA} target="_blank" rel="noopener noreferrer" className="transition hover:text-creamu">WhatsApp +62 851 9093 1399</a></li>
              <li><a href="https://www.pintuweb.id" className="transition hover:text-creamu">pintuweb.id</a></li>
            </ul>
          </div>
        </div>
        {/* Lanjut di PintuWeb: harga, layanan, semua demo, dan galeri lain di situs utama */}
        <nav aria-labelledby="lanjut-pintuweb" className="mx-auto mt-10 max-w-6xl border-t border-creamu/10 pt-8 text-center text-sm sm:text-left">
          <p id="lanjut-pintuweb" className="ornamen text-[10px] uppercase text-[#d6b77f]">Lanjut di PintuWeb</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-3 sm:justify-start">
            {LANJUT.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex items-center gap-1.5 rounded-full border border-[#d6b77f]/40 px-4 py-1.5 text-xs font-semibold text-creamu transition hover:border-roseu hover:bg-roseu">
                  {l.label} <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="ornamen mt-6 text-[10px] uppercase text-[#d6b77f]">Galeri lain</p>
          <ul className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-start">
            {GALERI_LAIN.map((g) => (
              <li key={g.path}>
                <a href={`${PINTUWEB}/${g.path}`} className="underline decoration-creamu/25 underline-offset-4 transition hover:text-creamu hover:decoration-[#d6b77f]">{g.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mx-auto mt-8 max-w-6xl border-t border-creamu/10 pt-5 text-center text-xs text-creamu/70">
          © {new Date().getFullYear()} PintuWeb · Galeri Undangan Digital — merangkai undangan sejak dalam pikiran.
        </p>
      </footer>
    </div>
  );
}
