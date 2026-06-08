import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Code2, Smartphone, Layout, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Best Web Development Agency in Indore | eMitra Technologies',
    description: 'eMitra Technologies is the best web development agency in Indore. We build custom SaaS platforms, modern enterprise web applications, and premium React/Next.js frontends. We build it ourselves.',
    keywords: ['Best web development agency in Indore', 'Custom software development Indore', 'Next.js developers MP', 'React development company Indore', 'SaaS product development'],
    alternates: {
        canonical: 'https://emitra.dev/services/web-development-indore',
    },
};

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Web & SaaS Development',
    provider: {
        '@type': 'LocalBusiness',
        name: 'eMitra Technologies',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Indore',
            addressRegion: 'Madhya Pradesh',
            addressCountry: 'IN'
        }
    },
    areaServed: {
        '@type': 'City',
        name: 'Indore'
    },
    description: 'Premium custom web development, SaaS product architecture, and enterprise software engineering in Indore.'
};

const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "Why is eMitra considered the best web development agency in Indore?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike traditional outsourced agencies, eMitra is an in-house product studio. We build, scale, and maintain our own successful SaaS products. When you hire us, you get the exact same premium engineering talent that builds our proprietary software."
        }
    }, {
        "@type": "Question",
        "name": "What tech stack do you use for web development?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "We specialize in modern, high-performance stacks including React, Next.js, Node.js, and TypeScript, deployed on scalable cloud infrastructure."
        }
    }]
};

export default function WebDevelopmentPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
            <Header />
            <main className="relative pt-32 pb-20 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Hero Section */}
                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-xs font-black uppercase tracking-widest mb-6">
                            <Code2 className="h-4 w-4" />
                            Premium Product Engineering
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-slate-900 mb-6 leading-tight">
                            The Best <span className="text-teal-600">Web Development Agency</span> in Indore
                        </h1>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                            We don't just speak. We build it ourselves. From high-conversion marketing sites to complex multi-tenant SaaS architectures, we bring product-studio quality to your custom software.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-teal-600 text-white rounded-2xl font-bold hover:bg-teal-700 transition-all shadow-[0_10px_30px_-10px_rgba(20,184,166,0.4)] group"
                        >
                            Start Your Project <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {[
                            { icon: Layout, title: 'Custom SaaS Development', desc: 'End-to-end architecture and development of scalable, secure SaaS platforms.' },
                            { icon: Code2, title: 'Modern Web Applications', desc: 'Lightning-fast, SEO-optimized web applications using Next.js and React.' },
                            { icon: Smartphone, title: 'Progressive Web Apps', desc: 'App-like experiences directly in the browser for maximum reach and conversion.' }
                        ].map((s, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:border-teal-200 transition-colors">
                                <s.icon className="h-8 w-8 text-teal-600 mb-6" />
                                <h3 className="text-xl font-black text-slate-900 mb-3">{s.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* AEO FAQ Section */}
                    <div className="max-w-3xl mx-auto mt-24">
                        <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Do you use templates or custom code?</h3>
                                <p className="text-slate-600">We write custom code. While we leverage internal libraries for speed, every product we build has a bespoke architecture designed to scale seamlessly.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">How long does a typical web application take to build?</h3>
                                <p className="text-slate-600">An MVP (Minimum Viable Product) typically takes 4-8 weeks depending on complexity. We focus on launching fast and iterating based on real user data.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

