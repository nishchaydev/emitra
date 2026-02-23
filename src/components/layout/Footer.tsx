'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Globe, Mail, Linkedin, Twitter, Instagram, ArrowRight, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <footer className="bg-white border-t border-slate-200 pt-32 pb-12 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-blue-50/30 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Elite Newsletter Module */}
                <motion.div
                    className="bg-[#0F172A] rounded-[48px] p-10 md:p-16 mb-24 relative overflow-hidden shadow-2xl shadow-blue-500/10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Atmospheric noise backdrop */}
                    <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="text-center lg:text-left max-w-xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <Sparkles className="h-3 w-3" />
                                Knowledge Hub
                            </div>
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 tracking-tight leading-tight">
                                Stay at the forefront of <span className="text-blue-500">innovation.</span>
                            </h3>
                            <p className="text-slate-400 text-lg font-medium leading-relaxed">
                                Join 500+ institutions receiving our weekly deep-dive into digital transformation and institutional AI.
                            </p>
                        </div>

                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
                            {subscribed ? (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex items-center gap-3 text-white font-bold bg-blue-600/20 border border-blue-600/30 px-8 py-5 rounded-2xl"
                                >
                                    <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white">✓</div>
                                    Subscription Active
                                </motion.div>
                            ) : (
                                <>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your professional email"
                                        className="flex-1 lg:w-80 px-6 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="bg-[#0066FF] text-white px-10 py-5 rounded-2xl font-black text-base hover:bg-blue-600 transition-all shadow-[0_20px_40px_-10px_rgba(0,102,255,0.4)] flex items-center justify-center gap-3 group"
                                    >
                                        Subscribe <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </>
                            )}
                        </form>
                    </div>
                </motion.div>

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-24">
                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-8">
                        <Link href="/" className="inline-block group">
                            <div className="relative h-12 w-48 mb-2">
                                <Image
                                    src="https://res.cloudinary.com/dkits80xk/image/upload/v1771839762/ChatGPT_Image_Feb_23_2026_02_59_40_PM_ciop2v.png"
                                    alt="eMitra Technologies"
                                    width={180}
                                    height={50}
                                    className="w-[140px] md:w-[180px] h-auto object-contain transition-all group-hover:drop-shadow-[0_0_8px_rgba(0,102,255,0.3)]"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-500 text-base font-medium leading-relaxed max-w-sm">
                            Where technology meets trust. Building the architectural bedrock for tomorrow&apos;s digital-native institutions.
                        </p>

                        <div className="flex gap-4">
                            <a href="https://linkedin.com/company/emitra" target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-all duration-300">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="mailto:emitratechnologies@gmail.com" className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-all duration-300">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Infrastructure</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-500">
                            <li><a href="https://school.emitra.dev" className="hover:text-blue-600 transition-colors">EduMitra ERP</a></li>
                            <li><a href="https://gym.emitra.dev" className="hover:text-blue-600 transition-colors">GymMitra Pro</a></li>
                            <li><a href="https://flat.emitra.dev" className="hover:text-blue-600 transition-colors">FlatMitra OS</a></li>
                            <li><span className="text-slate-300 cursor-not-allowed">MediMitra (Soon)</span></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Resources</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-500">
                            <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Expert Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Help Center</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Documentation</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Company</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-500">
                            <li><Link href="/about" className="hover:text-blue-600 transition-colors">Our Vision</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact Sales</Link></li>
                        </ul>
                    </div>

                    {/* Security */}
                    <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Legal</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-500">
                            <li><Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-blue-600 transition-colors">Terms</Link></li>
                            <li><Link href="/security" className="hover:text-blue-600 transition-colors">Security</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <p className="text-sm font-bold text-slate-400">© 2025 eMitra Technologies</p>
                        <div className="h-1 w-1 rounded-full bg-slate-200 hidden md:block" />
                        <div className="flex items-center gap-2">
                            <div className="text-[10px]">🇮🇳</div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Engineered in India</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                            <Globe className="h-3.5 w-3.5" />
                            Global Operations
                        </div>
                    </div>
                </div>
            </div>

            {/* Atmospheric Depth Noise Overlay */}
            <div className="absolute inset-0 z-[1] opacity-[0.01] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        </footer>
    );
}
