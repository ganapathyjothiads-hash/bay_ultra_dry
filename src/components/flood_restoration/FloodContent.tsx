"use client";

import React from "react";
import TopBanner from "../home/TopBanner";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import FloodHero from "./FloodHero";
import FloodServicesSlider from "./FloodServicesSlider";
import EnquireNowButton from "../ui/EnquireNowButton";
import FloodRestorationProcess from "./FloodRestorationProcess";
import CTASection from "../home/CTASection";
import FloodTrustBadges from "./FloodTrustBadges";

const FloodContent = () => {
    return (
        <main className="min-h-screen relative bg-white">
            {/* Header + hero area */}
            <header className="absolute top-0 left-0 w-full z-[100]">
                <TopBanner />
                <div className="mt-0 lg:mt-[24px]">
                    <Navbar />
                </div>
            </header>

            {/* Flood hero */}
            <FloodHero />

            {/* Services Slider */}
            <FloodServicesSlider />

            {/* Flood Restoration Process */}
            <FloodRestorationProcess />

            {/* Trust Badges */}
            <FloodTrustBadges />

            {/* CTA Section */}
            <CTASection />

            {/* Footer */}
            <Footer />

            {/* Sticky Enquire Now button */}
            <EnquireNowButton/>
        </main>
    );
};

export default FloodContent;
