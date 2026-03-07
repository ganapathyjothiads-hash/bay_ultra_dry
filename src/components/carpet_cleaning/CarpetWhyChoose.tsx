"use client";

import React from "react";
import Image from "next/image";

const CarpetWhyChoose = () => {
    const cards = [
        { src: "/assets/images/1000++.png", alt: "Trusted by 1000+ locaux" },
        { src: "/assets/images/google2.png", alt: "Google Rated" },
        { src: "/assets/images/fast_com.png", alt: "Fast Communication" },
        { src: "/assets/images/IICRC.png", alt: "IICRC Certified" },
        { src: "/assets/images/locally.png", alt: "Locally Owned" },
        { src: "/assets/images/flexible.png", alt: "Flexible Scheduling" },
    ];

    return (
        <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 w-full">
                {/* Title */}

                <h2 className="text-[#304462] font-display font-regular text-[36px] md:text-[48px] lg:text-[54px] text-center mb-12">
                    Why Choose Bay Ultra Dry
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-20">
                    {cards.map((card, index) => (
                        <div key={index} className="flex justify-center">
                            <img
                                src={card.src}
                                alt={card.alt}
                                className="w-full h-auto object-contain max-w-[220px]"
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom Illustration Section */}
                <div className="relative w-full flex justify-center items-center mt-[-40px]">
                    {/* Blue Glow behind basket */}
                    <img
                        src="/assets/images/Ellipse 7.png"
                        alt=""
                        className="absolute pointer-events-none"
                        style={{
                            width: '1000px',
                            height: '1000px',
                            zIndex: 1,
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />

                    {/* Wavy Lines - Absolute positioning to span container */}
                    <div className="absolute inset-x-0 z-0 flex justify-center items-center pointer-events-none w-screen left-1/2 -translate-x-1/2">
                        <div className="flex w-full max-w-[1920px] justify-between items-center opacity-70">
                            <img
                                src="/assets/images/carpet/Carpet_Why_1.png"
                                alt=""
                                className="w-[45%] h-auto object-contain"
                            />
                            <img
                                src="/assets/images/carpet/Carpet_Why_2.png"
                                alt=""
                                className="w-[45%] h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Main Basket Image */}
                    <div className="relative z-[2] max-w-[650px] w-full px-6">
                        <img
                            src="/assets/images/carpet/Carpet_Why_Choose.png"
                            alt="Cleaning supplies"
                            className="w-full h-auto drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarpetWhyChoose;
