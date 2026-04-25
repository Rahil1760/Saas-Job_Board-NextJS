import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import bcrypt from "bcrypt";
import User from "../../models/User_Auth/UserRegistration";
import RecruiterRegistrationSchema from "../../models/User_Auth/RecruiterRegistration";

export async function POST(req: Request) {
    try {
        const { email, password, userType = "jobseeker" } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }
        await connectDB();
        let user;
        if (userType.toLowerCase() === "jobseeker") {
            user = await User.findOne({ email });
            if (user) {
                return NextResponse.json({ message: "User already exists" }, { status: 400 });
            }
        } else if (userType.toLowerCase() === "recruiter") {
            user = await RecruiterRegistrationSchema.findOne({ email });
            if (user) {
                return NextResponse.json({ message: "User already exists" }, { status: 400 });
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        let newUser;
        if (userType.toLowerCase() === "jobseeker") {
            newUser = new User({
                email,
                password: hashedPassword,
                userType,
            });
        }
        else {
            newUser = new RecruiterRegistrationSchema({
                email,
                password: hashedPassword,
                userType,
            });
        }
        await newUser.save();
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}