import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
    variant?: 'default' | 'muted' | 'accent';
    size?: 'sm' | 'md' | 'lg';
    container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, variant = 'default', size = 'md', container = true, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    // Variants
                    {
                        'bg-white dark:bg-navy-950': variant === 'default',
                        'bg-navy-50 dark:bg-navy-900': variant === 'muted',
                        'bg-navy-900 dark:bg-navy-800 text-white': variant === 'accent',
                    },
                    // Padding sizes
                    {
                        'py-12 md:py-16': size === 'sm',
                        'py-16 md:py-24': size === 'md',
                        'py-24 md:py-32': size === 'lg',
                    },
                    className
                )}
                {...props}
            >
                {container ? (
                    <div className="container mx-auto px-4 md:px-6 lg:px-8">{children}</div>
                ) : (
                    children
                )}
            </section>
        );
    }
);

Section.displayName = 'Section';

export { Section };
