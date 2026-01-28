import { GraduationCap, Building2, Landmark } from 'lucide-react';

const solutions = [
    {
        icon: GraduationCap,
        title: 'K-12 Schools',
        description: 'Foundational LMS systems that manage grades, attendance, and parent communication efficiently.',
    },
    {
        icon: Building2,
        title: 'Higher Education',
        description: 'Complex campus management with deep analytics and multi-departmental workflow synchronization.',
    },
    {
        icon: Landmark,
        title: 'Government Bodies',
        description: 'Centralized oversight frameworks for district-wide and regional education authority monitoring.',
    },
];

export function SolutionsByScale() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                        Solutions by Scale
                    </h2>
                    <p className="text-slate-600">
                        Tailored technological frameworks designed to meet the specific demands of your organization's size and scope.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-lg transition-all group"
                        >
                            <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                <solution.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
