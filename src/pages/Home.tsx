import Banner from "@/components/modules/home/Banner";
import FAQSection from "@/components/modules/home/Faq";
import MissionVision from "@/components/modules/home/MissionVision";
import SendableItems from "@/components/modules/home/SendableItems";
import Services from "@/components/modules/home/Services";
import { Helmet } from "react-helmet-async";

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>GoParcel Delivery | Fast & Reliable</title>
                <meta name="description" content="Deliver your parcels quickly and safely with our reliable delivery service." />
                <meta name="keywords" content="parcel delivery, courier service, fast shipping" />
            </Helmet>
            <Banner />
            <SendableItems />
            <Services />
            <MissionVision />
            <FAQSection />



        </div>
    )
}
