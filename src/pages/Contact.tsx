import ContactBanner from "@/components/modules/ContactBanner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"; // ✅ Correct import
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

interface ContactProps {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
}

const Contact = ({
  emailLabel = "Email",
  emailDescription = "We respond to all emails within 24 hours.",
  email = "dev.nayeem01@gmail.com",
  officeLabel = "Office",
  officeDescription = "Drop by our office for a chat.",
  officeAddress = "1 Eagle St, Brisbane, QLD, 4000",
  phoneLabel = "Phone",
  phoneDescription = "We're available Mon-Fri, 9am-5pm.",
  phone = "+123 456 7890",
  chatLabel = "Live Chat",
  chatDescription = "Get instant help from our support team.",
  chatLink = "Start Chat",
}: ContactProps) => {
  return (
    <section>
      <div>
        <ContactBanner />

        <div className="mb-14" />


        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-muted rounded-lg p-6" id="email">
            <span className="bg-accent mb-3 flex size-12 items-center justify-center rounded-full">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="text-muted-foreground mb-3">{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className="font-semibold hover:underline"
            >
              {email}
            </a>
          </div>

          <div className="bg-muted rounded-lg p-6" id="address">
            <span className="bg-accent mb-3 flex size-12 items-center justify-center rounded-full">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="text-muted-foreground mb-3">{officeDescription}</p>
            <a href="#" className="font-semibold hover:underline">
              {officeAddress}
            </a>
          </div>

          <div className="bg-muted rounded-lg p-6" id="phone">
            <span className="bg-accent mb-3 flex size-12 items-center justify-center rounded-full">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
            <p className="text-muted-foreground mb-3">{phoneDescription}</p>
            <a href={`tel:${phone}`} className="font-semibold hover:underline">
              {phone}
            </a>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <span className="bg-accent mb-3 flex size-12 items-center justify-center rounded-full">
              <MessageCircle className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{chatLabel}</p>
            <p className="text-muted-foreground mb-3">{chatDescription}</p>
            <a href="#" className="font-semibold hover:underline">
              {chatLink}
            </a>
          </div>
        </div>

        <div id="message" className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Have a question or want to work together? Fill out the form, and
              we’ll get back to you as soon as possible.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:dev.nayeem01@gmail.com"
                    className="hover:underline"
                  >
                    dev.nayeem01@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+1234567890" className="hover:underline">
                    +123 456 7890
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm">
                  <strong>Office:</strong> 1 Eagle St, Brisbane, QLD, 4000
                </span>
              </li>
            </ul>
          </div>

          <form className="mt-14 flex flex-col gap-6 rounded-lg border p-10 bg-card shadow-sm">
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message here." />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>


      </div>
    </section>
  );
};

export { Contact };
