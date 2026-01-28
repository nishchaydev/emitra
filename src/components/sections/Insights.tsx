import { ArrowRight, FileText, TrendingUp, Users } from 'lucide-react';

const insights = [
    {
        category: 'Whitepaper',
        title: 'The Future of the Digital Campus: 2026 Outlook',
        description: 'How AI and IoT are reshaping the physical and digital infrastructure of modern universities.',
        icon: FileText,
        color: 'blue'
    },
    {
        category: 'Case Study',
        title: 'Scaling Infrastructure for Smart Cities',
        description: 'Lessons learned from deploying unified management systems across 50+ municipal departments.',
        icon: TrendingUp,
        color: 'teal'
    },
    {
        category: 'Research',
        title: 'Student Retention & Predictive Analytics',
        description: 'Using data models to identify at-risk students 6 months before intervention is typically needed.',
        icon: Users,
        color: 'indigo'
    }
];

export function Insights() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Strategic Insights
                        </h2>
                        <p className="text-slate-600 max-w-2xl">
                            Our thinking on the issues that matter most to institutional leaders.
                        </p>
                    </div>
                    <button className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                        View All Resources <ArrowRight className="h-5 w-5" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {insights.map((item, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="relative aspect-[4/3] bg-slate-100 rounded-2xl mb-6 overflow-hidden">
                                <div className={`absolute inset-0 bg-${item.color}-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}>
                                    <item.icon className={`h-12 w-12 text-${item.color}-600 opacity-20`} />
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-slate-800">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 mb-4 line-clamp-2">
                                {item.description}
                            </p>
                            <span className="text-sm font-bold text-primary flex items-center gap-2">
                                Read Report <ArrowRight className="h-4 w-4" />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
