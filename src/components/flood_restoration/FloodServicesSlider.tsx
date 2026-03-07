"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const FloodServicesSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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

    React.useEffect(() => {
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
    // const itemsPerView = 5;
    // const maxIndex = Math.max(0, services.length - itemsPerView);
    const maxIndex = Math.max(0, services.length - Math.ceil(itemsPerView));

    const handlePrev = () => {
        setCurrentIndex((prev) => {
            if (prev === 0) {
                return maxIndex;
            }
            return prev - 1;
        });
    };

    const handleNext = () => {
        setCurrentIndex((prev) => {
            if (prev === maxIndex) {
                return 0;
            }
            return prev + 1;
        });
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex, maxIndex]);

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
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2B59C3] hover:bg-[#1E3A8A] flex items-center justify-center text-white transition-colors shadow-lg"
                        >
                            <ChevronLeft size={24} strokeWidth={3} />
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Next services"
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2B59C3] hover:bg-[#1E3A8A] flex items-center justify-center text-white transition-colors shadow-lg"
                        >
                            <ChevronRight size={24} strokeWidth={3} />
                        </button>
                    </div>
                </div>

                {/* Services Grid/Slider */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="overflow-hidden"
                >
                    {/* <div
                        className="flex gap-6 transition-transform duration-300 ease-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                            width: `${(services.length / itemsPerView) * 100}%`,
                        }}
                    > */}
                    <div
                        className="flex gap-6 transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                        }}
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0"
                                style={{ width: `${100 / itemsPerView}%` }}
                            >
                                <div className="flex flex-col h-full hover:transform hover:scale-105 transition-transform duration-300">
                                    {/* Service Image */}
                                    <div className="relative w-full h-[280px] md:h-[300px] lg:h-[310px] rounded-[20] overflow-hidden mb-4 shadow-md">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Service Title */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#3780FF] mt-3.5 flex-shrink-0"></div>
                                        <h3 className="text-[#3780FF] font-display font-medium text-[16px] md:text-[18px] lg:text-[22px] leading-[1.4] lg:leading-[36px] tracking-[0.02em] capitalize">
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="gap-10 justify-center mt-3 flex md:hidden">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous services"
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2B59C3] hover:bg-[#1E3A8A] flex items-center justify-center text-white transition-colors shadow-lg"
                    >
                        <ChevronLeft size={24} strokeWidth={3} />
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next services"
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2B59C3] hover:bg-[#1E3A8A] flex items-center justify-center text-white transition-colors shadow-lg"
                    >
                        <ChevronRight size={24} strokeWidth={3} />
                    </button>
                </div>

            </div>

        </section>
    );
};

export default FloodServicesSlider;
