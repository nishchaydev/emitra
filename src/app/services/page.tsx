import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Code2, Globe, Cpu, Smartphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageBreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Software Development Services — eMitra Tech, Indore',
    description:
        'eMitra Technologies offers custom web development, mobile app development, enterprise SaaS, and government software solutions from Indore, India. Full-stack engineering with Next.js, React, Flutter.',
    keywords: ['emitra services', 'software development indore', 'web development indore', 'emitra tech services', 'custom software india', 'SaaS development'],
    alternates: {
        canonical: 'https://emitra.dev/services',
    },
    openGraph: {
        title: 'Software Development Services — eMitra Tech',
        description: 'Custom web & mobile development, enterprise SaaS, and government software from eMitra Technologies, Indore.',
        url: 'https://emitra.dev/services',
    },
};

export default function ServicesPage() {
    const services = [
        {
            icon: Globe,
            title: 'Custom Web Development',
            description: 'Full-stack web applications built with modern technologies. From internal dashboards to public-facing platforms.',
            tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
        },
        {
            icon: Smartphone,
            title: 'Mobile App Development',
            description: 'Cross-platform mobile applications for iOS and Android using Flutter and React Native.',
            tags: ['Flutter', 'React Native', 'Firebase'],
        },
        {
            icon: Cpu,
            title: 'Enterprise SaaS',
            description: 'Multi-tenant SaaS platforms for institutional operations — schools, societies, gyms, and more.',
            tags: ['SaaS', 'Multi-tenant', 'Cloud'],
        },
        {
            icon: Code2,
            title: 'Government Software',
            description: 'Scalable, secure software for government departments and municipal corporations.',
            tags: ['Security', 'Scale', 'Compliance'],
        },
    ];

    return (
        <>
            <PageBreadcrumbJsonLd items={[{ name: 'Services', url: 'https://emitra.dev/services' }]} />
            <Header />
            <main className="relative pt-32 pb-20 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">What We Do</p>
                    <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-slate-900 mb-6">
                        Services
                    </h1>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mb-16">
                        We build software that institutions rely on. From government deployments to startup MVPs — we engineer with precision.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="p-8 rounded-3xl border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 bg-white group"
                            >
                                <service.icon className="h-8 w-8 text-indigo-600 mb-6" />
                                <h2 className="text-xl font-black text-slate-900 mb-3">
                                    {service.title}
                                </h2>
                                <p className="text-sm text-slate-500 leading-relaxed mb-6">{service.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1 bg-slate-50 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 group"
                        >
                            Start a Project <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
