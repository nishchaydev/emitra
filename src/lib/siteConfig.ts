/**
 * Site-wide configuration
 * Single source of truth for base URL, brand name, etc.
 */
export const siteConfig = {
    baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://emitra.dev',
    name: 'eMitra Technologies',
    shortName: 'eMitra Tech',
} as const;

