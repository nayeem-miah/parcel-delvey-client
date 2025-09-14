/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  LogIn,
  LogOutIcon
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router"


export default function UserMenu({ user }: any) {

  const logout = async () => {
    try {

      // toast.success("logout success")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage src={user?.avatar || "./avatar.jpg"} alt="Profile image" />
            <AvatarFallback>{user?.name?.[0] || "ME"}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64 p-2" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            {user?.name || "Guest"}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {user?.email || "Not logged in"}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {user ? (
          <DropdownMenuItem>
            <Button className="w-full"
              onClick={logout}
            >
              <LogOutIcon size={16} className="opacity-60 " aria-hidden="true" />
              <span>Logout</span></Button>
          </DropdownMenuItem>
        ) : (
          <Link to={'/login'} className="flex items-center gap-3">
            <DropdownMenuItem>
              <LogIn size={16} className="opacity-60" aria-hidden="true" />
              <span>Login</span>
            </DropdownMenuItem>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}