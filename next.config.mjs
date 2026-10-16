/** @type {import('next').NextConfig} */
// Portal ini tayang di https://www.pintuweb.id/undangan-digital: PintuWeb meneruskan path /undangan-digital
// ke project ini (pola multi-zone), jadi semua rute & aset hidup di bawah basePath yang sama.
const nextConfig = {
  basePath: '/undangan-digital',
  // Gambar statis + varian siap pakai (lihat app/gambar-loader.js): tidak memakai kuota Image Optimization Vercel.
  images: { loader: 'custom', loaderFile: './app/gambar-loader.js', deviceSizes: [320, 480, 640, 960, 1280], imageSizes: [160, 240] },
  async redirects() {
    // Alamat lama portal-undangan.pintuweb.id di luar basePath -> alamat utama.
    return [
      { source: '/', destination: 'https://www.pintuweb.id/undangan-digital', basePath: false, permanent: true },
      { source: '/:lama((?!undangan-digital(?:/|$)).+)', destination: 'https://www.pintuweb.id/undangan-digital', basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
