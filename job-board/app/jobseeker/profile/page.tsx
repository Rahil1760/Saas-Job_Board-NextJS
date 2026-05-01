'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Pen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypographyH1, TypographyP } from "@/components/ui/Typography"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { Home, User, Bookmark, Lightbulb, TrendingUp, CheckSquare } from "lucide-react"
import { Resume } from "@/components/ProfilePages/Resume"
import { ResumeHeadline } from "@/components/ProfilePages/ResumeHeadline"
import { KeySkill } from "@/components/ProfilePages/KeySkill"
import { EmployementDetails } from "@/components/ProfilePages/EmployementDetails"
import { EducationDetails } from "@/components/ProfilePages/EducationDetails"
import { ItSkill } from "@/components/ProfilePages/ItSkill"
import { Projects } from "@/components/ProfilePages/Projects"
import { Accomplishment } from "@/components/ProfilePages/Accomplishment"
import { CareerProfile } from "@/components/ProfilePages/CareerProfile"
import { Certifications } from "@/components/ProfilePages/Certifications"
import { Languages } from "@/components/ProfilePages/Languages"
import { LinksAndPortfolio } from "@/components/ProfilePages/LinksAndPortfolio"
import { PersonalDetails } from "@/components/ProfilePages/PersonalDetails"
import { useRouter } from "next/navigation"
export default function ProfilePage() {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState("Resume");
    const listArray = [
        {
            title: "Resume",
            url: "/jobseeker/resume",
            icon: User,
        },
        {
            title: "Resume headline",
            url: "/jobseeker/resume-headline",
            icon: Home,
        },
        {
            title: "Key skill",
            url: "/jobseeker/key-skills",
            icon: Bookmark,
        },
        {
            title: "Employement details",
            url: "/jobseeker/employment-details",
            icon: Lightbulb,
        },
        {
            title: "Education details",
            url: "/jobseeker/education-details",
            icon: TrendingUp,
        },
        {
            title: "IT Skill",
            url: "/jobseeker/skill-assesment",
            icon: CheckSquare,
        },
        {
            title: "Projects",
            url: "/jobseeker/projects",
            icon: CheckSquare,
        },
        {
            title: "Profile Summary",
            url: "/jobseeker/profile-summary",
            icon: CheckSquare,
        },
        {
            title: "Accomplishment",
            url: "/jobseeker/accomplishment",
            icon: CheckSquare,
        },
        {
            title: "Career Profile",
            url: "/jobseeker/career-profile",
            icon: CheckSquare,
        },
        {
            title: "Certifications",
            url: "/jobseeker/certifications",
            icon: CheckSquare,
        },
        {
            title: "Languages",
            url: "/jobseeker/languages",
            icon: CheckSquare,
        },
        {
            title: "Links & Portfolio",
            url: "/jobseeker/links-portfolio",
            icon: CheckSquare,
        },
        {
            title: "Personal Details",
            url: "/jobseeker/personal-details",
            icon: CheckSquare,
        },
    ]
    return (
        <div>

            <div className="flex space-x-8  border border-black rounded-md shadow-md shadow-black/20 min-w-fit min-h-fit w-11/12  mx-auto justify-center p-10 mb-10">
                <div className="flex items-center space-x-2">
                    <Avatar className="w-24 h-24 relative">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                        <Button variant="outline" className="absolute -bottom-2 -right-1 rounded-full border-none" ><Pen size={22} /></Button>
                    </Avatar>
                    <Separator orientation="vertical" className="bg-black w-0.5 h-24" />
                </div>
                {/*  Seprate*/}
                <div className="flex flex-col">
                    <div>
                        <TypographyH1>John Doe</TypographyH1>
                        <TypographyP>Frontend Developer</TypographyP>
                    </div>
                    <Separator orientation="horizontal" className="bg-black w-full h-0.5 rounded-md" />
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint vel voluptatibus asperiores nulla dignissimos natus at aliquam molestiae magni maxime!
                    </div>
                </div>
            </div>

            {/* Other details */}
            <div className="flex space-x-8 p-8 border border-black rounded-md shadow-md shadow-black/20 min-w-fit min-h-fit w-11/12 mx-auto">
                {/* Sidebar */}
                <div className="w-52 h-auto border border-black rounded-md p-4 space-y-2 cursor-pointer">
                    {listArray.map((item) => (
                        <div key={item.title}>
                            <Button variant="ghost" className="w-full h-full bg-none" onClick={() => setActiveItem(item.title)}>{item.title}</Button>
                            <Separator orientation="horizontal" className="bg-black w-full h-0.5 rounded-md" />
                        </div>
                    ))}
                </div>
                {/* Main content */}
                <div className="w-full h-full">
                    {
                        activeItem === "Resume" && <Resume />
                    }
                    {
                        activeItem === "Resume headline" && <ResumeHeadline />
                    }
                    {
                        activeItem === "Key skill" && <KeySkill />
                    }
                    {
                        activeItem === "Employement details" && <EmployementDetails />
                    }
                    {
                        activeItem === "Education details" && <EducationDetails />
                    }
                    {
                        activeItem === "IT Skill" && <ItSkill />
                    }
                    {
                        activeItem === "Projects" && <Projects />
                    }
                    {
                        activeItem === "Profile Summary" && <Accomplishment />
                    }
                    {
                        activeItem === "Accomplishment" && <Accomplishment />
                    }
                    {
                        activeItem === "Career Profile" && <CareerProfile />
                    }
                    {
                        activeItem === "Certifications" && <Certifications />
                    }
                    {
                        activeItem === "Languages" && <Languages />
                    }
                    {
                        activeItem === "Links & Portfolio" && <LinksAndPortfolio />
                    }
                    {
                        activeItem === "Personal Details" && <PersonalDetails />
                    }
                </div>
            </div>
        </div>
    )
}