import HomeContent from "@/components/home/HomeContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bay Ultra Dry | Professional Carpet & Upholstery Cleaning Tauranga",
  description: "Bay Ultra Dry offers expert carpet cleaning, upholstery cleaning, and flood restoration services in Tauranga and the Bay of Plenty area. Restore your home today!",
};

export default function Page() {
  return <HomeContent />;
}
