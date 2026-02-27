"use client";

import React from "react";
import TopBanner from "../home/TopBanner";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import AboutUsHero from "./AboutUsHero";

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

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default AboutContent;
