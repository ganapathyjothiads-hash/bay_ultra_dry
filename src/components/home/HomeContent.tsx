"use client";

import React from "react";
import TopBanner from "./TopBanner";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Marquee from "./Marquee";
import WelcomeSection from "./WelcomeSection";
import ServicesSection from "./ServicesSection";
import RestorationSection from "./RestorationSection";
import CarpetCleaningSection from "./CarpetCleaningSection";
import UpholsteryCleaningSection from "./UpholsteryCleaningSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import CTASection from "./CTASection";
import QuoteSection from "./QuoteSection";
import Footer from "./Footer";

const HomeContent = () => {
    return (
        <main className="min-h-screen relative bg-white">
            {/* Header Area */}
            <header className="absolute top-0 left-0 w-full z-[100]">
                <TopBanner />
                <div className="mt-0 lg:mt-[24px]">
                    <Navbar />
                </div>
            </header>

            {/* Hero Section */}
            <HeroSection />

            {/* Scrolling Marquee */}
            <Marquee />

            {/* Welcome Section */}
            <WelcomeSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Special Section: 24/7 Restoration */}
            <RestorationSection />

            {/* Detailed Feature: Carpet Cleaning */}
            <CarpetCleaningSection />

            {/* Detailed Feature: Upholstery Cleaning */}
            <UpholsteryCleaningSection />

            {/* Why Choose Us */}
            <WhyChooseUsSection />

            {/* CTA Section */}
            <CTASection />

            {/* Quote Section */}
            <QuoteSection />

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default HomeContent;
