import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'bordered' | 'elevated';
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', padding = 'md', children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-xl transition-colors',
                    // Variants
                    {
                        'bg-white dark:bg-navy-800': variant === 'default',
                        'bg-white dark:bg-navy-800 border border-navy-200 dark:border-navy-700':
                            variant === 'bordered',
                        'bg-white dark:bg-navy-800 shadow-lg hover:shadow-xl': variant === 'elevated',
                    },
                    // Padding
                    {
                        'p-0': padding === 'none',
                        'p-4': padding === 'sm',
                        'p-6': padding === 'md',
                        'p-8': padding === 'lg',
                    },
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

export { Card };
