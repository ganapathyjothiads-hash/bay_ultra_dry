"use client";

import React, { useEffect, useRef, useState } from "react";
import ServiceFeatureCard from "../ui/ServiceFeatureCard";

const FloodRestorationSection = () => {
    const features = [
        "Rapid Water Extraction & Drying",
        "Advanced Dehumidification & Odour Removal",
        "Comprehensive drying of carpets, underlay, and structures",
        "Thorough Cleaning & Sanitisation of affected areas"
    ];

    return (
        <section
            className={`w-full overflow-hidden relative lg:bg-[linear-gradient(90deg,#FFF8AA_5.05%,#C0E683_54.35%,#2B97FB_100%)] bg-[linear-gradient(180deg,#2B97FB_0%,#C0E683_50%,#FFF8AA_100%)]`}
        >
            <div className={`w-full flex flex-col lg:flex-row items-stretch lg:items-center pt-0 pb-6 lg:py-14`}>
                {/* Image side */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    className={`w-full lg:w-[48%] h-[320px] md:h-[400px] lg:h-[480px] relative lg:shadow-2xl lg:rounded-r-[20px]`}
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover lg:rounded-r-[10px]"
                    >
                        <source src="/assets/video/24-7-Flood-Restoration-section-video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                </div>

                {/* Content side */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                    className={`w-full lg:w-[52%] flex flex-col justify-center px-6 md:px-12 lg:pl-6 lg:pr-20 pt-6 lg:pt-0 lg:pb-2`}
                >
                    <div>
                        <div className="mb-4 lg:mb-6">
                            <h2 className="font-display text-[#1D1D1D] text-[22px] md:text-[54px] lg:text-[49px] font-[400]  leading-[1] mb-4 lg:mb-6 tracking-tight flex items-center lg:block">
                                <span className="text-[#1A4299] lg:text-[#1A4299] font-[400] mr-1 lg:mr-2">24/7</span>
                                Flood Restoration
                            </h2>

                            <div className="space-y-4 lg:space-y-5 mb-8 lg:mb-12">
                                <p className="text-[#2C2C2C] text-[14px] md:text-[13px] font-medium leading-[1.6] max-w-[850px]">
                                    When flooding strikes, every minute counts. Your quick action and our immediate response are critical to preventing long-term damage and mould.
                                </p>
                                <p className="text-[#2C2C2C] text-[14px] md:text-[13px] font-medium leading-[1.6] max-w-[850px]">
                                    Our Tauranga-based emergency team is on call 24/7—including weekends and public holidays. We arrive fast to extract water, thoroughly dry all affected areas, and restore your property.
                                </p>
                            </div>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 lg:gap-x-6 lg:gap-y-5 max-w-[1050px]">
                            {features.map((feature, index) => (
                                <ServiceFeatureCard
                                    key={index}
                                    title={feature}
                                    className="!border-none"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FloodRestorationSection;
