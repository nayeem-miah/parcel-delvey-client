import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Users,
    Package,
    TrendingUp,
    Truck,
    ClipboardList,
} from "lucide-react"
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts"

const deliveryData = [
    { month: "Jan", deliveries: 400, revenue: 2400 },
    { month: "Feb", deliveries: 300, revenue: 2210 },
    { month: "Mar", deliveries: 500, revenue: 2290 },
    { month: "Apr", deliveries: 600, revenue: 2000 },
    { month: "May", deliveries: 800, revenue: 2500 },
]

export default function SectionCards() {
    return (
        <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Admin Dashboard</h2>
                <Button>Generate Report</Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <Card>
                    <CardHeader>
                        <CardDescription>Total Deliveries</CardDescription>
                        <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                            <Package className="h-5 w-5 text-primary" /> 12,340
                        </CardTitle>
                        <CardAction>
                            <Badge variant="outline" className="text-green-600">+8.5%</Badge>
                        </CardAction>
                    </CardHeader>
                    <CardFooter className="text-muted-foreground text-sm">
                        Compared to last month
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardDescription>Active Drivers</CardDescription>
                        <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                            <Truck className="h-5 w-5 text-primary" /> 254
                        </CardTitle>
                        <CardAction>
                            <Badge variant="outline" className="text-green-600">+12%</Badge>
                        </CardAction>
                    </CardHeader>
                    <CardFooter className="text-muted-foreground text-sm">
                        More drivers onboarded
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardDescription>New Customers</CardDescription>
                        <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                            <Users className="h-5 w-5 text-primary" /> 1,540
                        </CardTitle>
                        <CardAction>
                            <Badge variant="outline" className="text-red-600">-5%</Badge>
                        </CardAction>
                    </CardHeader>
                    <CardFooter className="text-muted-foreground text-sm">
                        Slight drop this week
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardDescription>Revenue</CardDescription>
                        <CardTitle className="flex items-center gap-2 text-2xl font-semibold">
                            <TrendingUp className="h-5 w-5 text-primary" /> $45,320
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
            <Card>
                <CardHeader>
                    <CardDescription>Delivery & Revenue Trends</CardDescription>
                </CardHeader>
                <CardFooter>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={deliveryData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="deliveries" stroke="#0ea5e9" strokeWidth={2} />
                            <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </CardFooter>
            </Card>

            {/* Recent Activity */}
            <Card>
                <CardHeader>
                    <CardDescription>Recent Orders</CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-col gap-2 text-sm">
                    <div className="flex justify-between">
                        <span><ClipboardList className="inline-block h-4 w-4 mr-2" /> Order #1234</span>
                        <Badge variant="outline">Delivered</Badge>
                    </div>
                    <div className="flex justify-between">
                        <span><ClipboardList className="inline-block h-4 w-4 mr-2" /> Order #1235</span>
                        <Badge variant="outline">In Transit</Badge>
                    </div>
                    <div className="flex justify-between">
                        <span><ClipboardList className="inline-block h-4 w-4 mr-2" /> Order #1236</span>
                        <Badge variant="outline">Pending</Badge>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
