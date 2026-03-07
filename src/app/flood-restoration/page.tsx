import FloodContent from "@/components/flood_restoration/FloodContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Flood Restoration Tauranga | Bay Ultra Dry",
    description: "Emergency flood restoration and water damage services in Tauranga. We provide rapid response and professional drying to protect your home and property.",
};

export default function Page() {
    return <FloodContent />;
}
