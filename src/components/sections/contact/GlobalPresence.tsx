import { MapPin } from 'lucide-react';

const locations = [
    { city: 'North America', location: 'San Francisco, CA', color: 'bg-primary' },
    { city: 'Europe', location: 'London, UK', color: 'bg-accent' },
    { city: 'Asia Pacific', location: 'Singapore', color: 'bg-warning' },
    { city: 'India', location: 'Mumbai, India', color: 'bg-primary' },
];

export function GlobalPresence() {
    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                        Global Presence
                    </h2>
                    <p className="text-slate-400">
                        Strategically located to support institutions on every continent.
                    </p>
                </div>

                {/* Locations */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {locations.map((loc, index) => (
                        <div key={index} className="text-center">
                            <div className={`h-4 w-4 ${loc.color} rounded-full mx-auto mb-4`}></div>
                            <h3 className="font-bold mb-1">{loc.city}</h3>
                            <p className="text-slate-400 text-sm flex items-center justify-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {loc.location}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
