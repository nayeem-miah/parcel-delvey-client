import { useState, useEffect } from "react"
import { Link } from "react-router"
import b6 from "../../../assets/b6.jpg"
import b7 from "../../../assets/b7.jpg"
import b8 from "../../../assets/b8.jpg"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const images = [b6, b7, b8]

export default function Banner() {
    const [current, setCurrent] = useState(0)

    // Auto slide every 6s
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section
            className="relative w-full min-h-[90vh] flex items-center overflow-hidden 
            bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
        >

            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={current}
                        src={images[current]}
                        alt="Parcel Banner"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
                <div
                    className="absolute inset-0 
                    bg-gradient-to-r 
                    from-black/70 via-black/60 to-black/40 
                    dark:from-black/90 dark:via-black/70 dark:to-black/40"
                ></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10 z-10">
                {/* Left Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 text-center md:text-left text-white"
                >
                    <p className="uppercase tracking-widest text-rose-400 font-semibold text-sm md:text-base">
                        Fastest Delivery Service
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Delivering <span className="text-rose-400">Happiness</span> <br />
                        At Your Doorstep
                    </h1>
                    <p className="text-gray-200 text-base md:text-lg max-w-lg mx-auto md:mx-0">
                        We deliver your parcels with speed, safety, and care. Track your shipment anytime and enjoy hassle-free service with real-time updates.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <Link to="/get-started">
                            <Button
                                size="lg"
                                className="rounded-2xl shadow-lg hover:scale-105 transition w-full sm:w-auto"
                            >
                                Get Started
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="rounded-2xl  w-full sm:w-auto"
                            >
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </motion.div>


                <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 40, rotate: -5 }}
                    animate={{ opacity: 1, y: [0, -20, 0], rotate: [0, 3, -3, 0] }}
                    exit={{ opacity: 0, y: 40, rotate: 5 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="flex justify-center md:justify-end"
                >
                    <motion.img
                        src={images[current]}
                        alt="Parcel Illustration"
                        className="w-[260px] sm:w-[340px] md:w-[460px] h-auto drop-shadow-2xl rounded-xl border border-gray-200 dark:border-gray-700"
                        whileHover={{ scale: 1.08, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                </motion.div>
            </div>


            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition 
                            ${index === current ? "bg-rose-500 scale-110" : "bg-white/60 dark:bg-gray-600"}`}
                    />
                ))}
            </div>
        </section>
    )
}
