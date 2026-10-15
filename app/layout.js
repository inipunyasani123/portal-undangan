import './globals.css';
import { Marcellus, Mulish } from 'next/font/google';
import { templates } from './components/templates-data';

const marcellus = Marcellus({ subsets: ['latin'], variable: '--font-marcellus', weight: '400' });
const mulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' });

// Merek di hasil pencarian & pratinjau tautan = PintuWeb. Jumlah tema dihitung dari data, bukan ditulis tangan.
const URL_PORTAL = 'https://www.pintuweb.id/undangan-digital';
const TITLE = `Contoh Undangan Digital: ${templates.length} Tema Siap Coba | PintuWeb`;
const DESCRIPTION = `${templates.length} undangan digital berbentuk website dengan karakter berbeda: pernikahan, lamaran, khitanan, aqiqah, ulang tahun, wisuda, reuni, dan acara kantor.`;

const __jsonld = {"@context":"https://schema.org","@type":"CollectionPage","name":TITLE,"description":DESCRIPTION,"url":URL_PORTAL,"inLanguage":"id-ID","isPartOf":{"@type":"WebSite","name":"PintuWeb","url":"https://www.pintuweb.id"},"publisher":{"@type":"Organization","name":"PintuWeb","url":"https://www.pintuweb.id"},"breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"PintuWeb","item":"https://www.pintuweb.id"},{"@type":"ListItem","position":2,"name":"Undangan Digital","item":URL_PORTAL}]}};

export const metadata = {
  metadataBase: new URL(URL_PORTAL),
  title: { default: TITLE, template: '%s | PintuWeb' },
  description: DESCRIPTION,
  applicationName: "PintuWeb",
  keywords: ["template undangan digital", "undangan online", "koleksi undangan", "undangan pernikahan digital"],
  authors: [{ name: "PintuWeb", url: "https://www.pintuweb.id" }],
  creator: "PintuWeb",
  publisher: "PintuWeb",
  alternates: { canonical: URL_PORTAL },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: URL_PORTAL,
    siteName: "PintuWeb",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${marcellus.variable} ${mulish.variable}`}>
      <body className="antialiased">
        <main>{children}</main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
