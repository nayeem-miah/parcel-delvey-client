import Banner from "@/components/modules/home/Banner";
import FAQSection from "@/components/modules/home/Faq";
import MissionVision from "@/components/modules/home/MissionVision";
import SendableItems from "@/components/modules/home/SendableItems";
import Services from "@/components/modules/home/Services";

export default function Home() {
    return (
        <div>
            <Banner />
            <SendableItems />
            <Services />
            <MissionVision />
            <FAQSection />



        </div>
    )
}
