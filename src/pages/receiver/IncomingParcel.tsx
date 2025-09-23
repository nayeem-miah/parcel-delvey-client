/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useConfirmParcelMutation, useIncomingParcelQuery } from "@/redux/features/parcel/parcelApi"
import type { IParcel } from "@/types"
import Loading from "@/utils/Loading"
import NotFount from "@/utils/NotFount"
import { toast } from "sonner"

export default function IncomingParcel() {
  const { data, isLoading } = useIncomingParcelQuery(undefined, {
    pollingInterval: 50000,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  })
  const [confirmParcel, { isLoading: confirmLoading }] = useConfirmParcelMutation()
  // console.log(data);
  const parcels = data?.data



  //  updated current status function
  const handleSubmit = async (id: string) => {
    try {
      const res = await confirmParcel(id).unwrap();
      // console.log(res);

      if (res.success) {
        toast.success(res.message)
      }


    } catch (error: any) {
      console.log(error);
      toast.error(error.data.message)
    }
  }
  if (isLoading || confirmLoading) return <Loading />
  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold">📦 Incoming Parcels</h2>

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
                <TableHead>Confirm</TableHead>
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
                        ? "text-green-600 border-green-600"
                        : parcel.currentStatus === "CANCELLED"
                          ? "text-red-600 border-red-600"
                          : "text-blue-600 border-blue-600"
                        }`}
                    >
                      {parcel.currentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleSubmit(parcel._id)}
                      disabled={parcel.currentStatus !== "DISPATCHED"}
                      variant="outline"
                      size="sm"
                      className={
                        parcel.currentStatus === "DELIVERED"
                          ? "text-green-600 border-green-600"
                          : parcel.currentStatus === "CANCELLED"
                            ? "text-red-600 border-red-600"
                            : "text-blue-600 border-blue-600"

                      }
                    >
                      {parcel.currentStatus === "REQUESTED" && "Delivered now"}
                      {parcel.currentStatus === "APPROVED" && "Delivered now"}
                      {parcel.currentStatus === "DISPATCHED" && "Delivered now"}
                      {parcel.currentStatus === "CANCELLED" && "Already Canceled"}
                      {parcel.currentStatus === "DELIVERED" && "Already Delivered"}
                    </Button>
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
