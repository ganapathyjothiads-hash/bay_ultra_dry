"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TopBanner from "../global_layout/TopBanner";
import Navbar from "../global_layout/Navbar";
import Footer from "../global_layout/Footer";
import CTASection from "../global_layout/CTASection";
import ServiceAreas from "../global_layout/ServiceAreas";
import UpholsteryHero from "./UpholsteryHero";
import UpholsteryIntro from "./UpholsteryIntro";
import EnquireNowButton from "../ui/EnquireNowButton";
import UpholsteryCleaningSlider from "./UpholsteryCleaningSlider";
import UpholsteryWhyChoose from "./UpholsteryWhyChoose";
import UpholsteryHowItWorks from "./UpholsteryHowItWorks";

const UpholsteryCleaningContent = () => {
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
        <main className="min-h-screen relative bg-white overflow-x-hidden">
            {/* Header + hero area */}
            <header className="absolute top-0 left-0 w-full z-[100]">
                <TopBanner />
                <div className="mt-0 lg:mt-[24px]">
                    <Navbar />
                </div>
            </header>

            {/* Hero Section */}
            <UpholsteryHero />

            {/* Intro Section */}
            <div className="relative">
                <UpholsteryIntro />
            </div>

            {/* What We Clean Section */}
            <UpholsteryCleaningSlider />

            {/* Why Choose Section */}
            <UpholsteryWhyChoose />

            {/* How It Works Section */}
            <UpholsteryHowItWorks />

            {/* CTA Section */}
            <CTASection />

            {/* Service Areas Section */}
            <ServiceAreas />

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default UpholsteryCleaningContent;
