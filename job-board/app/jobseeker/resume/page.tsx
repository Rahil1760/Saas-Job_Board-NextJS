'use client'

import React, { useState } from 'react'
import { 
  FileText, 
  Upload, 
  Download, 
  Trash2, 
  Eye, 
  CheckCircle2, 
  Clock,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TypographyH1, TypographyH3, TypographyP, TypographyMuted } from "@/components/ui/Typography"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export default function ResumePage() {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<{ name: string, size: string, date: string } | null>({
    name: "John_Doe_Frontend_Resume.pdf",
    size: "1.2 MB",
    date: "Oct 24, 2023"
  })

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile({
        name: droppedFile.name,
        size: (droppedFile.size / (1024 * 1024)).toFixed(1) + " MB",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      })
      toast.success("Resume uploaded successfully!")
    } else {
      toast.error("Please upload a PDF file.")
    }
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-6xl space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm tracking-wide uppercase">
            <FileText size={16} />
            <span>JobSeeker Profile</span>
          </div>
          <TypographyH1 className="text-4xl md:text-5xl font-black tracking-tight">
            Resume <span className="text-slate-400">Management</span>
          </TypographyH1>
          <TypographyP className="text-muted-foreground text-lg max-w-2xl">
            Upload and optimize your resume to stand out from the crowd and land your dream job.
          </TypographyP>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-11 px-6 rounded-full border-2 hover:bg-slate-50 transition-colors">
            <Eye size={18} className="mr-2" /> Preview
          </Button>
          <Button className="h-11 px-6 rounded-full bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 dark:shadow-none transition-all hover:scale-105 active:scale-95">
            <Sparkles size={18} className="mr-2" /> AI Optimizer
          </Button>
        </div>
      </div>

      <Separator className="bg-slate-200 dark:bg-slate-800" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Active Resume Card */}
          {file ? (
            <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 overflow-hidden ring-1 ring-slate-100 dark:ring-slate-800">
              <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-bold">Active Resume</CardTitle>
                  <CardDescription>This is the resume recruiters will see</CardDescription>
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Active
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center gap-5 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 transition-all hover:border-indigo-100 dark:hover:border-indigo-900 group">
                  <div className="w-16 h-16 rounded-xl bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center text-indigo-600 ring-1 ring-slate-200 dark:ring-slate-700 group-hover:scale-110 transition-transform">
                    <FileText size={32} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold truncate text-slate-900 dark:text-white">{file.name}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock size={14} /> {file.date}
                      </span>
                      <span className="text-sm text-muted-foreground">{file.size}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-white dark:hover:bg-slate-800 hover:text-indigo-600">
                      <Download size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-white dark:hover:bg-slate-800 hover:text-red-600" onClick={() => setFile(null)}>
                      <Trash2 size={20} />
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-slate-50/50 dark:bg-slate-800/30 border-t-0 py-4 px-6 flex justify-between items-center">
                 <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                   <Info size={14} />
                   Last modified 2 days ago
                 </div>
                 <Button variant="link" className="text-indigo-600 text-xs p-0 h-auto font-bold group">
                   Replace file <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                 </Button>
              </CardFooter>
            </Card>
          ) : (
            /* Empty State / Upload Area */
            <Card 
              className={cn(
                "border-2 border-dashed transition-all duration-300 cursor-pointer group",
                isDragging ? "border-indigo-500 bg-indigo-50/50" : "border-slate-200 hover:border-indigo-400 hover:bg-slate-50/50"
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <CardContent className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all mb-6">
                  <Upload size={36} className="group-hover:animate-bounce" />
                </div>
                <TypographyH3 className="text-2xl font-bold mb-2">Upload your resume</TypographyH3>
                <TypographyP className="text-muted-foreground max-w-sm mb-8">
                  Recruiters prefer PDF files. Drag and drop your file here or click the button below.
                </TypographyP>
                <input 
                  type="file" 
                  id="resume-upload-main" 
                  className="hidden" 
                  accept=".pdf"
                  onChange={(e) => {
                    const selectedFile = e.target.files?.[0]
                    if (selectedFile) {
                        setFile({
                            name: selectedFile.name,
                            size: (selectedFile.size / (1024 * 1024)).toFixed(1) + " MB",
                            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                        })
                    }
                  }}
                />
                <Button asChild className="px-8 h-12 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900">
                  <label htmlFor="resume-upload-main" className="cursor-pointer">
                    Browse Computer
                  </label>
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Analysis Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Card className="border-none shadow-lg shadow-slate-100 dark:shadow-none bg-white dark:bg-slate-900 ring-1 ring-slate-100 dark:ring-slate-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-bold uppercase tracking-wider text-slate-500">ATS Optimization</CardTitle>
                    <CheckCircle2 size={18} className="text-green-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-end justify-between">
                    <span className="text-4xl font-black text-slate-900 dark:text-white">84%</span>
                    <span className="text-green-600 font-bold text-sm bg-green-50 px-2 py-0.5 rounded flex items-center">+5% <span className="ml-1 text-[10px]">vs last week</span></span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full w-[84%] rounded-full shadow-[0_0_10px_rgba(79,70,229,0.4)]" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Your resume is highly readable by Applicant Tracking Systems. 
                    <span className="text-indigo-600 font-semibold cursor-pointer hover:underline ml-1">View details</span>
                  </p>
                </CardContent>
             </Card>

             <Card className="border-none shadow-lg shadow-slate-100 dark:shadow-none bg-white dark:bg-slate-900 ring-1 ring-slate-100 dark:ring-slate-800">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-bold uppercase tracking-wider text-slate-500">Recruiter Views</CardTitle>
                    <Eye size={18} className="text-blue-500" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-end justify-between">
                    <span className="text-4xl font-black text-slate-900 dark:text-white">124</span>
                    <span className="text-blue-600 font-bold text-sm bg-blue-50 px-2 py-0.5 rounded flex items-center">Popular</span>
                  </div>
                  <div className="flex gap-1 h-12 items-end">
                    {[30, 45, 25, 60, 40, 75, 55].map((h, i) => (
                      <div key={i} className="flex-1 bg-blue-100 dark:bg-blue-900/30 rounded-t-sm transition-all hover:bg-blue-500" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Your resume was viewed by 12 companies this week.
                  </p>
                </CardContent>
             </Card>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          {/* Premium CTA */}
          <Card className="bg-indigo-900 text-white border-none shadow-2xl shadow-indigo-200 dark:shadow-none overflow-hidden relative group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-400/30 transition-colors" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-xl flex items-center gap-2">
                <Sparkles size={24} className="text-yellow-400 animate-pulse" />
                Go Premium
              </CardTitle>
              <CardDescription className="text-indigo-200">
                Get ahead with AI-powered insights
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4 pt-0">
              <ul className="space-y-3">
                {[
                  "Unlimited AI Resume Rewrites",
                  "Industry Keyword Analysis",
                  "Direct Access to Top Recruiters"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-indigo-100">
                    <CheckCircle2 size={16} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-white text-indigo-900 hover:bg-indigo-50 font-bold py-6 rounded-xl shadow-lg">
                Upgrade Now
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-none shadow-md bg-white dark:bg-slate-900 ring-1 ring-slate-100 dark:ring-slate-800">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-2 space-y-1">
              <Button variant="ghost" className="w-full justify-between hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 group px-4 py-6 h-auto">
                <div className="flex items-center gap-3">
                   <div className="p-2 rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-100 transition-colors">
                     <ExternalLink size={20} />
                   </div>
                   <div className="text-left">
                     <p className="font-bold">Digital Profile</p>
                     <p className="text-xs text-muted-foreground">Shareable link</p>
                   </div>
                </div>
                <ChevronRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="ghost" className="w-full justify-between hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 group px-4 py-6 h-auto">
                <div className="flex items-center gap-3">
                   <div className="p-2 rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-100 transition-colors">
                     <FileText size={20} />
                   </div>
                   <div className="text-left">
                     <p className="font-bold">Resume Builder</p>
                     <p className="text-xs text-muted-foreground">Create from scratch</p>
                   </div>
                </div>
                <ChevronRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Tips Section */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-4 shadow-xl">
             <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Info size={24} className="text-indigo-400" />
             </div>
             <h4 className="font-bold text-lg leading-tight">Pro Tip: Keep it under 2 pages</h4>
             <p className="text-slate-400 text-sm leading-relaxed">
               Most recruiters spend less than 10 seconds glancing at a resume. Make yours concise and impactful.
             </p>
             <div className="pt-2">
               <span className="text-indigo-400 text-sm font-bold cursor-pointer hover:underline">Read more articles →</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
