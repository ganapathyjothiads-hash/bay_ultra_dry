"use client";

import React from "react";

const ContactHero = () => {
    return (
        <section
            className="relative w-full min-h-[500px] lg:min-h-[720px] overflow-hidden flex items-center justify-center"
            style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)",
                WebkitClipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)"
            }}
        >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/images/contact_us/Contact_bg.png"
                    alt="Contact Background"
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute inset-0"
                    style={{ backgroundColor: "#151515D6" }}
                />
            </div>

            <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center pt-[80px] pb-[120px]">
                <h1
                    className="text-white font-['Nebula_2',sans-serif] text-[48px] font-[500] tracking-[1%] md:text-[64px] lg:text-[78px] leading-[1.1] mb-8 letter-spacing: 1% line-height: 100px"
                    data-aos="fade-up"
                >
                    Get In Touch For A Sparkling <br className="hidden md:block" /> Clean Space!
                </h1>
                <p
                    className="text-[#E8E8E8] font-family:'inter' font-weight:500 text-white text-[18px] md:text-[19px] lg:text-[20px] font-medium max-w-[700px] mx-auto leading-relaxed opacity-90 line-height: 25px"
                    data-aos="fde-up"
                    data-aos-delay="200"
                >
                    Let our professional cleaning team make your home or business shine. <br className="hidden md:block" />
                    Contact us today for a free quote—fast, friendly, and hassle-free!
                </p>
            </div>
        </section>
    );
};

export default ContactHero;
