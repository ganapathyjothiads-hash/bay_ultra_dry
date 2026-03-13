"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TopBanner from "../global_layout/TopBanner";
import Navbar from "../global_layout/Navbar";
import Footer from "../global_layout/Footer";
import ContactHero from "./ContactHero";
import ContactInfoCards from "./ContactInfoCards";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactUsContent = () => {
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

            {/* Merged Section: Hero + Info + Form */}
            <div className="relative bg-white overflow-hidden">
                {/* Decoration Layer */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="relative max-w-[1300px] mx-auto h-full w-full">
                        {/* Water Splash Decoration - Top Right */}
                        <div className="absolute w-[30%] md:w-[12%] top-[10%] md:top-[15%] lg:top-[12%] right-[2%] md:right-[-30px] z-[2]">
                            <img
                                src="/assets/images/contact_us/Water_Splash_top.png"
                                alt=""
                                className="w-full h-full object-contain opacity-70 md:opacity-100"
                            />
                        </div>

                        {/* Water Splash Decoration - Bottom */}
                        <div className="hidden md:block absolute w-[300px] h-[300px] bottom-[5%] left-[-150px] z-0">
                            <img
                                src="/assets/images/contact_us/Water_Splash_Bottom.png"
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Left S-Frame Decoration */}
                        <div className="absolute top-[8%] md:top-[10%] left-[-18%] md:left-[-22%] w-[75%] md:w-[37%] lg:w-[50%] z-0">
                            <img
                                src="/assets/images/upholsteryCleaning/Upholstery_SFrame.png"
                                alt=""
                                className="w-full h-auto opacity-80"
                            />
                        </div>

                        {/* Right S-Frame Decoration */}
                        

                        {/* Color Glow - Green (Centered behind Cards area) */}
                        <div
                            className="absolute z-[1] w-[200px] md:w-[400px] h-[300px] md:h-[400px] top-[35%] md:top-[40%] left-[70%] md:left-[60%] -translate-x-1/2 bg-[#00FF26] opacity-[40%] md:opacity-40 blur-[120px] md:blur-[150px] rounded-full"
                        />

                        {/* Color Glow - Blue */}
                        <div
                            className="absolute z-[1] w-[300px] h-[300px] top-[60%] left-[0%] md:w-[400px] md:top-[50%] md:left-[5%] bg-[#006FFF] opacity-[15%] md:opacity-[25%] blur-[100px] md:blur-[120px] rounded-full"
                        />
                    </div>
                </div>

                <div className="relative z-10">
                    <ContactHero />
                    <ContactInfoCards />
                    <ContactForm />
                </div>
            </div>

            {/* Map Section */}
            <ContactMap />

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default ContactUsContent;
