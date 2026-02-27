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

    const isLeft = imagePosition === "left";
    const isGradient = backgroundType === "gradient";

    return (
        <section
            ref={sectionRef}
            className={`w-full h-auto min-h-[700px] overflow-hidden relative ${!isGradient ? "bg-white" : ""}`}
            style={isGradient ? {
                background: "linear-gradient(90deg, #FFF8AA 5.05%, #C0E683 54.35%, #2B97FB 100%)",
            } : {}}
        >
            <div className={`w-full flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-start`}>

                {/* Image side: Fixed dimensions on desktop, touching the edge */}
                <div
                    className={`w-full lg:w-[675px] h-[350px] md:h-[450px] lg:h-[591px] lg:mt-[70px] relative shadow-2xl transition-all duration-1000 ease-out ${isVisible
                        ? "opacity-100 translate-x-0"
                        : `opacity-0 ${isLeft ? "-translate-x-full" : "translate-x-full"}`
                        }`}
                    style={{
                        borderTopRightRadius: isLeft ? '20px' : '0',
                        borderBottomRightRadius: isLeft ? '20px' : '0',
                        borderTopLeftRadius: !isLeft ? '20px' : '0',
                        borderBottomLeftRadius: !isLeft ? '20px' : '0',
                        overflow: 'hidden',
                        clipPath: isVisible
                            ? "inset(0% 0% 0% 0%)"
                            : `inset(0% ${isLeft ? "100%" : "0%"} 0% ${isLeft ? "0%" : "100%"})`,
                        transition: "all 1.6s cubic-bezier(0.19, 1, 0.22, 1)"
                    }}
                >
                    <img
                        src={gifSrc}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    {/* Blue Overlay Effect - matching the image */}
                    <div className="absolute inset-0 bg-[#2B97FB]/30 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                </div>

                {/* Content side: Takes remaining space */}
                <div className={`flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-28 py-16 md:py-24 lg:pt-[80px] lg:pb-24`}>
                    <div
                        className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                    >
                        <div className="mb-10">
                            <h2 className="text-[#0a0a0a] text-[36px] md:text-[54px] lg:text-[48px] font-bold leading-[1.05] mb-8 tracking-tight">
                                {highlightPrefix && (
                                    <span className="text-[#1A42C1] mr-3">{highlightPrefix}</span>
                                )}
                                {title}
                            </h2>

                            <div className="space-y-6 mb-12">
                                {description.map((para, idx) => (
                                    <p key={idx} className="text-[#1A1A1A]/90 text-[17px] md:text-[18px] font-medium leading-[1.6] max-w-[700px]">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Feature Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 lg:gap-x-12 lg:gap-y-8 max-w-[1100px]">
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

export default ServiceSections;

