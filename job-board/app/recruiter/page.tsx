"use client";

import { useEffect, useState } from "react";


export default function RecruiterPage() {
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const storedRole = localStorage.getItem("userType");
        setRole(storedRole);
    }, []);

    // Optional: prevent flicker
    if (role === null) return null;

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold">Recruiter Dashboard</h1>
                <p className="text-gray-500">Welcome back!</p>
            </div>
        </>
    );
}