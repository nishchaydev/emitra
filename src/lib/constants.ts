// Site Metadata
export const SITE_CONFIG = {
    name: 'eMitra Technologies',
    description: 'Indian Product Studio & Student Innovation Hub based in Indore.',
    url: 'https://emitra.dev',
    ogImage: '/images/og-image.png',
} as const;

// Navigation Links
export const NAV_LINKS = [
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Launchpad', href: '/launchpad' },
    { label: 'Pathways', href: '/pathways' },
    { label: 'Team', href: '/team' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
] as const;

// Social Links
export const SOCIAL_LINKS = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/emitra-technologies', icon: 'Linkedin' },
    { name: 'Twitter', href: 'https://twitter.com/emitratech', icon: 'Twitter' },
    { name: 'GitHub', href: 'https://github.com/emitra-technologies', icon: 'Github' },
] as const;

// Footer Links
export const FOOTER_LINKS = {
    products: [
        { label: 'GymMitra', href: 'https://gym.emitra.dev' },
        { label: 'FlatMitra', href: 'https://flat.emitra.dev' },
    ],
    company: [
        { label: 'About Us', href: '/team' },
        { label: 'Team', href: '/team' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ],
    community: [
        { label: 'eMitra Launchpad', href: '/launchpad' },
        { label: 'eMitra Pathways', href: '/pathways' },
    ],
    legal: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms-of-service' },
    ],
} as const;

// Design Tokens
export const COLORS = {
    brand: {
        navy: '#1e1b4b',
        ion: '#4f46e5',
        amber: '#f59e0b',
        teal: '#0d9488',
        offWhite: '#f8fafc',
    },
    navy: {
        50: '#f0f4f8',
        100: '#d9e2ec',
        200: '#bcccdc',
        300: '#9fb3c8',
        400: '#829ab1',
        500: '#627d98',
        600: '#486581',
        700: '#334e68',
        800: '#243b53',
        900: '#102a43',
        950: '#0a1929',
    },
} as const;

