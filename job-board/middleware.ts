import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/lib/jwt";

export function middleware(req: NextRequest) {
    const origin = req.headers.get("origin") || "http://localhost:3000";
    console.log("Middleware hit", req.url, req.method);

    // ✅ Handle preflight request
    if (req.method === "OPTIONS") {
        return new NextResponse(null, {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": origin,
                "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                "Access-Control-Allow-Credentials": "true",
            },
        });
    }

    const token = req.cookies.get("token")?.value;

    // ✅ Protect dashboard routes
    if (req.nextUrl.pathname.startsWith("/dashboard") || req.nextUrl.pathname.startsWith("/recruiter")) {
        if (!token) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        try {
            verifyToken(token);
        } catch (err) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    const res = NextResponse.next();

    // ✅ Add CORS headers globally
    res.headers.set("Access-Control-Allow-Origin", origin);
    res.headers.set("Access-Control-Allow-Credentials", "true");

    return res;
}

export const config = {
    matcher: ["/api/:path*", "/dashboard/:path*"],
};