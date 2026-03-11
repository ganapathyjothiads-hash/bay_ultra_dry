"use client";

import React, { useState, useEffect, useCallback } from "react";

const CarpetWhyChoose = () => {
    const cards = [
        { src: "/assets/images/1000++.png", alt: "Trusted by 1000+ locaux" },
        { src: "/assets/images/google2.png", alt: "Google Rated" },
        { src: "/assets/images/fast_com.png", alt: "Fast Communication" },
        { src: "/assets/images/IICRC.png", alt: "IICRC Certified" },
        { src: "/assets/images/locally.png", alt: "Locally Owned" },
        { src: "/assets/images/flexible.png", alt: "Flexible Scheduling" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Handle responsiveness
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Auto-play for mobile slider
    useEffect(() => {
        if (!isMobile) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % cards.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isMobile, cards.length]);

    // Touch handlers for mobile swipe
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            setCurrentIndex((prev) => (prev + 1) % cards.length);
        } else if (isRightSwipe) {
            setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
        }
        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <section className="relative w-full py-12 md:py-16 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 w-full">
                {/* Title */}
                <h2 
                    className="text-[#304462] font-display font-regular text-[24px] md:text-[42px] lg:text-[52px] text-center mb-12 md:mb-16"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    Why Choose Bay Ultra Dry
                </h2>

                {/* Mobile Slider View */}
                <div className="lg:hidden relative mb-12">
                    <div
                        className="overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {cards.map((card, index) => (
                                <div key={index} className="w-full flex-shrink-0 flex justify-center px-4">
                                    <img
                                        src={card.src}
                                        alt={card.alt}
                                        className="w-full h-auto object-contain max-w-[320px] drop-shadow-sm"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-8">
                        {cards.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${currentIndex === index
                                    ? "bg-[#1E44A3]"
                                    : "border-2 border-[#1E44A3] bg-transparent"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden lg:grid grid-cols-6 gap-6 mb-24 justify-items-center items-stretch">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="flex justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="800"
                        >
                            <img
                                src={card.src}
                                alt={card.alt}
                                className="w-full h-auto object-contain drop-shadow-md"
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom Illustration Section */}
                <div className="relative w-full flex justify-center items-center mt-[-75px] md:mt-8 h-[250px] md:h-[500px]">
                    {/* Blue Glow behind basket */}
                    <img
                        src="/assets/images/Ellipse 7.png"
                        alt=""
                        className="absolute pointer-events-none opacity-40 md:opacity-100"
                        style={{
                            width: '1000px',
                            height: '1000px',
                            zIndex: 1,
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />

                    {/* Wavy Lines Decoration */}
                    <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center overflow-visible">
                        {/* Wavy Line Left */}
                        <img
                            src="/assets/images/carpet/Carpet_Why_1.png"
                            alt=""
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            className="absolute opacity-80 md:opacity-90 z-0
                                w-[220%] max-w-none left-[-180%] top-[40%]
                                md:w-[70%] md:max-w-[750px] md:left-[-10%] md:top-[50%]
                                lg:w-[100%] lg:left-[-7%] lg:top-[50%]
                                -translate-y-1/2 h-auto object-contain transition-all duration-500"
                        />
                        {/* Wavy Line Right */}
                        <img
                            src="/assets/images/carpet/Carpet_Why_2.png"
                            alt=""
                            data-aos="fade-left"
                            data-aos-duration="1200"
                            className="absolute opacity-80 md:opacity-90 z-0
                                w-[220%] max-w-none right-[-180%] top-[40%]
                                md:w-[70%] md:max-w-[750px] md:right-[-10%] md:top-[50%]
                                lg:w-[100%] lg:right-[-7%] lg:top-[50%]
                                -translate-y-1/2 h-auto object-contain transition-all duration-500"
                        />
                    </div>

                    {/* Main Basket Image */}
                    <div 
                        className="relative z-[2] max-w-[400px] md:max-w-[550px] lg:max-w-[650px] w-full px-6 flex justify-center"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <img
                            src="/assets/images/carpet/Carpet_Why_Choose.png"
                            alt="Cleaning supplies"
                            className="w-full h-auto drop-shadow-2xl translate-y-4 md:translate-y-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarpetWhyChoose;

