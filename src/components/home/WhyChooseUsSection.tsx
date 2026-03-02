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
        <section className="relative w-full h-auto lg:h-[100vh] lg:min-h-[750px] bg-white flex flex-col items-center justify-start overflow-hidden py-12 lg:py-16">
            {/* 1. Section Title */}
            <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-[26px] md:text-5xl lg:text-[56px] font-[600] lg:font-[400] text-[#0a0a0a] lg:text-[#1e2b58] text-center mb-8 lg:mb-4 px-6 z-20 max-w-[280px] md:max-w-none mx-auto leading-[1.3] lg:leading-tight"
            >
                Why Choose Bay<br className="lg:hidden" /> Ultra Dry
            </h2>

            {/* 2. Content Area */}
            <div className="relative w-full max-w-[1440px] flex-1 flex flex-col lg:flex-row items-center justify-center pt-0 lg:pt-0">

                {/* Background Glow Image - Desktop Only or subtle on mobile */}
                <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] lg:-translate-y-1/2 w-full max-w-[400px] aspect-square lg:max-w-[800px] z-0 pointer-events-none opacity-40 lg:opacity-80"
                >
                    <Image
                        src="/assets/images/Ellipse 7.png"
                        alt="Background Glow"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* --- MOBILE CONTENT (Title already above) --- */}
                <div className="lg:hidden flex flex-col items-center gap-4 w-full px-6 relative z-20">

                    {/* Stat Card 1: Trusted By */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className="w-full max-w-[300px] bg-white px-6 py-[22px] rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#f1f5f9] flex flex-col gap-[2px] text-left"
                    >
                        <span className="text-[#334155] text-[12px] font-[500] leading-none">Trusted by,</span>
                        <div className="flex items-baseline justify-start gap-[1px] mt-[10px] mb-1">
                            <h3 className="text-[44px] font-[700] text-[#0f172a] leading-none tracking-tight">1000</h3>
                            <span className="text-[22px] font-[500] text-[#0f172a] leading-none pb-1">+</span>
                        </div>
                        <p className="text-[#475569] text-[11px] font-[500] leading-none">of locals across Tauranga.</p>
                    </div>

                    {/* Stat Card 2: Google Review */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="100"
                        className="w-full max-w-[300px] bg-white px-6 py-[22px] rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#f1f5f9] flex flex-col items-center gap-[10px]"
                    >
                        <div className="flex gap-[3px]">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} size={15} fill="#fbbf24" color="#fbbf24" strokeWidth={0} />
                            ))}
                        </div>
                        <div className="my-[2px]">
                            <span className="text-[38px] font-[600] tracking-tighter inline-flex items-center leading-none">
                                <span className="text-[#4285F4]">G</span>
                                <span className="text-[#EA4335]">o</span>
                                <span className="text-[#FBBC05]">o</span>
                                <span className="text-[#4285F4]">g</span>
                                <span className="text-[#34A853]">l</span>
                                <span className="text-[#EA4335]">e</span>
                            </span>
                        </div>
                        <p className="text-[#0f172a] text-[11px] font-[600] leading-tight text-center">Fully Insured & Safety Certified</p>
                    </div>

                    {/* Specialist Image - Mobile Centered */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="relative w-full max-w-[300px] mt-2 mb-2 flex justify-center"
                    >
                        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220%] aspect-square z-0 pointer-events-none opacity-100">
                            <Image
                                src="/assets/images/Ellipse 7.png"
                                alt="Background Glow"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <Image
                            src="/assets/images/Why_Choose.png"
                            alt="Professional Cleaning Specialist"
                            width={300}
                            height={360}
                            className="object-contain relative z-10"
                            priority
                        />
                    </div>

                    {/* Feature Cards Grid for mobile */}
                    <div className="flex flex-col gap-4 w-full max-w-[300px] pb-10">
                        {/* Feature 1 */}
                        <div
                            data-aos="fade-left"
                            data-aos-duration="800"
                            className="bg-white px-[22px] py-6 rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#f1f5f9] flex flex-col gap-3"
                        >
                            <div className="w-10 h-10 relative">
                                <Image src="/assets/icons/bandwidth 1.png" alt="" fill className="object-contain" />
                            </div>
                            <div className="space-y-[6px]">
                                <h4 className="text-[15px] font-[700] text-[#0f172a] leading-tight">Fast Communication</h4>
                                <p className="text-[12px] text-[#475569] font-[500] leading-snug">Quick responses and clear updates</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div
                            data-aos="fade-left"
                            data-aos-duration="800"
                            data-aos-delay="100"
                            className="bg-white px-[22px] py-6 rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#f1f5f9] flex flex-col gap-[14px]"
                        >
                            <div className="flex items-center gap-[6px]">
                                <div className="w-[34px] h-[34px] relative shrink-0">
                                    <Image src="/assets/icons/image 2.png" alt="" fill className="object-contain" />
                                </div>
                                <div className="font-[600] text-[15px] text-[#0f172a] tracking-tight leading-none mt-1">IICRC</div>
                            </div>
                            <div className="space-y-[6px]">
                                <h4 className="text-[15px] font-[700] text-[#0f172a] leading-snug pr-4">Fully Insured & Safety<br />Certified</h4>
                                <p className="text-[12px] text-[#475569] font-[500] leading-tight">IICRC Certified</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div
                            data-aos="fade-left"
                            data-aos-duration="800"
                            data-aos-delay="200"
                            className="bg-white px-[22px] py-6 rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#f1f5f9] flex flex-col gap-3"
                        >
                            <div className="w-9 h-9 relative">
                                <Image src="/assets/icons/place 1.png" alt="" fill className="object-contain" />
                            </div>
                            <div className="space-y-[6px]">
                                <h4 className="text-[15px] font-[700] text-[#0f172a] leading-tight">Locally Owned</h4>
                                <p className="text-[12px] text-[#475569] font-[500] leading-snug">A Tauranga business you can<br />count on</p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div
                            data-aos="fade-left"
                            data-aos-duration="800"
                            data-aos-delay="300"
                            className="bg-white px-[22px] py-6 rounded-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#f1f5f9] flex flex-col gap-3"
                        >
                            <div className="w-9 h-9 relative">
                                <Image src="/assets/icons/calendar 1.png" alt="" fill className="object-contain" />
                            </div>
                            <div className="space-y-[6px]">
                                <h4 className="text-[15px] font-[700] text-[#0f172a] leading-tight">Flexible Scheduling</h4>
                                <p className="text-[12px] text-[#475569] font-[500] leading-[1.4] pr-4">Days, Nights, Weekends, and<br />Holidays</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- DESKTOP CONTENT (Preserved) --- */}
                <div className="hidden lg:flex relative items-center justify-center w-full h-full">
                    {/* Center Specialist Image */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        className="relative z-10 w-full max-w-[580px] mt-auto"
                    >
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
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="800"
                            data-aos-delay="200"
                            className="absolute top-[10%] left-[16%] xl:left-[22%] w-[190px] bg-white p-6 rounded-[18px] shadow-[0_12px_45px_rgba(0,0,0,0.06)] border border-gray-100/50 flex flex-col gap-1 pointer-events-auto transition-all duration-300 hover:scale-105 z-20"
                        >
                            <span className="text-gray-500 text-xs font-medium leading-none">Trusted by,</span>
                            <div className="flex items-end gap-1 my-1">
                                <h3 className="text-4xl font-extrabold text-[#1a1a1a] tracking-tight leading-none">1000</h3>
                                <span className="text-2xl font-bold text-[#1a1a1a] leading-none mb-1">+</span>
                            </div>
                            <p className="text-gray-500 text-[11px] font-medium leading-tight whitespace-nowrap">of locals across Tauranga.</p>
                        </div>

                        {/* Card 2: Top Right - Google Review */}
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="800"
                            data-aos-delay="400"
                            className="absolute top-[10%] right-[16%] xl:right-[22%] w-[235px] bg-white p-6 rounded-[18px] shadow-[0_12px_45px_rgba(0,0,0,0.06)] border border-gray-100/50 flex flex-col gap-3 pointer-events-auto transition-all duration-300 hover:scale-105 z-20"
                        >
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
                        <div
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="600"
                            className="absolute top-[30%] left-[4%] xl:left-[8%] w-[250px] bg-white p-6 rounded-[22px] shadow-[0_15px_50px_rgba(0,0,0,0.07)] border border-gray-100/50 flex flex-col gap-4 pointer-events-auto transition-all duration-300 hover:scale-105 z-20"
                        >
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
                        <div
                            data-aos="fade-left"
                            data-aos-duration="800"
                            data-aos-delay="800"
                            className="absolute top-[30%] right-[2%] xl:right-[4%] w-[330px] bg-white p-6 rounded-[22px] shadow-[0_15px_50px_rgba(0,0,0,0.07)] border border-gray-100/50 flex flex-col gap-4 pointer-events-auto transition-all duration-300 hover:scale-105 z-20"
                        >
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
                        <div
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="1000"
                            className="absolute bottom-[25%] left-[4%] xl:left-[8%] w-[280px] bg-white p-7 rounded-[22px] shadow-[0_15px_50px_rgba(0,0,0,0.07)] border border-gray-100/50 flex flex-col gap-4 pointer-events-auto transition-all duration-300 hover:scale-105 z-20"
                        >
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
                        <div
                            data-aos="fade-left"
                            data-aos-duration="800"
                            data-aos-delay="1200"
                            className="absolute bottom-[25%] right-[4%] xl:right-[8%] w-[285px] bg-white p-7 rounded-[22px] shadow-[0_15px_50px_rgba(0,0,0,0.07)] border border-gray-100/50 flex flex-col gap-4 pointer-events-auto transition-all duration-300 hover:scale-105 z-20"
                        >
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
