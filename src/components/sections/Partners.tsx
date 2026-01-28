'use client';

import Image from 'next/image';

const clients = [
    {
        name: 'SIA School',
        logo: 'https://res.cloudinary.com/dkits80xk/image/upload/v1768840468/bv5hyatjmoo7ajtt06pn.webp',
    },
    {
        name: 'Tristar Fitness',
        logo: 'https://res.cloudinary.com/dkits80xk/image/upload/v1769611874/2a806af6-8b18-4252-85d1-69405d860797.png',
    },
];

export function Partners() {
    // Duplicate for seamless infinite scroll
    const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

    return (
        <section className="py-16 border-y border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10">
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                        Trusted by leading institutions
                    </p>
                </div>
            </div>

            {/* Scrolling container */}
            <div className="relative">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling track */}
                <div className="flex animate-scroll hover:pause-animation">
                    {duplicatedClients.map((client, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-12 relative h-20 w-48 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
