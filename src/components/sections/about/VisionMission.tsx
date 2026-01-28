import { Eye, Target } from 'lucide-react';

export function VisionMission() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Vision Card */}
                    <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6">
                            <Eye className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
                        <p className="text-slate-600 leading-relaxed">
                            To create a world where institutional complexity is invisible, handled by intelligent systems that allow educators and leaders to focus purely on human potential.
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-14 w-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                            <Target className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
                        <p className="text-slate-600 leading-relaxed">
                            We engineer robust, secure, and scalable digital infrastructures. By simplifying administrative workflows, we empower institutions to lead with the agility of a modern enterprise.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
