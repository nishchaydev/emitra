import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'eMitra Technologies | Smart Systems for Complex Institutions',
  description:
    'Unifying disconnected workflows with enterprise-grade automation and real-time analytics designed for the modern era.',
  keywords: ['institutional software', 'ERP', 'education technology', 'automation', 'analytics'],
  authors: [{ name: 'eMitra Technologies' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://emitra.tech',
    siteName: 'eMitra Technologies',
    title: 'eMitra Technologies | Smart Systems for Complex Institutions',
    description: 'Unifying disconnected workflows with enterprise-grade automation.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} bg-white text-slate-900 font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
