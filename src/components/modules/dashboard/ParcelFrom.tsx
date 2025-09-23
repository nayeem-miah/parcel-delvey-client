/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { useAllUserQuery, useUserInfoQuery } from "@/redux/features/auth/authApi"
import { useCreateParcelMutation } from "@/redux/features/parcel/parcelApi"
import type { IUser } from "@/types"
import Loading from "@/utils/Loading"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, Package } from "lucide-react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { toast } from "sonner"
import { z } from "zod"


const formSchema = z.object({
    type: z.string(),
    weight: z.string("Weight is required"),
    senderPhone: z.string(),
    receiver: z.string().nonempty("Receiver is required"),
    receiverPhone: z.string(),
    expectedDeliveryDate: z.date(),
    deliveredAt: z.date(),
})

type FormValues = z.infer<typeof formSchema>

export default function ParcelForm() {
    const [createParcel, { isLoading }] = useCreateParcelMutation();
    const { data: users, isLoading: usersLoading } = useAllUserQuery(undefined);
    const { data: userInfo, isLoading: userLoading } = useUserInfoQuery(undefined);
    const navigate = useNavigate()

    // console.log(users?.data);

    const reviverRole = users?.data?.filter((user: IUser) => user.role === "RECEIVER");
    // console.log(reviverRole);



    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            type: "",
            weight: undefined,
            senderPhone: userInfo?.data.phone || "",
            receiver: "",
            receiverPhone: "",
            expectedDeliveryDate: undefined,
            deliveredAt: undefined,
        },
        mode: "onChange",
    })

    const onSubmit = async (data: FormValues) => {

        const parcelData = {
            sender: userInfo?.data?._id,
            ...data,
            weight: Number(data.weight),
        }

        // console.log(parcelData);
        try {
            const res = await createParcel(parcelData).unwrap();
            // console.log(res);

            if (res.success) {
                toast.success(res.message)
                navigate("/sender/my-parcel")
            }
        } catch (error: any) {
            console.log(error);
            toast.error("something went wrong", error.message)

        }
    }

    if (usersLoading || userLoading || isLoading) return <Loading />
    return (
        <div className="min-h-screen  py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <Card className="shadow-2xl border-0 rounded-2xl">
                    <CardHeader className="text-center border-b pb-6">
                        <div className="flex items-center justify-center mb-3">
                            <Package className="h-10 w-10 text-rose-500" />
                        </div>
                        <CardTitle className="text-2xl font-bold ">
                            Create New Parcel
                        </CardTitle>
                        <CardDescription className=" text-sm">
                            Fill in the details below to create a new parcel entry.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="p-8">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-8"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* type */}
                                    <FormField
                                        control={form.control}
                                        name="type"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>type</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="text"
                                                        placeholder="Enter parcel type"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {/* Weight */}
                                    <FormField
                                        control={form.control}
                                        name="weight"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Weight (kg)</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        placeholder="Enter parcel weight"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />


                                    {/* Sender Phone */}
                                    <FormField
                                        control={form.control}
                                        name="senderPhone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Sender Phone (optional)</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter sender phone"
                                                        className="focus:ring-2 "
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Receiver */}
                                    <FormField
                                        control={form.control}
                                        name="receiver"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Receiver</FormLabel>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    value={field.value}
                                                >
                                                    <FormControl className="w-full">
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select receiver" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {
                                                            reviverRole?.map((user: IUser) => (<SelectItem key={user._id} value={user?._id}>{user?.email}</SelectItem>
                                                            ))
                                                        }
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Receiver Phone */}
                                    <FormField
                                        control={form.control}
                                        name="receiverPhone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Receiver Phone </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter receiver phone"
                                                        className="focus:ring-2 "
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Expected Delivery Date */}
                                    <FormField
                                        control={form.control}
                                        name="expectedDeliveryDate"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel>Expected Delivery Date</FormLabel>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button
                                                                variant="outline"
                                                                className={cn(
                                                                    "w-full pl-3 text-left font-normal",
                                                                    !field.value && "text-muted-foreground"
                                                                )}
                                                            >
                                                                {field.value ? (
                                                                    format(field.value, "PPP")
                                                                ) : (
                                                                    <span>Pick a date</span>
                                                                )}
                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            disabled={(date) =>
                                                                date < new Date(new Date().setHours(0, 0, 0, 0))
                                                            }
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {/* deliveredAt  */}
                                    <FormField
                                        control={form.control}
                                        name="deliveredAt"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel>deliveredAt</FormLabel>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button
                                                                variant="outline"
                                                                className={cn(
                                                                    "w-full pl-3 text-left font-normal",
                                                                    !field.value && "text-muted-foreground"
                                                                )}
                                                            >
                                                                {field.value ? (
                                                                    format(field.value, "PPP")
                                                                ) : (
                                                                    <span>Pick a date</span>
                                                                )}
                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            disabled={(date) =>
                                                                date < new Date(new Date().setHours(0, 0, 0, 0))
                                                            }
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    className="w-full"
                                >
                                    Submit Parcel
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
