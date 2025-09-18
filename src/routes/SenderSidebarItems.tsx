import CreateParcel from "@/pages/sender/CreateParcel";
import MyParcel from "@/pages/sender/MyParcel";
import SenderHome from "@/pages/sender/SenderHome";
import type { ISidebarItems } from "@/types";

export const SenderSidebarItems: ISidebarItems[] = [
  {
    title: "dashboard",
    items: [
      {
        title: "sender home",
        url: "/sender",
        component: SenderHome
      },
      {
        title: "create parcel",
        url: "/sender/create-parcel",
        component: CreateParcel
      },
      {
        title: "my parcel",
        url: "/sender/my-parcel",
        component: MyParcel
      },
    ],
  },
]
