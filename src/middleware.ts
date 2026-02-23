import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const hostname = request.headers.get('host') || '';

    // Handle localhost scenarios for local development
    // (e.g. gym.localhost:3000, school.localhost:3000)
    // and production scenarios (e.g. gym.emitra.dev)

    // Subdomain routing logic
    if (hostname.startsWith('gym.')) {
        if (!url.pathname.startsWith('/gymmitra')) {
            url.pathname = `/gymmitra${url.pathname === '/' ? '' : url.pathname}`;
            return NextResponse.rewrite(url);
        }
    } else if (hostname.startsWith('school.')) {
        if (!url.pathname.startsWith('/schoolmitra')) {
            url.pathname = `/schoolmitra${url.pathname === '/' ? '' : url.pathname}`;
            return NextResponse.rewrite(url);
        }
    } else if (hostname.startsWith('flat.')) {
        if (!url.pathname.startsWith('/flatmitra')) {
            url.pathname = `/flatmitra${url.pathname === '/' ? '' : url.pathname}`;
            return NextResponse.rewrite(url);
        }
    } else if (hostname.startsWith('medi.')) {
        if (!url.pathname.startsWith('/medimitra')) {
            url.pathname = `/medimitra${url.pathname === '/' ? '' : url.pathname}`;
            return NextResponse.rewrite(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
};
