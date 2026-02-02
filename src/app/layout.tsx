import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { Providers } from './providers';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';
import { Preloader } from '@/components/layout/Preloader';
import { CustomCursor } from '@/components/ui/CustomCursor';
// Global styles
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
  icons: {
    icon: 'https://res.cloudinary.com/dkits80xk/image/upload/v1769612138/e21fcb20-e06e-49e6-bc0b-b14e4557c36b.png',
    apple: 'https://res.cloudinary.com/dkits80xk/image/upload/v1769612138/e21fcb20-e06e-49e6-bc0b-b14e4557c36b.png',
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
        <CustomCursor />
        <Preloader />
        <Providers>{children}</Providers>
        <StickyMobileCTA />
        <Analytics />
      </body>
    </html>
  );
}
