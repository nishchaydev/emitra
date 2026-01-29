'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Check if preloader should be disabled (e.g. for 404 pages)
        if (typeof window !== 'undefined' && window.sessionStorage.getItem('disablePreloader') === 'true') {
            setIsVisible(false);
            window.sessionStorage.removeItem('disablePreloader'); // Reset for next valid navigation
            return;
        }

        // Standard logic
        const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
        if (hasSeenPreloader) {
            setIsVisible(false);
            return;
        }

        const timer = setTimeout(() => {
            handleComplete();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleComplete = () => {
        setIsVisible(false);
        // Session storage set to prevent preloader showing again in this session
        sessionStorage.setItem('hasSeenPreloader', 'true');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    id="preloader-root"
                    className="fixed inset-0 z-[9999] bg-white"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <video
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="w-full h-full object-cover"
                        src="https://res.cloudinary.com/dkits80xk/video/upload/Animated_Logo_Video_Generation_slzzql.mp4"
                    >
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
