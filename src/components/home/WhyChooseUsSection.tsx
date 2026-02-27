"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

/**
 * WhyChooseUsSection component
 * Recreates the "Why Choose Bay Ultra Dry" section based on the reference image with custom icons.
 * Refined for bigger cards and single-line text where possible.
 */
const WhyChooseUsSection = () => {
    return (
        <section className="relative w-full h-auto lg:h-[100vh] lg:min-h-[750px] bg-white flex flex-col items-center justify-start overflow-visible lg:overflow-hidden py-12 lg:py-16">
            {/* 1. Section Title */}
            <h2 className="text-[32px] md:text-5xl lg:text-[56px] font-normal text-[#1e2b58] text-center mb-10 lg:mb-4 px-6 z-20 max-w-[320px] md:max-w-none">
                Why Choose Bay Ultra Dry
            </h2>

            {/* 2. Content Area */}
            <div className="relative w-full max-w-[1440px] flex-1 flex flex-col lg:flex-row items-center justify-center pt-0 lg:pt-0">

                {/* Background Glow Image - Desktop Only or subtle on mobile */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] lg:-translate-y-1/2 w-full max-w-[400px] aspect-square lg:max-w-[800px] z-0 pointer-events-none opacity-40 lg:opacity-80">
                    <Image
                        src="/assets/images/Ellipse 7.png"
                        alt="Background Glow"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* --- MOBILE CONTENT (Title already above) --- */}
                <div className="lg:hidden flex flex-col items-center gap-6 w-full px-6 relative z-20">

                    {/* Stat Card 1: Trusted By */}
                    <div className="w-full max-w-[340px] bg-white p-8 rounded-[20px] shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col gap-1 text-center sm:text-left">
                        <span className="text-gray-500 text-sm font-medium">Trusted by,</span>
                        <div className="flex items-end justify-center sm:justify-start gap-1 my-1">
                            <h3 className="text-[48px] font-bold text-[#1a1a1a] leading-none tracking-tight">1000</h3>
                            <span className="text-3xl font-bold text-[#1a1a1a] leading-none mb-1">+</span>
                        </div>
                        <p className="text-gray-500 text-sm font-medium">of locals across Tauranga.</p>
                    </div>

                    {/* Stat Card 2: Google Review */}
                    <div className="w-full max-w-[340px] bg-white p-8 rounded-[20px] shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col items-center sm:items-start gap-4">
                        <div className="flex gap-1.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} size={18} fill="#fbbf24" color="#fbbf24" strokeWidth={0} />
                            ))}
                        </div>
                        <div className="my-1">
                            <span className="text-[42px] font-bold tracking-tight inline-flex items-center leading-none">
                                <span className="text-[#4285F4]">G</span>
                                <span className="text-[#EA4335]">o</span>
                                <span className="text-[#FBBC05]">o</span>
                                <span className="text-[#4285F4]">g</span>
                                <span className="text-[#34A853]">l</span>
                                <span className="text-[#EA4335]">e</span>
                            </span>
                        </div>
                        <p className="text-[#1a1a1a] text-[13px] font-bold leading-tight uppercase tracking-wider opacity-90 text-center sm:text-left">Fully Insured & Safety Certified</p>
                    </div>

                    {/* Specialist Image - Mobile Centered */}
                    <div className="relative w-full max-w-[320px] mt-4 mb-2">
                        <Image
                            src="/assets/images/Why_Choose.png"
                            alt="Professional Cleaning Specialist"
                            width={500}
                            height={600}
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Feature Cards Grid for mobile (Single column but could be 2 on larger mobile) */}
                    <div className="grid grid-cols-1 gap-5 w-full max-w-[340px]">
                        {/* Feature 1 */}
                        <div className="bg-white p-7 rounded-[22px] shadow-[0_12px_35px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-4">
                            <div className="w-12 h-12 relative">
                                <Image src="/assets/icons/bandwidth 1.png" alt="" fill className="object-contain" />
                            </div>
                            <div className="space-y-1.5">
                                <h4 className="text-[20px] font-bold text-[#1a1a1a] leading-tight">Fast Communication</h4>
                                <p className="text-[14px] text-gray-400 font-medium leading-snug">Quick responses and clear updates</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-7 rounded-[22px] shadow-[0_12px_35px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 relative shrink-0">
                                    <Image src="/assets/icons/image 2.png" alt="" fill className="object-contain" />
                                </div>
                                <div className="font-bold text-[22px] text-[#1a1a1a] tracking-tight leading-none">IICRC</div>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-[19px] font-bold text-[#1a1a1a] leading-tight">Fully Insured & Safety Certified</h4>
                                <p className="text-[14px] text-gray-400 font-medium leading-tight text-opacity-80">IICRC Certified</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-7 rounded-[22px] shadow-[0_12px_35px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-4">
                            <div className="w-12 h-12 relative">
                                <Image src="/assets/icons/place 1.png" alt="" fill className="object-contain" />
                            </div>
                            <div className="space-y-1.5">
                                <h4 className="text-[22px] font-bold text-[#1a1a1a] leading-tight">Locally Owned</h4>
                                <p className="text-[14px] text-gray-400 font-medium leading-snug">A Tauranga business you can count on</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white p-7 rounded-[22px] shadow-[0_12px_35px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-4 mb-10">
                            <div className="w-12 h-12 relative">
                                <Image src="/assets/icons/calendar 1.png" alt="" fill className="object-contain" />
                            </div>
                            <div className="space-y-1.5">
                                <h4 className="text-[22px] font-bold text-[#1a1a1a] leading-tight">Flexible Scheduling</h4>
                                <p className="text-[14px] text-gray-400 font-medium leading-snug">Days, Nights, Weekends, and Holidays</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- DESKTOP CONTENT (Preserved) --- */}
                <div className="hidden lg:flex relative items-center justify-center w-full h-full">
                    {/* Center Specialist Image */}
                    <div className="relative z-10 w-full max-w-[580px] mt-auto">
                        <Image
                            src="/assets/images/Why_Choose.png"
                            alt="Professional Cleaning Specialist"
                            width={700}
                            height={800}
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Desktop Cards Absolute Positioned */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none">
                        {/* Card 1: Top Left - Trusted By */}
                        <div className="absolute top-[10%] left-[16%] xl:left-[22%] w-[190px] bg-white p-6 rounded-[18px] shadow-[0_12px_45px_rgba(0,0,0,0.06)] border border-gray-100/50 flex flex-col gap-1 pointer-events-auto transition-all duration-300 hover:scale-105 z-20">
                            <span className="text-gray-500 text-xs font-medium leading-none">Trusted by,</span>
                            <div className="flex items-end gap-1 my-1">
                                <h3 className="text-4xl font-extrabold text-[#1a1a1a] tracking-tight leading-none">1000</h3>
                                <span className="text-2xl font-bold text-[#1a1a1a] leading-none mb-1">+</span>
                            </div>
                            <p className="text-gray-500 text-[11px] font-medium leading-tight whitespace-nowrap">of locals across Tauranga.</p>
                        </div>

                        {/* Card 2: Top Right - Google Review */}
                        <div className="absolute top-[10%] right-[16%] xl:right-[22%] w-[210px] bg-white p-6 rounded-[18px] shadow-[0_12px_45px_rgba(0,0,0,0.06)] border border-gray-100/50 flex flex-col gap-3 pointer-events-auto transition-all duration-300 hover:scale-105 z-20">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} size={14} fill="#fbbf24" color="#fbbf24" strokeWidth={0} />
                                ))}
                            </div>
                            <div className="mt-1">
                                <span className="text-[34px] font-bold tracking-tight inline-flex items-center leading-none">
                                    <span className="text-[#4285F4]">G</span>
                                    <span className="text-[#EA4335]">o</span>
                                    <span className="text-[#FBBC05]">o</span>
                                    <span className="text-[#4285F4]">g</span>
                                    <span className="text-[#34A853]">l</span>
                                    <span className="text-[#EA4335]">e</span>
                                </span>
                            </div>
                            <p className="text-[#1a1a1a] text-[10px] font-bold leading-tight uppercase tracking-wider opacity-80 whitespace-nowrap">Fully Insured & Safety Certified</p>
                        </div>

                        {/* Card 3: Middle Left - Fast Communication */}
                        <div className="absolute top-[30%] left-[4%] xl:left-[8%] w-[250px] bg-white p-6 rounded-[22px] shadow-[0_15px_50px_rgba(0,0,0,0.07)] border border-gray-100/50 flex flex-col gap-4 pointer-events-auto transition-all duration-300 hover:scale-105 z-20">
                            <div className="w-12 h-12 relative">
                                <Image
                                    src="/assets/icons/bandwidth 1.png"
                                    alt="Fast Communication"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <h4 className="text-[20px] font-bold text-[#1a1a1a] leading-tight whitespace-nowrap">Fast Communication</h4>
                                <p className="text-[13px] text-gray-400 font-medium leading-normal whitespace-nowrap">Quick responses and clear updates</p>
                            </div>
                        </div>

                        {/* Card 4: Middle Right - IICRC Certified */}
                        <div className="absolute top-[30%] right-[2%] xl:right-[4%] w-[330px] bg-white p-6 rounded-[22px] shadow-[0_15px_50px_rgba(0,0,0,0.07)] border border-gray-100/50 flex flex-col gap-4 pointer-events-auto transition-all duration-300 hover:scale-105 z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 relative shrink-0">
                                    <Image
                                        src="/assets/icons/image 2.png"
                                        alt="IICRC"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="font-bold text-[22px] text-[#1a1a1a] tracking-tight whitespace-nowrap leading-none align-middle">IICRC</div>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-[19px] font-bold text-[#1a1a1a] leading-tight whitespace-nowrap">Fully Insured & Safety Certified</h4>
                                <p className="text-[13px] text-gray-400 font-medium leading-tight whitespace-nowrap">IICRC Certified</p>
                            </div>
                        </div>

                        {/* Card 5: Bottom Left - Locally Owned */}
                        <div className="absolute bottom-[25%] left-[4%] xl:left-[8%] w-[280px] bg-white p-7 rounded-[22px] shadow-[0_15px_50px_rgba(0,0,0,0.07)] border border-gray-100/50 flex flex-col gap-4 pointer-events-auto transition-all duration-300 hover:scale-105 z-20">
                            <div className="w-12 h-12 relative">
                                <Image
                                    src="/assets/icons/place 1.png"
                                    alt="Locally Owned"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <h4 className="text-[22px] font-bold text-[#1a1a1a] leading-tight whitespace-nowrap">Locally Owned</h4>
                                <p className="text-[14px] text-gray-400 font-medium leading-snug whitespace-nowrap">A Tauranga business you can count on</p>
                            </div>
                        </div>

                        {/* Card 6: Bottom Right - Flexible Scheduling */}
                        <div className="absolute bottom-[25%] right-[4%] xl:right-[8%] w-[270px] bg-white p-7 rounded-[22px] shadow-[0_15px_50px_rgba(0,0,0,0.07)] border border-gray-100/50 flex flex-col gap-4 pointer-events-auto transition-all duration-300 hover:scale-105 z-20">
                            <div className="w-12 h-12 relative">
                                <Image
                                    src="/assets/icons/calendar 1.png"
                                    alt="Flexible Scheduling"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <h4 className="text-[22px] font-bold text-[#1a1a1a] leading-tight whitespace-nowrap">Flexible Scheduling</h4>
                                <p className="text-[14px] text-gray-400 font-medium leading-snug whitespace-nowrap">Days, Nights, Weekends, and Holidays</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
