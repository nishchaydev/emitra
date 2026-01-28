import { Unlink, Clock, EyeOff } from 'lucide-react';

const problems = [
    {
        icon: Unlink,
        title: 'Disconnected systems',
        description: 'Information silos that prevent a holistic view of institutional health and performance.',
        color: 'red',
    },
    {
        icon: Clock,
        title: 'Manual workflows',
        description: 'Administrative burden from repetitive tasks that should be handled by intelligent automation.',
        color: 'amber',
    },
    {
        icon: EyeOff,
        title: 'Limited visibility',
        description: 'Difficulty in making data-driven decisions without real-time reporting and analytics dashboards.',
        color: 'blue',
    },
];

export function Problems() {
    return (
        <section className="py-24 bg-slate-50" id="solutions">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-display font-bold">
                        Complexity slows institutions down.
                    </h2>
                    <p className="text-slate-600">
                        Legacy infrastructures create bottlenecks that hinder growth and student success. We
                        identify and solve these pain points.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-primary/30 transition-all"
                        >
                            <div
                                className={`h-12 w-12 rounded-lg flex items-center justify-center mb-6 ${problem.color === 'red'
                                        ? 'bg-red-50 text-red-600'
                                        : problem.color === 'amber'
                                            ? 'bg-amber-50 text-amber-600'
                                            : 'bg-blue-50 text-blue-600'
                                    }`}
                            >
                                <problem.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                            <p className="text-slate-600">{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
