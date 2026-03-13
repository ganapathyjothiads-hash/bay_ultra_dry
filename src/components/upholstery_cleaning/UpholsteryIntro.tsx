"use client";

import React from "react";

const UpholsteryIntro = () => {
    return (
        <section className="relative w-full lg:pt-[80px] pt-[85px] pb-[14px] md:pt-[16px] md:pb-[16px]">


            {/* Left wavy S-Frame */}
            <div className="absolute left-[-149%] sm:left-0 top-[40%] md:top-[25%]  lg:top-[65%] -translate-y-1/2 z-[2] pointer-events-none w-[190%] sm:w-[46%] md:w-[40%] lg:w-[45%]">
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_SFrame.png"
                    alt=""
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Right wavy S-Frame */}
            <div className="absolute right-[-149%] sm:right-0 top-[40%] sm:top-[20%] md:top-[25%] lg:top-[65%] -translate-y-1/2 z-[2] pointer-events-none w-[190%] sm:w-[46%] md:w-[40%] lg:w-[45%]">
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_SFrame2.png"
                    alt=""
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* ── Text content: z-[10] — always above everything ── */}
            <div className="relative z-[10] max-w-[1060px] lg:max-w-[1160px] mx-auto px-5 md:px-5 text-center">
                <h2
                    className="text-[#304462] font-display font-medium text-[23px] sm:text-[26px] md:text-[30px] lg:text-[40px] mb-4 mt-2 md:mb-8 leading-tight tracking-tight"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    Gentle, Powerful, And Effective
                </h2>

                <p
                    className="text-[#4b5563] text-[17px] md:text-[19px] leading-relaxed px-1 md:px-4 opacity-90 font-sans"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                >
                    From your family's favourite sofa to large-scale commercial seating, our upholstery cleaning service revives fabrics deeply and safely. Our advanced cleaning systems gently yet powerfully lift away embedded dirt, grime, and odours, restoring your furniture's freshness and appearance.
                </p>
            </div>

        </section>
    );
};

export default UpholsteryIntro;
