"use client";

import React, { useEffect, useRef, useState } from "react";
import ServiceFeatureCard from "../ui/ServiceFeatureCard";

interface ServiceSectionsProps {
    title: string;
    highlightPrefix?: string;
    description: string[];
    features: string[];
    gifSrc: string;
    imagePosition: "left" | "right";
    backgroundType: "gradient" | "white";
}

const ServiceSections: React.FC<ServiceSectionsProps> = ({
    title,
    highlightPrefix,
    description,
    features,
    gifSrc,
    imagePosition,
    backgroundType
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const isLeft = imagePosition === "left";
    const isGradient = backgroundType === "gradient";

    return (
        <section
            ref={sectionRef}
            className={`w-full h-auto min-h-screen lg:h-screen flex items-center overflow-hidden relative py-20 lg:py-0 ${!isGradient ? "bg-white" : ""}`}
            style={isGradient ? {
                background: "linear-gradient(90deg, #FFF8AA 5.05%, #C0E683 54.35%, #2B97FB 100%)",
            } : {}}
        >
            <div className={`w-full h-full flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-center relative`}>

                {/* Image side: 40% width */}
                <div className={`w-full lg:w-[40%] h-auto lg:h-full relative flex items-center ${isLeft ? "justify-start" : "justify-end"}`}>
                    <div
                        className={`relative w-full h-[400px] lg:h-[600px] shadow-2xl transition-all duration-1000 ease-in-out ${isLeft
                            ? "rounded-r-[40px] lg:rounded-r-[60px]"
                            : "rounded-l-[40px] lg:rounded-l-[60px]"
                            } overflow-hidden ${isVisible
                                ? "opacity-100 translate-x-0"
                                : `opacity-0 ${isLeft ? "-translate-x-full" : "translate-x-full"}`
                            }`}
                        style={{
                            clipPath: isVisible
                                ? `inset(0% 0% 0% 0% round ${isLeft ? "0 60px 60px 0" : "60px 0 0 60px"})`
                                : `inset(0% ${isLeft ? "100%" : "0%"} 0% ${isLeft ? "0%" : "100%"} round ${isLeft ? "0 60px 60px 0" : "60px 0 0 60px"})`,
                            transition: "all 1.6s cubic-bezier(0.4, 0, 0.2, 1)"
                        }}
                    >
                        <img
                            src={gifSrc}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay only for gradient/restoration style */}
                        {isLeft && isGradient && (
                            <>
                                <div className="absolute inset-0 bg-[#3DB6F2]/25 mix-blend-overlay"></div>
                                <div className="absolute inset-0 bg-[#1E40AF]/10 mix-blend-multiply"></div>
                            </>
                        )}
                        {/* Subtle overlay for others */}
                        {!isGradient && (
                            <div className="absolute inset-0 bg-black/5"></div>
                        )}
                    </div>
                </div>

                {/* Content side: 60% width */}
                <div className={`w-full lg:w-[60%] px-6 md:px-12 lg:px-20 xl:px-32 flex flex-col justify-center mt-12 lg:mt-0`}>
                    <div
                        className={`transition-all duration-1000 delay-300 lg:max-h-[600px] flex flex-col justify-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                    >
                        <div>
                            <h2 className="text-[40px] md:text-[56px] lg:text-[59px] font-bold tracking-tight leading-[1.05] mb-8 text-[#1A1A1A]">
                                {highlightPrefix && (
                                    <span className="text-[#1A42C1] italic mr-4">{highlightPrefix}</span>
                                )}
                                {title}
                            </h2>

                            <div className="space-y-6 mb-12">
                                {description.map((para, idx) => (
                                    <p key={idx} className="text-[#1A1A1A] text-[17px] md:text-[15px] font-medium leading-relaxed max-w-[700px]">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 lg:gap-x-10 lg:gap-y-6 max-w-[1000px]">
                            {features.map((feature, index) => (
                                <ServiceFeatureCard
                                    key={index}
                                    title={feature}
                                    className="!bg-white !rounded-[15px] !p-6 lg:!p-8 !shadow-[0_15px_45px_-10px_rgba(0,0,0,0.1)] !border-none"
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Attribution / Reveal effect marker */}

        </section>
    );
};

export default ServiceSections;
