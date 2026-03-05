"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarpetServicesSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const services = [
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

    const itemsPerView = 3.6; // Allows the next card to peek in for that 'movement' look
    const maxIndex = services.length - 1;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Yellow Glow - Left Side */}
                <img
                    src="/assets/images/carpet/Carpet_DeepY.png"
                    alt=""
                    className="absolute -left-[15%] top-[20%] w-[55%] md:w-[45%] h-auto opacity-70"
                />

                {/* Blue Glow - Right Side */}
                <img
                    src="/assets/images/carpet/Carpet_DeepB.png"
                    alt=""
                    className="absolute -right-[15%] top-[-5%] w-[65%] md:w-[55%] h-auto opacity-60"
                />

                {/* Wavy lines */}
                <img
                    src="/assets/images/carpet/Carpet_wave_Slider.png"
                    alt=""
                    className="absolute w-full h-auto top-[50%] left-0 z-0 opacity-100"
                    style={{ transform: 'translateY(-10%)' }}
                />
            </div>

            {/* Sticky Enquire Now Button */}
            <div className="fixed right-0 top-[60%] -translate-y-1/2 z-[100] hidden lg:flex">
                <div className="bg-[#1e44a3] text-white py-8 px-4 rounded-l-[15px] shadow-2xl flex items-center justify-center cursor-pointer hover:bg-[#163075] transition-all group">
                    <span className="[writing-mode:vertical-rl] font-bold text-[16px] tracking-wider uppercase">
                        Enquire Now
                    </span>
                </div>
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                {/* Top Descriptive Content (Exactly like the image) */}
                <div className="text-center max-w-[900px] mx-auto mb-16 md:mb-24">
                    <h1 className="text-[#304462] font-['Nebulas'] font-normal text-[42px] md:text-[56px] lg:text-[64px] mb-8 leading-tight">
                        Deep Cleaning That Lasts
                    </h1>
                    <p className="text-[#304462] text-[18px] md:text-[20px] mb-8 font-medium">
                        Your carpets put up with a lot daily. We restore them to look, feel, and smell like new again.
                    </p>
                    <div className="space-y-6 text-[#304462] text-[14px] md:text-[16px] leading-relaxed max-w-[800px] mx-auto opacity-90">
                        <p>
                            Using our powerful, fast-drying equipment and safe cleaning solutions, we eliminate deep-seated dirt, stubborn stains, unpleasant odours, and allergens, leaving you with a healthier, fresher space.
                        </p>
                        <p>
                            Whether you need a quick refresh or a comprehensive commercial clean, our local Tauranga team delivers exceptional results you can trust.
                        </p>
                    </div>
                </div>

                {/* Slider Header Section */}

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8">
                    <div className="flex items-center gap-6 flex-1">
                        <h2 className="text-[#304462] font-['Nebulas'] font-normal text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] whitespace-nowrap">
                            Deep Cleaning That Lasts
                        </h2>
                        <div className="hidden md:block h-[1.5px] bg-[#304462] opacity-20 flex-grow mt-2 max-w-[280px]"></div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4 self-end md:self-auto">
                        <button
                            onClick={handlePrev}
                            aria-label="Previous services"
                            className="w-14 h-14 rounded-full bg-[#1e44a3] hover:bg-[#163075] flex items-center justify-center text-white transition-all shadow-lg active:scale-95"
                        >
                            <ChevronLeft size={28} strokeWidth={2.5} />
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Next services"
                            className="w-14 h-14 rounded-full bg-[#1e44a3] hover:bg-[#163075] flex items-center justify-center text-white transition-all shadow-lg active:scale-95"
                        >
                            <ChevronRight size={28} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                {/* Slider Content */}
                <div className="relative overflow-visible pb-12">
                    <div
                        className="flex transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] gap-10"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                            width: `${(services.length / itemsPerView) * 100}%`,
                        }}
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex justify-center items-center"
                                style={{ width: `${103 / services.length}%` }}
                            >
                                <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden z-20 group">
                                    {/* Main Service Image - Behind */}
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute z-30 pointer-events-none"
                                        style={{
                                            width: '78%',
                                            height: '100%',
                                            top: '65px',
                                            left: '82px',
                                        }}
                                    >
                                        <img
                                            src="/assets/images/carpet/Carpet_Slider_Frame.png"
                                            alt=""
                                            className="w-full h-full object-contain absolute inset-0 opacity-[0.88]"
                                        />
                                        <div className="relative h-full flex items-center justify-start pl-[55px] pt-[20px]">
                                            <div className="flex items-start gap-4">
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#006341] flex-shrink-0 mt-2.5"></div>
                                                <h3 className="text-[#006341] font-sans font-bold text-[15px] md:text-[18px] leading-[1.2] max-w-[210px]">
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

