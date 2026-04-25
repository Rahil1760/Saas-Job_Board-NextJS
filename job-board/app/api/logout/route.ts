import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const token = req.cookies.get("token")?.value;

        if (!token) {
            return NextResponse.json(
                { message: "Already logged out" },
                { status: 400 }
            );
        }

        const response = NextResponse.json(
            { message: "Logged out successfully" },
            { status: 200 }
        );

        // ✅ Correct way to delete cookie
        response.cookies.set("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 0, // expires immediately
        });

        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}