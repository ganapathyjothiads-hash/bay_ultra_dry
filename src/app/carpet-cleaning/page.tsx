import CarpetCleaningContent from "@/components/carpet_cleaning/CarpetCleaningContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Carpet Cleaning Tauranga | Bay Ultra Dry",
    description: "Professional carpet cleaning services in Tauranga. We remove deep-seated dirt, stains, and allergens to keep your carpets fresh, clean, and healthy.",
};

export default function Page() {
    return <CarpetCleaningContent />;
}
