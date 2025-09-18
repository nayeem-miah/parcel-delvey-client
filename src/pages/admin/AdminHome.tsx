import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useAllUserQuery } from "@/redux/features/auth/authApi"
import { useAllParcelQuery } from "@/redux/features/parcel/parcelApi"
import type { IParcel } from "@/types"
import Loading from "@/utils/Loading"
import {
    Package,
    TrendingUp,
    Truck,
    Users
} from "lucide-react"


export default function AdminHome() {
    const { data, isLoading: parcelLoading } = useAllParcelQuery({
        pollingInterval: 50000,
        refetchOnFocus: true,
        refetchOnReconnect: true,
        refetchOnMountOrArgChange: true
    })
    const parcels = data?.data || []

    const { data: users, isLoading: usersLoading } = useAllUserQuery(undefined);

    //  calculate
    const totalRevenue = parcels.reduce((sum: number, parcel: IParcel) => sum + (parcel.fee || 0), 0)
    const totalDelivered = parcels.filter((p: IParcel) => p.currentStatus === "DELIVERED").length

    if (parcelLoading || usersLoading) return <Loading />

    return (
        <div>
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Admin Dashboard</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

                    <Card>
                        <CardHeader>
                            <CardDescription>Total Deliveries</CardDescription>
                            <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                                <Package className="h-5 w-5 text-primary" /> {totalDelivered}
                            </CardTitle>
                            <CardAction>
                                <Badge variant="outline" className="text-green-600">+{totalDelivered}</Badge>
                            </CardAction>
                        </CardHeader>
                        <CardFooter className="text-muted-foreground text-sm">
                            Compared to this year
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardDescription>Total parcels</CardDescription>
                            <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                                <Truck className="h-5 w-5 text-primary" /> {parcels?.length}
                            </CardTitle>
                            <CardAction>
                                <Badge variant="outline" className="text-green-600">100%</Badge>
                            </CardAction>
                        </CardHeader>
                        <CardFooter className="text-muted-foreground text-sm">
                            More parcels onboarded
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardDescription>Total Customers</CardDescription>
                            <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                                <Users className="h-5 w-5 text-primary" /> {users?.data?.length}
                            </CardTitle>
                            <CardAction>
                                <Badge variant="outline" className="text-green-600">+100%</Badge>
                            </CardAction>
                        </CardHeader>
                        <CardFooter className="text-muted-foreground text-sm">
                            Slight drop this year
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardDescription>Revenue</CardDescription>
                            <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                                <TrendingUp className="h-5 w-5 text-primary" /> ${totalRevenue}
                            </CardTitle>
                            <CardAction>
                                <Badge variant="outline" className="text-green-600">+15%</Badge>
                            </CardAction>
                        </CardHeader>
                        <CardFooter className="text-muted-foreground text-sm">
                            Revenue is increasing
                        </CardFooter>
                    </Card>
                </div>

                {/* Charts Section */}


                {/* resent delivary parcels */}
            </div>
        </div>
    )
}

