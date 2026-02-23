import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Protect these routes
const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login"];

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Check if we are on a protected route
    const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));
    const isPublicRoute = publicRoutes.includes(path);

    // Read the custom session cookie
    const session = request.cookies.get("morley_client_session")?.value;

    // Redirect to /login if trying to access a protected route without a session
    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Redirect to /dashboard if logged in and trying to access /login
    if (isPublicRoute && session) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

// Config ensures middleware only runs on necessary routes
export const config = {
    matcher: ["/dashboard/:path*", "/login"],
};
