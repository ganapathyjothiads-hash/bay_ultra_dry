"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const UpholsteryCleaningSlider = () => {
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

    const [currentIndex, setCurrentIndex] = useState(services.length);
    const [visibleCards, setVisibleCards] = useState(3);
    const [isAnimating, setIsAnimating] = useState(false);
    const [useTransition, setUseTransition] = useState(true);

    // Triple the items to ensure a seamless infinite loop in both directions
    const displayServices = [...services, ...services, ...services];

    const updateVisibleCards = useCallback(() => {
        if (typeof window !== "undefined") {
            if (window.innerWidth >= 1024) {
                setVisibleCards(3);
            } else if (window.innerWidth >= 768) {
                setVisibleCards(2);
            } else {
                setVisibleCards(1);
            }
        }
    }, []);

    useEffect(() => {
        updateVisibleCards();
        window.addEventListener("resize", updateVisibleCards);
        return () => window.removeEventListener("resize", updateVisibleCards);
    }, [updateVisibleCards]);

    const handlePrev = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => prev - 1);
    }, [isAnimating]);

    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => prev + 1);
    }, [isAnimating]);

    // Handle seamless cyclic jumping
    useEffect(() => {
        const animationDuration = 800;

        const timer = setTimeout(() => {
            if (isAnimating) {
                setIsAnimating(false);

                // Wrap around logic
                if (currentIndex >= services.length * 2) {
                    setUseTransition(false);
                    setCurrentIndex(currentIndex - services.length);
                } else if (currentIndex < services.length) {
                    setUseTransition(false);
                    setCurrentIndex(currentIndex + services.length);
                }
            }
        }, animationDuration);

        return () => clearTimeout(timer);
    }, [currentIndex, isAnimating, services.length]);

    // Restore transition after the jump
    useEffect(() => {
        if (!useTransition) {
            const timer = setTimeout(() => {
                setUseTransition(true);
            }, 20);
            return () => clearTimeout(timer);
        }
    }, [useTransition]);

    return (
        <section className="relative w-full pt-0 pb-10 md:pb-24">
            {/* Green glow */}
            <div
                className="absolute pointer-events-none z-[0]
                    top-[-25%] left-1/2 -translate-x-1/2 md:left-[10%] md:translate-x-0
                    w-[500px] h-[350px] md:h-[500px]
                    bg-[#A4D9FF] md:bg-[#00FF26] opacity-[18%] md:opacity-[25%]
                    blur-[120px] md:blur-[160px] rounded-full"
            />

            {/* Blue glow */}
            <div
                className="absolute pointer-events-none z-[0]
                    top-[-34%] right-[-34%] md:right-[5%]
                    w-[350px] h-[400px] md:h-[600px]
                    bg-[#A4D9FF] md:bg-[#006FFF] opacity-[15%] md:opacity-[22%]
                    blur-[110px] md:blur-[150px] rounded-full"
            />

            <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-5 md:mb-10 gap-2">
                    <div className="flex items-center gap-3 md:gap-4 w-full justify-center md:justify-start">
                        <img
                            src="/assets/icons/Star_3.png"
                            alt="Star Icon"
                            className="w-[30px] md:w-[35px] h-auto object-contain"
                        />
                        <h2 className="text-[#304462] font-display font-regular text-[24px] md:text-[36px] lg:text-[44px] tracking-tight">
                            What We Clean
                        </h2>
                    </div>

                    {/* Desktop Arrows */}
                    <div className="hidden md:flex gap-4 flex-shrink-0">
                        <button
                            onClick={handlePrev}
                            aria-label="Previous"
                            className="md:w-[44px] md:h-[44px] lg:w-[56px] lg:h-[56px] rounded-full bg-[#1e44a3] text-white flex items-center justify-center hover:bg-[#163075] hover:scale-105 transition-all duration-300 shadow-[0_8px_20px_rgba(30,68,163,0.25)] active:scale-95 group"
                        >
                            <ArrowLeft strokeWidth={2} className="w-5 h-5 lg:w-6 lg:h-6 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Next"
                            className="md:w-[44px] md:h-[44px] lg:w-[56px] lg:h-[56px] rounded-full bg-[#1e44a3] text-white flex items-center justify-center hover:bg-[#163075] hover:scale-105 transition-all duration-300 shadow-[0_8px_20px_rgba(30,68,163,0.25)] active:scale-95 group"
                        >
                            <ArrowRight strokeWidth={2} className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Slider track */}
                <div className="relative overflow-hidden w-full">
                    <div
                        className={`flex ${useTransition ? "transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]" : ""}`}
                        style={{ transform: `translateX(calc(-${currentIndex * (100 / visibleCards)}%))` }}
                    >
                        {displayServices.map((service, index) => (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/3 px-3 md:px-4 lg:px-5 flex-shrink-0 flex flex-col group cursor-pointer"
                            >
                                <div className="relative w-full aspect-square mb-5 overflow-hidden
                                    rounded-[24px] md:rounded-[28px]
                                    transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                                    group-hover:rounded-[50%]
                                    shadow-[0_6px_18px_rgba(0,0,0,0.08)]
                                    group-hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)]
                                    group-hover:-translate-y-1
                                    bg-gray-100 z-10 mt-1">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-[900ms] pointer-events-none" />
                                </div>

                                <div className="flex items-start px-1 gap-3 mt-1">
                                    <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#3B82F6] flex-shrink-0 mt-[9px] md:mt-[10px]" />
                                    <h3 className="font-display text-[#3780FF] font-medium text-[12px] md:text-[16px] leading-[1.4] tracking-wide">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Arrows */}
                <div className="flex md:hidden justify-center gap-8 mt-6">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous"
                        className="w-[34px] h-[34px] rounded-full bg-[#1e44a3] text-white flex items-center justify-center hover:bg-[#163075] transition-all shadow-[0_8px_20px_rgba(30,68,163,0.25)] active:scale-95 group"
                    >
                        <ArrowLeft strokeWidth={2} className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next"
                        className="w-[34px] h-[34px] rounded-full bg-[#1e44a3] text-white flex items-center justify-center hover:bg-[#163075] transition-all shadow-[0_8px_20px_rgba(30,68,163,0.25)] active:scale-95 group"
                    >
                        <ArrowRight strokeWidth={2} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UpholsteryCleaningSlider;
