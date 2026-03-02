"use client";

import React, { useEffect, useRef, useState } from "react";
import ServiceFeatureCard from "../ui/ServiceFeatureCard";

const UpholsteryCleaningSection = () => {
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
        { title: "Residential Upholstery:", description: "Couches, armchairs, dining chairs, cushions, and headboards." },
        { title: "Commercial Settings:", description: "Cinemas, public transport, offices, and more." },
        { title: "Targeted Treatments:", description: "Effective removal of stubborn stains, pet odours, and allergens." }
    ];

    return (
        <section
            ref={sectionRef}
            className={`w-full overflow-hidden relative lg:bg-[linear-gradient(90deg,#44A4F6_0%,#C3E985_45%,#FBF0A6_100%)] bg-[linear-gradient(180deg,#44A4F6_0%,#C3E985_45%,#FBF0A6_100%)]`}
        >
            <div className={`w-full flex flex-col lg:flex-row items-stretch lg:items-center pt-0 pb-12 lg:py-24`}>
                {/* Image side */}
                <div
                    className={`w-full lg:w-[46%] h-[400px] lg:h-[591px] relative lg:shadow-2xl lg:rounded-r-[20px] transition-all duration-1000 ease-out ${isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-full"
                        }`}
                    style={{
                        overflow: 'hidden',
                        clipPath: isVisible ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)",
                        transition: "all 1.6s cubic-bezier(0.19, 1, 0.22, 1)"
                    }}
                >
                    <img
                        src="/assets/video/Upholstery_Cleaning.gif"
                        alt="Upholstery Cleaning"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                </div>

                {/* Content side */}
                <div className={`w-full lg:w-[54%] flex flex-col justify-center px-6 md:px-12 lg:px-[60px] xl:px-[80px] pt-8 lg:pt-0 mb-10 lg:mb-0`}>
                    <div
                        className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                    >
                        <div className="mb-8 lg:mb-12">
                            <h2 className="text-[#1A1A1A] text-[26px] md:text-[46px] lg:text-[50px] font-[600] lg:font-[500] leading-[1.1] mb-4 lg:mb-6 tracking-tight">
                                Upholstery Cleaning
                            </h2>

                            <div className="space-y-4 mb-10">
                                <p className="text-[#1A1A1A] text-[15px] md:text-[15px] font-medium leading-[1.6] max-w-[700px]">
                                    Breathe new life into your furniture. Our professional upholstery cleaning revives your favourite pieces, leaving them fresh, clean, and free from allergens and odours.
                                </p>
                                <p className="text-[#1A1A1A] text-[15px] md:text-[15px] font-medium leading-[1.6] max-w-[700px]">
                                    Using fabric-safe, powerful products, we deliver a deep clean that protects your investment and your well-being.
                                </p>
                                <p className="text-[#1A1A1A] text-[15px] md:text-[15px] font-medium leading-[1.6] max-w-[700px] mb-6">
                                    We gently yet powerfully clean a wide range of fabrics and materials:
                                </p>
                            </div>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 lg:gap-x-8 lg:gap-y-6 max-w-[850px]">
                            {features.map((feature, index) => (
                                <ServiceFeatureCard
                                    key={index}
                                    title={feature.title}
                                    description={feature.description}
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

export default UpholsteryCleaningSection;
