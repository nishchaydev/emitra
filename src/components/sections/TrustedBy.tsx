'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
    {
        name: 'SIA School',
        logo: 'https://res.cloudinary.com/dkits80xk/image/upload/v1768840468/bv5hyatjmoo7ajtt06pn.webp'
    },
    {
        name: 'MP Punjab Harvesters',
        logo: 'https://res.cloudinary.com/dkits80xk/image/upload/v1770029506/c10df567-ebff-43f4-a4b0-4d2a8447783f.png'
    },
    {
        name: 'Global Institute'
    },
];

export function TrustedBy() {
    // Duplicate list for seamless infinite scroll
    const marqueeClients = [...clients, ...clients, ...clients, ...clients];

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]"
                >
                    Trusted by forward-thinking institutions
                </motion.p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />

                <motion.div
                    className="flex items-center gap-16 md:gap-24 py-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {marqueeClients.map((client, index) => (
                        <div
                            key={index}
                            className="relative h-10 w-32 md:w-40 flex-shrink-0 transition-all duration-500 rounded-xl opacity-70 hover:opacity-100 cursor-pointer flex items-center justify-center p-2"
                        >
                            {client.logo ? (
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            ) : (
                                <span className="font-bold text-slate-400 hover:text-indigo-600 text-base md:text-lg transition-colors whitespace-nowrap">
                                    {client.name}
                                </span>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

