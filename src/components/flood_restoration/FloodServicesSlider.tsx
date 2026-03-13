"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const FloodServicesSlider = () => {
    const services = [
        {
            title: "Emergency Water Extraction",
            image: "/assets/images/emergency_water.png",
        },
        {
            title: "Carpet, Underlay & Subfloor Drying",
            image: "/assets/images/carpet_underley.png",
        },
        {
            title: "Dehumidification & Air Movement",
            image: "/assets/images/dehumdification.png",
        },
        {
            title: "Odour & Mould Prevention",
            image: "/assets/images/odour.png",
        },
        {
            title: "Residential & Commercial Recovery",
            image: "/assets/images/residential.png",
        },
        {
            title: "Dehumidifier & Drying Equipment Hire",
            image: "/assets/images/drying_equipement.png",
        },
    ];

    const [itemsPerView, setItemsPerView] = useState(3.5);
    const [currentIndex, setCurrentIndex] = useState(services.length);
    const [isAnimating, setIsAnimating] = useState(false);
    const [useTransition, setUseTransition] = useState(true);

    const displayServices = [...services, ...services, ...services];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3.5);
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
        const animationDuration = 500; // Matches transition-transform duration-500

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

    // Autoplay logic
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <section className="w-full py-8 md:py-12 lg:py-16 bg-white px-6 md:px-12 lg:px-24">
            <div className="max-w-[1400px] mx-auto">
                {/* Header with title and navigation */}
                <div
                    data-aos="fade-right"
                    className="flex items-center justify-between mb-12 md:mb-16"
                >
                    <div className="flex items-center gap-3 md:gap-4">
                        <img
                            src="/assets/images/star_2.png"
                            alt=""
                            aria-hidden
                            className="w-6 h-6 md:w-8 md:h-8"
                        />
                        <h2 className="text-[#304462] font-display font-normal text-[24px] md:text-[50px] lg:text-[62px] leading-tight lg:leading-[76px] tracking-[0.01em] capitalize">
                            Our Flood Restoration Services
                        </h2>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="gap-3 md:gap-4 hidden md:flex">
                        <button
                            onClick={handlePrev}
                            aria-label="Previous services"
                            className="md:w-[44px] md:h-[44px] lg:w-[56px] lg:h-[56px] rounded-full bg-[#1e44a3] text-white flex items-center justify-center hover:bg-[#163075] hover:scale-105 transition-all duration-300 shadow-[0_8px_20px_rgba(30,68,163,0.25)] active:scale-95 group"
                        >
                            <ArrowLeft strokeWidth={2} className="w-5 h-5 lg:w-6 lg:h-6 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Next services"
                            className="md:w-[44px] md:h-[44px] lg:w-[56px] lg:h-[56px] rounded-full bg-[#1e44a3] text-white flex items-center justify-center hover:bg-[#163075] hover:scale-105 transition-all duration-300 shadow-[0_8px_20px_rgba(30,68,163,0.25)] active:scale-95 group"
                        >
                            <ArrowRight strokeWidth={2} className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="overflow-hidden pt-10 -mt-10 pb-5"
                >
                    <div
                        className={`flex gap-6 ${useTransition ? "transition-transform duration-500 ease-out" : ""}`}
                        style={{
                            transform: `translateX(calc(-${currentIndex * (100 / itemsPerView)}%))`,
                        }}
                    >
                        {displayServices.map((service, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 group"
                                style={{ width: `calc(${100 / itemsPerView}% - 24px)` }}
                            >
                                <div className="flex flex-col h-full transition-all duration-300 ease-out hover:-translate-y-2">
                                    {/* Service Image */}
                                    <div className="relative w-full h-[280px] md:h-[300px] lg:h-[310px] rounded-[20px] overflow-hidden mb-6 shadow-md transition-shadow duration-300 group-hover:shadow-[0_10px_30px_rgba(43,89,195,0.2)]">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Service Title */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#3780FF] flex-shrink-0"></div>
                                        <h3 className="text-[#3780FF] font-display font-medium text-[13px] md:text-[18px] lg:text-[22px] leading-[1.4] lg:leading-[36px] tracking-[0.02em] capitalize">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex md:hidden justify-center gap-8 mt-6">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous services"
                        className="w-[34px] h-[34px] rounded-full bg-[#1e44a3] text-white flex items-center justify-center hover:bg-[#163075] transition-all shadow-[0_8px_20px_rgba(30,68,163,0.25)] active:scale-95 group"
                    >
                        <ArrowLeft strokeWidth={2} className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next services"
                        className="w-[34px] h-[34px] rounded-full bg-[#1e44a3] text-white flex items-center justify-center hover:bg-[#163075] transition-all shadow-[0_8px_20px_rgba(30,68,163,0.25)] active:scale-95 group"
                    >
                        <ArrowRight strokeWidth={2} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FloodServicesSlider;

