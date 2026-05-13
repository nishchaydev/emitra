import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { Providers } from './providers';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';
import { Preloader } from '@/components/layout/Preloader';
import { JsonLd } from '@/components/seo/JsonLd';
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
  metadataBase: new URL('https://emitra.dev'),
  title: {
    default: 'eMitra Technologies — Software Product Studio in Indore | eMitra Tech',
    template: '%s | eMitra Technologies',
  },
  description:
    'eMitra Technologies (eMitra Tech) is a product studio, custom dev firm, and student innovation hub based in Indore, India. Building enterprise-grade SaaS for gyms, housing, education, and more.',
  keywords: [
    'emitra',
    'emitra tech',
    'emitra indore',
    'emitra technologies',
    'eMitra',
    'eMitra Tech',
    'eMitra Technologies',
    'software company indore',
    'product studio indore',
    'tech startup indore',
    'SaaS india',
    'web development indore',
    'custom software development',
    'GymMitra',
    'FlatMitra',
    'SchoolMitra',
    'institutional software',
    'ERP',
    'education technology',
    'automation',
    'analytics',
    'student startup india',
  ],
  authors: [{ name: 'eMitra Technologies', url: 'https://emitra.dev' }],
  creator: 'eMitra Technologies',
  publisher: 'eMitra Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://emitra.dev',
    languages: {
      'en-IN': 'https://emitra.dev',
      'x-default': 'https://emitra.dev',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://emitra.dev',
    siteName: 'eMitra Technologies',
    title: 'eMitra Technologies — Software Product Studio in Indore | eMitra Tech',
    description:
      'eMitra Tech is a product studio based in Indore, India. We build enterprise-grade SaaS, offer custom development, and run a student innovation community.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'eMitra Technologies — Software Product Studio in Indore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@emitratech',
    creator: '@emitratech',
    title: 'eMitra Technologies — Software Product Studio in Indore',
    description:
      'eMitra Tech builds enterprise-grade SaaS for gyms, housing, and education. Product studio + custom dev + student community — all from Indore, India.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://res.cloudinary.com/dkits80xk/image/upload/v1771839836/ChatGPT_Image_Feb_23_2026_03_13_03_PM_foi1so.png',
    apple: 'https://res.cloudinary.com/dkits80xk/image/upload/v1771839836/ChatGPT_Image_Feb_23_2026_03_13_03_PM_foi1so.png',
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
        <JsonLd />
        <Preloader />
        <Providers>{children}</Providers>
        <StickyMobileCTA />
        <Analytics />
      </body>
    </html>
  );
}
