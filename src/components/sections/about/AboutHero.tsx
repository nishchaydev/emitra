import { Code, Star, Layers } from 'lucide-react';

export function AboutHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center overflow-hidden circuit-bg">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium">
                        About eMitra
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-slate-900">
                        Precision meets{' '}
                        <span className="text-primary">purpose.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                        We build future-proof institutional systems designed to withstand complexity and scale with elegance.
                    </p>
                </div>

                {/* Visual Grid */}
                <div className="relative flex justify-center">
                    <div className="grid grid-cols-2 gap-4 max-w-xs">
                        <div className="p-6 bg-slate-100 rounded-2xl flex items-center justify-center">
                            <Layers className="h-8 w-8 text-slate-400" />
                        </div>
                        <div className="p-6 bg-primary rounded-2xl flex items-center justify-center">
                            <Code className="h-8 w-8 text-white" />
                        </div>
                        <div className="p-6 bg-accent rounded-2xl flex items-center justify-center">
                            <Star className="h-8 w-8 text-white" />
                        </div>
                        <div className="p-6 bg-slate-100 rounded-2xl flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-xs text-slate-500 font-medium">System Operational</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
