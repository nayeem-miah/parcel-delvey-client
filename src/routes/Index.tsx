import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import AllUser from "@/pages/admin/AllUser";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import ReceivedParcel from "@/pages/receiver/ReceivedParcel";
import Register from "@/pages/Register";
import AllParcel from "@/pages/sender/AllParcel";
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
                path: "all-user",
                Component: AllUser
            }
        ]
    },

    {
        path: "/sender",
        Component: DashboardLayout,
        children: [
            {
                path: "all-parcel",
                Component: AllParcel
            }
        ]
    },
    {
        path: "/receiver",
        Component: DashboardLayout,
        children: [
            {
                path: "receive-parcel",
                Component: ReceivedParcel
            }
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