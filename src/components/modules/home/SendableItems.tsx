import { Card, CardContent } from "@/components/ui/card"
import { Gift, FileText, Package, ListChecks, Plug } from "lucide-react"

const items = [
    { icon: Gift, title: "Gift" },
    { icon: FileText, title: "Document" },
    { icon: Package, title: "Package" },
    { icon: ListChecks, title: "Goods" },
    { icon: Plug, title: "Electronics" },
]

export default function SendableItems() {
    return (
        <section className="py-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">What Can Be Sent?</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {items.map((item, index) => (
                    <Card
                        key={index}
                        className="hover:shadow-lg transition-shadow duration-300 rounded-2xl"
                    >
                        <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                            <item.icon className="w-12 h-12 text-red-500" />
                            <p className="font-medium">{item.title}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
