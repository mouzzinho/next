import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    if (pathname === '/template') {
        const url = request.nextUrl.clone()
        url.pathname = '/template/1'
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}
export const config = {
    matcher: ['/template', '/template/'], // oba warianty
}
