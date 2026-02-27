"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

const serviceCards = [
    {
        title: "Carpet Cleaning",
        description: "See our qualified residential and commercial carpet cleaners for effective dirt removal on carpet and rugs and specialist stain removal for a range of spot stains.",
        image: "/assets/images/Carpet Cleaning.png",
    },
    {
        title: "Upholstery Cleaning",
        description: "Professional upholstery cleaning and mattress cleaning will give your home a new lease of life. And our team can get your car upholstery looking like new as well.",
        image: "/assets/images/Upholstery Cleaning.png",
    },
    {
        title: "Flood Restoration",
        description: "Flooded your floors? Get help fast with Bay Ultra Dry's affordable flood restoration services; guaranteed to restore your water damaged carpet and floor.",
        image: "/assets/images/Flood Restoration.png",
    }
];

const ServicesSection = () => {
    return (
        <section className="relative w-full bg-[#FFF9C4] overflow-hidden py-16 md:py-24 px-6 md:px-12 lg:px-20 min-h-screen flex items-center">
            {/* Background Wavy Lines */}
            {/* Background Wavy Lines */}
            <div className="absolute top-0 right-0 w-[50%] h-[400px] md:w-[43%] md:h-[600px] opacity-100 pointer-events-none">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt="Background wavy lines"
                    fill
                    className="object-contain object-right-top"
                    priority
                />
            </div>
            <div className="absolute bottom-0 left-0 w-[50%] h-[400px] md:w-[43%] md:h-[600px] opacity-100 pointer-events-none rotate-180">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt="Background wavy lines"
                    fill
                    className="object-contain object-right-top"
                />
            </div>

            <div className="max-w-[1200px] mx-auto w-full relative z-10">
                {/* Header section - Left Aligned */}
                <div className="flex flex-col items-start justify-start mb-10 md:mb-12">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="relative w-6 h-6">
                            <Image
                                src="/assets/images/Mask group.png"
                                alt="Services Icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-[#1A4299] font-bold text-lg">Services</span>
                    </div>
                    <h2 className="text-[32px] md:text-5xl lg:text-[56px] font-[400] text-[#304462] tracking-tight leading-tight">
                        Our Services
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {serviceCards.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-[40px] overflow-visible shadow-[0_10px_35px_rgba(0,0,0,0.05)] flex flex-col h-full transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-[220px] md:h-[240px] w-full overflow-hidden rounded-t-[40px]">
                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* The Cutout Circular Area (The White "Bite") */}
                            <div className="absolute top-[185px] md:top-[200px] right-3 w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-white rounded-full flex items-center justify-center z-20 shadow-[0_8px_25px_rgba(0,0,0,0.06)]">
                                {/* The Orange Button */}
                                <div className="w-[65px] h-[65px] md:w-[80px] md:h-[80px] bg-[#FBA41C] rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(251,164,28,0.3)] transition-all duration-300 relative">
                                    <ArrowUpRight
                                        className="text-white w-8 h-8 md:w-10 md:h-10 transition-all duration-500 group-hover:rotate-45"
                                        strokeWidth={3}
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="p-7 md:p-9 pt-6 flex flex-col flex-grow">
                                <h3 className="text-[22px] md:text-[26px] font-bold text-[#002F74] mb-3 tracking-tight pr-12">
                                    {service.title}
                                </h3>
                                <p className="text-[#64748B] leading-relaxed text-[14px] md:text-[15px] font-medium">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
