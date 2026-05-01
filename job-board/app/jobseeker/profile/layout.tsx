import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex flex-col flex-1 w-full min-h-screen overflow-hidden bg-background">
                <div className="flex items-center p-4 md:px-8 md:pt-6">
                    <SidebarTrigger />
                </div>
                <div className="flex-1 min-w-0 overflow-y-auto px-4 md:px-8 pb-8">
                    {children}
                </div>
            </main>
        </SidebarProvider>
    )
}