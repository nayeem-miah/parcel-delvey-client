import EditProfileDialog from "@/components/modules/authentication/EditProfileDialoug"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useUserInfoQuery } from "@/redux/features/auth/authApi"
import type { IUser } from "@/types"
import { DetailItem } from "@/utils/Reusable"
import {
    Calendar,
    Mail,
    MapPin,
    Phone,
    Shield
} from "lucide-react"


const statusColors: Record<string, string> = {
    ACTIVE: "bg-green-100 text-green-800 border-green-300",
    INACTIVE: "bg-red-100 text-red-800 border-red-300",
}



export default function ProfilePage() {
    const { data } = useUserInfoQuery(undefined, {
        refetchOnFocus: true,
        pollingInterval: 50000,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    })

    const user: IUser = data?.data



    return (
        <div className="min-h-screen y-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">Profile Dashboard</h1>
                    <p>Manage your personal information and settings</p>
                </div>

                <Card className="relative overflow-hidden border-0 shadow-2xl backdrop-blur-sm">
                    {/* Edit profile */}
                    <EditProfileDialog />

                    {/* Profile Header */}
                    <CardHeader className="text-center pb-6 pt-8">
                        <div className="relative inline-block mb-4">
                            <Avatar className="h-24 w-24 border-4 shadow-lg mx-auto">
                                <AvatarFallback className="text-2xl font-bold">
                                    {user?.name?.charAt(0).toUpperCase()}
                                    <div className="absolute bottom-3 right-2 w-4 h-4 bg-green-500 border-2 rounded-full"></div>
                                </AvatarFallback>
                            </Avatar>

                        </div>
                        <CardTitle className="text-3xl font-bold mb-2">{user?.name}</CardTitle>
                        <CardDescription className="text-lg text-gray-600 capitalize mb-3">{user?.role}</CardDescription>
                        <Badge className={`${statusColors[user?.isActive] || statusColors.default} px-3 py-1 text-sm font-medium`}>
                            {user?.isActive}
                        </Badge>
                    </CardHeader>

                    {/* Profile Details */}
                    <CardContent className="space-y-6 px-8 pb-8">
                        <div className="grid gap-4 lg:grid-cols-2 grid-cols-1 md:grid-cols-2">
                            <DetailItem icon={<Mail className="h-5 w-5 text-blue-600" />} label="Email Address" value={user?.email} />
                            <DetailItem icon={<Phone className="h-5 w-5 text-green-600" />} label="Phone Number" value={user?.phone || "Not provided"} />
                            <DetailItem icon={<MapPin className="h-5 w-5 text-purple-600" />} label="Address" value={user?.address} />
                            <DetailItem icon={<Shield className="h-5 w-5 text-orange-600" />} label="Role" value={user?.role} />
                            <DetailItem
                                icon={<Calendar className="h-5 w-5 text-indigo-600" />}
                                label="Member Since"
                                value={new Date(user?.createdAt).toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

