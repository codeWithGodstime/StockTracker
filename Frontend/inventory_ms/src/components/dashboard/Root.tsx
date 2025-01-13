import { Outlet } from "react-router"
import { SidebarProvider } from "@/components/ui/sidebar"
import SidebarComponent from "@/components/dashboard/Sidebar"

const DashboardRoot = () => {
    return (
        <div className="bg-gray-300 min-h-screen grid grid-cols-1 md:grid-cols-[16rem_1fr]">
            <SidebarProvider className="hidden md:block">
                <SidebarComponent />
            </SidebarProvider>

            <main>
                <nav className="px-12 py-6 border-b w-full bg-white">
                    navigagion
                </nav>
                <div className="m-5">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default DashboardRoot