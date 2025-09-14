
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
import { Link } from "react-router"
import { ModeToggle } from "./mode-toggle"

// Navigation links array to be used in both desktop and mobile menus

const navigationLinks = [
    { href: "/", label: "Home", role: "public" },
    { href: "/about", label: "About", role: "public" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/contact", label: "Contact", role: "public" },
]


export default function Navbar() {


    return (
        <header className={"border-b px-4 md:px-6 pb-6"}>
            <div className="flex h-16 items-center justify-between gap-4">
                {/* Left side */}
                <div className="flex items-center gap-2">
                    {/* Mobile menu trigger */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                className="group size-8 md:hidden"
                                variant="ghost"
                                size="icon"
                            >
                                <svg
                                    className="pointer-events-none"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 12L20 12"
                                        className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                                    />
                                    <path
                                        d="M4 12H20"
                                        className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                                    />
                                    <path
                                        d="M4 12H20"
                                        className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                                    />
                                </svg>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-36 p-1 md:hidden">
                            <NavigationMenu className="max-w-none *:w-full">
                                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                                    {navigationLinks.map((link, index) => (
                                        <div key={index}>
                                            {
                                                link.role === "public" && (
                                                    <NavigationMenuItem
                                                        className="w-full"
                                                    >
                                                        <NavigationMenuLink
                                                            asChild
                                                            href={link.href}
                                                            className="py-1.5"
                                                        >
                                                            <Link to={link.href}>{link.label}</Link>
                                                        </NavigationMenuLink>
                                                    </NavigationMenuItem>)
                                            }
                                            {/* {
                                                link.role === user?.role &&
                                                (<NavigationMenuItem key={index} className="w-full">
                                                    <NavigationMenuLink
                                                        asChild
                                                        href={link.href}
                                                        className="py-1.5"
                                                    >
                                                        <Link href={link.href}>{link.label}</Link>
                                                    </NavigationMenuLink>
                                                </NavigationMenuItem>)
                                            } */}

                                        </div>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </PopoverContent>
                    </Popover>
                    {/* Main nav */}
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-primary hover:text-primary/90">
                            <Logo />
                        </a>
                        {/* Navigation menu */}
                        <NavigationMenu className="max-md:hidden">
                            <NavigationMenuList className="gap-2">
                                {navigationLinks.map((link, index = 0) => (
                                    <div key={index++}>
                                        {
                                            link.role === "public" && (
                                                <NavigationMenuItem
                                                    className="w-full"
                                                >
                                                    <NavigationMenuLink
                                                        asChild
                                                        href={link.href}
                                                        className="py-1.5"
                                                    >
                                                        <Link to={link.href}>{link.label}</Link>
                                                    </NavigationMenuLink>
                                                </NavigationMenuItem>)
                                        }
                                        {/* {
                                            link.role === user?.role &&
                                            (<NavigationMenuItem key={index} className="w-full">
                                                <NavigationMenuLink
                                                    asChild
                                                    href={link.href}
                                                    className="py-1.5"
                                                >
                                                    <Link href={link.href}>{link.label}</Link>
                                                </NavigationMenuLink>
                                            </NavigationMenuItem>)
                                        } */}

                                    </div>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
                {/* Right side */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">

                        <ModeToggle />
                    </div>
                    {/* User menu */}
                    <UserMenu />
                </div>
            </div>
        </header>
    )
}

