import { z } from 'zod';

export const contactSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be less than 50 characters')
        .regex(/^[\p{L}\p{M}\s\-\']+$/u, 'Name can only contain letters, spaces, hyphens, and apostrophes'),

    email: z
        .string()
        .email('Please enter a valid email address')
        .toLowerCase(),

    phone: z
        .string()
        .regex(/^[\d\s\-\+\(\)]+$/, 'Please enter a valid phone number')
        .optional()
        .or(z.literal(''))
        .refine((val) => {
            if (!val) return true;
            return val.replace(/\D/g, '').length >= 10;
        }, 'Phone number must be at least 10 digits'),

    organization: z
        .string()
        .max(100, 'Organization name must be less than 100 characters')
        .optional()
        .or(z.literal('')),

    message: z
        .string()
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message must be less than 1000 characters'),

    // Honeypot field - should always be empty (bots fill this)
    website: z
        .string()
        .length(0, 'Spam detected')
        .optional()
        .or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
    email: z
        .string()
        .email('Please enter a valid email address')
        .toLowerCase(),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
