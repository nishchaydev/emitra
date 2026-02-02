'use client';

import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export function DashboardMockup() {
    return (
        <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={1000}
            scale={1.02}
            transitionSpeed={2000}
            gyroscope={true}
            className="w-full max-w-[600px] aspect-[4/3]"
        >
            <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 lg:p-4 overflow-hidden transform-style-3d">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white z-0" />

                {/* Browser Bar */}
                <div className="relative z-10 flex items-center gap-2 mb-4 px-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    <div className="ml-4 h-6 w-2/3 bg-slate-100 rounded-md" />
                </div>

                {/* Mock UI Content */}
                <div className="relative z-10 grid grid-cols-12 gap-4 h-full pb-8">
                    {/* Sidebar */}
                    <div className="hidden sm:block col-span-3 h-full bg-slate-50 rounded-xl border border-slate-100/50 p-3 space-y-2">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="h-8 w-full bg-white rounded-lg shadow-sm" />
                        ))}
                    </div>
                    {/* Main Content */}
                    <div className="col-span-12 sm:col-span-9 h-full space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-24 bg-blue-50/50 rounded-xl border border-blue-100/50 p-4 transform translate-z-10">
                                <div className="h-8 w-8 rounded-full bg-blue-100 mb-2" />
                                <div className="h-2 w-16 bg-blue-200/50 rounded" />
                            </div>
                            <div className="h-24 bg-indigo-50/50 rounded-xl border border-indigo-100/50 p-4 transform translate-z-10">
                                <div className="h-8 w-8 rounded-full bg-indigo-100 mb-2" />
                                <div className="h-2 w-16 bg-indigo-200/50 rounded" />
                            </div>
                            <div className="h-24 bg-emerald-50/50 rounded-xl border border-emerald-100/50 p-4 transform translate-z-10">
                                <div className="h-8 w-8 rounded-full bg-emerald-100 mb-2" />
                                <div className="h-2 w-16 bg-emerald-200/50 rounded" />
                            </div>
                        </div>
                        <div className="h-48 bg-white rounded-xl border border-slate-100 shadow-sm p-4">
                            <div className="flex items-end justify-between h-full gap-2 px-2 pb-2">
                                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                    <div key={i} className="w-full bg-slate-100 rounded-t-sm relative group overflow-hidden">
                                        <div className="absolute bottom-0 w-full bg-primary/80 transition-all duration-1000 ease-out" style={{ height: `${h}%` }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Element 1 - Parent App */}
                <motion.div
                    className="absolute -right-4 bottom-10 w-48 bg-white rounded-xl shadow-xl border border-slate-200 p-3 z-20"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    style={{ transform: 'translateZ(40px)' }}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full" />
                        </div>
                        <div>
                            <div className="w-20 h-2 bg-slate-200 rounded mb-1" />
                            <div className="w-12 h-2 bg-slate-100 rounded" />
                        </div>
                    </div>
                    <div className="w-full h-16 bg-slate-50 rounded-lg p-2">
                        <div className="w-full h-full bg-slate-200/50 rounded-md" />
                    </div>
                </motion.div>
            </div>
        </Tilt>
    );
}
