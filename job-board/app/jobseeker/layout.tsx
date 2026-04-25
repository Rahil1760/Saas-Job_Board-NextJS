import Navbar from "@/components/JobSeeker/JobSeekerNavbar";

export default function JobSeekerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}