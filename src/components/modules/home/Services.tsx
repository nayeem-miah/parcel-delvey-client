

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const services = [
    {
        title: "Live Parcel Tracking",
        description:
            "Get real-time updates on parcels sent via courier directly online or through the app.",
        icon: <CheckCircle className="w-8 h-8 text-rose-500" />,
    },
    {
        title: "24/7 Call Center Support",
        description:
            "Receive dedicated support for all your courier-related needs from our team and assigned account managers at any time.",
        icon: <CheckCircle className="w-8 h-8 text-rose-500" />,
    },
    {
        title: "100% Safety Coverage",
        description:
            "All your business parcels are 100% safely covered and delivered responsibly to every corner of the country.",
        icon: <CheckCircle className="w-8 h-8 text-rose-500" />,
    },
];

export default function Services() {
    return (
        <section className="py-10 px-2">
            <div className=" text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl font-extrabold  mb-12"
                >
                    Our Parcel Delivery Features
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                        >
                            <Card className="p-6 h-full hover:shadow-lg transition-all border  rounded-xl">
                                <div className="flex flex-col items-center space-y-4">
                                    {service.icon}
                                    <h3 className="text-xl font-semibold ">
                                        {service.title}
                                    </h3>
                                    <CardContent className="p-0  text-center">
                                        {service.description}
                                    </CardContent>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
