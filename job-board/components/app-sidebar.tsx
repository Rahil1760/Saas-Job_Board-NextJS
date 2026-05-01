"use client"
import { Separator } from "@/components/ui/separator"
import { Fragment } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Home, User, Bookmark, Lightbulb, TrendingUp, CheckSquare } from "lucide-react"

const items = [
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

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h2 className="text-xl font-bold text-primary">JobSeeker</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => (
                <Fragment key={`${item.title}-${index}`}>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {/* Only render separator if it's not the last item */}
                  {index < items.length - 1 && <Separator className="my-1" />}
                </Fragment>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 text-xs text-muted-foreground">
        © 2026 JobBoard Inc.
      </SidebarFooter>
    </Sidebar>
  )
}
