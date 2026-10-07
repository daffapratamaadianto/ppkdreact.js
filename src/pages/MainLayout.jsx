import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";

import AppNavbar from "../components/AppNavbar";
export default function MainLayout() {

    return (
        <SidebarProvider>

            <div className="flex flex-row  min-h-screen w-full bg-muted/20">

                <AppSidebar />
                <main className="flex-1 pb-6 bg-muted/20">
                    <header className="flex h-14 items-center gap-4 border-b bg-background px-4">
                        <SidebarTrigger />
                        <div className="text-sm font-medium text-muted-foreground">Dashboard</div>
                    </header>
                    <div className="flex-1 p-6">
                        <Outlet />

                    </div>

                </main>

                <footer className="bg-white border-top py-3 text-center text-muted mt-auto">
                    <small>&copy; {new Date().getFullYear()} develop by daffa</small>
                </footer>
            </div>

        </SidebarProvider>
    );
}