import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GraduationCap, Code2, Briefcase, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Pathways | eMitra Technologies',
    description: 'Your career journey starts here — internships, mentorship, and real-world experience at eMitra.',
};

export default function PathwaysPage() {
    return (
        <>
            <Header />
            <main className="relative pt-32 pb-20 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[10px] font-black text-teal-600 uppercase tracking-[0.2em] mb-4">Careers & Growth</p>
                    <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-slate-900 mb-6">
                        Pathways
                    </h1>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mb-16">
                        We don&apos;t just hire — we grow people. Whether you&apos;re a student, a developer, or a dreamer, there&apos;s a place for you at eMitra.
                    </p>

                    {/* Pathways Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {[
                            {
                                icon: Code2,
                                title: 'Engineering Internships',
                                description: 'Work on real products used by real users. No dummy projects — you ship code from day one.',
                                tag: 'Technical',
                                tagColor: 'bg-indigo-50 text-indigo-600',
                            },
                            {
                                icon: Briefcase,
                                title: 'Business & Operations',
                                description: 'Help us run campaigns, manage partnerships, and build the operational backbone of a product studio.',
                                tag: 'Non-Technical',
                                tagColor: 'bg-amber-50 text-amber-600',
                            },
                            {
                                icon: GraduationCap,
                                title: 'Campus Ambassador',
                                description: 'Represent eMitra at your college. Organize events, lead workshops, and build your leadership profile.',
                                tag: 'Community',
                                tagColor: 'bg-teal-50 text-teal-600',
                            },
                            {
                                icon: Users,
                                title: 'Open Source Contributors',
                                description: 'Contribute to our open-source tools and earn recognition, swag, and referrals from the team.',
                                tag: 'Open Source',
                                tagColor: 'bg-slate-100 text-slate-600',
                            },
                        ].map((pathway) => (
                            <div key={pathway.title} className="group p-8 rounded-3xl border border-slate-200 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 bg-white">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className={`text-[10px] font-black uppercase tracking-[0.15em] px-3 py-1 rounded-full ${pathway.tagColor}`}>
                                        {pathway.tag}
                                    </span>
                                </div>
                                <pathway.icon className="h-6 w-6 text-slate-900 mb-4" />
                                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">{pathway.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{pathway.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Why Join */}
                    <div className="bg-slate-950 rounded-3xl p-8 md:p-12 text-white mb-16">
                        <h2 className="text-2xl md:text-3xl font-black mb-3">Why eMitra?</h2>
                        <p className="text-slate-400 font-medium max-w-2xl mb-10 text-sm">
                            We&apos;re not a corporate. We&apos;re a student-led product studio where you learn by doing, not by watching. Small numbers, big impact — and we&apos;re just getting started.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { stat: '15+', label: 'Hackathon Wins' },
                                { stat: '3', label: 'Active Products' },
                                { stat: '1', label: 'Founder Student' },
                                { stat: '8', label: 'Students Onboarded' },
                            ].map((item) => (
                                <div key={item.label}>
                                    <p className="text-3xl md:text-4xl font-black text-teal-400">{item.stat}</p>
                                    <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-teal-600 text-white rounded-2xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/20 group"
                        >
                            Apply Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
