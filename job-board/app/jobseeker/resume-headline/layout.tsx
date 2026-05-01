
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full h-full overflow-auto">
                <SidebarTrigger />
                <div className="min-w-0 flex-1 overflow-auto">
                    {children}
                </div>
            </main>
        </SidebarProvider>
    )
}
