export const templates = [
  { name: 'Wedding', momen: 'Pernikahan', terjual: 1, description: 'Romantis klasik dengan amplop pembuka, hitung mundur akad, galeri, dan RSVP.', image: '/undangan-digital/images/u1.webp', url: 'https://undangan-wedding.pintuweb.id', kategori: 'Cinta' },
  { name: 'Engagement', momen: 'Lamaran', terjual: 0, description: 'Elegan dan intim untuk kabar bahagia sebelum hari besar tiba.', image: '/undangan-digital/images/u2.webp', url: 'https://undangan-engagement.pintuweb.id', kategori: 'Cinta' },
  { name: 'Khitanan', momen: 'Khitanan', terjual: 0, description: 'Ceria dan penuh doa untuk momen sang jagoan kecil.', image: '/undangan-digital/images/u3.webp', url: 'https://undangan-khitanan.pintuweb.id', kategori: 'Keluarga' },
  { name: 'Aqiqah', momen: 'Aqiqah', terjual: 3, description: 'Lembut dan syahdu menyambut kelahiran buah hati.', image: '/undangan-digital/images/u4.webp', url: 'https://undangan-aqiqah.pintuweb.id', kategori: 'Keluarga' },
  { name: 'Birthday', momen: 'Ulang Tahun', terjual: 2, description: 'Confetti pop! Undangan pesta dengan party pass dan keseruan warna.', image: '/undangan-digital/images/u5.webp', url: 'https://undangan-birthday.pintuweb.id', kategori: 'Perayaan' },
  { name: 'Wisuda', momen: 'Wisuda', terjual: 0, description: 'Formal akademik dengan sentuhan emas untuk hari kelulusan.', image: '/undangan-digital/images/u6.webp', url: 'https://undangan-wisuda.pintuweb.id', kategori: 'Perayaan' },
  { name: 'Reuni', momen: 'Reuni', terjual: 1, description: 'Scrapbook nostalgia — polaroid, stempel, dan kenangan sekolah.', image: '/undangan-digital/images/u7.webp', url: 'https://undangan-reuni.pintuweb.id', kategori: 'Perayaan' },
  { name: 'Corporate', momen: 'Acara Kantor', terjual: 6, description: 'Situs konferensi dua hari: agenda bertab, pembicara, slot sponsor, dan pendaftaran peserta.', image: '/undangan-digital/images/u8.webp', url: 'https://undangan-corporate.pintuweb.id', kategori: 'Formal' },
];

/** "https://undangan-wedding.pintuweb.id" -> "wedding" (sama dengan slug demo di PintuWeb/app/lib/demos.ts). */
export const slugOf = (t) => new URL(t.url).hostname.split('.')[0].replace(/^undangan-/, '');
