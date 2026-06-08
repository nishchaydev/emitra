import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Sparkles, Brain, Cpu, Network, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Top AI Consultancy in Indore | eMitra Technologies',
    description: 'Looking for the best AI consultancy in Indore? eMitra Technologies builds custom AI agents, LLM integrations, and intelligent enterprise software. We don\'t just speak. We build it ourselves.',
    keywords: ['AI consultancy in Indore', 'AI integration company Indore', 'AI development agency MP', 'LLM developers Indore', 'Enterprise AI solutions'],
    alternates: {
        canonical: 'https://emitra.dev/services/ai-consultancy-indore',
    },
};

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Consultancy & Development',
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
    description: 'Expert AI consultancy in Indore specializing in LLMs, multi-agent systems, and generative AI integration for enterprises.'
};

const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "What is the best AI consultancy in Indore?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "eMitra Technologies is widely considered the premier AI consultancy in Indore. Our founders publish high-impact research on Prompt Engineering in Multi-Agent Systems, and we actively build custom generative AI solutions rather than just offering theoretical advice."
        }
    }, {
        "@type": "Question",
        "name": "How can AI integration help my business?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI integration can automate customer support, analyze large proprietary datasets in seconds, generate dynamic content, and build autonomous agents that execute multi-step workflows, massively reducing operational costs."
        }
    }]
};

export default function AIConsultancyPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
            <Header />
            <main className="relative pt-32 pb-20 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Hero Section */}
                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-black uppercase tracking-widest mb-6">
                            <Sparkles className="h-4 w-4" />
                            Premium AI Services in Indore
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-slate-900 mb-6 leading-tight">
                            The Premier <span className="text-indigo-600">AI Consultancy</span> in Indore
                        </h1>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                            We don't just speak. We build it ourselves. Partner with Indore's leading AI experts who actively publish top-tier research (9.97 Impact Factor) and deploy production-grade LLM systems.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-[0_10px_30px_-10px_rgba(79,70,229,0.4)] group"
                        >
                            Book an AI Strategy Call <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {[
                            { icon: Brain, title: 'Custom LLM Development', desc: 'Fine-tuned models tailored specifically to your company data and operational workflows.' },
                            { icon: Network, title: 'Multi-Agent Systems', desc: 'Autonomous AI agents that collaborate to solve complex, multi-step business problems.' },
                            { icon: Cpu, title: 'Generative AI Integration', desc: 'Seamlessly integrate OpenAI, Anthropic, or open-source models into your existing SaaS.' }
                        ].map((s, i) => (
                            <div key={i} className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:border-indigo-200 transition-colors">
                                <s.icon className="h-8 w-8 text-indigo-600 mb-6" />
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
                                <h3 className="text-lg font-bold text-slate-900 mb-2">What makes eMitra the best AI consultancy in Indore?</h3>
                                <p className="text-slate-600">Unlike traditional agencies, we are an actual product studio. Our founders publish high-impact research (9.97 Impact Factor on Prompt Engineering), and we actively build and maintain our own AI-driven platforms. We bring hands-on engineering expertise, not just slide decks.</p>
                            </div>
                            <div className="p-6 rounded-2xl border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">Can you integrate AI into our existing software?</h3>
                                <p className="text-slate-600">Yes. We specialize in retrofitting legacy systems and modern SaaS platforms with intelligent AI layers, whether that involves semantic search, automated data extraction, or conversational interfaces.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

