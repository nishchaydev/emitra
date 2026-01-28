import { ArrowRight, ArrowLeft, Send, Download } from 'lucide-react';

export function SolutionIntegration() {
    return (
        <section className="py-24 bg-primary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-6 text-white">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold">
                            Solution Integration
                        </h2>
                        <p className="text-blue-100 text-lg leading-relaxed">
                            Our architecture is designed for deep integration capabilities. Each component of our system is aware of the others, meaning that data flows smartly from the front desk to the board rooms.
                        </p>
                        <button className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all inline-flex items-center gap-2">
                            Learn About Compatibility
                        </button>
                    </div>

                    {/* Visual */}
                    <div className="relative flex justify-center">
                        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-8 w-full max-w-md">
                            {/* Integration diagram */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="h-12 w-12 bg-accent rounded-xl flex items-center justify-center text-white">
                                    <Send className="h-5 w-5" />
                                </div>
                                <div className="h-12 w-12 bg-warning rounded-xl flex items-center justify-center text-white mx-auto">
                                    <Download className="h-5 w-5" />
                                </div>
                                <div className="h-12 w-12 bg-accent rounded-xl flex items-center justify-center text-white ml-auto">
                                    <Send className="h-5 w-5" />
                                </div>
                            </div>

                            {/* Connection lines visualization */}
                            <div className="flex justify-center gap-8 mb-6">
                                <ArrowLeft className="h-6 w-6 text-white/50" />
                                <div className="h-12 w-12 bg-primary border-2 border-white rounded-xl flex items-center justify-center text-white">
                                    <div className="h-3 w-3 bg-white rounded-full"></div>
                                </div>
                                <ArrowRight className="h-6 w-6 text-white/50" />
                            </div>

                            <p className="text-center text-white/60 text-sm">Central Hub Connects All</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
