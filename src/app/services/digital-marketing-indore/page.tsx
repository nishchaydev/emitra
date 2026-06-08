import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Megaphone, BarChart3, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Top Digital Marketing Firm in Indore | eMitra Technologies',
    description: 'Looking for the best digital marketing firm in Indore? We combine data-driven growth marketing, technical SEO, and AI automation to scale your brand. We build it ourselves.',
    keywords: ['Best digital marketing firm in Indore', 'Growth marketing agency Indore', 'SEO services Indore', 'Performance marketing MP', 'B2B digital marketing'],
    alternates: {
        canonical: 'https://emitra.dev/services/digital-marketing-indore',
    },
};

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Growth & Digital Marketing',
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
    description: 'Data-driven digital marketing, technical SEO, and performance marketing strategies in Indore.'
};

const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "How is your digital marketing different from other firms in Indore?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are fundamentally a product studio. Our marketing strategies are heavily engineering-driven, focusing on technical SEO, programmatic content generation, AI-powered automation, and deep analytics tracking, rather than just social media posting."
        }
    }, {
        "@type": "Question",
        "name": "Do you handle paid ads and SEO?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we handle full-funnel performance marketing including Google Ads, technical SEO, and AEO (Answer Engine Optimization) for LLMs like ChatGPT and Perplexity."
        }
    }]
};

export default function DigitalMarketingPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
            <Header />
            <main className="relative pt-32 pb-20 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Hero Section */}
                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-xs font-black uppercase tracking-widest mb-6">
                            <Megaphone className="h-4 w-4" />
                            Data-Driven Growth
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-slate-900 mb-6 leading-tight">
                            The Elite <span className="text-rose-600">Digital Marketing Firm</span> in Indore
                        </h1>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                            We don't just speak. We build it ourselves. Leverage our engineering-first approach to SEO, programmatic growth, and AI-powered performance marketing.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-rose-600 text-white rounded-2xl font-bold hover:bg-rose-700 transition-all shadow-[0_10px_30px_-10px_rgba(225,29,72,0.4)] group"
                        >
                            Scale Your Growth <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {[
                            { icon: Target, title: 'Performance Marketing', desc: 'High-ROI paid acquisition campaigns across Google, LinkedIn, and Meta.' },
                            { icon: BarChart3, title: 'Technical SEO & AEO', desc: 'Dominate traditional search and emerging AI engines (ChatGPT, Perplexity).' },
                            { icon: Megaphone, title: 'Growth Engineering', desc: 'Programmatic SEO, automated workflows, and data pipelines for scale.' }
                        ].map((s, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:border-rose-200 transition-colors">
                                <s.icon className="h-8 w-8 text-rose-600 mb-6" />
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
                                <h3 className="text-lg font-bold text-slate-900 mb-2">How do you measure marketing success?</h3>
                                <p className="text-slate-600">We track full-funnel metrics, from initial click to final conversion and customer lifetime value (LTV). Our background in software means we implement flawless tracking infrastructure before spending a single dollar on ads.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">What is AEO and why do I need it?</h3>
                                <p className="text-slate-600">AEO stands for Answer Engine Optimization. As search shifts to AI models like ChatGPT and Gemini, standard SEO isn't enough. We format your content and schemas so AI engines cite your business as the definitive answer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

