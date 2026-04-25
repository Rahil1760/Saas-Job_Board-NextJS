import "../../App.css"
import Image from "next/image"

import {
    BellRing,
    ShoppingCart,
    UserPen,
    Settings,
    LogOut,
} from "lucide-react"

import { useRouter } from "next/navigation"

// shadcn components
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"


const Navbar = () => {
    const router = useRouter()
    const handleLogout = async () => {
        try {
            const res = await fetch("/api/logout", { method: "POST" });
            if (res.ok) {
                router.push("/login");
            } else {
                const data = await res.json();
                console.error("Logout failed:", data.message);
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <nav className="flex justify-center items-center border-b bg-background">
            <div className="px-10 h-16 flex justify-between w-11/12">

                {/* Left */}
                <div className="flex items-center gap-6">
                    <Image src="/Gemini.png" alt="logo" width={32} height={32} />

                    <ul className="hidden lg:flex items-center gap-4">
                        {["Jobs", "Learn", "Prep Learn", "Career Advice", "Career Solutions"].map((item) => (
                            <li
                                key={item}
                                className="text-sm font-medium cursor-pointer hover:text-primary transition"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4">

                    <Button variant="ghost" size="icon">
                        <BellRing className="w-5 h-5" />
                    </Button>

                    <Button variant="ghost" size="icon">
                        <ShoppingCart className="w-5 h-5" />
                    </Button>

                    {/* Profile Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/favicon.svg" />
                                    <AvatarFallback>RS</AvatarFallback>
                                </Avatar>
                                <span className="hidden md:block text-sm font-medium">
                                    Rahil
                                </span>
                            </div>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-44">
                            <DropdownMenuItem onClick={() => router.push("/profile")}>
                                <UserPen className="mr-2 h-4 w-4" />
                                Profile
                            </DropdownMenuItem>

                            <DropdownMenuItem onClick={() => router.push("/setting")}>
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                onClick={handleLogout}
                                className="text-red-500 focus:text-red-500"
                            >
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>
        </nav>
    )
}

export default Navbar