'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useSpring } from 'react-spring';

export default function ExperiencePage() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);

    // Connect scroll to globe interaction
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const [{ r }, api] = useSpring(() => ({
        r: 0,
        config: {
            mass: 1,
            tension: 280,
            friction: 40,
            precision: 0.001,
        },
    }));

    // Map scroll to rotation focusing on India then MP
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // 0 - 0.5: Rotate to India 
        // Phi ~ 4.7 is India
        if (latest > 0.1) {
            api.start({ r: latest * 2 });
        }
    })

    // ADJUSTED SCROLL RANGES FOR 5 SECTIONS
    // Ranges: 0-0.15 (1), 0.2-0.35 (2), 0.4-0.55 (3), 0.6-0.75 (4), 0.8-1.0 (5)

    // Section 1: Intro
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    // Section 2: Security (NEW)
    const y2 = useTransform(scrollYProgress, [0.15, 0.35], [50, -50]);
    const opacity2 = useTransform(scrollYProgress, [0.1, 0.25, 0.4], [0, 1, 0]);

    // Section 3: Scale (Moved)
    const y3 = useTransform(scrollYProgress, [0.35, 0.55], [50, -50]);
    const opacity3 = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [0, 1, 0]);

    // Section 4: Analytics (NEW)
    const y4 = useTransform(scrollYProgress, [0.55, 0.75], [50, -50]);
    const opacity4 = useTransform(scrollYProgress, [0.5, 0.65, 0.8], [0, 1, 0]);

    // Section 5: CTA
    const opacity5 = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);

    useEffect(() => {
        let phi = 0;
        let width = 0;

        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
        window.addEventListener('resize', onResize);
        onResize();

        const globe = createGlobe(canvasRef.current!, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.3,
            dark: 0, // Light mode
            diffuse: 1.2,
            mapSamples: 40000,
            mapBrightness: 6,
            baseColor: [1, 1, 1], // White
            markerColor: [0.1, 0.5, 0.9], // Blue markers
            glowColor: [0.8, 0.9, 1], // Soft blue glow
            markers: [
                { location: [22.9734, 78.6569], size: 0.1 }, // Madhya Pradesh (Center focus)
                { location: [28.7041, 77.1025], size: 0.05 }, // Delhi
                { location: [19.0760, 72.8777], size: 0.05 }, // Mumbai
                { location: [12.9716, 77.5946], size: 0.05 }, // Bangalore
                { location: [26.9124, 75.7873], size: 0.05 }, // Jaipur
            ],
            onRender: (state) => {
                // Rotate globe
                if (!pointerInteracting.current) {
                    phi += 0.005;
                }
                // Focus interpolation
                state.phi = phi + r.get();
                state.theta = 0.3 + (r.get() * 0.1);

                state.width = width * 2;
                state.height = width * 2;
            },
        });

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        };
    }, []);

    // TRANSFORM ZOOM LOGIC
    // Refined to keep India centered in the right column
    // When we scale 3x, the globe grows outwards. We need to pull it left.
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2.8]);
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

    return (
        <div ref={containerRef} className="relative w-full bg-slate-50">

            {/* 2-Column Layout */}
            <div className="relative flex flex-col-reverse lg:flex-row">

                {/* Left: Scrollable Text Content */}
                <div className="w-full lg:w-1/2 relative z-20 pointer-events-none">

                    {/* Section 1: Vision */}
                    <div className="h-screen flex items-center p-12 lg:p-24 pointer-events-none">
                        <motion.div style={{ opacity: opacity1, y: y1 }} className="max-w-xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-medium mb-6">
                                Global Infrastructure
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 mb-6 leading-tight">
                                Unified <br /> <span className="text-primary">Vision.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Connecting institutions across continents with a single, secure standard. We bridge the gap between local needs and global excellence.
                            </p>
                        </motion.div>
                    </div>

                    {/* Section 2: Security (NEW) */}
                    <div className="h-screen flex items-center p-12 lg:p-24 pointer-events-none">
                        <motion.div style={{ opacity: opacity2, y: y2 }} className="max-w-xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
                                Enterprise Security
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
                                Bank-Grade <br /> <span className="text-emerald-600">Protection.</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Your data is sovereign. With end-to-end encryption and ISO 27001-compliant infrastructure, we ensure your institution's privacy is never compromised.
                            </p>
                        </motion.div>
                    </div>

                    {/* Section 3: Scale */}
                    <div className="h-screen flex items-center p-12 lg:p-24 pointer-events-none">
                        <motion.div style={{ opacity: opacity3, y: y3 }} className="max-w-xl">
                            <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
                                Seamless <br /> <span className="text-indigo-600">Scale.</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                From a single campus in Mumbai to a multi-city network across India. Our architecture handles millions of requests with zero downtime.
                            </p>
                        </motion.div>
                    </div>

                    {/* Section 4: Analytics (NEW) */}
                    <div className="h-screen flex items-center p-12 lg:p-24 pointer-events-none">
                        <motion.div style={{ opacity: opacity4, y: y4 }} className="max-w-xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
                                Real-Time Intelligence
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
                                Data that <br /> <span className="text-purple-600">Delivers.</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Turn raw attendance and exam data into actionable insights. Identify at-risk students and optimize resource allocation instantly.
                            </p>
                        </motion.div>
                    </div>

                    {/* Section 5: CTA */}
                    <div className="h-screen flex items-center p-12 lg:p-24 pointer-events-auto">
                        <motion.div style={{ opacity: opacity5 }} className="max-w-xl">
                            <h2 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 mb-6">
                                Ready to <br /> <span className="text-blue-600">Connect?</span>
                            </h2>
                            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform">
                                Deploy Your Network
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Right: Sticky Globe */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen sticky top-0 flex items-center justify-center bg-slate-50 overflow-hidden">
                    {/* Gradient fade for smooth edges */}
                    <div className="absolute inset-0 bg-radial-gradient from-transparent to-slate-50 z-10 pointer-events-none" />

                    <motion.div
                        style={{ scale, x, y }}
                        className="w-full h-full relative z-0 flex items-center justify-center origin-center"
                    >
                        <canvas
                            ref={canvasRef}
                            style={{ width: '100%', height: '100%', maxWidth: 'none', contain: 'none' }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
