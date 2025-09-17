import IncomingParcel from "@/pages/receiver/IncomingParcel";
import ParcelHistory from "@/pages/receiver/ParcelHistory";
import ReceiverHome from "@/pages/receiver/ReceiverHome";
import type { ISidebarItems } from "@/types";

export const ReceiverSidebarItems: ISidebarItems[] = [
  {
    title: "dashboard",
    items: [
      {
        title: "receiver home",
        url: "/receiver/receiver-home",
        component: ReceiverHome
      },
      {
        title: "incoming",
        url: "/receiver/incoming-parcel",
        component: IncomingParcel
      },
      {
        title: "history",
        url: "/receiver/parcel-history",
        component: ParcelHistory
      },
    ],
  },
]
