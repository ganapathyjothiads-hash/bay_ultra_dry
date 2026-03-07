"use client";

import React from "react";

const CarpetCleaningBenefits = () => {
    const benefits = [
        {
            title: "Quickly Dried",
            description: "We believe in working with you, not around you. That means scheduling around your life, not ours.",
        },
        {
            title: "Competitive Pricing",
            description: "We offer great value, especially for large or recurring commercial jobs.",
        },
        {
            title: "Flexible bookings",
            description: "nights, weekends, and holidays",
        },
        {
            title: "Industrial-grade equipment",
            description: "deeper, longer-lasting results",
        },
    ];

    return (
        <section className="w-full flex items-center py-12 md:py-16 lg:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden" style={{ backgroundColor: "#E9E9E9" }}>
            <div className="max-w-[1300px] mx-auto relative z-10 w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                    {/* Left Column - Image without Arch Effect */}
                    <div className="relative w-full lg:w-[48%] flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[540px] aspect-[1/1.1] rounded-[15px] overflow-hidden shadow-xl">
                            <img
                                src="/assets/images/carpet/Carpet_Benefits.png"
                                alt="Professional carpet cleaning"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Right Column - Benefits */}
                    <div className="w-full lg:w-[52%] flex flex-col justify-start pt-2">
                        <h2 className="text-[#304462] font-display font-medium text-[32px] md:text-[42px] lg:text-[48px] leading-[1.1] tracking-tight mb-8">
                            Benefits Of Our<br />Carpet Cleaning
                        </h2>

                        <div className="flex flex-col w-full max-w-[550px]">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex flex-col w-full">
                                    <div className="flex flex-col gap-4 py-5">
                                        <div className="flex gap-4 items-center">
                                            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                                <img
                                                    src="/assets/icons/Carpet_pointer.png"
                                                    alt=""
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <h3 className="text-[#000000] font-display font-medium text-[18px] leading-[25px] flex items-center">
                                                {benefit.title}
                                            </h3>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-[#333333] font-['Inter'] font-medium text-[18px] leading-[25px]">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                    {index < benefits.length - 1 && (
                                        <div className="w-full h-[1px] bg-black/20" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarpetCleaningBenefits;
