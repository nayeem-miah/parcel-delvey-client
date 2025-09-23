"use client"

import { Plus, AlertCircle } from "lucide-react"
import { Link } from "react-router"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface IProps {
    data: string
    href: string
    message: string;
}

export default function NotFound({ data, href, message }: IProps) {
    return (
        <div className="flex items-center justify-center min-h-[60vh] p-4">
            <Card className="w-full max-w-md shadow-xl border border-gray-200 rounded-2xl">
                <CardHeader className="text-center">
                    <div className="flex justify-center items-center mb-2">
                        <AlertCircle className="w-10 h-10 text-red-500" />
                    </div>
                    <CardTitle className="text-2xl font-semibold">
                        {data} Not Found
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <p className="text-gray-500 text-center">
                        We couldn’t find any <span className="font-medium">{data}</span>.
                        You can create a new one below.
                    </p>
                    <Button asChild className="rounded-xl shadow-md">
                        <Link to={href} className="flex items-center gap-2">
                            <Plus className="w-4 h-4" /> {message}
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
