import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageBreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: 'Our Team — eMitra Technologies, Indore',
    description:
        'Meet the builders behind eMitra Tech — a focused team of engineers, designers, and mentors building enterprise-grade SaaS from Indore, India.',
    keywords: ['emitra team', 'emitra technologies team', 'emitra indore team', 'tech startup indore team'],
    alternates: {
        canonical: 'https://emitra.dev/team',
    },
    openGraph: {
        title: 'Our Team — eMitra Technologies',
        description: 'A small, focused team of builders from Indore. We build everything in-house with obsessive attention to quality.',
        url: 'https://emitra.dev/team',
    },
};

export default function TeamPage() {
    const team = [
        {
            name: 'Nishchay Gupta',
            role: 'Founder & CEO',
            bio: 'Full-stack engineer, product thinker, and startup mentor. Leads product strategy and engineering.',
        },
        {
            name: 'Nikhil Pal',
            role: 'Co-Founder & Operations',
            bio: 'Drives operations, partnerships, and ensures every project ships on time with quality.',
        },
        {
            name: 'Abhijeet Giri',
            role: 'Community Lead',
            bio: 'Builds and nurtures the student community. Organizes events, workshops, and campus programs.',
        },
        {
            name: 'Mohit Vyas',
            role: 'Lead Engineer',
            bio: 'Architects scalable systems and leads the engineering team on all product builds.',
        },
        {
            name: 'Yash Soni',
            role: 'Creative Director',
            bio: 'Drives brand identity, UI/UX design, and ensures every eMitra product looks world-class.',
        },
    ];

    const stats = [
        { stat: '15+', label: 'Hackathon Wins' },
        { stat: '3', label: 'Active Products' },
        { stat: '1', label: 'Founder Student' },
        { stat: '8', label: 'Students Onboarded' },
    ];

    return (
        <>
            <PageBreadcrumbJsonLd items={[{ name: 'Team', url: 'https://emitra.dev/team' }]} />
            {/* Person schema for E-E-A-T */}
            {team.map((member) => (
                <script
                    key={member.name}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            name: member.name,
                            jobTitle: member.role,
                            description: member.bio,
                            worksFor: {
                                '@type': 'Organization',
                                '@id': 'https://emitra.dev/#organization',
                                name: 'eMitra Technologies',
                            },
                            workLocation: {
                                '@type': 'Place',
                                name: 'Indore, Madhya Pradesh, India',
                            },
                        }),
                    }}
                />
            ))}
            <Header />
            <main className="relative pt-32 pb-20 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] mb-4">Who We Are</p>
                    <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-slate-900 mb-6">
                        Our Team
                    </h1>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mb-16">
                        A small, focused team of builders from Indore. We don&apos;t outsource — we build everything in-house with obsessive attention to quality.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="p-8 rounded-3xl border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 bg-white"
                            >
                                {/* Avatar */}
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-6">
                                    <span className="text-white text-xl font-black">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <h2 className="text-xl font-black text-slate-900 mb-1">{member.name}</h2>
                                <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-4">{member.role}</p>
                                <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-20 bg-slate-950 rounded-3xl p-8 md:p-12 text-white">
                        <h2 className="text-2xl md:text-3xl font-black mb-3">Our Numbers</h2>
                        <p className="text-slate-400 text-sm font-medium mb-10 max-w-xl">
                            We&apos;re a young team — and we&apos;re proud of it. Every number here is earned, not inflated. We&apos;re just getting started.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((item) => (
                                <div key={item.label}>
                                    <p className="text-3xl md:text-4xl font-black text-indigo-400">{item.stat}</p>
                                    <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Join Us CTA */}
                    <div className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Want to join?</h2>
                        <p className="text-slate-500 font-medium mb-8 max-w-lg mx-auto">
                            We&apos;re always looking for talented engineers, designers, and interns who want to build real products.
                        </p>
                        <a
                            href="mailto:hello@emitra.dev"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
                        >
                            <Mail className="h-4 w-4" /> Get in Touch
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
