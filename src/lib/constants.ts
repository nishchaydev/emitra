// Site Metadata
export const SITE_CONFIG = {
    name: 'eMitra Technologies',
    description: 'Empowering businesses with innovative technology solutions',
    url: 'https://emitra.tech',
    ogImage: '/images/og-image.png',
} as const;

// Navigation Links
export const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
] as const;

// Social Links
export const SOCIAL_LINKS = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/emitra-technologies', icon: 'Linkedin' },
    { name: 'Twitter', href: 'https://twitter.com/emitratech', icon: 'Twitter' },
    { name: 'GitHub', href: 'https://github.com/emitra-technologies', icon: 'Github' },
] as const;

// Footer Links
export const FOOTER_LINKS = {
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blog', href: '/blog' },
    ],
    services: [
        { label: 'Consulting', href: '/services/consulting' },
        { label: 'Development', href: '/services/development' },
        { label: 'Support', href: '/services/support' },
    ],
    legal: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms-of-service' },
    ],
} as const;

// Design Tokens (referenced in Tailwind config)
export const COLORS = {
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
    teal: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
        950: '#042f2e',
    },
} as const;
