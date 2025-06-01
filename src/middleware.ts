import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const unprotectedRoutes = ["/login", "/register", "/public"];

    const isProtectedRoute = !unprotectedRoutes.some((path) => request.nextUrl.pathname.startsWith(path));
    const hasAccessToken = request.cookies.has("access_token");

    if (isProtectedRoute) {
        if (!hasAccessToken) {
            const response = NextResponse.redirect(new URL("/login", request.url));
            response.cookies.delete("access_token");
            return response;
        }

        return NextResponse.next();
    }

    if (hasAccessToken) {
        const response = NextResponse.redirect(new URL("/dashboard", request.url));
        return response;
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
