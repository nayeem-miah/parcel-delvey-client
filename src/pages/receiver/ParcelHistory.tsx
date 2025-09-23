/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDeliveryHistoryQuery } from "@/redux/features/parcel/parcelApi"
import type { IParcel } from "@/types";
import Loading from "@/utils/Loading";
import NotFount from "@/utils/NotFount";

export default function ParcelHistory() {
    const { data, isLoading } = useDeliveryHistoryQuery(undefined, {
        pollingInterval: 50000,
        refetchOnReconnect: true,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    });

    const parcels = data?.data || [];
    // console.log(parcels);

    if (isLoading) return <Loading />
    return (
        <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-4">
                <h2 className="text-xl sm:text-2xl font-bold">📦 Parcels History</h2>

            </div>

            {parcels.length === 0 ? (
                <NotFount data="parcels" href="" />
            ) : (
                <div className="rounded-md border overflow-x-auto">
                    <Table className="min-w-[600px]">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Tracking ID</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Details</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {parcels.map((parcel: IParcel) => (
                                <TableRow key={parcel._id}>

                                    <TableCell className="font-medium text-sm sm:text-base">{parcel.tracking_id}

                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={"outline"}
                                            className={`text-xs sm:text-sm ${parcel.currentStatus === "DELIVERED"
                                                && "text-green-600 border-green-600"}`}
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
                                            <DialogContent className="max-w-lg w-full">
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
                                                        <p>{parcel.sender.name} ({parcel.sender.email})</p>
                                                        <p>{parcel.sender.address}</p>
                                                        <p>📞 {parcel.senderPhone}</p>
                                                    </div>
                                                    {/* Receiver */}
                                                    <div>
                                                        <h4 className="font-semibold">Receiver</h4>
                                                        <p>{parcel.receiver.name} ({parcel.receiver.email})</p>
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
                                                        <ul className="list-disc list-inside space-y-1">
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
                </div>
            )}
        </div>
    )
}
