"use client";

import React, { useEffect, useRef, useState } from "react";
import ServiceFeatureCard from "../ui/ServiceFeatureCard";

const CarpetCleaningSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const features = [
        { title: "Residential Cleaning:", description: "Revitalise your home's carpets for a healthier living space." },
        { title: "Commercial Cleaning:", description: "Large-scale solutions for offices and facilities with minimal downtime." },
        { title: "Stain & Odour Elimination:", description: "Targeted treatments to remove stubborn spots and unpleasant smells." },
        { title: "Eco-Friendly Solutions:", description: "Pet- and child-safe cleaning products for your peace of mind." }
    ];

    return (
        <section
            ref={sectionRef}
            className={`w-full overflow-hidden relative bg-white`}
        >
            <div className={`w-full flex flex-col lg:flex-row-reverse items-stretch lg:items-center pt-0 pb-12 lg:py-20`}>
                {/* Image side */}
                <div
                    className={`w-full lg:w-[40%] h-[380px] md:h-[480px] lg:h-[591px] relative lg:shadow-2xl lg:rounded-l-[20px] transition-all duration-1000 ease-out ${isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-full"
                        }`}
                    style={{
                        overflow: 'hidden',
                        clipPath: isVisible ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 0% 100%)",
                        transition: "all 1.6s cubic-bezier(0.19, 1, 0.22, 1)"
                    }}
                >
                    <img
                        src="/assets/video/Carpet_Cleaning.gif"
                        alt="Carpet Cleaning"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                </div>

                {/* Content side */}
                <div className={`w-full lg:w-[60%] flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32 pt-8 lg:pt-0`}>
                    <div
                        className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                    >
                        <div className="mb-8 lg:mb-10">
                            <h2 className="text-[#2B426E] text-[26px] md:text-[54px] lg:text-[49px] font-[600] lg:font-bold leading-[1.05] mb-4 lg:mb-6 tracking-tight">
                                Carpet Cleaning
                            </h2>

                            <div className="space-y-4 mb-8">
                                <p className="text-[#1A1A1A]/90 text-[16px] md:text-[15px] font-medium leading-[1.6] max-w-[650px]">
                                    Experience a deeper, faster-drying carpet clean with our powerful industrial-grade equipment. Get back to your routine in hours, not days. Perfect for protecting your home's air quality, refreshing rental properties, and maintaining professional business environments.
                                </p>
                                <p className="text-[#1A1A1A]/90 text-[16px] md:text-[15px] font-medium leading-[1.6] max-w-[650px]">
                                    We work around your schedule, offering after-hours and weekend appointments for your convenience.
                                </p>
                            </div>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 lg:gap-y-5 lg:gap-x-6 max-w-[850px]">
                            {features.map((feature, index) => (
                                <ServiceFeatureCard
                                    key={index}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarpetCleaningSection;
