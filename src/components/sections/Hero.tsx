import { ArrowRight, Layers, Zap } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden circuit-bg pt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    {/* Badge */}
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-medium">
                        <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                        Enterprise-Grade Solutions
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] text-slate-900">
                        Smart systems for <br />
                        <span className="text-primary">complex institutions.</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                        Unifying disconnected workflows with enterprise-grade automation and real-time
                        analytics designed for the modern era.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
                            Request a Demo <ArrowRight className="h-5 w-5" />
                        </button>
                        <button className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                            Our Portfolio
                        </button>
                    </div>
                </div>

                {/* Hero Visual */}
                <div className="relative aspect-square lg:aspect-auto h-[500px] bg-slate-100 rounded-[2.5rem] border-2 border-dashed border-slate-200 flex items-center justify-center group">
                    <div className="text-center space-y-4">
                        <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-xl flex items-center justify-center animate-bounce">
                            <Layers className="h-10 w-10 text-primary" />
                        </div>
                        <p className="text-slate-400 font-medium">Interactive Institutional Map</p>
                    </div>

                    {/* Floating Card */}
                    <div className="absolute -bottom-6 -left-6 p-6 bg-white rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
                        <div className="flex gap-4 items-center">
                            <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                                <Zap className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold">Real-time Analytics</p>
                                <p className="text-xs text-slate-500">Live data tracking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
