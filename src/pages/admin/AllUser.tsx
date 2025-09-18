/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useAllUserQuery } from "@/redux/features/auth/authApi"
import { useState } from "react"

export default function AllUser() {
    const { data, isLoading } = useAllUserQuery(undefined)
    const users = data?.data
    const [selectedUser, setSelectedUser] = useState<any>(null)
    const [open, setOpen] = useState(false)

    if (isLoading) return <div>Loading......</div>

    const handleDetailsClick = (user: any) => {
        setSelectedUser(user)
        setOpen(true)
    }

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
                            <TableHead>Details</TableHead>
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
                                    <Button size="sm" variant={"outline"} onClick={() => handleDetailsClick(user)}>
                                        Details
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Modal */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>User Details</DialogTitle>
                    </DialogHeader>
                    {selectedUser && (
                        <div className="space-y-2 mt-2">
                            <p>
                                <strong>Name:</strong> {selectedUser.name}
                            </p>
                            <p>
                                <strong>Email:</strong> {selectedUser.email}
                            </p>
                            <p>
                                <strong>Role:</strong>{" "}
                                <Badge
                                    variant="outline"
                                    className={
                                        selectedUser.role === "ADMIN"
                                            ? "text-purple-600 border-purple-600"
                                            : selectedUser.role === "SENDER"
                                                ? "text-blue-600 border-blue-600"
                                                : "text-green-600 border-green-600"
                                    }
                                >
                                    {selectedUser.role}
                                </Badge>
                            </p>
                            <p>
                                <strong>Status:</strong>{" "}
                                <Badge
                                    variant="outline"
                                    className={
                                        selectedUser.isActive === "ACTIVE"
                                            ? "text-green-600 border-green-600"
                                            : "text-red-600 border-red-600"
                                    }
                                >
                                    {selectedUser.isActive}
                                </Badge>
                            </p>
                            <p>
                                <strong>Phone:</strong> {selectedUser.phone || "N/A"}
                            </p>
                            <p>
                                <strong>Address:</strong> {selectedUser.address || "N/A"}
                            </p>
                            <p>
                                <strong>Created At:</strong>{" "}
                                {new Date(selectedUser.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
