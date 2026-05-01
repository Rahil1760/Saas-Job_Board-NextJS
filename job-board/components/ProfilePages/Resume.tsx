import { TypographyH1, TypographyP } from "@/components/ui/Typography";
import { CloudUpload } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogContent, AlertDialogTrigger, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
export function Resume() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            console.log("File uploaded:", file);
            console.log("File name:", file.name);
        }
    };
    return (
        <>
            <div>
                <div className="w-full h-[500px] border border-black border-dashed rounded-md flex items-center justify-center p-10">
                    <div className="flex flex-col items-center space-y-2">
                        <CloudUpload size={64} className="text-blue-600 border border-blue-600 p-4 rounded-full cursor-pointer hover:scale-110 transition-all duration-300 hover:bg-blue-600 hover:text-white" onClick={() => { fileInputRef.current?.click() }} />
                        <TypographyH1>Upload Your Resume</TypographyH1>
                        <TypographyP>Supported formats: pdf, doc, docx</TypographyP>
                        <TypographyP>Maximum file size: 10mb</TypographyP>
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={(e) => handleFileUpload(e)}
                        />
                    </div>


                </div>
                <div className="mt-4 relative">


                    {/* if resume already there */}
                    <AlertDialog >
                        <AlertDialogTrigger asChild>
                            <div className="flex items-center space-x-2">
                                <TypographyP>Current Resume: </TypographyP>
                                <TypographyP>File name: </TypographyP>

                                <Button variant="ghost" className="text-blue-600">View</Button>
                            </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>

                            <AlertDialogTitle>Resume Preview</AlertDialogTitle>
                            <div className="relative"><p className="absolute -top-2 -right-2">X</p></div>
                            <img src="/" alt="No image is available" />


                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>

        </>

    )
}