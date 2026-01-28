import {
    CheckCircle,
    Network,
    Settings,
    Database,
    RefreshCw,
    TrendingUp,
    ShieldCheck,
    Cloud,
    Code,
    GitBranch,
} from 'lucide-react';

const pillars = [
    {
        title: 'See Everything in One Place',
        description: 'Student records, finances, attendance—unified so you never dig through scattered spreadsheets.',
    },
    {
        title: 'Predict Problems Early',
        description: 'AI-powered alerts flag at-risk students and budget issues weeks before they become crises.',
    },
    {
        title: 'Never Worry About Downtime',
        description: '99.99% uptime guarantee. Your data is always accessible when you need it.',
    },
];

export function EmitaWay() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Visual Grid */}
                <div className="relative">
                    <div className="aspect-square bg-primary rounded-3xl overflow-hidden relative">
                        {/* Grid of icons */}
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                            <div className="grid grid-cols-3 gap-6 w-full h-full">
                                <div className="border-2 border-white/20 rounded-xl flex items-center justify-center animate-pulse">
                                    <Network className="h-6 w-6 text-white/50" />
                                </div>
                                <div className="border-2 border-white/20 rounded-xl flex items-center justify-center">
                                    <Settings className="h-6 w-6 text-white/50" />
                                </div>
                                <div className="border-2 border-white/20 rounded-xl flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                                    <Database className="h-6 w-6 text-white/50" />
                                </div>
                                <div className="border-2 border-white/20 rounded-xl flex items-center justify-center">
                                    <RefreshCw className="h-6 w-6 text-white/50" />
                                </div>
                                <div className="bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                                    <TrendingUp className="h-8 w-8 text-white" />
                                </div>
                                <div className="border-2 border-white/20 rounded-xl flex items-center justify-center">
                                    <ShieldCheck className="h-6 w-6 text-white/50" />
                                </div>
                                <div className="border-2 border-white/20 rounded-xl flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                                    <Cloud className="h-6 w-6 text-white/50" />
                                </div>
                                <div className="border-2 border-white/20 rounded-xl flex items-center justify-center">
                                    <Code className="h-6 w-6 text-white/50" />
                                </div>
                                <div className="border-2 border-white/20 rounded-xl flex items-center justify-center animate-pulse" style={{ animationDelay: '1.5s' }}>
                                    <GitBranch className="h-6 w-6 text-white/50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-display font-bold">The eMitra Way</h2>
                    <p className="text-lg text-slate-600">
                        Our approach is built on the philosophy that technology should meet trust. We don&apos;t
                        just provide software; we engineer foundations for growth.
                    </p>

                    <ul className="space-y-4 pt-4">
                        {pillars.map((pillar, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <CheckCircle className="h-6 w-6 text-accent mt-0.5" />
                                <div>
                                    <p className="font-bold">{pillar.title}</p>
                                    <p className="text-sm text-slate-500">{pillar.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
