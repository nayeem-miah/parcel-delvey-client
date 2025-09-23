"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function FAQSection() {
    const [activeTab, setActiveTab] = useState<"sender" | "receiver">("sender")

    const senderFaqs = [
        {
            question: "How can I contact the delivery agent?",
            answer:
                "After your request is accepted, you can see the delivery agent’s name, photo, and rating in the app. You can also call them directly using the phone icon.",
        },
        {
            question: "How can I cancel a delivery request?",
            answer:
                "Go to your order details page in the app and select 'Cancel Request' before the delivery is confirmed.",
        },
        {
            question: "Can I track my delivery?",
            answer:
                "Yes, you can track your delivery in real-time from the order details page using the tracking option.",
        },
        {
            question: "What should I do if the agent is late?",
            answer:
                "If the agent is running late, you can contact them directly or report the issue through the app support section.",
        },
        {
            question: "How do I pay for the delivery?",
            answer:
                "You can pay securely through the app using mobile banking, cards, or cash on delivery (if available).",
        },
    ]

    const receiverFaqs = [
        {
            question: "How will I know when my parcel is on the way?",
            answer:
                "You will receive real-time notifications in the app and can track the parcel live until it reaches you.",
        },
        {
            question: "Can someone else receive my parcel?",
            answer:
                "Yes, but they must provide the correct verification code or ID proof if required.",
        },
        {
            question: "What if I miss the delivery?",
            answer:
                "If you miss the delivery, the agent will attempt again or you can reschedule from the app.",
        },
        {
            question: "Is there a delivery fee for receivers?",
            answer:
                "No, the sender is responsible for paying the delivery fee unless agreed otherwise.",
        },
        {
            question: "Can I change my delivery address?",
            answer:
                "Yes, but the address must be updated in the app before the agent starts the delivery.",
        },
    ]

    const currentFaqs = activeTab === "sender" ? senderFaqs : receiverFaqs

    return (
        <section className="pt-16 pb-4 px-2  w-full ">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-8">
                your Questions
            </h2>


            <div className="flex justify-center gap-4 mb-12">
                <Button
                    variant={activeTab === "sender" ? "default" : "outline"}
                    onClick={() => setActiveTab("sender")}
                    className="transition-all duration-300"
                >
                    I am a Sender
                </Button>
                <Button
                    variant={activeTab === "receiver" ? "default" : "outline"}
                    onClick={() => setActiveTab("receiver")}
                    className="transition-all duration-300"
                >
                    I am a Receiver
                </Button>
            </div>

            <Accordion type="single" collapsible className="space-y-4 md:space-y-6">
                <AnimatePresence>
                    {currentFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <AccordionItem
                                value={`item-${index}`}
                                className=" rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <AccordionTrigger className="text-lg md:text-xl font-semibold ">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className=" md:text-lg">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </Accordion>
        </section>
    )
}
