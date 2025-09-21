"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

import delivery1 from "../../../assets/d1.jpg"
import delivery2 from "../../../assets/d2.jpg"
import delivery3 from "../../../assets/d3.jpg"
import delivery4 from "../../../assets/d4.jpg"
import delivery5 from "../../../assets/d5.jpg"
import delivery6 from "../../../assets/d6.jpg"

const missionVision = [
  {
    title: "Fast & Reliable Delivery",
    description:
      "We ensure your parcels reach their destination quickly and safely, every single time.",
    image: delivery1,
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Our mission is to prioritize customer satisfaction and provide hassle-free delivery experience.",
    image: delivery2,
  },
  {
    title: "Nationwide Coverage",
    description:
      "No corner of the country is too far — we deliver your parcels wherever needed.",
    image: delivery3,
  },
  {
    title: "Advanced Tracking System",
    description:
      "Track your parcel in real-time with our advanced tracking system on web and mobile.",
    image: delivery4,
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated support team is always available to assist you with any delivery concerns.",
    image: delivery5,
  },
  {
    title: "Safe & Secure Handling",
    description:
      "Every parcel is handled with care and covered under 100% safety guarantee.",
    image: delivery6,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function MissionVision() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
          Our Mission & Vision
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {missionVision?.map((item, index) => (
            <motion.div
              key={index}
              className=""
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="rounded-xl shadow-lg overflow-hidden h-full ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
