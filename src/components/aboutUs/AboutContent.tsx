"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TopBanner from "../global_layout/TopBanner";
import Navbar from "../global_layout/Navbar";
import Footer from "../global_layout/Footer";
import AboutUsHero from "./AboutUsHero";
import AboutOurStory from "./AboutOurStory";
import EnquireNowButton from "../ui/EnquireNowButton";
import AboutWhatWeDo from "./AboutWhatWeDo";
import AboutOurPromise from "./AboutOurPromise";
import CTASection from "../global_layout/CTASection";
import QuoteSection from "../global_layout/QuoteSection";

const AboutContent = () => {
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

            {/* Hero for About page */}
            <AboutUsHero />

            {/* Content for About page */}
            <div className="relative">
                <AboutOurStory />
                <EnquireNowButton variant="section" className="bottom-[-100px] md:bottom-[92px]" />
            </div>

            {/* What We Do section */}
            <AboutWhatWeDo />

            {/* Our Promise section */}
            <AboutOurPromise />

            {/* CTA section */}
            <CTASection />

            {/* Quote section */}
            <QuoteSection variant="about" />

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default AboutContent;
