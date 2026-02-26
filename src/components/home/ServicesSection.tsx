"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

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
        <section className="relative w-full min-h-screen bg-[#FEF9C3] flex flex-col justify-center overflow-hidden py-20 px-6 md:px-12 lg:px-20">
            {/* Background Wavy Lines */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-80 pointer-events-none">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt="Background wavy lines"
                    fill
                    className="object-contain object-right-top"
                />
            </div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-80 pointer-events-none rotate-180">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt="Background wavy lines"
                    fill
                    className="object-contain object-left-bottom"
                />
            </div>

            <div className="max-w-[1440px] mx-auto w-full relative z-10">
                {/* Header section */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L13.8 8.2H20L15 12L16.8 18.2L12 14.4L7.2 18.2L9 12L4 8.2H10.2L12 2Z" fill="#FBA41C" />
                            </svg>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="-mt-2">
                                <path d="M12 2L13.8 8.2H20L15 12L16.8 18.2L12 14.4L7.2 18.2L9 12L4 8.2H10.2L12 2Z" fill="#FBA41C" />
                            </svg>
                        </div>
                        <span className="text-[#1D3557] font-bold text-sm tracking-wider uppercase">Services</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-[#1D3557] tracking-tight">
                        Our Services
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceCards.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-[40px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex flex-col h-full transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]"
                        >
                            {/* Image Container with precise Cutout Effect */}
                            <div className="relative h-[260px] w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* The Cutout Circular Area (The White "Bite") */}
                                <div className="absolute -bottom-1 -right-1 w-[140px] h-[140px] bg-white rounded-tl-full flex items-center justify-center pt-6 pl-6">
                                    {/* The Orange Button */}
                                    <div className="w-[88px] h-[88px] bg-[#FBA41C] rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(251,164,28,0.3)] transition-transform duration-300 group-hover:scale-110 relative z-20">
                                        <ArrowUpRight
                                            className="text-white w-10 h-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            strokeWidth={3}
                                        />
                                    </div>

                                    {/* Subtle shadow overlay to blend the rounded-tl better with the white card background */}
                                    <div className="absolute inset-0 bg-white rounded-tl-full shadow-[-5px_-5px_15px_rgba(0,0,0,0.02)] -z-10"></div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="p-10 pt-4 flex flex-col flex-grow">
                                <h3 className="text-[32px] font-bold text-[#1E3A8A] mb-5 tracking-tight leading-none">
                                    {service.title}
                                </h3>
                                <p className="text-[#64748B] leading-relaxed text-[17px] font-medium">
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
