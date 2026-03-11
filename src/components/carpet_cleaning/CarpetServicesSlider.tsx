"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CarpetServicesSlider = () => {
    const baseServices = [
        {
            title: "Residential Carpet & Upholstery Cleaning",
            image: "/assets/images/carpet/Carpet_slider1.png",
        },
        {
            title: "Commercial Carpet & Upholstery Cleaning",
            image: "/assets/images/carpet/Carpet_slider2.png",
        },
        {
            title: "Bond Cleaning",
            image: "/assets/images/carpet/Carpet_slider3.png",
        },
        {
            title: "Pet Stain & Odour Removal",
            image: "/assets/images/carpet/Carpet_slider4.png",
        },
        {
            title: "Eco-Conscious Cleaning Products",
            image: "/assets/images/carpet/Carpet_slider5.png",
        },
    ];

    const [itemsPerView, setItemsPerView] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(baseServices.length);
    const [isAnimating, setIsAnimating] = useState(false);
    const [useTransition, setUseTransition] = useState(true);

    const displayServices = [...baseServices, ...baseServices, ...baseServices];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => prev + 1);
    }, [isAnimating]);

    const handlePrev = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => prev - 1);
    }, [isAnimating]);

    // Handle seamless cyclic jumping
    useEffect(() => {
        const animationDuration = 1000; // Matches transition-transform duration-1000

        const timer = setTimeout(() => {
            if (isAnimating) {
                setIsAnimating(false);

                // Wrap around logic
                if (currentIndex >= baseServices.length * 2) {
                    setUseTransition(false);
                    setCurrentIndex(currentIndex - baseServices.length);
                } else if (currentIndex < baseServices.length) {
                    setUseTransition(false);
                    setCurrentIndex(currentIndex + baseServices.length);
                }
            }
        }, animationDuration);

        return () => clearTimeout(timer);
    }, [currentIndex, isAnimating, baseServices.length]);

    // Restore transition after the jump
    useEffect(() => {
        if (!useTransition) {
            const timer = setTimeout(() => {
                setUseTransition(true);
            }, 20);
            return () => clearTimeout(timer);
        }
    }, [useTransition]);

    // Autoplay logic
    useEffect(() => {
        const slider = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(slider);
    }, [handleNext]);

    return (
        <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Yellow Glow - Behind Mobile Description / Desktop Heading */}
                <img
                    src="/assets/images/carpet/Carpet_DeepY.png"
                    alt=""
                    className="absolute z-0 pointer-events-none
                        left-[-15%] top-[12%] w-[80%] 
                        md:left-[-12%] md:top-[35%] md:w-[45%] 
                        transition-all duration-700 h-auto"
                />

                {/* Blue Glow - Top of Mobile Slider / Desktop Arrows */}
                <img
                    src="/assets/images/carpet/Carpet_DeepB.png"
                    alt=""
                    className="absolute z-0 pointer-events-none
                        right-[-10%] top-[38%] 
                        md:right-[-8%] md:top-[32%] 
                        transition-all duration-700 h-auto"
                />

                {/* Wavy lines */}
                <img
                    src="/assets/images/carpet/Carpet_wave_Slider.png"
                    alt=""
                    className="absolute w-full h-auto top-[62%] md:top-[50%] left-0 z-0 opacity-100 scale-[2.5] md:scale-100"
                    style={{ transform: 'translateY(-10%)' }}
                />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                {/* Top Descriptive Content */}
                <div className="text-center max-w-[1000px] mx-auto mb-16 md:mb-24">
                    <h1 className="text-[#304462] font-display font-regular text-[28px] md:text-[45px] lg:text-[58px] mb-8 leading-tight">
                        Deep Cleaning That Lasts
                    </h1>
                    <div className="space-y-6 text-[#2C2C2C] font-inter font-regular text-[14px] md:text-[16px] leading-relaxed max-w-[100%] mx-auto opacity-90">
                        <p>
                            Your carpets put up with a lot daily. We restore them to look, feel, and smell like new again.
                        </p>
                        <p>
                            Using our powerful, fast-drying equipment and safe cleaning solutions, we eliminate deep-seated dirt, stubborn stains, unpleasant odours, and allergens, leaving you with a healthier, fresher space.
                        </p>
                        <p>
                            Whether you need a quick refresh or a comprehensive commercial clean, our local Tauranga team delivers exceptional results you can trust.
                        </p>
                    </div>
                </div>

                {/* Slider Header Section */}
                <div className="md:flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div className="flex items-center gap-6 flex-1">
                        <h2 className="text-[#304462] font-display font-normal text-[24px] md:text-[44px] lg:text-[55px] leading-[1.1] whitespace-nowrap">
                            Deep Cleaning That Lasts
                        </h2>
                        <div className="hidden md:block h-[1.5px] bg-[#304462] opacity-20 flex-grow mt-2 max-w-[280px]"></div>
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

                {/* Slider Content */}
                <div className=" relative overflow-visible pb-12 mt-8 md:mt-0 max-w-[1240px] mx-auto">
                    <div
                        className={`flex ${useTransition ? "transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" : ""}`}
                        style={{
                            transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}%))`,
                        }}
                    >
                        {displayServices.map((service, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex justify-center items-center px-4 md:px-5"
                                style={{ width: `${100 / itemsPerView}%` }}
                            >
                                <div className="relative w-[250px] h-[250px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] xl:w-[350px] xl:h-[350px] 2xl:w-[380px] 2xl:h-[380px] rounded-full overflow-hidden z-20 group border-none shadow-xl md:shadow-none">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute z-30 pointer-events-none"
                                        style={{
                                            width: '90%',
                                            height: '133%',
                                            top: '14%',
                                            left: '24%',
                                        }}
                                    >
                                        <img
                                            src="/assets/images/carpet/Carpet_Slider_Frame.png"
                                            alt=""
                                            className="w-full h-full object-contain absolute inset-0 opacity-[0.92]"
                                        />
                                        <div className="relative h-full flex items-center justify-center pt-[15%] pl-[15%]">
                                            <div className="flex items-start gap-2 md:gap-3 text-left px-6 mt-[-55px] ml-[-75px] lg:mt-[-100px] lg:ml-[-80px]">
                                                <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#006341] flex-shrink-0 mt-[3px] md:mt-[6px]"></div>
                                                <h3 className="text-[#006341] font-sans font-bold text-[11px] md:text-[17px] leading-[1.2] max-w-[140px] md:max-w-[190px]">
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default CarpetServicesSlider;


