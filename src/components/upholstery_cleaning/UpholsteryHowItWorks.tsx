"use client";

import React from "react";

const UpholsteryHowItWorks = () => {
    const steps = [
        {
            title: "Assessment",
            description: "We Identify Fabric Type And Cleaning Needs.",
            image: "/assets/images/upholsteryCleaning/Assessement.png",
        },
        {
            title: "Pre-Treatment",
            description: "Stains And Odours Are Carefully Treated.",
            image: "/assets/images/upholsteryCleaning/Pre-Treatment.png",
        },
        {
            title: "Deep Clean",
            description: "Powerful Extraction With Safe Solutions.",
            image: "/assets/images/upholsteryCleaning/Deep-Clean.png",
        },
        {
            title: "Drying",
            description: "A Fast-Dry Process So Furniture Is Ready Sooner.",
            image: "/assets/images/upholsteryCleaning/Drying.png",
        },
    ];

    return (
        <section className="w-full py-12 md:py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-[#304462] font-display font-[400] text-[36px] md:text-[52px] text-center mb-12 md:mb-24">
                    How It Works
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-start group" data-aos="fade-up" data-aos-delay={index * 150}>
                            {/* Icon Box */}
                            <div className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] rounded-[16px] bg-[#FEF9C3] flex items-center justify-center mb-6 md:mb-10 transition-transform duration-300 group-hover:scale-105 shadow-sm">
                                <img
                                    src={step.image}
                                    alt={step.title}
                                    className="w-[60%] h-[60%] object-contain"
                                />
                            </div>

                            {/* Text Content */}
                            <div className="w-full">
                                <p className="text-[#304462] text-[18px] leading-snug md:leading-relaxed mb-4">
                                    <span className="font-bold">{step.title} —</span> {step.description}
                                </p>
                                {/* Bottom Line */}
                                <div className="w-full h-[1.5px] bg-[#304462] opacity-[0.15] md:opacity-40" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpholsteryHowItWorks;
