import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    // Base styles
                    'inline-flex items-center justify-center font-medium transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                    'disabled:pointer-events-none disabled:opacity-50',
                    'rounded-lg',
                    // Variants
                    {
                        // Primary - Navy background
                        'bg-navy-900 text-white hover:bg-navy-800 focus-visible:ring-navy-500':
                            variant === 'primary',
                        // Secondary - Teal accent
                        'bg-teal-500 text-white hover:bg-teal-600 focus-visible:ring-teal-500':
                            variant === 'secondary',
                        // Outline
                        'border-2 border-navy-900 text-navy-900 hover:bg-navy-50 dark:border-navy-100 dark:text-navy-100 dark:hover:bg-navy-800':
                            variant === 'outline',
                        // Ghost
                        'text-navy-900 hover:bg-navy-100 dark:text-navy-100 dark:hover:bg-navy-800':
                            variant === 'ghost',
                    },
                    // Sizes
                    {
                        'h-9 px-4 text-sm': size === 'sm',
                        'h-11 px-6 text-base': size === 'md',
                        'h-14 px-8 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
