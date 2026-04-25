"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LandingPage() {
    const router = useRouter();

    const handleJobSeekerClick = () => {
        if (typeof window !== "undefined") {
            localStorage.setItem("userType", "jobseeker");
            router.push("/login");
        }
    };

    const handleRecruiterClick = () => {
        if (typeof window !== "undefined") {
            localStorage.setItem("userType", "recruiter");
            router.push("/login");
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-start">
            <div className="w-1/2 h-11/12 mt-16">
                <div className="flex justify-center items-center">
                    <Image
                        src="/8250665.png"
                        alt="recruiterImage"
                        width={500}
                        height={500}
                        className="w-1/2 h-1/2"
                    />
                </div>
                <div className="flex gap-4 flex-col items-center mt-6">
                    <button
                        className="bg-white text-blue-900 px-20 py-2 w-10/12 rounded-lg border-2 border-black hover:scale-105 transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
                        onClick={handleJobSeekerClick}
                    >
                        Job Seeker
                    </button>
                    <button
                        className="bg-white text-blue-900 px-20 py-2 w-10/12 rounded-lg border-2 border-black hover:scale-105 transition-all duration-300 ease-in-out hover:bg-black hover:text-white"
                        onClick={handleRecruiterClick}
                    >
                        Recruiter
                    </button>
                </div>
            </div>
        </div>
    );
}
