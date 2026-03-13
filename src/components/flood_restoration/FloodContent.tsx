"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TopBanner from "../global_layout/TopBanner";
import Navbar from "../global_layout/Navbar";
import Footer from "../global_layout/Footer";
import FloodHero from "./FloodHero";
import FloodServicesSlider from "./FloodServicesSlider";
import EnquireNowButton from "../ui/EnquireNowButton";
import FloodRestorationProcess from "./FloodRestorationProcess";
import CTASection from "../global_layout/CTASection";
import FloodTrustBadges from "./FloodTrustBadges";
import ServiceAreas from "../global_layout/ServiceAreas";
import SmoothScroll from "../ui/SmoothScroll";

const FloodContent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, []);

    return (
        <SmoothScroll>
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
                <div className="relative">
                    <FloodServicesSlider />
                    <EnquireNowButton variant="section" className="bottom-[300px] md:bottom-[650px] right-0" />
                </div>

                {/* Flood Restoration Process */}
                <FloodRestorationProcess />

                {/* Trust Badges */}
                <FloodTrustBadges />

                {/* CTA Section */}
                <CTASection />

                {/* Service Areas Section */}
                <ServiceAreas />

                {/* Footer */}
                <Footer />
            </main>
        </SmoothScroll>
    );
};

export default FloodContent;
