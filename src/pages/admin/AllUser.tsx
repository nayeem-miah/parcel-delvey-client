/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAllUserQuery } from "@/redux/features/auth/authApi"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function AllUser() {
    const { data, isLoading } = useAllUserQuery(undefined)
    const users = data?.data

    if (isLoading) return <div>Loading......</div>

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">👥 All Users</h2>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>Created At</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users?.map((user: any) => (
                            <TableRow key={user._id}>
                                <TableCell className="font-medium">{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant="outline"
                                        className={
                                            user.role === "ADMIN"
                                                ? "text-purple-600 border-purple-600"
                                                : user.role === "SENDER"
                                                    ? "text-blue-600 border-blue-600"
                                                    : "text-green-600 border-green-600"
                                        }
                                    >
                                        {user.role}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        variant="outline"
                                        className={
                                            user.isActive === "ACTIVE"
                                                ? "text-green-600 border-green-600"
                                                : "text-red-600 border-red-600"
                                        }
                                    >
                                        {user.isActive}
                                    </Badge>
                                </TableCell>
                                <TableCell>{user.phone || "N/A"}</TableCell>
                                <TableCell>{user.address || "N/A"}</TableCell>
                                <TableCell>
                                    {new Date(user.createdAt).toLocaleDateString()}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
