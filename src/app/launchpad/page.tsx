import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Rocket, Lightbulb, Users, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Launchpad | eMitra Technologies',
    description: 'Our startup studio — we help students validate, build, and launch real companies.',
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
                            { icon: Users, step: '02', title: 'Build', description: 'Our team builds the MVP with you — design, code, and deploy.' },
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
                            We&apos;re a young studio — and proud of it. Every number here represents real work, not vanity metrics. The best is yet to come.
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

                    <div className="mt-16 text-center">
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
