/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Edit2, Save } from "lucide-react"
import { useUpdateUserMutation, useUserInfoQuery } from "@/redux/features/auth/authApi"
import Loading from "@/utils/Loading"
import type { IUser } from "@/types"
import { toast } from "sonner"

const formSchema = z.object({
    name: z.string().min(2, { message: "Name is required" }),
    email: z.string().email({ message: "Enter a valid email" }),
    phone: z.string()
        .regex(/^(\+8801|8801|01)[0-9]{9}$/, {
            message: "Invalid Bangladeshi phone number"
        }),
    address: z.string().min(5, { message: "Address is required" }),
})

type ProfileFormValues = z.infer<typeof formSchema>

export default function EditProfileDialog() {
    const { data } = useUserInfoQuery(undefined, {
        refetchOnFocus: true,
        pollingInterval: 50000,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    })
    const [update, { isLoading }] = useUpdateUserMutation()
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const user: IUser = data?.data

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
        },
    })

    useEffect(() => {
        if (user) {
            form.reset({
                name: user?.name || "",
                email: user?.email || "",
                phone: user?.phone || "",
                address: user?.address || "",
            })
        }
    }, [user, form])

    const onSubmit = async (values: ProfileFormValues) => {
        const toastId = toast.loading("loading......")
        try {
            const res = await update({ id: user._id, updateData: values }).unwrap()
            // console.log(res)
            toast.success(res.message, { id: toastId })
            setIsDialogOpen(false)
        } catch (error: any) {
            console.log(error)
            if (error.status === 400) {
                toast.error(data.message, { id: toastId })
            }
        }
    }


    if (isLoading) return <Loading />

    return (
        <div className="absolute top-6 right-6 z-10">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="backdrop-blur-sm shadow-md">
                        <Edit2 className="h-4 w-4 mr-2" />
                        Edit Profile
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-semibold">Edit Profile Information</DialogTitle>
                        <DialogDescription>Update your personal details. All fields are required.</DialogDescription>
                    </DialogHeader>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email"
                                                readOnly
                                                placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Phone */}
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your phone number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Address */}
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your address" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button disabled={isLoading} type="submit" className="w-full">
                                <Save className="h-4 w-4 mr-2" />
                                Save Changes
                            </Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
