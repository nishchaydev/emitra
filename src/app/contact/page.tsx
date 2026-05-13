import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactTypes } from '@/components/sections/contact/ContactTypes';
import { GlobalPresence } from '@/components/sections/contact/GlobalPresence';
import { PageBreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Contact eMitra Technologies — Get in Touch | Indore, India',
    description:
        'Contact eMitra Tech for custom software development, SaaS solutions, or startup mentorship. Based in Indore, Madhya Pradesh, India. Email us at hello@emitra.dev.',
    keywords: ['contact emitra', 'emitra indore contact', 'emitra technologies contact', 'software development indore', 'hire developers indore'],
    alternates: {
        canonical: 'https://emitra.dev/contact',
    },
    openGraph: {
        title: 'Contact eMitra Technologies — Indore, India',
        description: 'Get in touch with eMitra Tech for software development, SaaS products, or startup mentorship.',
        url: 'https://emitra.dev/contact',
    },
};

export default function ContactPage() {
    return (
        <>
            <PageBreadcrumbJsonLd items={[{ name: 'Contact', url: 'https://emitra.dev/contact' }]} />
            <Header />
            <main>
                <ContactHero />
                <ContactForm />
                <ContactTypes />
                <GlobalPresence />
            </main>
            <Footer />
        </>
    );
}
