import { TypographyH1, TypographyP } from "@/components/ui/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const KeySkill = () => {
    const skillsArray = [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI"

    ]
    const [skills, setSkills] = useState<string[]>(skillsArray)
    const handleRemoveSkill = (skill: string) => {
        const filteredSkills = skills.filter((s) => s !== skill)
        setSkills(filteredSkills)
    }

    return (

        <div className="w-full h-[500px] flex flex-col">
            <div className="border border-black h-[350px] rounded-xl p-5 overflow-scroll">
                {
                    skills.map((skill) => {
                        return (
                            <div key={skill} className="inline-flex items-center  border border-black p-2 my-2 mr-2 rounded-lg cursor-pointer">
                                <TypographyP>{skill}</TypographyP>
                                <span className="ml-2 text-red-500 cursor-pointer" onClick={() => { handleRemoveSkill(skill) }}>X</span>

                            </div>
                        )
                    })
                }
            </div>

            <div className="flex justify-end mt-2 space-x-2">
                <Input placeholder="Enter skills" className="w-full h-10 rounded-sm" />
                <div className="flex">
                    <Button className="cursor-pointer w-20 hover:bg-blue-700 p-4 rounded-sm space-x-2 font-semibold h-10" >Add</Button>
                    <Button className="cursor-pointer w-20 p-4 rounded-sm space-x-2 font-semibold hover:bg-green-700 h-10 ">Save</Button>
                </div>
            </div>
        </div>
    )
}