import AdminHome from "@/pages/admin/AdminHome";
import AllParcel from "@/pages/admin/AllParcel";
import AllUser from "@/pages/admin/AllUser";
import type { ISidebarItems } from "@/types";

export const AdminSidebarItems: ISidebarItems[] = [
    {
        title: "dashboard",
        items: [
            {
                title: "admin home",
                url: "/admin/admin-home",
                component: AdminHome
            },
            {
                title: "all parcel",
                url: "/admin/all-parcel",
                component: AllParcel
            },
            {
                title: "all user",
                url: "/admin/all-user",
                component: AllUser
            },
        ],
    },
]
