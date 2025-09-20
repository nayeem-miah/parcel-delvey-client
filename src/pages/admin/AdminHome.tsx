/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardContent,
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
import { CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"


export default function AdminHome() {
    const { data, isLoading: parcelLoading } = useAllParcelQuery({
        pollingInterval: 50000,
        refetchOnFocus: true,
        refetchOnReconnect: true,
        refetchOnMountOrArgChange: true
    })
    const parcels = data?.data || []
    // console.log(parcels);

    const { data: users, isLoading: usersLoading } = useAllUserQuery(undefined);

    //  calculate
    const totalRevenue = parcels.reduce((sum: number, parcel: IParcel) => sum + (parcel.fee || 0), 0)

    const totalDelivered = parcels.filter((p: IParcel) => p.currentStatus === "DELIVERED").length
    const totalRequested = parcels.filter((p: IParcel) => p.currentStatus === "REQUESTED").length
    const totalApproved = parcels.filter((p: IParcel) => p.currentStatus === "APPROVED").length
    const totalDispatched = parcels.filter((p: IParcel) => p.currentStatus === "DISPATCHED").length
    const totalCanaled = parcels.filter((p: IParcel) => p.currentStatus === "CANCELLED").length

    //  calculate parentage 
    const calculateDeliveries = (totalDelivered / parcels?.length) * 100
    const deliveriesParentage = Math.ceil(calculateDeliveries)


    const deliveryData = [
        { name: "Requested", value: totalRequested },
        { name: "Approved", value: totalApproved },
        { name: "Dispatched", value: totalDispatched },
        { name: "Delivered", value: totalDelivered },
        { name: "Canceled", value: totalCanaled },
    ]

    const COLORS = ["#4f46e5", "#22c55e", "#f59e0b", "#22c55e", "#ef4444"]

    const monthlyRevenue = parcels.reduce((acc: any, parcel: IParcel) => {
        const month = new Date(parcel.createdAt).toLocaleString("default", {
            month: "short",
        })
        acc[month] = (acc[month] || 0) + (parcel.fee || 0)
        return acc
    }, {})

    const lineData = Object.keys(monthlyRevenue).map((month) => ({
        month,
        revenue: monthlyRevenue[month],
    }))


    if (parcelLoading || usersLoading) return <Loading />

    return (
        <div>
            <div className=" space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between ">
                    <h2 className="text-2xl font-bold">Admin Dashboard</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">

                    <Card>
                        <CardHeader>
                            <CardDescription>Total Deliveries</CardDescription>
                            <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                                <Package className="h-5 w-5 text-primary" /> {totalDelivered}
                            </CardTitle>
                            <CardAction>
                                <Badge variant="outline" className="text-green-600">{deliveriesParentage}%</Badge>
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
                                <Badge variant="outline" className="text-green-600">+100%</Badge>
                            </CardAction>
                        </CardHeader>
                        <CardFooter className="text-muted-foreground text-sm">
                            Revenue is increasing
                        </CardFooter>
                    </Card>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                {/* Pie Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>Delivery Status</CardTitle>
                        <CardDescription>Delivered vs Pending</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={deliveryData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    label
                                >
                                    {deliveryData.map((_, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Line Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>Monthly Revenue</CardTitle>
                        <CardDescription>Revenue growth over months</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={lineData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#4f46e5"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

