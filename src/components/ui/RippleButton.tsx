'use client';

import React, { useState, MouseEvent } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface RippleButtonProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

interface Ripple {
    x: number;
    y: number;
    size: number;
    id: number;
}

export function RippleButton({ children, className, as: Component = 'button', onClick, ...props }: RippleButtonProps) {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const createRipple = (e: MouseEvent<HTMLElement>) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const newRipple = {
            x,
            y,
            size,
            id: Date.now(),
        };

        setRipples((prev) => [...prev, newRipple]);
        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);
    };

    const handleClick = (e: MouseEvent<HTMLElement>) => {
        createRipple(e);
        onClick?.(e);
    };

    return (
        <Component
            className={cn(
                "relative overflow-hidden cursor-pointer", // Ensure relative and overflow-hidden for ripples
                className
            )}
            onClick={handleClick}
            {...props}
        >
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute rounded-full bg-white/30 pointer-events-none animate-ripple"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: ripple.size,
                        height: ripple.size,
                        transform: 'scale(0)',
                    }}
                />
            ))}
        </Component>
    );
}
