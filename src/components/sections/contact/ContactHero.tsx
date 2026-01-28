import { AtSign, MessageSquare } from 'lucide-react';

export function ContactHero() {
    return (
        <section className="relative min-h-[50vh] flex items-center overflow-hidden circuit-bg">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
                <div className="space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium">
                        Global Consulting Team
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl lg:text-5xl font-display font-bold leading-[1.1] text-slate-900">
                        Let&apos;s architect your institution&apos;s{' '}
                        <span className="text-primary">future.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                        Our consultative approach ensures we understand your specific institutional challenges before proposing a single line of code.
                    </p>
                </div>

                {/* Visual */}
                <div className="relative flex justify-center">
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-primary shadow-sm">
                                <AtSign className="h-8 w-8" />
                            </div>
                            <div className="h-10 w-10 bg-accent rounded-xl flex items-center justify-center text-white">
                                <MessageSquare className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
