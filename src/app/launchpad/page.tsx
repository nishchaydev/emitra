import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Rocket, Lightbulb, Users, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'eMitra Launchpad - Startup Studio for Student Founders, Indore',
    description:
        'eMitra Launchpad helps student founders validate, build, and launch real startups. Mentorship, tech infrastructure, and community - all from eMitra Tech, Indore.',
    keywords: ['emitra launchpad', 'startup studio indore', 'student startup india', 'emitra tech launchpad', 'student founders indore'],
    alternates: {
        canonical: 'https://emitra.dev/launchpad',
    },
    openGraph: {
        title: 'eMitra Launchpad - Startup Studio for Student Founders',
        description: 'Pitch your idea and we\'ll help you build, launch, and scale it. eMitra Technologies, Indore.',
        url: 'https://emitra.dev/launchpad',
    },
};

export default function LaunchpadPage() {
    return (
        <>
            <Header />
            <main className="relative pt-32 pb-20 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[10px] font-black text-amber-600 uppercase tracking-[0.2em] mb-4">Startup Studio</p>
                    <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-slate-900 mb-6">
                        Launchpad
                    </h1>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mb-16">
                        Have an idea? We&apos;ll help you validate, build, and launch it. Our startup studio backs student founders with mentorship, tech, and infrastructure.
                    </p>

                    {/* Process */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {[
                            { icon: Lightbulb, step: '01', title: 'Ideate', description: 'We help you refine your idea and validate market demand.' },
                            { icon: Users, step: '02', title: 'Build', description: 'Our team builds the MVP with you - design, code, and deploy.' },
                            { icon: Rocket, step: '03', title: 'Launch', description: 'Go live with real users. We handle infra, domains, and hosting.' },
                            { icon: Trophy, step: '04', title: 'Scale', description: 'Win hackathons, get users, raise if needed. We stay involved.' },
                        ].map((item) => (
                            <div key={item.step} className="p-6 rounded-2xl border border-slate-200 hover:border-amber-200 transition-all">
                                <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">{item.step}</span>
                                <item.icon className="h-6 w-6 text-slate-900 mt-4 mb-3" />
                                <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Achievements */}
                    <div className="bg-slate-950 rounded-3xl p-8 md:p-12 text-white">
                        <h2 className="text-2xl md:text-3xl font-black mb-3">Track Record</h2>
                        <p className="text-slate-400 text-sm font-medium mb-10 max-w-xl">
                            We&apos;re a young studio - and proud of it. Every number here represents real work, not vanity metrics. The best is yet to come.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { stat: '15+', label: 'Hackathon Wins' },
                                { stat: '3', label: 'Active Products' },
                                { stat: '1', label: 'Founder Student' },
                                { stat: '8', label: 'Students Onboarded' },
                            ].map((item) => (
                                <div key={item.label}>
                                    <p className="text-3xl md:text-4xl font-black text-amber-400">{item.stat}</p>
                                    <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Research & Publications */}
                    <div className="mt-20 border-t border-slate-200 pt-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center border border-indigo-100">
                                <Lightbulb className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-black text-slate-900">Research & Publications</h2>
                                <p className="text-slate-500 font-medium">We don't just speak. We build it ourselves.</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-indigo-50 to-white rounded-3xl p-8 md:p-10 border border-indigo-100 shadow-sm relative overflow-hidden">
                            {/* Decorative background element */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
                            
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-indigo-100 shadow-sm mb-6">
                                    <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                    <span className="text-xs font-bold text-slate-700">Impact Factor: <span className="text-indigo-600">9.97</span></span>
                                </div>
                                
                                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 max-w-2xl">
                                    Prompt Engineering in Multi-Agent Systems
                                </h3>
                                
                                <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">
                                    Our founder's research has been published in a top-tier journal, establishing a new framework for how autonomous agents communicate and reason in complex, multi-agent environments. We apply these exact, scientifically validated principles to the AI solutions we build for our clients in Indore and beyond.
                                </p>
                                
                                <Link 
                                    href="/blog/prompt-engineering-multi-agent-systems" 
                                    className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors group"
                                >
                                    Read Research Summary 
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-white rounded-2xl font-bold hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 group"
                        >
                            Pitch Your Idea <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

