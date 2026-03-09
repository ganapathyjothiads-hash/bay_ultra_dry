"use client";

import React from "react";

const UpholsteryIntro = () => {
    return (
        <section className="relative w-full pt-12 pb-14 md:pt-16 md:pb-16">


            {/* Left wavy S-Frame */}
            <div className="absolute left-[-149%] sm:left-0 top-[35%] sm:top-[5%] lg:top-[50%] -translate-y-1/2 z-[2] pointer-events-none w-[190%] sm:w-[46%] md:w-[40%] lg:w-[45%]">
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_SFrame.png"
                    alt=""
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* Right wavy S-Frame */}
            <div className="absolute right-[-149%] sm:right-0 top-[35%] sm:top-[5%] lg:top-[50%] -translate-y-1/2 z-[2] pointer-events-none w-[190%] sm:w-[46%] md:w-[40%] lg:w-[45%]">
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_SFrame2.png"
                    alt=""
                    className="w-full h-auto object-contain"
                />
            </div>

            {/* ── Text content: z-[10] — always above everything ── */}
            <div className="relative z-[10] max-w-[860px] lg:max-w-[960px] mx-auto px-6 md:px-12 text-center">
                <h2
                    className="text-[#304462] font-display font-regular text-[24px] sm:text-[30px] md:text-[38px] lg:text-[50px] mb-5 mt-[7] md:mb-7 leading-tight"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    Gentle, Powerful, And Effective
                </h2>

                <p
                    className="text-[#4b5563] text-[16px] sm:text-[15px] md:text-[16px] leading-relaxed px-2 md:px-4"
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
