import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { Providers } from './providers';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';
import { Preloader } from '@/components/layout/Preloader';
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
    icon: 'https://res.cloudinary.com/dkits80xk/image/upload/v1771839836/ChatGPT_Image_Feb_23_2026_03_13_03_PM_foi1so.png',
    apple: 'https://res.cloudinary.com/dkits80xk/image/upload/v1771839836/ChatGPT_Image_Feb_23_2026_03_13_03_PM_foi1so.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // suppressHydrationWarning is added to prevent hydration mismatch errors from browser extensions injecting attributes
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} bg-white text-slate-900 font-sans antialiased`}>
        <Preloader />
        <Providers>{children}</Providers>
        <StickyMobileCTA />
        <Analytics />
      </body>
    </html>
  );
}
