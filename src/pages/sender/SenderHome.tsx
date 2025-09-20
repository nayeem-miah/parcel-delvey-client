
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
import { useMyParcelQuery } from "@/redux/features/parcel/parcelApi"
import type { IParcel } from "@/types"
import Loading from "@/utils/Loading"
import {
    Package,
    Truck
} from "lucide-react"
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"


export default function SenderHome() {
    const { data, isLoading: parcelLoading } = useMyParcelQuery({
        pollingInterval: 50000,
        refetchOnFocus: true,
        refetchOnReconnect: true,
        refetchOnMountOrArgChange: true
    })
    const parcels = data?.data || []
    // console.log(parcels);



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


    if (parcelLoading) return <Loading />

    return (
        <div>
            <div className=" space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Sender Dashboard</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">

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
                            Compared to site
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
                </div>
            </div>

            {/* Charts Section */}
            <div className="mt-5">
                {/* Pie Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>Delivery Status</CardTitle>
                        <CardDescription>Delivered,Pending, Requested, Dispatched</CardDescription>
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
            </div>
        </div>
    )
}

