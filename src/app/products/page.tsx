import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowRight, Dumbbell, Building2, Code2, Rocket } from 'lucide-react';
import type { Metadata } from 'next';
import { PageBreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Our Products - GymMitra, FlatMitra & More | eMitra Tech',
    description:
        'Explore eMitra Technologies\' product ecosystem - SaaS built for Indian SMBs. GymMitra for gyms, FlatMitra for housing societies, SchoolMitra for schools. Built in Indore, India.',
    keywords: ['emitra products', 'GymMitra', 'FlatMitra', 'SchoolMitra', 'SaaS india', 'emitra tech products', 'gym management software', 'society management app'],
    alternates: {
        canonical: 'https://emitra.dev/products',
    },
    openGraph: {
        title: 'eMitra Products - GymMitra, FlatMitra & More',
        description: 'SaaS products built by eMitra Technologies for Indian SMBs and institutions.',
        url: 'https://emitra.dev/products',
    },
};

export default function ProductsPage() {
    const products = [
        {
            name: 'GymMitra',
            tagline: 'Gym and fitness center management simplified',
            description: 'Member management, billing cycles, trainer assignments, and attendance tracking.',
            href: 'https://gym.emitra.dev',
            icon: Dumbbell,
            status: 'Live',
        },
        {
            name: 'FlatMitra',
            tagline: 'The smartest property management tool for India',
            description: 'Complete society and flat management - billing, complaints, visitor logs, and community engagement.',
            href: 'https://flat.emitra.dev',
            icon: Building2,
            status: 'Under Build',
        },
    ];

    const exploreMore = [
        {
            title: 'Custom Development',
            description: 'Need a bespoke solution? We build institutional-grade software tailored to your exact workflow.',
            href: '/services',
            icon: Code2,
            color: 'indigo',
        },
        {
            title: 'Launchpad',
            description: 'Student founders - pitch your idea and we\'ll help you build, launch, and scale it.',
            href: '/launchpad',
            icon: Rocket,
            color: 'amber',
        },
    ];

    return (
        <>
            <PageBreadcrumbJsonLd items={[{ name: 'Products', url: 'https://emitra.dev/products' }]} />
            <Header />
            <main className="relative pt-32 pb-20 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">Ecosystem</p>
                    <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-slate-900 mb-6">
                        Our Products
                    </h1>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mb-16">
                        SaaS built for Indian SMBs and institutions. Each product is designed to solve real operational pain points with premium software.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {products.map((product) => (
                            <a
                                key={product.name}
                                href={product.href}
                                target={product.href.startsWith('http') ? '_blank' : undefined}
                                rel={product.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="group block p-8 rounded-3xl border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 bg-white"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <span className={`text-[10px] font-black uppercase tracking-[0.15em] px-3 py-1 rounded-full ${
                                        product.status === 'Live' 
                                            ? 'bg-emerald-50 text-emerald-600' 
                                            : product.status === 'Under Build'
                                            ? 'bg-orange-50 text-orange-600'
                                            : 'bg-amber-50 text-amber-600'
                                    }`}>
                                        {product.status}
                                    </span>
                                    <product.icon className="h-6 w-6 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                                </div>
                                <h2 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                    {product.name}
                                </h2>
                                <p className="text-sm font-bold text-indigo-600 mb-3">{product.tagline}</p>
                                <p className="text-sm text-slate-500 leading-relaxed mb-6">{product.description}</p>
                                <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 group-hover:gap-3 transition-all">
                                    {product.status === 'Live' ? 'Visit Product' : 'Learn More'} <ArrowRight className="h-4 w-4" />
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Explore More Section */}
                    <div className="mt-20">
                        <h2 className="text-2xl md:text-3xl font-display font-black tracking-tighter text-slate-900 mb-8">
                            Explore More
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {exploreMore.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="group flex items-start gap-6 p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
                                >
                                    <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all text-indigo-600">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                                        <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

