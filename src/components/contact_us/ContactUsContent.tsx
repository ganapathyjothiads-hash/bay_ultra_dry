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

            {/* Hero Section */}
            <ContactHero />

            {/* Info Cards */}
            <ContactInfoCards />

            {/* Main Contact Form Section */}
            <ContactForm />

            {/* Map Section */}
            <ContactMap />

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default ContactUsContent;
