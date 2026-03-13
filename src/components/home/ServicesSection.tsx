"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const serviceCardsData = [
    {
        title: "Carpet Cleaning",
        description: "See our qualified residential and commercial carpet cleaners for effective dirt removal on carpet and rugs and specialist stain removal for a range of spot stains.",
        image: "/assets/images/carpet_cleaning.png",
    },
    {
        title: "Upholstery Cleaning",
        description: "Professional upholstery cleaning and mattress cleaning will give your home a new lease of life. And our team can get your car upholstery looking like new as well.",
        image: "/assets/images/upeholstery_cleaning.png",
    },
    {
        title: "Flood Restoration",
        description: "Flooded your floors? Get help fast with Bay Ultra Dry's affordable flood restoration services; guaranteed to restore your water damaged carpet and floor.",
        image: "/assets/images/flood_restoration1.png",
    }
];

// Duplicate cards to enable slider looping/flowing visuals
// const serviceCards = [...serviceCardsData, ...serviceCardsData];

const ServicesSection = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
    }, [isHovered]);

    return (
        <section className="relative w-full bg-[#FFF1A4] overflow-hidden py-12 md:py-24 md:px-12 lg:px-20 min-h-screen flex items-center">

            {/* Background Wavy Lines */}
            <div className="absolute top-0 right-0 w-[50%] h-[400px] md:w-[43%] md:h-[600px] opacity-80 pointer-events-none">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt="Background wavy lines"
                    fill
                    className="object-contain object-right-top"
                    priority
                />
            </div>

            <div className="absolute bottom-0 left-0 w-[50%] h-[400px] md:w-[43%] md:h-[600px] opacity-80 pointer-events-none rotate-180">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt="Background wavy lines"
                    fill
                    className="object-contain object-right-top"
                />
            </div>

            <div className="max-w-[1400px] mx-auto w-full relative z-10 px-4">

                {/* Header */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="flex flex-row items-end justify-between mb-10 md:mb-14"
                >
                    <div className="flex flex-col items-start justify-start w-full">

                        <div className="flex items-center gap-3 mb-3">
                            <div className="relative w-[36px] h-[36px]">
                                <Image
                                    src="/assets/icons/Star_3.png"
                                    alt="Services Icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-[#1A4299] font-semibold text-[18px]">
                                Services
                            </span>
                        </div>

                        <h2 className="text-[28px] md:text-[42px] xl:text-[52px] font-[400] leading-[1.2] text-[#304462] tracking-tight">
                            Our Services
                        </h2>

                    </div>
                </div>

                {/* Cards */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                    className="w-full relative"
                >

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                        {serviceCardsData.map((service, index) => (

                            <div
                                key={index}
                                className="group relative bg-white rounded-[28px] overflow-visible shadow-sm flex flex-col border border-gray-100"
                            >

                                {/* Image */}
                                {/* Image */}
                                    <div className="relative h-[250px] md:h-[280px] w-full overflow-hidden rounded-[28px]">

                                        {/* Deep Zoom Effect */}
                                        <div className="absolute inset-0 transform transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.45] group-hover:-translate-y-2">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                    </div>

                                {/* Content */}
                                <div className="relative p-7 flex flex-col flex-grow bg-white rounded-b-[28px]">

                                    <div className="absolute -top-[50px] right-6 w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center z-20">

                                        <div className="w-[65px] h-[65px] bg-[#F5A51C] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#E8950B] transition-colors">

                                            <ArrowRight
                                                className="text-white w-8 h-8 transition-transform duration-[600ms] ease-out group-hover:-rotate-45"
                                                strokeWidth={2.5}
                                            />

                                        </div>

                                    </div>

                                    <h3 className="text-[19px] md:text-[28px] font-bold text-[#1A4299] mb-2 md:mb-4 pr-16 tracking-tight leading-tight mt-1">
                                        {service.title}
                                    </h3>

                                    <p className="text-[#2C2C2C] leading-[1.55] text-[15px] md:text-[15px] font-medium">
                                        {service.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

        </section>
    );
};

export default ServicesSection;
