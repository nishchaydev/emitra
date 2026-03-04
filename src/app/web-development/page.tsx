'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Terminal, Code2, Rocket, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const MotionLink = motion(Link);

export default function WebDevelopmentPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-slate-50">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-24 w-24 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-600 mx-auto mb-8 shadow-lg shadow-blue-500/20"
                    >
                        <Code2 className="h-12 w-12" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-slate-900 mb-6 tracking-tight"
                    >
                        Web Application <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-blue-700">Engineering</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        We build high-performance, enterprise-grade web applications that are fast, secure, and infinitely scalable.
                    </motion.p>
                </section>

                {/* Scrollytelling Section */}
                <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="space-y-32">
                            {/* Feature 1 */}
                            <motion.div
                                className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="lg:w-1/2 order-2 lg:order-1">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6">
                                        <Terminal className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Modern Tech Stack</h3>
                                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                        We leverage the latest technologies like Next.js, React, and Node.js. Our architectures are designed for speed, SEO optimization, and an incredible developer experience that translates into robust user journeys.
                                    </p>
                                    <ul className="space-y-3">
                                        {['Server-Side Rendering (SSR)', 'Static Site Generation (SSG)', 'Headless CMS Integration', 'Edge Computing'].map((feat, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <CheckCircle className="w-5 h-5 text-blue-500" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="lg:w-1/2 order-1 lg:order-2">
                                    <div className="relative aspect-square w-full max-w-md mx-auto">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-3xl transform rotate-3 scale-105" />
                                        <div className="absolute inset-0 bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col p-6 font-mono text-sm text-blue-400">
                                            {/* Code Mockup */}
                                            <div className="flex gap-2 mb-4">
                                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                                <div className="w-3 h-3 rounded-full bg-amber-500" />
                                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                            </div>
                                            <div className="space-y-2 opacity-80 overflow-hidden">
                                                <p className="text-purple-400">import <span className="text-white">&#123;</span> motion <span className="text-white">&#125;</span> from <span className="text-green-300">'framer-motion'</span>;</p>
                                                <p className="text-purple-400">export default function <span className="text-blue-300">App</span>() <span className="text-white">&#123;</span></p>
                                                <p className="pl-4">return (</p>
                                                <p className="pl-8 text-slate-300">&lt;<span className="text-green-400">motion.div</span></p>
                                                <p className="pl-12 text-orange-300">initial=<span className="text-white">&#123;&#123;</span> opacity: <span className="text-purple-300">0</span> <span className="text-white">&#125;&#125;</span></p>
                                                <p className="pl-12 text-orange-300">animate=<span className="text-white">&#123;&#123;</span> opacity: <span className="text-purple-300">1</span> <span className="text-white">&#125;&#125;</span></p>
                                                <p className="pl-8 text-slate-300">&gt;</p>
                                                <p className="pl-12 text-white">Hello World</p>
                                                <p className="pl-8 text-slate-300">&lt;/<span className="text-green-400">motion.div</span>&gt;</p>
                                                <p className="pl-4">);</p>
                                                <p className="text-white">&#125;</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Feature 2 */}
                            <motion.div
                                className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="lg:w-1/2 order-1 lg:order-1">
                                    <div className="relative aspect-square w-full max-w-md mx-auto">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-50 rounded-3xl transform -rotate-3 scale-105" />
                                        <div className="absolute inset-0 bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden flex flex-col p-6">
                                            {/* Mockup Dashboard */}
                                            <div className="h-full border border-slate-100 rounded-xl bg-slate-50 flex flex-col overflow-hidden">
                                                <div className="h-12 bg-white border-b border-slate-100 px-4 flex items-center justify-between">
                                                    <div className="w-20 h-4 bg-slate-200 rounded animate-pulse" />
                                                    <div className="w-8 h-8 bg-indigo-100 rounded-full animate-pulse" />
                                                </div>
                                                <div className="flex-1 p-4 grid grid-cols-2 gap-4">
                                                    <div className="bg-white rounded-lg p-4 border border-slate-100 shadow-sm flex flex-col justify-end">
                                                        <div className="flex items-end gap-1 h-16">
                                                            <div className="w-full bg-indigo-200 h-1/3 rounded-t-sm" />
                                                            <div className="w-full bg-indigo-300 h-2/3 rounded-t-sm" />
                                                            <div className="w-full bg-indigo-400 h-1/2 rounded-t-sm" />
                                                            <div className="w-full bg-indigo-500 h-full rounded-t-sm" />
                                                        </div>
                                                    </div>
                                                    <div className="bg-white rounded-lg border border-slate-100 shadow-sm flex items-center justify-center">
                                                        <div className="w-16 h-16 rounded-full border-4 border-indigo-100 border-r-indigo-500 animate-spin" />
                                                    </div>
                                                    <div className="col-span-2 bg-indigo-50 rounded-lg p-4">
                                                        <div className="w-full h-3 bg-indigo-100 rounded mb-2 animate-pulse" />
                                                        <div className="w-3/4 h-3 bg-indigo-100 rounded animate-pulse" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 order-2 lg:order-2">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 mb-6">
                                        <Rocket className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Scalable Architecture</h3>
                                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                        Build for day one, prepare for year ten. We architect applications that handle massive traffic spikes with grace, utilizing microservices, serverless functions, and robust databases.
                                    </p>
                                    <ul className="space-y-3">
                                        {['Auto-scaling Infrastructure', 'Microservices Migration', 'Global CDN Distribution', 'Zero-Downtime Deployments'].map((feat, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                                <CheckCircle className="w-5 h-5 text-indigo-500" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-slate-900">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Ready to start building?</h2>
                        <p className="text-slate-400 mb-10 text-lg">Let's discuss how customized web applications can transform your institution.</p>
                        <MotionLink
                            href="/contact"
                            className="bg-[#0066FF] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25 inline-flex items-center justify-center gap-2 mx-auto"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Contact Our Team <ArrowRight className="h-4 w-4" />
                        </MotionLink>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
