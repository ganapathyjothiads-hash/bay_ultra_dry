"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TopBanner from "../home/TopBanner";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import AboutUsHero from "./AboutUsHero";
import AboutOurStory from "./AboutOurStory";
import AboutWhatWeDo from "./AboutWhatWeDo";
import AboutOurPromise from "./AboutOurPromise";
import CTASection from "../home/CTASection";
import QuoteSection from "../home/QuoteSection";

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
            <AboutOurStory />

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
