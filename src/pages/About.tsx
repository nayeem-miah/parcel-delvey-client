import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import aboutBanner from "@/assets/aboutHero.jpg";
import MeetOurTeam from "@/components/modules/about/MeetOurTeam";
import { Link } from "react-router";
import { useAchievementQuery } from "@/redux/features/parcel/parcelApi";
import AOS from "aos";
import "aos/dist/aos.css";

interface AboutProps {
    title?: string;
    description?: string;
    mainImage?: { src: string; alt: string };
    secondaryImage?: { src: string; alt: string };
    breakout?: {
        title?: string;
        description?: string;
        buttonText?: string;
        buttonUrl?: string;
    };
    companiesTitle?: string;
    companies?: Array<{ src: string; alt: string }>;
    achievementsTitle?: string;
    achievementsDescription?: string;
    achievements?: Array<{ label: string; value: string }>;
}

const defaultCompanies = [
    {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
        alt: "Arc",
    },
    {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
        alt: "Descript",
    },
    {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
        alt: "Mercury",
    },
];

const About = ({
    title = "About GoParcel",
    description = "GoParcel is your trusted delivery partner, providing fast, reliable, and secure parcel services across the country.",
    mainImage,
    secondaryImage,
    breakout,
    companiesTitle = "Trusted by Leading Companies",
    companies = defaultCompanies,
    achievementsTitle = "Our Achievements",
    achievementsDescription = "We take pride in delivering packages safely and on time, every time.",
}: AboutProps) => {
    const { data } = useAchievementQuery(undefined);

    const defaultAchievements = [
        { label: "Parcels Delivered", value: data?.data?.parcelCount },
        { label: "Happy Customers", value: data?.data?.clientCount },
        { label: "District Covered", value: "64" },
    ];

    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);

    return (
        <section className="relative">
            {/* Banner */}
            <div
                className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${aboutBanner})` }}
            >
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-5">
                    <h1
                        className="text-white text-4xl md:text-6xl font-extrabold tracking-tight"
                        data-aos="fade-down"
                    >
                        Reliable Parcel Delivery
                    </h1>
                    <p
                        className="text-white/90 mt-3 text-base md:text-lg max-w-2xl"
                        data-aos="fade-up"
                    >
                        Fast, secure, and dependable delivery services for all your parcels.
                    </p>
                    <Link to={"/sender"} data-aos="zoom-in">
                        <Button className="mt-6 px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                            Track Your Parcel
                        </Button>
                    </Link>
                </div>
            </div>

            {/* About Section */}
            <div className="px-5 py-20 max-w-6xl mx-auto">
                <div className="text-center" data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>
                {breakout && (
                    <div
                        className="mt-12 p-6 bg-muted rounded-xl shadow-md"
                        data-aos="zoom-in"
                    >
                        <h3 className="text-xl font-semibold">{breakout.title}</h3>
                        <p className="mt-2 text-muted-foreground">{breakout.description}</p>
                        {breakout.buttonText && breakout.buttonUrl && (
                            <Button asChild variant="outline" className="mt-4">
                                <a
                                    href={breakout.buttonUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {breakout.buttonText}
                                </a>
                            </Button>
                        )}
                    </div>
                )}

                <div className="flex flex-col gap-6 mt-10">
                    {mainImage && (
                        <img
                            src={mainImage.src}
                            alt={mainImage.alt}
                            className="rounded-xl object-cover w-full shadow-lg"
                            data-aos="fade-right"
                        />
                    )}
                    {secondaryImage && (
                        <img
                            src={secondaryImage.src}
                            alt={secondaryImage.alt}
                            className="rounded-xl object-cover w-full shadow-lg"
                            data-aos="fade-left"
                        />
                    )}
                </div>
            </div>

            {/* Companies */}
            <div className="py-20 bg-muted text-center">
                <p className="text-lg font-medium" data-aos="fade-up">
                    {companiesTitle}
                </p>
                <div
                    className="mt-10 flex flex-wrap justify-center gap-10"
                    data-aos="zoom-in"
                >
                    {companies.map((company, idx) => (
                        <img
                            key={idx}
                            src={company.src}
                            alt={company.alt}
                            className="h-8 md:h-10 grayscale hover:grayscale-0 transition duration-300"
                        />
                    ))}
                </div>
            </div>

            {/* Achievements */}
            <div className="py-20 px-5 max-w-6xl mx-auto">
                <h2
                    className="text-4xl font-bold text-center mb-4"
                    data-aos="fade-up"
                >
                    {achievementsTitle}
                </h2>
                <p
                    className="text-center text-muted-foreground mb-12 max-w-xl mx-auto"
                    data-aos="fade-up"
                >
                    {achievementsDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
                    {defaultAchievements.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-card p-8 rounded-xl shadow-md hover:shadow-lg transition"
                            data-aos="flip-up"
                        >
                            <span className="text-5xl font-extrabold text-primary block">
                                {item.value}+
                            </span>
                            <p className="mt-3 text-lg">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div data-aos="fade-up">
                <MeetOurTeam />
            </div>
        </section>
    );
};

export default About;
