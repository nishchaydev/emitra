import { FileText } from 'lucide-react';

export function SolutionsHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center overflow-hidden circuit-bg">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
                <div className="space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium">
                        Unified Solutions Marketplace
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl lg:text-5xl font-display font-bold leading-[1.1] text-slate-900">
                        Comprehensive infrastructure for{' '}
                        <span className="text-primary">institutional success.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                        Create a unified ecosystem where every department, process, and data point works in harmony to drive your institution forward.
                    </p>

                    {/* CTA */}
                    <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all">
                        Explore Solutions
                    </button>
                </div>

                {/* Visual */}
                <div className="relative flex justify-center">
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 bg-primary rounded-xl flex items-center justify-center text-white">
                                <FileText className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Interactive Ecosystem Map</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
