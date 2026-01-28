'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ThemeToggleProps {
    className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch - this is the recommended pattern
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), []);


    if (!mounted) {
        return (
            <button
                className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-lg',
                    'text-navy-600 hover:bg-navy-100 dark:text-navy-300 dark:hover:bg-navy-800',
                    'transition-colors',
                    className
                )}
                aria-label="Toggle theme"
            >
                <span className="h-5 w-5" />
            </button>
        );
    }

    const isDark = resolvedTheme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-lg',
                'text-navy-600 hover:bg-navy-100 dark:text-navy-300 dark:hover:bg-navy-800',
                'transition-colors',
                className
            )}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
    );
}
