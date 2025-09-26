import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import { Outlet } from "react-router";
import { Helmet } from "react-helmet-async";

export default function DashboardLayout() {
    return (
        <SidebarProvider>
            <Helmet>
                <title>Dashboard | GoParcel Delivery</title>
                <meta name="description" content="Manage your parcels, bookings, and track deliveries in the dashboard." />
            </Helmet>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />

                    </div>
                </header>
                <div className="ml-2">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
