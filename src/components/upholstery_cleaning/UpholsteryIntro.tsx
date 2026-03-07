"use client";

import React from "react";
import EnquireNowButton from "../ui/EnquireNowButton";

const UpholsteryIntro = () => {
    return (
        <section className="relative w-full pt-10 pb-0 md:pt-16 bg-white overflow-hidden">
            {/* Wavy Background Decorations */}
            <div className="absolute inset-x-0 top-0 z-0 pointer-events-none w-full h-full flex justify-between px-0">
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_SFrame.png"
                    alt=""
                    className="w-[35%] lg:w-[31%] h-auto object-contain opacity-80"
                />
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_SFrame2.png"
                    alt=""
                    className="w-[35%] lg:w-[31%] h-auto object-contain opacity-80"
                />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 text-center pb-10">
                <h2
                    className="text-[#304462] font-display font-normal text-[30px] md:text-[40px] lg:text-[40px] mb-8 leading-tight"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    Gentle, Powerful, And Effective
                </h2>

                <div
                    className="max-w-[1100px] mx-auto text-[#4b5563] text-[16px] md:text-[18px] leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                >
                    <p className="px-4">
                        From your family's favourite sofa to large-scale commercial seating, our upholstery cleaning service revives fabrics deeply and safely. Our advanced cleaning systems gently yet powerfully lift away embedded dirt, grime, and odours, restoring your furniture's freshness and appearance.
                    </p>
                </div>
            </div>

            {/* Enquire Now — bottom-right of this section */}
            <EnquireNowButton variant="section" />
        </section>
    );
};

export default UpholsteryIntro;
