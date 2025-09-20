import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { role } from "@/constants/role";
import About from "@/pages/About";
import AdminHome from "@/pages/admin/AdminHome";
import AllParcel from "@/pages/admin/AllParcel";
import AllUser from "@/pages/admin/AllUser";
import { Contact } from "@/pages/Contact";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import IncomingParcel from "@/pages/receiver/IncomingParcel";
import ParcelHistory from "@/pages/receiver/ParcelHistory";
import ReceiverHome from "@/pages/receiver/ReceiverHome";
import Register from "@/pages/Register";
import CreateParcel from "@/pages/sender/CreateParcel";
import MyParcel from "@/pages/sender/MyParcel";
import SenderHome from "@/pages/sender/SenderHome";
import Unauthorized from "@/pages/Unauthorized";
import type { TRole } from "@/types";
import { CheckAuth } from "@/utils/CheckAuth";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        Component: App,
        errorElement: <ErrorPage />,
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
            {
                path: "/profile",
                Component: Profile
            },
        ]
    },

    {
        path: "/admin",
        Component: CheckAuth(DashboardLayout, role.ADMIN as TRole),
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
        Component: CheckAuth(DashboardLayout, role.SENDER as TRole),
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
        Component: CheckAuth(DashboardLayout, role.RECEIVER as TRole),
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
    {
        Component: Unauthorized,
        path: "/unauthorized"
    },
])