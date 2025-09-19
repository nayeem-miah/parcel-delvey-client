import EditProfileDialog from "@/components/modules/authentication/EditProfileDialoug"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle
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




export default function ProfilePage() {
    const { data } = useUserInfoQuery(undefined, {
        refetchOnFocus: true,
        pollingInterval: 50000,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    })

    const user: IUser = data?.data

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold mb-2">My Professional Profile</h1>
                    <p className="text-lg ">Showcasing my skills, experience, and achievements</p>
                </div>

                {/* Profile Card */}
                <Card className="overflow-hidden shadow-xl border-0 ">
                    {/* Cover & Edit */}
                    <div className="relative">
                        <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                        <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
                            <Avatar className="h-28 w-28 border-4 border-white shadow-lg">
                                <AvatarFallback className="text-3xl font-bold">
                                    {user?.name?.charAt(0).toUpperCase()}
                                    <div className="absolute bottom-3 right-3.5 w-3 h-3 bg-green-500 border-2 rounded-full"></div>
                                </AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="absolute top-4 right-4">
                            <EditProfileDialog />
                        </div>
                    </div>

                    {/* Profile Info */}
                    <CardContent className="pt-20 text-center">
                        <CardTitle className="text-3xl font-bold mb-1">{user?.name}</CardTitle>
                        <CardDescription className=" capitalize mb-3">{user?.role}</CardDescription>
                        <Badge className={` bg-green-500 px-4 py-1 text-sm font-medium`}>
                            {user?.isActive}
                        </Badge>

                        {/* Profile Details */}
                        <div className="mt-8 grid gap-6 md:grid-cols-2">
                            <DetailItem icon={<Mail className="h-5 w-5 text-blue-600" />} label="Email" value={user?.email} />
                            <DetailItem icon={<Phone className="h-5 w-5 text-green-600" />} label="Phone" value={user?.phone || "Not provided"} />
                            <DetailItem icon={<MapPin className="h-5 w-5 text-purple-600" />} label="Address" value={user?.address || "Not provided"} />
                            <DetailItem icon={<Shield className="h-5 w-5 text-orange-600" />} label="Role" value={user?.role} />
                            <DetailItem icon={<Calendar className="h-5 w-5 text-indigo-600" />} label="Member Since" value={new Date(user?.createdAt).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            })} />
                            <DetailItem icon={<Calendar className="h-5 w-5 text-indigo-600" />} label="profile last update" value={new Date(user?.updatedAt).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            })} />
                        </div>



                        {/* Profile Progress */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold mb-2">Profile Completeness</h3>

                            {(() => {

                                const requiredFields = [
                                    user?.name,
                                    user?.email,
                                    user?.phone,
                                    user?.address,
                                    user?.role,
                                ];


                                const completedFields = requiredFields.filter(Boolean).length;
                                const totalFields = requiredFields.length;


                                const progress = Math.round((completedFields / totalFields) * 100);

                                return (
                                    <div>
                                        <div className="w-full bg-gray-200 rounded-full h-4">
                                            <div
                                                className="bg-green-500 h-4 rounded-full transition-all duration-500"
                                                style={{ width: `${progress}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-2">
                                            {progress}% Complete
                                        </p>
                                    </div>
                                );
                            })()}
                        </div>

                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
