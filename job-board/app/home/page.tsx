"use client";

import Navbar from "@/components/HomePage/Navbar";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold">Home Page</h1>
                <p className="text-gray-500">Welcome to the Job Board</p>
            </div>
        </>
    );
}
