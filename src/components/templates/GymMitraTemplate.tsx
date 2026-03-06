'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, Dumbbell, Shield, Zap, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { LogoUpload } from '@/components/ui/LogoUpload';
import Image from 'next/image';

export function GymMitraTemplate() {
    const [logoUrl, setLogoUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleUploadSuccess = (url: string) => {
        setLogoUrl(url);
        setIsSuccess(true);
        setError(null);
        setTimeout(() => setIsSuccess(false), 3000);
    };

    const handleUploadError = (err: string) => {
        setError(err);
        setIsSuccess(false);
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />
            <main className="flex-grow flex items-center justify-center p-6 py-20">
                <div className="max-w-4xl w-full bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-16 text-center">

                    <div className="h-24 w-24 bg-[#0066FF]/10 text-[#0066FF] rounded-2xl flex items-center justify-center mx-auto mb-8 relative overflow-hidden">
                        {logoUrl ? (
                            <Image
                                src={logoUrl}
                                alt="Gym Logo"
                                fill
                                className="object-contain p-2"
                            />
                        ) : (
                            <Dumbbell className="h-12 w-12" />
                        )}
                        <div className="absolute -top-3 -right-3 h-8 w-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-sm z-10">
                            <Zap className="h-4 w-4" />
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        GymMitra
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        The ultimate fitness management platform. Automate renewals, control access, and scale your gym effortlessly.
                    </p>

                    <div className="max-w-md mx-auto mb-16 space-y-4">
                        <LogoUpload
                            onUploadSuccess={handleUploadSuccess}
                            onUploadError={handleUploadError}
                        />

                        {isSuccess && (
                            <div className="flex items-center justify-center gap-2 text-emerald-600 text-sm font-medium animate-in fade-in slide-in-from-top-1">
                                <CheckCircle2 className="h-4 w-4" />
                                Logo uploaded successfully!
                            </div>
                        )}

                        {error && (
                            <div className="flex items-center justify-center gap-2 text-red-600 text-sm font-medium animate-in fade-in slide-in-from-top-1">
                                <AlertCircle className="h-4 w-4" />
                                {error}
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left max-w-3xl mx-auto">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <div className="h-10 w-10 bg-[#0066FF]/10 text-[#0066FF] rounded-full flex items-center justify-center mb-4">
                                <Zap className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Smart Automation</h3>
                            <p className="text-slate-600 text-sm">Automated renewal reminders and birthday messages sent to members. Cron-powered, zero manual effort.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <div className="h-10 w-10 bg-[#0066FF]/10 text-[#0066FF] rounded-full flex items-center justify-center mb-4">
                                <Shield className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Smart Attendance Tracking</h3>
                            <p className="text-slate-600 text-sm">Daily check-in logging with automated records, attendance history, and analytics — no hardware needed.</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <div className="h-10 w-10 bg-[#0066FF]/10 text-[#0066FF] rounded-full flex items-center justify-center mb-4">
                                <Dumbbell className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">WhatsApp-Native Communication</h3>
                            <p className="text-slate-600 text-sm">Renewal reminders, birthday wishes, and payment alerts sent directly to members via WhatsApp. Zero extra cost.</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <a
                            href="https://emitra.dev/gym"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#0066FF] text-white text-xl font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1"
                        >
                            Open GymMitra Portal
                            <ArrowRight className="h-6 w-6" />
                        </a>
                        <p className="mt-4 text-slate-500 text-sm font-medium">
                            You will be redirected to the secure GymMitra platform
                        </p>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
