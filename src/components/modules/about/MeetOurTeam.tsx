import { Button } from "@/components/ui/button";

const defaultImage = "https://i.sstatic.net/l60Hf.png";

// ✅ Constant data (outside component, no re-render problem)
const defaultTeam = [
    {
        name: "MD Nayeem Miah",
        role: "Founder & CEO",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Rakib Hasan",
        role: "Operations Head",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
        name: "Roksana Akter",
        role: "Customer Support Manager",
    },
    {
        name: "Sabbir Ahmed",
        role: "Lead Delivery Rider",
    },
];

interface TeamMember {
    name: string;
    role: string;
    image?: string;
}

interface MeetOurTeamProps {
    title?: string;
    description?: string;
    members?: TeamMember[];
}

const MeetOurTeam = ({
    title = "Meet Our Team",
    description = "Our passionate team ensures your parcels are delivered fast, safe, and with a smile.",
    members = defaultTeam,
}: MeetOurTeamProps) => {
    return (
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
            <div className="px-5 max-w-6xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-4xl font-bold mb-4">{title}</h2>
                <p className="text-muted-foreground mb-14 max-w-2xl mx-auto">
                    {description}
                </p>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {members.map((member, idx) => (
                        <div
                            key={idx}
                            className="group bg-card rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center"
                            data-aos="zoom-in"
                        >
                            {/* Profile Image */}
                            <div className="relative">
                                <img
                                    src={member.image || defaultImage}
                                    alt={member.name}
                                    loading="lazy"
                                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-md group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        (e.currentTarget as HTMLImageElement).src = defaultImage;
                                    }}
                                />
                            </div>

                            {/* Name & Role */}
                            <h3 className="mt-5 text-lg font-semibold group-hover:text-primary transition">
                                {member.name}
                            </h3>
                            <p className="text-muted-foreground">{member.role}</p>

                            {/* Contact Button */}
                            <Button
                                variant="outline"
                                size="sm"
                                className="mt-4 rounded-full group-hover:bg-primary group-hover:text-white transition"
                            >
                                Contact
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetOurTeam;
