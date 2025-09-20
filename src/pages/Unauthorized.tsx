import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, LogIn, ShieldOff } from "lucide-react";
import { Link } from "react-router";

type Props = {
    signInPath?: string;
    onGoBack?: () => void;
};

export default function Unauthorized({ signInPath = "/login", onGoBack }: Props) {
    return (
        <div className="flex min-h-screen items-center justify-center -50 p-6">
            <div
                className="w-full max-w-md"
            >
                <Card className="overflow-hidden">
                    <CardHeader className="space-y-1 p-6 text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                            <ShieldOff className="h-7 w-7 text-red-600" />
                        </div>
                        <CardTitle className="text-lg">Unauthorized</CardTitle>
                        <CardDescription>You don’t have permission to view this page.</CardDescription>
                    </CardHeader>

                    <CardContent className="p-6">
                        <p className="mb-4 text-sm text-slate-600">
                            Your account does not currently have access to this section. If you think this is a
                            mistake, contact your administrator or sign in with an account that has the proper
                            permissions.
                        </p>

                        <Separator className="my-4" />

                        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                            <Button
                                variant="ghost"
                                className="flex items-center justify-center gap-2"
                                onClick={() => (onGoBack ? onGoBack() : window.history.back())}
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Go back
                            </Button>

                            <a href={signInPath} className="w-full sm:w-auto">
                                <Button className="flex w-full items-center justify-center gap-2">
                                    <LogIn className="h-4 w-4" />
                                    login
                                </Button>
                            </a>
                        </div>

                        <div className="mt-4 text-xs text-center text-slate-400">
                            <span>Need help? </span>
                            <Link to="/contact" className="underline underline-offset-2">
                                Contact support
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                <Link target="_blank" to={"https://nayeem-miah.vercel.app"} className="mt-6 text-center text-xs text-teal-500">
                    <span>Powered by your app • <span className="font-medium underline">MD Nayeem Miah</span></span>
                </Link>
            </div>
        </div>
    );
}
