/* eslint-disable @typescript-eslint/no-explicit-any */


import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useAllParcelQuery } from "@/redux/features/parcel/parcelApi"
import type { IParcel } from "@/types"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

export default function AllParcel() {
    const [statusFilter, setStatusFilter] = useState<string>("ALL")
    const [page, setPage] = useState<number>(1)
    const limit = 10

    const { data, isLoading } = useAllParcelQuery({
        page,
        limit,
        filter: statusFilter !== "ALL" ? statusFilter : undefined
    })
    const parcels = data?.data || []
    const meta = data?.meta

    if (isLoading) return <div>loading.........</div>

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">📦 All Parcels</h2>
                {/* Filter */}
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="ALL">All</SelectItem>
                        <SelectItem value="REQUESTED">Requested</SelectItem>
                        <SelectItem value="APPROVED">Approved</SelectItem>
                        <SelectItem value="DISPATCHED">Dispatched</SelectItem>
                        <SelectItem value="DELIVERED">Delivered</SelectItem>
                        <SelectItem value="CANCELLED">Cancelled</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            {parcels.length === 0 ? (<div> not found parcels</div>) :
                (<div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Tracking ID</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {parcels && parcels.length > 0 && parcels.map((parcel: IParcel) => (
                                <TableRow key={parcel._id}>
                                    <TableCell className="font-medium">{parcel.tracking_id}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="outline"
                                            className={
                                                parcel.currentStatus === "DELIVERED"
                                                    ? "text-green-600 border-green-600"
                                                    : parcel.currentStatus === "CANCELLED"
                                                        ? "text-red-600 border-red-600"
                                                        : "text-blue-600 border-blue-600"
                                            }
                                        >
                                            {parcel.currentStatus}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" size="sm">
                                                    Details
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="max-w-lg">
                                                <DialogHeader>
                                                    <DialogTitle>Parcel Details</DialogTitle>
                                                    <DialogDescription>
                                                        Tracking ID: {parcel.tracking_id}
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="space-y-3 text-sm">
                                                    {/* Sender */}
                                                    <div>
                                                        <h4 className="font-semibold">Sender</h4>
                                                        <p>
                                                            {parcel.sender.name} ({parcel.sender.email})
                                                        </p>
                                                        <p>{parcel.sender.address}</p>
                                                        <p>📞 {parcel.senderPhone}</p>
                                                    </div>
                                                    {/* Receiver */}
                                                    <div>
                                                        <h4 className="font-semibold">Receiver</h4>
                                                        <p>
                                                            {parcel.receiver.name} ({parcel.receiver.email})
                                                        </p>
                                                        <p>{parcel.receiver.address}</p>
                                                        <p>📞 {parcel.receiverPhone}</p>
                                                    </div>
                                                    {/* Parcel Info */}
                                                    <div>
                                                        <h4 className="font-semibold">Parcel Info</h4>
                                                        <p>Type: {parcel.type}</p>
                                                        <p>Weight: {parcel.weight} kg</p>
                                                        <p>Fee: ${parcel.fee}</p>
                                                        <p>Status: {parcel.currentStatus}</p>
                                                    </div>
                                                    {/* Status Logs */}
                                                    <div>
                                                        <h4 className="font-semibold">Status Logs</h4>
                                                        <ul className="list-disc list-inside">
                                                            {parcel.statusLogs?.map((log: any, idx: number) => (
                                                                <li key={idx}>
                                                                    <span className="font-medium">{log.status}</span> –{" "}
                                                                    {new Date(log.timestamp).toLocaleString()} by {log.updatedBy}
                                                                    {log.note && (
                                                                        <span className="italic text-muted-foreground"> ({log.note})</span>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    {/* Created At */}
                                                    <div>
                                                        <h4 className="font-semibold">Created At</h4>
                                                        <p>{new Date(parcel.createdAt).toLocaleString()}</p>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>)

            }



            {/* Pagination */}
            <div className="mt-4 flex justify-center">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <Button
                                variant="outline"
                                size="sm"
                                disabled={page <= 1}
                                onClick={() => setPage((p) => p - 1)}
                            >
                                <PaginationPrevious />
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <span className="px-3 py-2 text-sm">
                                Page {meta?.page} of {meta?.totalPage}
                            </span>
                        </PaginationItem>
                        <PaginationItem>
                            <Button
                                variant="outline"
                                size="sm"
                                disabled={page >= meta?.totalPage}
                                onClick={() => setPage((p) => p + 1)}
                            >
                                <PaginationNext />
                            </Button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}
