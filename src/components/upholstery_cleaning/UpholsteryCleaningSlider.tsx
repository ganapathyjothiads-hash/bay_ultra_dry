"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const UpholsteryCleaningSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const services = [
        {
            title: "Commercial Carpet & Upholstery Cleaning",
            image: "/assets/images/upholsteryCleaning/Upholstery_Slider1.png",
        },
        {
            title: "Dining Chairs And Fabric Headboards",
            image: "/assets/images/upholsteryCleaning/Upholstery_Slider2.png",
        },
        {
            title: "Commercial Upholstery — Cinemas, Offices, Buses",
            image: "/assets/images/upholsteryCleaning/Upholstery_Slider3.png",
        },
        {
            title: "Pet Stains, Spills & Odour Removal",
            image: "/assets/images/upholsteryCleaning/Upholstery_Slider4.png",
        }
    ];

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="relative w-full py-16 md:py-20 bg-white overflow-hidden">
            <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                {/* Header with Nav */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
                    <div className="flex items-center gap-4">
                        <img
                            src="/assets/icons/Star_3.png"
                            alt="Star Icon"
                            className="w-[32px] md:w-[42px] h-auto object-contain"
                        />
                        <h2 className="text-[#304462] font-display font-normal text-[32px] md:text-[48px] lg:text-[52px] tracking-tight">
                            What We Clean
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={handlePrev}
                            aria-label="Previous"
                            className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full bg-[#1e44a3] text-white flex items-center justify-center hover:bg-[#163075] transition-all shadow-lg active:scale-95"
                        >
                            <ArrowLeft size={30} strokeWidth={2.5} />
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Next"
                            className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full bg-[#1e44a3] text-white flex items-center justify-center hover:bg-[#163075] transition-all shadow-lg active:scale-95"
                        >
                            <ArrowRight size={30} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                {/* Slider Content */}
                <div className="relative overflow-visible">
                    <div
                        className="flex gap-6 md:gap-8 lg:gap-10 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {/* We'll use a simpler 1-at-a-time transition for mobile, and adjust for desktop if needed. 
                            Actually, a better way for a 3-up slider is to just show them or use a library, 
                            but I will stick to a clean grid-like slider that works for the current needs. */}
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] flex flex-col group cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-[25px] group-hover:rounded-full group-hover:scale-[0.92] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-md group-hover:shadow-2xl">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110"
                                    />
                                </div>

                                <div className="flex items-start gap-3 px-1">
                                    <div className="w-[8px] h-[8px] rounded-full bg-[#3B82F6] mt-[10px] flex-shrink-0" />
                                    <h3 className="text-[#3B82F6] font-semibold text-[17px] md:text-[19px] leading-[1.3] font-sans">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpholsteryCleaningSlider;


