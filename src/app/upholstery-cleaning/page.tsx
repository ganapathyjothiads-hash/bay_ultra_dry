import UpholsteryCleaningContent from "@/components/upholstery_cleaning/UpholsteryCleaningContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Upholstery Cleaning Tauranga | Bay Ultra Dry",
    description: "Professional upholstery cleaning in Tauranga. We clean sofas, chairs, and more with gentle but effective techniques to restore your furniture.",
};

export default function Page() {
    return <UpholsteryCleaningContent />;
}
