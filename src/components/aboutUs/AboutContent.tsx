"use client";

import React from "react";
import TopBanner from "../home/TopBanner";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import AboutUsHero from "./AboutUsHero";
import AboutOurStory from "./AboutOurStory";
import AboutWhatWeDo from "./AboutWhatWeDo";
import AboutOurPromise from "./AboutOurPromise";

const AboutContent = () => {
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

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default AboutContent;
