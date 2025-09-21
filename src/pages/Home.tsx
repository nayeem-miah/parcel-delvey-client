import Banner from "@/components/modules/home/Banner";
import FAQSection from "@/components/modules/home/Faq";
import SendableItems from "@/components/modules/home/SendableItems";
import Services from "@/components/modules/home/Services";

export default function Home() {
    return (
        <div>
            <Banner />
            <SendableItems />
            <Services />
            <FAQSection />



        </div>
    )
}
