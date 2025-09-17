import { role } from "@/constants/role";
import { AdminSidebarItems } from "@/routes/AdminSidebarItems";
import { ReceiverSidebarItems } from "@/routes/ReceiverSidebarItems";
import { SenderSidebarItems } from "@/routes/SenderSidebarItems";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
    switch (userRole) {
        case role.ADMIN:
            return [...AdminSidebarItems]

        case role.SENDER:
            return [...SenderSidebarItems]

        case role.RECEIVER:
            return [...ReceiverSidebarItems]

        default:
            return [];
    }
} 