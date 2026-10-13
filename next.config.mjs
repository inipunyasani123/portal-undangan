/** @type {import('next').NextConfig} */
// Portal ini tayang di https://www.pintuweb.id/undangan-digital: PintuWeb meneruskan path /undangan-digital
// ke project ini (pola multi-zone), jadi semua rute & aset hidup di bawah basePath yang sama.
const nextConfig = {
  basePath: '/undangan-digital',
  async redirects() {
    // Alamat lama portal-undangan-eta.vercel.app di luar basePath -> alamat utama.
    return [
      { source: '/', destination: 'https://www.pintuweb.id/undangan-digital', basePath: false, permanent: true },
      { source: '/:lama((?!undangan-digital(?:/|$)).+)', destination: 'https://www.pintuweb.id/undangan-digital', basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
