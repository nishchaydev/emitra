import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const hostname = (request.headers.get('host') || '').toLowerCase();

    // Handle localhost scenarios for local development
    // (e.g. gym.localhost:3000, school.localhost:3000)
    // and production scenarios (e.g. gym.emitra.dev)

    // Subdomain routing logic
    if (hostname.startsWith('gym.')) {
        if (url.pathname === '/gymmitra' || url.pathname.startsWith('/gymmitra/')) {
            // Already correct, do nothing
        } else {
            url.pathname = `/gymmitra${url.pathname === '/' ? '' : url.pathname}`;
            return NextResponse.rewrite(url);
        }
    } else if (hostname.startsWith('school.')) {
        if (url.pathname === '/schoolmitra' || url.pathname.startsWith('/schoolmitra/')) {
            // Already correct, do nothing
        } else {
            url.pathname = `/schoolmitra${url.pathname === '/' ? '' : url.pathname}`;
            return NextResponse.rewrite(url);
        }
    } else if (hostname.startsWith('flat.')) {
        if (url.pathname === '/flatmitra' || url.pathname.startsWith('/flatmitra/')) {
            // Already correct, do nothing
        } else {
            url.pathname = `/flatmitra${url.pathname === '/' ? '' : url.pathname}`;
            return NextResponse.rewrite(url);
        }
    } else if (hostname.startsWith('medi.')) {
        if (url.pathname === '/medimitra' || url.pathname.startsWith('/medimitra/')) {
            // Already correct, do nothing
        } else {
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
