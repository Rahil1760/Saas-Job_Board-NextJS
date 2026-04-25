import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import bcrypt from "bcrypt";
import User from "../../models/User_Auth/UserRegistration";
import { signToken } from "@/lib/jwt";
import Recruiter from "../../models/User_Auth/RecruiterRegistration";
import { cookies } from "next/headers";

export async function POST(req: Request) {
    try {
        const { email, password, userType } = await req.json();
        console.log("Login attempt:", { email, userType });
        
        await connectDB();
        let user;
        if (userType.toLowerCase() === "jobseeker") {
            user = await User.findOne({ email });
        } else {
            user = await Recruiter.findOne({ email });
        }

        if (!user) {
            console.log("User not found for email:", email);
            return NextResponse.json({ message: "User not found please sign up" }, { status: 404 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.log("Invalid password for user:", email);
            return NextResponse.json({ message: "Invalid password" }, { status: 401 });
        }

        const token = signToken({ id: user._id, email: user.email, userType });
        const response = NextResponse.json({ message: "Success" });
        console.log("Login successful for:", email);
        
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
        });
        return response;
    } catch (error) {
        console.error("Login API Error:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}