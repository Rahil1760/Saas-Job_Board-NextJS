import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
export function ResumeHeadline() {
    return (
        <div className="w-full h-[500px] flex flex-col ">
            <Textarea placeholder="Resume Headline" className="w-full h-full border border-black rounded-xl" />
            <div className="flex justify-end mt-2">
                <Button className="w-32 cursor-pointer hover:bg-blue-700 p-4 rounded-sm space-x-2 font-semibold "><Brain className="text-white fill-white w-4 h-4" />Analyze with AI</Button>
                <Button className="w-20 cursor-pointer p-4 rounded-sm space-x-2 font-semibold">cancel</Button>
            </div>
        </div>
    )
}