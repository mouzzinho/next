import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const token = request.cookies.get('session_token')?.value
    const isLoggedIn = Boolean(token)
    const protectedPaths = ['/admin']
    const isProtected = protectedPaths.some((path) => pathname.startsWith(path))

    if (pathname === '/template') {
        const url = request.nextUrl.clone()
        url.pathname = '/template/1'
        return NextResponse.redirect(url)
    }

    if (isProtected && !isLoggedIn) {
        const loginUrl = new URL('/login', request.url)
        return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
}
export const config = {
    matcher: ['/template', '/template/', '/admin'],
}

// TODO Dobrze by było łapać strony widoczne tylko dla zalogowanych zanim się na nią wejdzie, ale z localStorage to tak średnio raczej
