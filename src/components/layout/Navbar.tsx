import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import UserMenu from "@/components/user-menu"
import { Link, useLocation } from "react-router"
import { ModeToggle } from "./mode-toggle"
import { useUserInfoQuery } from "@/redux/features/auth/authApi"
import { role } from "@/constants/role"
import clsx from "clsx"

const navigationLinks = [
    { href: "/", label: "Home", role: "public" },
    { href: "/about", label: "About", role: "public" },
    { href: "/admin", label: "Dashboard", role: role.ADMIN },
    { href: "/sender", label: "Dashboard", role: role.SENDER },
    { href: "/receiver", label: "Dashboard", role: role.RECEIVER },
    { href: "/contact", label: "Contact", role: "public" },
]

export default function Navbar() {
    const { data } = useUserInfoQuery(undefined)
    const userRole = data?.data?.role
    const location = useLocation()

    const isActive = (path: string) => location.pathname === path

    return (
        <header className="border-b bg-background/70 backdrop-blur-md sticky top-0 z-50 px-4 md:px-6">
            <div className="flex h-16 items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden rounded-lg"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent
                            align="start"
                            className="w-44 p-2 md:hidden rounded-xl shadow-lg"
                        >
                            <NavigationMenu className="w-full">
                                <NavigationMenuList className="flex-col items-start gap-1">
                                    {navigationLinks.map(
                                        (link, index) =>
                                            (link.role === "public" || link.role === userRole) && (
                                                <NavigationMenuItem key={index} className="w-full">
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            to={link.href}
                                                            className={clsx(
                                                                "block w-full rounded-md px-3 py-2 text-sm transition-colors",
                                                                isActive(link.href)
                                                                    ? "text-primary underline decoration-2 underline-offset-4"
                                                                    : "text-muted-foreground hover:text-foreground"
                                                            )}
                                                        >
                                                            {link.label}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </NavigationMenuItem>
                                            )
                                    )}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </PopoverContent>
                    </Popover>

                    {/* Logo */}
                    <Link
                        to="/"
                        className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg shadow-sm hover:scale-105 transition-transform"
                    >
                        <Logo />
                    </Link>

                    {/* Desktop Menu */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList className="gap-4">
                            {navigationLinks.map(
                                (link, index) =>
                                    (link.role === "public" || link.role === userRole) && (
                                        <NavigationMenuItem key={index}>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    to={link.href}
                                                    className={clsx(
                                                        "text-sm font-medium px-3 py-2 rounded-md transition-colors",
                                                        isActive(link.href)
                                                            ? "text-primary underline decoration-2 underline-offset-4"
                                                            : "text-muted-foreground hover:text-foreground"
                                                    )}
                                                >
                                                    {link.label}
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    )
                            )}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3">
                    <ModeToggle />
                    <UserMenu />
                </div>
            </div>
        </header>
    )
}
