"use client";

import React from "react";
import Image from "next/image";
import { Star, Gauge, Globe, MapPin, Calendar } from "lucide-react";

const WhyChooseUsSection = () => {
    return (
        <section className="relative w-full min-h-screen lg:h-screen bg-white flex flex-col items-center justify-center overflow-hidden py-12 lg:py-0">
            {/* Section Title */}
            <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold text-[#2d4373] text-center mb-8 lg:mb-12 z-20">
                Why Choose Bay Ultra Dry
            </h2>

            <div className="relative w-full max-w-[1400px] h-[600px] lg:h-[550px] flex items-center justify-center">

                {/* Background Glow Image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[700px] lg:h-[700px] z-0 pointer-events-none opacity-60">
                    <Image
                        src="/assets/images/Ellipse 7.png"
                        alt="Background Glow"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Center Image (Man) - Positioned precisely as shown in the reference */}
                <div className="relative z-10 w-full max-w-[320px] md:max-w-[420px] lg:max-w-[580px] bottom-[-140px] lg:bottom-[-160px]">
                    <Image
                        src="/assets/images/Why_Choose.png"
                        alt="Professional Cleaning Specialist"
                        width={680}
                        height={850}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Feature Cards - Absolute positioned based on reference image geometry */}
                <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none">

                    {/* Card 1: Top Left - Trusted By */}
                    <div className="absolute top-[0%] left-[20%] xl:left-[25%] w-[180px] bg-white p-5 rounded-[12px] shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col gap-1 pointer-events-auto transition-transform hover:-translate-y-1">
                        <span className="text-gray-400 text-xs font-medium">Trusted by,</span>
                        <h3 className="text-4xl font-extrabold text-[#1a1a1a] tracking-tight leading-none mb-1">1000<span className="font-bold">+</span></h3>
                        <p className="text-gray-400 text-[11px] leading-tight">of locals across Tauranga.</p>
                    </div>

                    {/* Card 2: Top Right - Google Review */}
                    <div className="absolute top-[0%] right-[20%] xl:right-[25%] w-[200px] bg-white p-5 rounded-[12px] shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col gap-2 pointer-events-auto transition-transform hover:-translate-y-1">
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} size={11} fill="#fbbf24" color="#fbbf24" strokeWidth={0} />
                            ))}
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-[34px] font-bold tracking-tight leading-none">
                                <span className="text-[#4285F4]">G</span>
                                <span className="text-[#EA4335]">o</span>
                                <span className="text-[#FBBC05]">o</span>
                                <span className="text-[#4285F4]">g</span>
                                <span className="text-[#34A853]">l</span>
                                <span className="text-[#EA4335]">e</span>
                            </span>
                        </div>
                        <p className="text-[#1a1a1a] text-[10px] font-bold leading-tight uppercase tracking-wide opacity-70">Fully Insured & Safety Certified</p>
                    </div>

                    {/* Card 3: Middle Left - Fast Communication */}
                    <div className="absolute top-[42%] left-[5%] xl:left-[10%] xl:top-[10%] w-[240px] bg-white p-5 rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-4 pointer-events-auto transition-transform hover:-translate-y-1">
                        <div className="flex-shrink-0">
                            <Gauge size={32} className="text-[#FF7A30]" strokeWidth={1.5} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-[22px] font-bold text-[#1a1a1a] leading-tight">Fast Communication</h4>
                            <p className="text-[14px] text-gray-400 font-medium">Quick responses and clear updates</p>
                        </div>
                    </div>

                    {/* Card 4: Middle Right - IICRC Certified */}
                    <div className="absolute top-[43%] right-[5%] xl:right-[8%] w-[280px] bg-white p-5 rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col gap-5 pointer-events-auto transition-transform hover:-translate-y-1">
                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <Globe size={32} className="text-[#26BA96]" strokeWidth={1.5} />
                            </div>
                            <div className="font-bold text-[20px] text-[#1a1a1a]">IICRC</div>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-[20px] font-bold text-[#1a1a1a] leading-tight">Fully Insured & Safety Certified</h4>
                            <p className="text-[14px] text-gray-400 font-medium">IICRC Certified</p>
                        </div>
                    </div>

                    {/* Card 5: Bottom Left - Locally Owned */}
                    <div className="absolute bottom-[5%] left-[0%] xl:left-[0%] w-[290px] bg-white p-7 rounded-[16px] shadow-[0_12px_45px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col gap-4 pointer-events-auto transition-transform hover:-translate-y-1">
                        <div className="flex-shrink-0">
                            <MapPin size={38} className="text-[#FF4D6D]" strokeWidth={1.5} />
                        </div>
                        <div className="space-y-1.5">
                            <h4 className="text-[26px] font-bold text-[#1a1a1a] leading-tight">Locally Owned</h4>
                            <p className="text-[17px] text-gray-400 font-medium">A Tauranga business you can count on</p>
                        </div>
                    </div>

                    {/* Card 6: Bottom Right - Flexible Scheduling */}
                    <div className="absolute bottom-[2%] right-[0%] xl:right-[5%] w-[250px] bg-white p-7 rounded-[16px] shadow-[0_12px_45px_rgba(0,0,0,0.06)] border border-gray-50 flex flex-col gap-4 pointer-events-auto transition-transform hover:-translate-y-1">
                        <div className="flex-shrink-0">
                            <Calendar size={38} className="text-[#4F46E5]" strokeWidth={1.5} />
                        </div>
                        <div className="space-y-1.5">
                            <h4 className="text-[26px] font-bold text-[#1a1a1a] leading-tight mb-2">Flexible Scheduling</h4>
                            <p className="text-[17px] text-gray-400 font-medium leading-tight">Days, Nights, Weekends, and Holidays</p>
                        </div>
                    </div>

                </div>

                {/* --- MOBILE LAYOUT --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-5 mt-10 w-full px-4 relative z-20 pb-20">
                    <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 flex flex-col gap-1 items-center text-center">
                        <span className="text-gray-400 text-xs">Trusted by,</span>
                        <h3 className="text-4xl font-bold text-[#1a1a1a]">1000+</h3>
                        <p className="text-gray-400 text-xs">of locals across Tauranga.</p>
                    </div>

                    <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 flex flex-col gap-2 items-center text-center">
                        <div className="flex gap-1 justify-center">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} size={12} fill="#fbbf24" color="#fbbf24" strokeWidth={0} />
                            ))}
                        </div>
                        <span className="text-2xl font-bold text-[#4285F4]">Google</span>
                        <p className="text-[#1a1a1a] text-[10px] font-bold uppercase opacity-70">Fully Insured & Safety Certified</p>
                    </div>

                    <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 flex items-center gap-4">
                        <Gauge size={24} className="text-orange-400" />
                        <div>
                            <h4 className="font-bold text-[#1a1a1a] text-sm">Fast Communication</h4>
                            <p className="text-[11px] text-gray-400">Quick responses and clear updates</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 flex items-center gap-4">
                        <Globe size={24} className="text-teal-400" />
                        <div>
                            <h4 className="font-bold text-[#1a1a1a] text-sm leading-tight">Fully Insured & Safety Certified</h4>
                            <p className="text-[11px] text-gray-400">IICRC Certified</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 flex items-center gap-4">
                        <MapPin size={24} className="text-red-400" />
                        <div>
                            <h4 className="font-bold text-[#1a1a1a] text-sm">Locally Owned</h4>
                            <p className="text-[11px] text-gray-400">A Tauranga business you can count on</p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-[20px] shadow-sm border border-gray-100 flex items-center gap-4">
                        <Calendar size={24} className="text-blue-400" />
                        <div>
                            <h4 className="font-bold text-[#1a1a1a] text-sm">Flexible Scheduling</h4>
                            <p className="text-[11px] text-gray-400">Days, Nights, Weekends, and Holidays</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUsSection;
