"use client";

import React from "react";

const ContactHero = () => {
    return (
        <section
            className="relative w-full overflow-hidden flex items-center justify-center pt-[150px] pb-[120px] md:pt-[180px] md:pb-[160px] [clip-path:polygon(0%_0%,100%_0%,100%_95%,50%_100%,0%_95%)] md:[clip-path:polygon(0%_0%,100%_0%,100%_85%,50%_100%,0%_85%)]"
        >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/images/contact_us/Contact_bg.png"
                    alt="Contact Background"
                    className="w-full h-full object-cover object-center"
                />
                <div
                    className="absolute inset-0 bg-[#151515]/80"
                />
            </div>

            <div className="relative z-10 max-w-[1240px] xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1
                    className="text-white font-display text-[33px] font-medium tracking-[0.01em] md:text-[64px] lg:text-[68px] leading-[1.2] md:leading-[100px] mb-8"
                    data-aos="fade-up"
                >
                    Get In Touch For A <br /> Sparkling Clean <br className="block md:hidden" /> Space!
                </h1>
                <p
                    className="text-[#E8E8E8] font-sans text-[16px] md:text-[19px] lg:text-[20px] font-medium max-w-[700px] mx-auto leading-[25px] opacity-90"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Let our professional cleaning team <br className="block md:hidden" /> make your home or business shine. <br />
                    Contact us today for a free quote— <br className="block md:hidden" /> fast, friendly, and hassle-free!
                </p>
            </div>
        </section>
    );
};

export default ContactHero;
