"use client";

import React from "react";

const UpholsteryHero = () => {
    return (
        <div className="w-full flex flex-col items-center bg-white overflow-hidden relative">
            <section
                className="relative w-full min-h-[70vh] lg:min-h-[650px] overflow-hidden bg-[#1B1D33] flex items-center"
                style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 88%, 50% 100%, 0% 88%)",
                    WebkitClipPath: "polygon(0% 0%, 100% 0%, 100% 88%, 50% 100%, 0% 88%)"
                }}
            >
                {/* Background Image & Overlays */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                        src="/assets/images/upholsteryCleaning/Upholstery_Bg.png"
                        alt="Background"
                        className="absolute inset-x-0 top-0 w-full h-[100%] object-cover object-center"
                    />
                    {/* Dark Blue Gradient Overlay */}
                    <div
                        aria-hidden
                        className="absolute inset-0 z-[1] w-full h-full"
                        style={{
                            background: "linear-gradient(84.38deg, #1B1D33 23.53%, rgba(27, 29, 51, 0.537107) 78.52%, rgba(27, 29, 51, 0) 97.93%)",
                        }}
                    />
                </div>

                <div className="relative z-[10] max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 w-full flex flex-col items-start pt-[15%] pb-[15%]">
                    {/* Left: Content */}
                    <div className="w-full lg:w-3/4 text-left">
                        <h1
                            className="text-white font-display font-semibold text-[48px] md:text-[60px] lg:text-[61px] leading-[1.05] mb-8"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            Professional Upholstery Cleaning <br />
                            In Tauranga Sofas, Chairs & More
                        </h1>

                        <p
                            className="text-white text-[16px] md:text-[18px] lg:text-[18px] font-semibold max-w-[650px] mb-10 leading-relaxed opacity-90"
                            data-aos="fade-right"
                            data-aos-delay="400"
                        >
                            Breathe new life into your furniture for a fresher, cleaner, and allergen-free home.
                        </p>
                    </div>
                </div>

                {/* Bottom Transition Assets (Inside Section to be clipped perfectly) */}
                {/* Yellow Frame */}
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_frame2.png"
                    alt="Yellow Frame"
                    className="absolute bottom-[-2%] left-[-2%] w-[70%] sm:w-[65%] lg:w-[58%] h-auto z-[3] rotate-[353deg] object-contain"
                />

                {/* Blue Frame */}
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_frame.png"
                    alt="Blue Frame"
                    className="absolute bottom-[-3%] left-[25%] sm:left-[30%] lg:left-[33%] w-[50%] sm:w-[45%] lg:w-[38%] h-auto z-[2] rotate-[0deg] object-contain"
                />
            </section>
        </div>
    );
};

export default UpholsteryHero;


