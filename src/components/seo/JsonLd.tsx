/**
 * JSON-LD Structured Data for SEO
 * 
 * Injects Organization, WebSite (with SearchAction), and LocalBusiness (ITService)
 * schema into every page via the root layout. This is critical for:
 * - Rich results in Google Search
 * - AI search engines (ChatGPT, Perplexity) parsing business info
 * - Ranking for "emitra indore" via LocalBusiness geo data
 */

const SITE_URL = 'https://emitra.dev';
const LOGO_URL = 'https://res.cloudinary.com/dkits80xk/image/upload/v1771839836/ChatGPT_Image_Feb_23_2026_03_13_03_PM_foi1so.png';

// Organization â€” tells Google who you are
const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'eMitra Technologies',
    alternateName: ['eMitra Tech', 'eMitra', 'emitra', 'eMitra Indore'],
    url: SITE_URL,
    logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
        width: 512,
        height: 512,
    },
    description:
        'eMitra Technologies (eMitra Tech) is a software product studio, custom development firm, and student innovation community based in Indore, India. We build enterprise-grade SaaS for gyms, housing societies, schools, and more.',
    foundingDate: '2024',
    foundingLocation: {
        '@type': 'Place',
        name: 'Indore, Madhya Pradesh, India',
    },
    areaServed: {
        '@type': 'Country',
        name: 'India',
    },
    knowsAbout: [
        'Software Development',
        'SaaS Products',
        'Enterprise Software',
        'Web Development',
        'Mobile App Development',
        'Education Technology',
        'Property Management Software',
        'Gym Management Software',
        'Digital Transformation',
        'AI Integration',
    ],
    sameAs: [
        'https://linkedin.com/company/emitra-technologies',
        'https://twitter.com/emitratech',
        'https://github.com/emitra-technologies',
    ],
    contactPoint: [
        {
            '@type': 'ContactPoint',
            email: 'hello@emitra.dev',
            contactType: 'customer service',
            availableLanguage: ['English', 'Hindi'],
        },
        {
            '@type': 'ContactPoint',
            email: 'sales@emitra.dev',
            contactType: 'sales',
            availableLanguage: ['English', 'Hindi'],
        },
    ],
};

// WebSite â€” enables sitelinks searchbox in Google
const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'eMitra Technologies',
    alternateName: 'eMitra Tech',
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
        '@type': 'SearchAction',
        target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
    },
};

// LocalBusiness (ITService) â€” critical for "emitra indore" ranking
const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ITService',
    '@id': `${SITE_URL}/#localbusiness`,
    name: 'eMitra Technologies',
    alternateName: ['eMitra Tech', 'eMitra Indore'],
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    description:
        'eMitra Technologies is a software product studio and custom development firm in Indore, MP. We build SaaS platforms for gyms, housing societies, schools, and enterprises across India.',
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Indore',
        addressRegion: 'Madhya Pradesh',
        postalCode: '452001',
        addressCountry: 'IN',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 22.7196,
        longitude: 75.8577,
    },
    areaServed: [
        { '@type': 'City', name: 'Indore' },
        { '@type': 'State', name: 'Madhya Pradesh' },
        { '@type': 'Country', name: 'India' },
    ],
    priceRange: '$$',
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00',
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Software Development Services',
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Custom Web Development',
                    description: 'Full-stack web applications built with Next.js, React, and Node.js.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'SaaS Product Development',
                    description: 'Multi-tenant SaaS platforms for Indian SMBs and institutions.',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Mobile App Development',
                    description: 'Cross-platform mobile apps using Flutter and React Native.',
                },
            },
        ],
    },
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
};

// BreadcrumbList for homepage
const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
        },
    ],
};

export function JsonLd() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}

/**
 * Page-level BreadcrumbList generator for subpages
 */
export function PageBreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: SITE_URL,
            },
            ...items.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 2,
                name: item.name,
                item: item.url,
            })),
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

/**
 * SoftwareApplication schema for product pages
 */
export function SoftwareAppJsonLd({
    name,
    description,
    url,
    applicationCategory = 'BusinessApplication',
    operatingSystem = 'Web',
    price,
    priceCurrency = 'INR',
}: {
    name: string;
    description: string;
    url: string;
    applicationCategory?: string;
    operatingSystem?: string;
    price?: string;
    priceCurrency?: string;
}) {
    const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name,
        description,
        url,
        applicationCategory,
        operatingSystem,
        publisher: { '@id': `${SITE_URL}/#organization` },
    };

    if (price !== undefined) {
        schema.offers = {
            '@type': 'Offer',
            price,
            priceCurrency,
            availability: 'https://schema.org/InStock',
        };
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

