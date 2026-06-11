import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware: www â†’ apex 301 redirect
 * 
 * Prevents signal splitting between www.emitra.dev and emitra.dev.
 * Google treats these as separate URLs - without a hard redirect,
 * backlinks and ranking signals get split across both.
 */
export function middleware(request: NextRequest) {
    const hostname = request.headers.get('host') || '';

    // Redirect www.emitra.dev â†’ emitra.dev with 301
    if (hostname.startsWith('www.')) {
        const newUrl = new URL(request.url);
        newUrl.hostname = hostname.replace('www.', '');
        return NextResponse.redirect(newUrl, 301);
    }

    return NextResponse.next();
}

export const config = {
    // Run on all routes except static files and API routes
    matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
};

