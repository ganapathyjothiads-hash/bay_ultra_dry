import AboutContent from "@/components/aboutUs/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bay Ultra Dry Tauranga",
  description: "Learn more about Bay Ultra Dry, Tauranga's most trusted carpet and upholstery cleaning specialists. We are dedicated to providing high-quality service and customer satisfaction.",
};

export default function Page() {
  return <AboutContent />;
}
