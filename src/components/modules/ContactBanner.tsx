import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactBanner() {
    return (
        <section className="py-10  w-full px-6">
            <div className=" text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch With Us</h1>
                <p className="text-base md:text-lg  mb-8">
                    Have questions, feedback, or need support? We’re here to help. Contact us today and our
                    team will get back to you as soon as possible.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button variant={"outline"}>
                        <a href={"#emil"} className="flex items-center gap-2">
                            <Mail className="h-4 w-4" /> Email Us
                        </a></Button>
                    <Button variant={"outline"}>
                        <a href="#phone" className="flex items-center gap-2">
                            <Phone className="h-4 w-4" /> Call Us
                        </a>
                    </Button>
                    <Button variant={"outline"}> <a href="#address" className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" /> Find Us
                    </a>
                    </Button>
                    <Button variant={"outline"}> <a href="#message" className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" /> message Us
                    </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}