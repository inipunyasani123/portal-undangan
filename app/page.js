import { ArrowDown, ArrowUpRight, MessageCircle, Heart, MailOpen, Timer, Images, MapPin, Music, MessagesSquare, Gift, Users, ChevronDown, PenLine, Send, PartyPopper } from 'lucide-react';
import Katalog from './components/Katalog';
import GaleriMenu from './components/GaleriMenu';
import BilahAksi from './components/BilahAksi';
import { PINTU_LOGO, kecil } from './components/gambar';
import { templates, slugOf } from './components/templates-data';
import { LANJUT, BACA_JUGA, GALERI_LAIN, PINTUWEB, PAKET, PAKET_ACARA, WA_DISPLAY, wa } from './components/pintuweb';

const WA = wa('Halo PintuWeb, saya ingin memesan undangan digital.');
const N = templates.length;

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
  { icon: Heart, no: 'I', title: 'Pilih Tema', desc: `Telusuri ${N} tema di koleksi, pilih yang paling terasa "kalian".` },
  { icon: PenLine, no: 'II', title: 'Kirim Cerita', desc: 'Nama, tanggal, lokasi, foto, dan kisahmu — kirim lewat WhatsApp.' },
  { icon: Send, no: 'III', title: 'Kami Rangkai', desc: 'Undangan kami rangkai dari ceritamu, lalu kamu periksa dulu sebelum dibagikan.' },
  { icon: PartyPopper, no: 'IV', title: 'Sebarkan', desc: 'Ketik daftar tamu di halaman /kirim — tiap nama dapat tautan dan pesan WhatsApp siap kirim.' },
];

const TANYA = [
  { q: 'Berapa lama undangan selesai dibuat?', a: `Undangan dari tema di galeri ini biasanya selesai ${PAKET.waktu} setelah data acara lengkap; situs acara dengan desain khusus ${PAKET_ACARA.waktu}. Sampaikan tanggal acaramu lewat WhatsApp supaya jadwalnya pas.` },
  { q: 'Berapa harganya?', a: `Undangan dari tema galeri ${PAKET.mulai}–${PAKET.sampai}, aktif ${PAKET.aktifBulan} bulan tanpa biaya perpanjangan. Untuk acara kantor, seminar, atau desain khusus, paket ${PAKET_ACARA.nama} ${PAKET_ACARA.mulai}–${PAKET_ACARA.sampai}.` },
  { q: 'Apakah nama, foto, dan cerita bisa diganti sesuai acara saya?', a: 'Tentu. Semua teks, foto, warna aksen, musik, dan detail acara disesuaikan sepenuhnya dengan momenmu. Tema hanyalah kanvas awalnya.' },
  { q: 'Apakah tamu bisa konfirmasi kehadiran?', a: 'Bisa. Formulir RSVP (atau pendaftaran peserta untuk acara kantor) dan buku ucapan bisa dipasang di tema mana pun. Contoh di galeri ini berjalan dalam mode demo, jadi isian tidak disimpan.' },
  { q: 'Bagaimana cara membagikan undangannya?', a: 'Setiap tema punya halaman /kirim: ketik daftar tamu, lalu tiap nama mendapat tautan yang menyapanya di sampul beserta pesan WhatsApp siap kirim. Tamu tinggal membuka, tanpa unduh aplikasi apa pun.' },
  { q: 'Apakah ada revisi jika ada yang keliru?', a: `Ada. Kamu memeriksa undangan sebelum dibagikan, dan kesalahan teks atau detail kami perbaiki. Paket ${PAKET.nama} mencakup ${PAKET.revisi}; paket ${PAKET_ACARA.nama} ${PAKET_ACARA.revisi}.` },
];

// Angka hero: jumlah tema dihitung dari data; waktu & masa aktif dari PAKET (PintuWeb packages.ts).
const ANGKA = [
  { v: String(N), l: 'Tema' },
  { v: PAKET.waktu.split(' ')[0], l: 'Hari kerja' },
  { v: String(PAKET.aktifBulan), l: 'Bulan aktif' },
];

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: TANYA.map((t) => ({ '@type': 'Question', name: t.q, acceptedAnswer: { '@type': 'Answer', text: t.a } })),
};

function Logo({ kecil = false }) {
  return (
    <>
      {/* Logo pintu asli PintuWeb; di latar gelap diberi alas putih membulat */}
      <span className={kecil ? 'grid shrink-0 place-items-center rounded-lg bg-white p-1' : 'grid shrink-0 place-items-center'}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PINTU_LOGO} width={367} height={512} alt="" className={kecil ? 'h-7 w-auto' : 'h-8 w-auto'} />
      </span>
      <span className="flex flex-col text-left leading-none">
        PintuWeb{' '}
        <span className={`mt-1 font-sans text-[9px] font-semibold uppercase tracking-[0.3em] ${kecil ? 'text-[#d6b77f]' : 'text-goldu'}`}>Undangan Digital</span>
      </span>
    </>
  );
}

