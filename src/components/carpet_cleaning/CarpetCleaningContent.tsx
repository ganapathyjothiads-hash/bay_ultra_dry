"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TopBanner from "../global_layout/TopBanner";
import Navbar from "../global_layout/Navbar";
import Footer from "../global_layout/Footer";
import CarpetHero from "./CarpetHero";
import CarpetServicesSlider from "./CarpetServicesSlider";
import CarpetCleaningBenefits from "./CarpetCleaningBenefits";
import CarpetWhyChoose from "./CarpetWhyChoose";
import CTASection from "../global_layout/CTASection";
import ServiceAreas from "../global_layout/ServiceAreas";
import QuoteSection from "../global_layout/QuoteSection";

const CarpetCleaningContent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: 'ease-in-out',
            mirror: true,
            offset: 50,
        });
    }, []);

    return (
        <main className="min-h-screen relative bg-white">
            {/* Header + hero area */}
            <header className="absolute top-0 left-0 w-full z-[100]">
                <TopBanner />
                <div className="mt-0 lg:mt-[24px]">
                    <Navbar />
                </div>
            </header>

            {/* Carpet Cleaning Hero */}
            <CarpetHero />

            {/* Services Slider */}
            <CarpetServicesSlider />

            {/* Carpet Cleaning Benefits */}
            <CarpetCleaningBenefits />

            {/* Why Choose Section */}
            <CarpetWhyChoose />

            {/* CTA Section */}
            <CTASection />

            {/* Service Areas Section */}
            <ServiceAreas />

            {/* Quote Section */}
            <QuoteSection variant="home" />

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default CarpetCleaningContent;
