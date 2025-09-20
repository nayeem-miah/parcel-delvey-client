import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { Link } from "react-router";

type Props = {
    message?: string;
    onRetry?: () => void;
    homePath?: string;
};

export default function ErrorPage({
    message = "Something went wrong. Please try again.",
    onRetry,
    homePath = "/",
}: Props) {
    return (
        <div className="flex min-h-screen items-center justify-center  p-6">
            <div className="w-full max-w-md">
                <Card>
                    <CardHeader className="space-y-2 text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-yellow-50">
                            <AlertTriangle className="h-7 w-7 text-yellow-600" />
                        </div>
                        <CardTitle className="text-lg">Error</CardTitle>
                        <CardDescription>{message}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                        {onRetry && (
                            <Button
                                variant="outline"
                                className="flex items-center justify-center gap-2"
                                onClick={onRetry}
                            >
                                <RefreshCw className="h-4 w-4" /> Retry
                            </Button>
                        )}

                        <a href={homePath}>
                            <Button className="flex items-center justify-center gap-2">
                                <Home className="h-4 w-4" /> Go Home
                            </Button>
                        </a>
                    </CardContent>
                </Card>


                <Link target="_blank" to={"https://nayeem-miah.vercel.app"} className="mt-6 text-center text-xs text-teal-500">
                    <span>Powered by your app • <span className="font-medium underline">MD Nayeem Miah</span></span>
                </Link>
            </div>
        </div>
    );
}