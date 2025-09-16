
import {
  LogIn,
  LogInIcon,
  LogOutIcon,
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
import { toast } from "sonner"
import { useUserInfoQuery } from "@/redux/features/auth/authApi"

export default function UserMenu() {
  const { data } = useUserInfoQuery(undefined)
  const user = data?.data
  console.log(user);

  const logout = async () => {
    try {
      toast.success("Logout success ✅")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DropdownMenu>
      {/* Trigger Button */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-10 w-10 rounded-full p-0 hover:ring-2 hover:ring-primary transition-all"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={user?.avatar || "./avatar.jpg"}
              alt="Profile image"
              className="object-cover"
            />
            <AvatarFallback className="bg-primary/10 text-primary">
              {user?.name?.[0]?.toUpperCase() || "?"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown Content */}
      <DropdownMenuContent
        className="w-56 rounded-2xl shadow-lg p-2"
        align="end"
      >
        {/* User Info */}
        <DropdownMenuLabel className="flex flex-col gap-1">
          <span className="text-sm font-semibold truncate">
            {user?.name || "Guest User"}
          </span>
          <span className="text-xs text-muted-foreground truncate">
            {user?.email || "Not logged in"}
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {user ? (
          <>
            <DropdownMenuItem asChild>
              <Button
                variant="outline"
                className="w-full flex justify-start gap-2"
                onClick={logout}
              >
                <LogOutIcon size={16} className="opacity-70" />
                Logout
              </Button>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link
                to="/login"
                className="flex items-center gap-2 px-2 py-1.5 w-full rounded-lg hover:bg-accent transition"
              >
                <LogIn size={16} className="opacity-70" />
                <span>Login</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                to="/register"
                className="flex items-center gap-2 px-2 py-1.5 w-full rounded-lg hover:bg-accent transition"
              >
                <LogInIcon size={16} className="opacity-70" />
                <span>Register</span>
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
