"use client";

import React from "react";

const UpholsteryWhyChoose = () => {
    const features = [
        {
            title: "Fabric-safe cleaning products",
        },
        {
            title: "Fast drying times — minimal disruption",
        },
        {
            title: "Effective stain and odour removal",
        },
        {
            title: "We Handle Large Jobs — From office blocks to large venues",
        },
        {
            title: "Friendly, professional service from a local team",
        },
    ];

    return (
        <section className="w-full flex flex-col md:flex-row min-h-[600px] bg-white overflow-hidden">
            {/* Left Image Section */}
            <div className="w-full md:w-1/2 relative min-h-[500px] lg:min-h-[700px]">
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_Why.png"
                    alt="Handshake - Trusted Service"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-1/2 bg-[#E6E6E6] flex items-center p-6 sm:p-10 md:p-16 lg:p-24 relative">
                <div className="max-w-[600px] relative z-10 w-full">
                    <h2
                        className="text-[#304462] font-alt font-normal text-[36px] sm:text-[42px] md:text-[52px] lg:text-[51px] mb-8 md:mb-12 leading-[1.2] md:leading-[1.1]"
                        data-aos="fade-up"
                    >
                        Why Tauranga Trusts <br />
                        Bay Ultra Dry
                    </h2>

                    <div className="space-y-0">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 py-6 md:py-8 border-b border-gray-400 last:border-0"
                                data-aos="fade-left"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                                    <img
                                        src="/assets/icons/Carpet_pointer.png"
                                        alt=""
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <p className="text-[#304462] font-semibold md:font-medium text-[15px] md:text-[18px]">
                                    {feature.title}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-10 md:mt-12 text-[#4b5563] text-[14px] md:text-[15px] italic opacity-90 max-w-[500px] leading-relaxed">
                        "From family furniture to full commercial seating — we've got the tools and know-how to get it clean."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default UpholsteryWhyChoose;
