/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"
import { z } from "zod"
import Password from "./Password"
import { role } from "@/constants/role"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"





const registerSchema = z
    .object({
        name: z.string().min(3, {
            message: "Username must be at least 3 characters.",
        }),
        email: z.email(),
        role: z.enum([role.SENDER, role.RECEIVER], {
            message: "Role must be either SENDER or RECEIVER"
        }).default(role.SENDER).optional(),
        password: z.string().min(8, {
            message: "Password is too short minimum 8 character"
        }),
        address: z.string(),
        phone: z.string(),
    })


export function RegisterForm() {
    const navigate = useNavigate();


    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            role: role.SENDER || role.RECEIVER,
            password: "",
            phone: "",
            address: "",

        }
    });


    const onSubmit = async (data: z.infer<typeof registerSchema>) => {

        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role,
            address: data.address,
            phone: data.phone,

        }

        try {
            console.log(userInfo);
        } catch (error: any) {
            console.log(error);
            toast.error(error?.response?.data?.message)
            navigate('/')
        }
    }

    return (
        <div>
            <div className=" flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold mb-2">create a new account</h1>
            </div>
            <div className="grid gap-2">

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                        {/* username */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="username"
                                            {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* email */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is your public display email.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* role */}
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>role</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl className="w-full">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a role to display" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="SENDER">SENDER</SelectItem>
                                            <SelectItem value="RECEIVER">RECEIVER</SelectItem>
                                        </SelectContent>
                                    </Select>

                                </FormItem>
                            )} />
                        {/* password */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>password</FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is your privet display password.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* address */}
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>address </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="address"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is your public display email.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>phone </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="phone"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription className="sr-only">
                                        This is your public display email.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}

                        <div className="text-center text-sm">
                            Already have an account?
                            <Link to={"/login"} className="underline underline-offset-4">
                                Login
                            </Link>
                        </div>
                        <Button type="submit" className="w-full">
                            Sign up
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
