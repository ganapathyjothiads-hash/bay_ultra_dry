"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TopBanner from "../global_layout/TopBanner";
import Navbar from "../global_layout/Navbar";
import HeroSection from "./HeroSection";
import Marquee from "./Marquee";
import WelcomeSection from "./WelcomeSection";
import ServicesSection from "./ServicesSection";
import HomeSectionsContainer from "./HomeSectionsContainer";
import WhyChooseUsSection from "./WhyChooseUsSection";
import CTASection from "../global_layout/CTASection";
import QuoteSection from "../global_layout/QuoteSection";
import Footer from "../global_layout/Footer";

const HomeContent = () => {
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

            {/* Unified Service Sections: Restoration, Carpet, and Upholstery */}
            <HomeSectionsContainer />

            {/* Why Choose Us */}
            <WhyChooseUsSection />

            {/* CTA Section */}
            <CTASection />

            {/* Quote Section */}
            <QuoteSection variant="home" />

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default HomeContent;
