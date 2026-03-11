import ContactUsContent from "@/components/contact_us/ContactUsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Bay Ultra Dry Tauranga",
    description: "Get in touch with Bay Ultra Dry for all your carpet cleaning, upholstery, and flood restoration needs in Tauranga. Call us or message us for a free quote!",
};

export default function ContactPage() {
    return <ContactUsContent />;
}
