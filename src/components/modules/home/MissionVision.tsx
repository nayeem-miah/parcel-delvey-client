
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import delivery1 from "../../../assets/d1.jpg";
import delivery2 from "../../../assets/d2.jpg";
import delivery3 from "../../../assets/d3.jpg";
import delivery4 from "../../../assets/d4.jpg";
import delivery5 from "../../../assets/d5.jpg";
import delivery6 from "../../../assets/d6.jpg";

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
];

export default function MissionVision() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = missionVision.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
    }
    return 1;
  };

  const visibleCards = getVisibleCards();


  const cardsToShow = [];
  for (let i = 0; i < visibleCards; i++) {
    cardsToShow.push(missionVision[(currentIndex + i) % total]);
  }

  return (
    <section className="py-10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold  mb-12"
        >
          Our Mission & Vision
        </motion.h2>

        <div className="relative flex items-center justify-center overflow-hidden">
          <div className="flex gap-6 transition-transform duration-700 ease-in-out">
            <AnimatePresence initial={false}>
              {cardsToShow.map((item, idx) => (
                <motion.div
                  key={currentIndex + idx}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6 }}
                  className="min-w-[280px] md:min-w-[320px] lg:min-w-[350px] px-3"
                >
                  <Card className="overflow-hidden rounded-xl  shadow-lg hover:scale-105 transition-transform">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6 text-left">
                      <h3 className="text-xl font-semibold  mb-2">
                        {item.title}
                      </h3>
                      <p className="">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-3 mt-6">
          {missionVision.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition ${idx === currentIndex ? "bg-rose-500 scale-110" : "bg-gray-400 dark:bg-gray-600"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
