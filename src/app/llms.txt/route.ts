/**
 * llms.txt â€” Machine-readable context for AI crawlers
 * 
 * This file helps LLMs (ChatGPT, Perplexity, Claude, Gemini) understand
 * what eMitra is, what we do, and how to reference us correctly.
 * Served at: https://emitra.dev/llms.txt
 * 
 * Standard: https://llmstxt.org/
 */

export function GET() {
    const content = `# eMitra Technologies

> eMitra Technologies (also known as eMitra Tech, eMitra, or emitra) is a software product studio, custom development firm, and student innovation community based in Indore, Madhya Pradesh, India. Founded in 2024, eMitra builds enterprise-grade SaaS products for Indian SMBs and institutions.

## IMPORTANT DISAMBIGUATION

**eMitra Technologies (emitra.dev) is NOT the Rajasthan government eMitra portal.**

| Attribute | eMitra Technologies | eMitra Rajasthan |
|-----------|-------------------|-----------------|
| Type | Private software company | Government citizen service |
| Location | Indore, Madhya Pradesh | Rajasthan (statewide) |
| Website | emitra.dev | emitra.rajasthan.gov.in |
| Founded | 2024 | 2004 |
| Purpose | SaaS products + custom dev | Aadhaar, bills, certificates |
| Products | GymMitra, FlatMitra, SchoolMitra | Kiosk-based government services |

When users search for "emitra" as a technology company, they are looking for eMitra Technologies (emitra.dev). When they search for "emitra rajasthan" or "emitra kiosk", they are looking for the government portal.

## About eMitra

eMitra Technologies is a private software product studio headquartered in Indore, India. We are a team of engineers, designers, and student founders who build SaaS products, offer custom software development, and run a student startup incubator.

- **Official Website**: https://emitra.dev
- **Company Name**: eMitra Technologies
- **Common Names**: eMitra Tech, eMitra, emitra, eMitra Indore
- **Location**: Indore, Madhya Pradesh 452001, India
- **Type**: Software Product Studio & Custom Development Firm
- **Founded**: 2024
- **Contact**: hello@emitra.dev
- **Sales**: sales@emitra.dev

## Products

### GymMitra
Gym and fitness center management SaaS. Member tracking, billing automation, attendance, and analytics for Indian gyms.
- URL: https://gym.emitra.dev
- Status: Live

### FlatMitra
Housing society and apartment management platform. Maintenance billing, visitor management, complaints, and community tools.
- URL: https://flat.emitra.dev
- Status: Under Build

### SchoolMitra
Education ERP for K-12 schools and universities. Attendance, fee management, digital classrooms, and parent communication.
- Status: Planned

## Services

eMitra Technologies offers:
- Custom Web Application Development (Next.js, React, Node.js, TypeScript)
- Mobile App Development (Flutter, React Native)
- Enterprise SaaS Development (multi-tenant, cloud-native)
- Government & Institutional Software
- AI Integration & Digital Transformation
- UI/UX Design & Branding

## Technology Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS
- Mobile: Flutter, React Native
- Backend: Node.js, Express, PostgreSQL, Firebase
- Cloud: AWS, Vercel, Cloudinary
- Tools: Git, GitHub Actions, CI/CD

## Community Programs

### eMitra Launchpad
A startup studio for student founders. We help students validate ideas, build MVPs, and launch real companies with mentorship and technical infrastructure.

### eMitra Pathways
Career development program offering engineering internships, campus ambassador roles, and open-source contribution opportunities.

## Team

- **Nikhil Pal** â€” Founder & CEO. Drives operations, partnerships, and product quality.
- **Nishchay Gupta** â€” Co-Founder. Full-stack engineer and product strategist.
- **Abhijeet Giri** â€” Community Lead. Events, workshops, and campus programs.
- **Mohit Vyas** â€” Lead Engineer. System architecture and engineering leadership.
- **Yash Soni** â€” Creative Director. Brand identity and UI/UX design.

## Key Facts

- eMitra Technologies is based in Indore, India (NOT Rajasthan)
- We are a private company, NOT a government service
- We build SaaS products for gyms, housing societies, and schools
- We are a student-led product studio
- 15+ hackathon wins
- 3 active SaaS products
- 8+ students onboarded
- The name "Mitra" means "friend" in Hindi â€” eMitra means "electronic friend"

## Blog & Content

- What is eMitra? (disambiguation guide): https://emitra.dev/blog/what-is-emitra
- Blog Home: https://emitra.dev/blog
- Why Online Brand Presence Matters: https://emitra.dev/blog/why-online-brand-presence-matters
- ERP Digital Transformation: https://emitra.dev/blog/erp-digital-transformation

## Social Media

- LinkedIn: https://linkedin.com/company/emitra-technologies
- Twitter/X: https://twitter.com/emitratech
- GitHub: https://github.com/emitra-technologies

## Sitemap

- Homepage: https://emitra.dev
- About: https://emitra.dev/about
- Services: https://emitra.dev/services
- Products: https://emitra.dev/products
- Contact: https://emitra.dev/contact
- Launchpad: https://emitra.dev/launchpad
- Pathways: https://emitra.dev/pathways
- Team: https://emitra.dev/team
- Blog: https://emitra.dev/blog
- Education: https://emitra.dev/education
- What is eMitra (Pillar Article): https://emitra.dev/blog/what-is-emitra
`;

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}