export default function PortalUndangan() {
  return (
    <div id="top" className="min-h-screen">
      <a href="#konten" className="lewati">Lewati ke konten</a>
      {/* Jejak: portal ini bagian dari PintuWeb */}
      <nav aria-label="Jejak" className="bg-inku text-xs text-creamu">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-1 sm:px-6">
          <ol className="flex items-center gap-2">
            <li><a href={PINTUWEB} className="inline-flex min-h-8 items-center font-semibold underline-offset-4 hover:underline">PintuWeb</a></li>
            <li aria-hidden="true" className="opacity-60">/</li>
            <li aria-current="page">Undangan Digital</li>
          </ol>
          <GaleriMenu />
        </div>
      </nav>

      <header className="sticky top-0 z-40 border-b border-goldu/30 bg-creamu/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5">
          <a href="#top" className="flex items-center gap-2.5 font-display text-xl">
            <Logo />
          </a>
          <nav aria-label="Navigasi halaman" className="hidden items-center gap-6 text-sm font-semibold text-mutedu md:flex">
            <a href="#koleksi" className="transition hover:text-roseu">Koleksi</a>
            <a href="#fitur" className="transition hover:text-roseu">Fitur</a>
            <a href="#cara" className="transition hover:text-roseu">Cara Pesan</a>
            <a href="#tanya" className="transition hover:text-roseu">Tanya Jawab</a>
          </nav>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full bg-roseu px-4 py-2 text-sm font-bold text-creamu transition hover:bg-inku sm:px-5">
            Pesan undangan<span className="hidden sm:inline"> digital</span>
          </a>
        </div>
      </header>

      <main id="konten" tabIndex={-1}>
        {/* Hero */}
        <section id="hero" className="relative overflow-hidden px-4 pb-8 pt-6 text-center sm:px-6 sm:pb-12 sm:pt-16">
          <span className="floaty absolute left-[8%] top-16 hidden font-display text-2xl text-goldu/50 sm:block" aria-hidden="true">✦</span>
          <span className="floaty absolute right-[10%] top-28 hidden font-display text-xl text-roseu/40 sm:block" style={{ animationDelay: '1.4s' }} aria-hidden="true">❦</span>
          <div className="relative mx-auto max-w-3xl">
            <p className="ornamen naik text-[11px] uppercase tracking-[0.35em] sm:text-xs sm:tracking-[0.6em]">— Dengan hormat mengundang —</p>
            <h1 className="mt-3 font-display text-[2rem] leading-[1.12] sm:mt-5 sm:text-6xl">
              Setiap momen berharga,<br />layak <span className="italic text-roseu">diundang dengan indah</span>.
            </h1>
            <p className="mx-auto mt-5 hidden max-w-xl text-mutedu sm:block">
              {N} undangan digital dengan karakter berbeda — dari akad yang khidmat sampai pesta yang meriah. Dibuka seperti amplop, dibagikan lewat satu tautan.
            </p>
            <div className="naik naik-2">
              <a href="#koleksi" className="bingkai mt-4 inline-flex items-center gap-2 rounded-none bg-creamu px-8 py-3 sm:mt-9 sm:py-3.5 font-display text-sm tracking-wide text-inku transition hover:bg-goldu/10">
                Buka Koleksi <ArrowDown size={15} aria-hidden="true" />
              </a>

              {/* Angka yang bisa dicek: jumlah tema dari data, waktu & masa aktif dari paket PintuWeb */}
              <dl className="mx-auto mt-9 hidden max-w-md grid-cols-3 divide-x divide-goldu/30 border-y border-goldu/25 py-4 sm:mt-10 sm:grid">
                {ANGKA.map((s) => (
                  <div key={s.l} className="flex flex-col-reverse items-center px-2 sm:px-3">
                    <dt className="ornamen mt-1 text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.4em]">{s.l}</dt>
                    <dd className="font-display text-3xl leading-none text-roseu">{s.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 hidden text-sm text-mutedu sm:block">Mulai <strong className="font-display text-base font-normal text-roseu">{PAKET.mulai}</strong>, aktif {PAKET.aktifBulan} bulan tanpa biaya perpanjangan.</p>
            </div>
          </div>
          {/* Ponsel: strip tema yang bisa digeser, tepat di bawah tombol utama; tiap tema menaut ke kartunya (#slug) */}
          <div className="mt-5 md:hidden">
            <p className="ornamen text-[10px] uppercase tracking-[0.3em]">{N} tema · geser</p>
            <ul className="-mx-4 mt-2.5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none]" aria-label="Pintasan tema undangan">
              {templates.map((t, i) => (
                <li key={t.name} className="w-[6.75rem] shrink-0 snap-start">
                  <a href={`#${slugOf(t)}`} className="block text-center">
                    <span className="bingkai block overflow-hidden bg-white p-1">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={kecil(t.potret, 320)} width={390} height={844} alt="" loading={i < 4 ? 'eager' : 'lazy'} decoding="async" className="aspect-[390/844] w-full object-cover object-top" />
                    </span>
                    <span className="mt-2 block font-display text-sm leading-tight">{t.momen}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Koleksi */}
        <section id="koleksi" aria-labelledby="judul-koleksi" className="scroll-mt-[60px] px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="ornamen text-goldu/70" aria-hidden="true">✦ ✦ ✦</p>
              <h2 id="judul-koleksi" className="mt-3 font-display text-3xl sm:text-4xl">{N} tema, {N} <span className="italic text-roseu">suasana</span></h2>
            </div>
            <Katalog />
          </div>
        </section>

        {/* Fitur — isi amplop */}
        <section id="fitur" aria-labelledby="judul-fitur" className="scroll-mt-[60px] border-t border-goldu/25 bg-white/60 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="ornamen text-[11px] uppercase tracking-[0.35em] sm:text-xs sm:tracking-[0.6em]">— Di dalam setiap amplop —</p>
              <h2 id="judul-fitur" className="mt-3 font-display text-3xl sm:text-4xl">Lengkap sampai <span className="italic text-roseu">detail terkecil</span></h2>
              <p className="mx-auto mt-4 max-w-xl text-mutedu">Delapan fitur yang membuat undangan digitalmu terasa hidup — bukan sekadar halaman berisi tanggal.</p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
              {FITUR.map((f) => (
                <li key={f.title} className="bingkai bg-creamu p-4 text-center transition duration-300 hover:-translate-y-1 sm:p-6">
                  <span className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-goldu/40 text-roseu sm:h-11 sm:w-11">
                    <f.icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 font-display text-lg leading-tight sm:mt-4 sm:text-xl">{f.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-snug text-mutedu sm:text-sm sm:leading-relaxed">{f.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cara pesan — empat bab */}
        <section id="cara" aria-labelledby="judul-cara" className="scroll-mt-[60px] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="ornamen text-[11px] uppercase tracking-[0.35em] sm:text-xs sm:tracking-[0.6em]">— Dari cerita menjadi undangan —</p>
              <h2 id="judul-cara" className="mt-3 font-display text-3xl sm:text-4xl">Empat bab <span className="italic text-roseu">menuju hari bahagia</span></h2>
            </div>
            <ol className="relative mt-8 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
              <span className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-goldu/50 to-transparent lg:block" aria-hidden="true" />
              {/* Ponsel: garis bab vertikal di belakang segel */}
              <span className="absolute bottom-6 left-7 top-6 w-px bg-gradient-to-b from-goldu/50 via-goldu/40 to-transparent sm:hidden" aria-hidden="true" />
              {LANGKAH.map((s) => (
                <li key={s.no} className="relative flex items-start gap-4 text-left sm:block sm:text-center">
                  <span className="segel relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full text-creamu sm:mx-auto">
                    <s.icon size={20} aria-hidden="true" />
                  </span>
                  <div className="pt-1 sm:pt-0">
                    <p className="ornamen text-[10px] uppercase sm:mt-4">Bab {s.no}</p>
                    <h3 className="mt-1 font-display text-2xl">{s.title}</h3>
                    <p className="mt-1.5 max-w-[19rem] text-sm leading-relaxed text-mutedu sm:mx-auto sm:mt-2 sm:max-w-[15rem]">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Tanya jawab: <details> bawaan, satu terbuka sekaligus */}
        <section id="tanya" aria-labelledby="judul-tanya" className="scroll-mt-[60px] border-t border-goldu/25 bg-white/60 px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="ornamen text-[11px] uppercase tracking-[0.35em] sm:text-xs sm:tracking-[0.6em]">— Sebelum kamu bertanya —</p>
              <h2 id="judul-tanya" className="mt-3 font-display text-3xl sm:text-4xl">Tanya <span className="italic text-roseu">jawab</span></h2>
            </div>
            <div className="mt-8 space-y-3 sm:mt-10">
              {TANYA.map((t, i) => (
                <details key={t.q} name="faq-undangan" open={i === 0} className="tanya bingkai group bg-creamu open:shadow-[0_12px_30px_-18px_rgba(59,49,41,0.45)]">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-lg leading-snug">{t.q}</span>
                    <ChevronDown size={18} className="shrink-0 text-roseu transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="border-t border-goldu/25 px-5 py-4 sm:px-6">
                    <p className="text-sm leading-relaxed text-mutedu">{t.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-goldu/25 bg-inku px-4 py-16 text-center text-creamu sm:px-6">
          <div className="mx-auto max-w-xl">
            <span className="segel mx-auto grid h-14 w-14 place-items-center rounded-full text-creamu"><Heart size={20} aria-hidden="true" /></span>
            <h2 className="mt-6 font-display text-3xl leading-snug md:text-4xl">Momen spesialmu berikutnya?</h2>
            <p className="mt-3 text-creamu/75">Nama, tanggal, dan cerita — kami rangkai jadi undangan yang tak terlupakan.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-roseu px-8 py-4 text-sm font-bold text-creamu transition hover:scale-[1.03] active:scale-95">
              <MessageCircle size={16} aria-hidden="true" /> Pesan via WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer id="kaki" className="border-t border-creamu/10 bg-inku px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-10 md:pb-6 text-creamu/75 sm:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <p className="flex items-center gap-2 font-display text-lg text-creamu"><Logo kecil /></p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">Undangan digital untuk setiap momen — dibuka seperti amplop, dibagikan lewat satu tautan.</p>
          </div>
          <nav aria-labelledby="kaki-jelajahi" className="text-sm">
            <p id="kaki-jelajahi" className="ornamen text-[10px] uppercase text-[#d6b77f]">Jelajahi</p>
            <ul className="mt-3 space-y-1">
              <li><a href="#koleksi" className="inline-block py-1 transition hover:text-creamu">Koleksi Tema</a></li>
              <li><a href="#fitur" className="inline-block py-1 transition hover:text-creamu">Fitur Undangan</a></li>
              <li><a href="#cara" className="inline-block py-1 transition hover:text-creamu">Cara Pesan</a></li>
              <li><a href="#tanya" className="inline-block py-1 transition hover:text-creamu">Tanya Jawab</a></li>
            </ul>
          </nav>
          <div className="text-sm">
            <p className="ornamen text-[10px] uppercase text-[#d6b77f]">Hubungi</p>
            <ul className="mt-3 space-y-1">
              <li><a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block py-1 transition hover:text-creamu">WhatsApp <span className="whitespace-nowrap">{WA_DISPLAY}</span></a></li>
              <li><a href={PINTUWEB} className="inline-block py-1 transition hover:text-creamu">pintuweb.id</a></li>
            </ul>
          </div>
        </div>
        {/* Lanjut di PintuWeb: harga, layanan, semua demo, dan galeri lain di situs utama */}
        <nav aria-labelledby="lanjut-pintuweb" className="mx-auto mt-10 max-w-6xl border-t border-creamu/10 pt-8 text-sm">
          <p id="lanjut-pintuweb" className="ornamen text-[10px] uppercase text-[#d6b77f]">Lanjut di PintuWeb</p>
          <ul className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
            {LANJUT.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-[#d6b77f]/40 px-4 text-xs font-semibold text-creamu transition hover:border-roseu hover:bg-roseu">
                  {l.label} <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="ornamen mt-6 text-[10px] uppercase text-[#d6b77f]">Baca juga</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {BACA_JUGA.map((b) => (
              <li key={b.href}><a href={b.href} className="inline-block py-1 underline decoration-creamu/25 underline-offset-4 transition hover:text-creamu hover:decoration-[#d6b77f]">{b.label}</a></li>
            ))}
          </ul>
          <p className="ornamen mt-6 text-[10px] uppercase text-[#d6b77f]">Galeri lain</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            {GALERI_LAIN.map((g) => (
              <li key={g.path}>
                <a href={`${PINTUWEB}/${g.path}`} className="inline-block py-1 underline decoration-creamu/25 underline-offset-4 transition hover:text-creamu hover:decoration-[#d6b77f]">{g.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="mx-auto mt-8 max-w-6xl border-t border-creamu/10 pt-5 text-xs text-creamu/70 sm:text-center">
          © {new Date().getFullYear()} PintuWeb · Galeri Undangan Digital — merangkai undangan sejak dalam pikiran.
        </p>
      </footer>
      <BilahAksi wa={WA} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />
    </div>
  );
}
