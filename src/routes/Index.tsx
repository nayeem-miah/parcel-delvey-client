import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import AdminHome from "@/pages/admin/AdminHome";
import AllParcel from "@/pages/admin/AllParcel";
import AllUser from "@/pages/admin/AllUser";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import IncomingParcel from "@/pages/receiver/IncomingParcel";
import ParcelHistory from "@/pages/receiver/ParcelHistory";
import ReceiverHome from "@/pages/receiver/ReceiverHome";
import Register from "@/pages/Register";
import CreateParcel from "@/pages/sender/CreateParcel";
import MyParcel from "@/pages/sender/MyParcel";
import SenderHome from "@/pages/sender/SenderHome";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "about",
                Component: About
            },
            {
                path: "/contact",
                Component: Contact
            },
        ]
    },

    {
        path: "/admin",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                // path: "admin-home",
                Component: AdminHome
            },
            {
                path: "all-parcel",
                Component: AllParcel
            },
            {
                path: "all-user",
                Component: AllUser
            },
        ]
    },

    {
        path: "/sender",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                Component: SenderHome
            },
            {
                path: "create-parcel",
                Component: CreateParcel
            },
            {
                path: "my-parcel",
                Component: MyParcel
            }
        ]
    },
    {
        path: "/receiver",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                // path: "receiver-home",
                Component: ReceiverHome
            },
            {
                path: "incoming-parcel",
                Component: IncomingParcel
            },
            {
                path: "parcel-history",
                Component: ParcelHistory
            },
        ]
    },

    {
        Component: Login,
        path: "/login"
    },
    {
        Component: Register,
        path: "/register"
    },
])