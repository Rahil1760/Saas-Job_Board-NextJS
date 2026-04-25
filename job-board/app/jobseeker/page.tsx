"use client";

import {
    TypographyH1,
    TypographyP,
    TypographyMuted,
    TypographyH3
} from "@/components/ui/Typography";

export default function JobSeekerDashboard() {
    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] p-8">

            {/* Heading */}
            <TypographyH1 className="mb-4 text-primary">
                JobSeeker Dashboard
            </TypographyH1>

            {/* Description */}
            <TypographyP className="text-center max-w-2xl text-muted-foreground">
                Welcome to your job seeker portal. Use the navigation above to manage your profile,
                view saved jobs, and access career resources.
            </TypographyP>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-5xl">

                <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
                    <TypographyH3 className="mb-2">
                        Recommended Jobs
                    </TypographyH3>
                    <TypographyMuted>
                        Find jobs tailored to your skills and preferences.
                    </TypographyMuted>
                </div>

                <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
                    <TypographyH3 className="mb-2">
                        Application Status
                    </TypographyH3>
                    <TypographyMuted>
                        Track your ongoing job applications.
                    </TypographyMuted>
                </div>

                <div className="p-6 border rounded-xl bg-card shadow-sm hover:shadow-md transition">
                    <TypographyH3 className="mb-2">
                        Upcoming Interviews
                    </TypographyH3>
                    <TypographyMuted>
                        You have no interviews scheduled for this week.
                    </TypographyMuted>
                </div>

                <TypographyP>Hello world</TypographyP>

            </div>
        </div>
    );
}