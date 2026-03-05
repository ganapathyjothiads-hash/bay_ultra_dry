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
                    <div className="w-full lg:w-2/3 text-left">
                        <h1
                            className="text-white font-['Nebulas'] font-normal text-[48px] md:text-[60px] lg:text-[61px] leading-[1.05] mb-8"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            Professional Upholstery Cleaning <br />
                            In Tauranga Sofas, Chairs & More
                        </h1>

                        <p
                            className="text-white text-[18px] md:text-[18px] lg:text-[18px] font-medium max-w-[650px] mb-10 leading-relaxed opacity-90"
                            data-aos="fade-right"
                            data-aos-delay="400"
                        >
                            Breathe new life into your furniture for a fresher, cleaner, and allergen-free home.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bottom Transition Assets & Waves */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] z-[20] pointer-events-none overflow-hidden xl:h-[400px]">

                {/* Yellow Frame - Positioned on the left slant */}
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_frame2.png"
                    alt="Yellow Frame"
                    className="absolute bottom-[6%] left-[0%] w-[10%] lg:w-[10%] h-auto z-[25] object-contain -rotate-[350deg]"
                />

                {/* Blue Frame - Positioned on the right slant */}
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_frame.png"
                    alt="Blue Frame"
                    className="absolute bottom-[5%] right-[36%] w-[100%] h-[50%] lg:w-[100%] h-auto z-[24] object-contain rotate-[204deg]"
                />
            </div>
        </div>
    );
};

export default UpholsteryHero;


