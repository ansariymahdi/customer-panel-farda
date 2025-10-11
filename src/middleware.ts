import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
	const accessToken = req.cookies.get("accessToken")?.value

	const { pathname } = req.nextUrl

	if (accessToken && (pathname.startsWith("/login") || pathname === "/")) {
		const redirectUrl = new URL("/profile/policy", req.url)
		return NextResponse.redirect(redirectUrl)
	}

	if (!accessToken && pathname.startsWith("/profile")) {
		const redirectUrl = new URL("/login", req.url)
		return NextResponse.redirect(redirectUrl)
	}

	return NextResponse.next()
}

export const config = {
	matcher: ["/", "/login", "/profile/:path*"]
}
