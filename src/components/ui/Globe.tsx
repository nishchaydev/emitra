'use client';

import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

export function Globe({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);

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
            dark: 0,
            diffuse: 1.2,
            mapSamples: 40000,
            mapBrightness: 6,
            baseColor: [1, 1, 1],
            markerColor: [0.1, 0.5, 0.9],
            glowColor: [0.8, 0.9, 1],
            markers: [
                { location: [22.9734, 78.6569], size: 0.1 }, // Madhya Pradesh
                { location: [28.7041, 77.1025], size: 0.05 }, // Delhi
                { location: [19.0760, 72.8777], size: 0.05 }, // Mumbai
                { location: [12.9716, 77.5946], size: 0.05 }, // Bangalore
            ],
            onRender: (state) => {
                if (!pointerInteracting.current) {
                    phi += 0.005;
                }
                state.phi = phi + pointerInteractionMovement.current;
                state.width = width * 2;
                state.height = width * 2;
            },
        });

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <div
            className={className}
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                placeItems: 'center',
                placeContent: 'center',
                overflow: 'hidden',
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    aspectRatio: '1',
                }}
                onPointerDown={(e) => {
                    // @ts-expect-error - Event types for cobe are not fully typed
                    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
                    // @ts-expect-error - Canvas ref style modification
                    canvasRef.current.style.cursor = 'grabbing';
                }}
                onPointerUp={() => {
                    pointerInteracting.current = null;
                    // @ts-expect-error - Canvas ref style modification
                    canvasRef.current.style.cursor = 'grab';
                }}
                onPointerOut={() => {
                    pointerInteracting.current = null;
                    // @ts-expect-error - Canvas ref style modification
                    canvasRef.current.style.cursor = 'grab';
                }}
                onMouseMove={(e) => {
                    if (pointerInteracting.current !== null) {
                        const delta = e.clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta * 0.01;
                    }
                }}
                onTouchMove={(e) => {
                    if (pointerInteracting.current !== null && e.touches[0]) {
                        const delta = e.touches[0].clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta * 0.01;
                    }
                }}
            />
        </div>
    );
}
