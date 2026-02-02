'use client';
import { useEffect, useState } from 'react';
/* eslint-disable react-hooks/exhaustive-deps */

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show on desktop
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) return;

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', moveCursor);

        // Target interactive elements dynamically
        const interactiveSelectors = 'a, button, input, textarea, [role="button"], .cursor-pointer';

        const addListeners = () => {
            const interactiveElements = document.querySelectorAll(interactiveSelectors);
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
            return interactiveElements; // return to remove listeners
        };


        // Initial add
        let interactiveElements = addListeners();

        // Handle dynamic content (like framer-motion layout changes or new routes) via MutationObserver
        const observer = new MutationObserver(() => {
            // Remove old listeners to prevent Duplicates? 
            // Actually re-adding listeners is safe if we remove them first or just accept basic event bubbling. 
            // But for simplicity/perf, let's just re-attach periodically or on route change if needed. 
            // For now, simpler approach: just re-query on major DOM changes.
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            interactiveElements = addListeners();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            observer.disconnect();
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <style jsx global>{`
                @media (min-width: 769px) {
                    body, a, button, input, textarea, [role="button"] {
                        cursor: none !important;
                    }
                }
            `}</style>
            <div
                className="cursor-dot fixed pointer-events-none z-[9999] mix-blend-difference bg-white rounded-full transition-transform duration-150 ease-out"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: '8px',
                    height: '8px',
                    transform: isHovering
                        ? 'translate(-50%, -50%) scale(2)'
                        : 'translate(-50%, -50%) scale(1)'
                }}
            />
            <div
                className="cursor-outline fixed pointer-events-none z-[9999] mix-blend-difference border-2 border-white/50 rounded-full transition-all duration-200 ease-out"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: '40px',
                    height: '40px',
                    transform: isHovering
                        ? 'translate(-50%, -50%) scale(1.5)'
                        : 'translate(-50%, -50%) scale(1)'
                }}
            />
        </>
    );
}
