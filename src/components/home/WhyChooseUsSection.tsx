"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const WhyChooseUsSection = () => {
    return (
        <>
            {/* ========== DESKTOP LAYOUT (lg+): Exactly 100vh ========== */}
            <section
                className="hidden lg:flex w-full bg-white flex-col items-center justify-start overflow-hidden"
                style={{ height: "100vh", minHeight: "700px" }}
            >
                {/* Title */}
                <h2
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-[48px] xl:text-[56px] font-[500] text-[#1e2b58] text-center z-20 leading-tight pt-10 pb-4 shrink-0"
                >
                    Why Choose Bay Ultra Dry
                </h2>

                {/* Canvas: fills the remaining height */}
                <div className="relative w-full max-w-[1400px] flex-1">

                    {/* Center: Glow + Specialist — anchored to bottom center */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[380px] xl:w-[460px] z-10"
                    >
                        {/* Glow ellipse — sits behind the person's body */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] aspect-square z-0 pointer-events-none">
                            <Image
                                src="/assets/images/Ellipse 7.png"
                                alt="Background Glow"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        {/* Specialist image — fills full canvas height, anchored to bottom */}
                        <div
                            className="relative w-full overflow-hidden"
                            style={{ height: "calc(100vh - 130px)" }}
                        >
                            <Image
                                src="/assets/images/WhyChoose.png"
                                alt="Professional Cleaning Specialist"
                                fill
                                className="object-contain object-bottom z-10 relative"
                                priority
                            />
                        </div>
                    </div>

                    {/* Card 1: Trusted By — top-left */}
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        className="absolute top-[10%] left-[19%] xl:left-[22%] w-[200px] bg-white p-5 rounded-[16px] shadow-[0px_6px_28px_rgba(0,0,0,0.08)] border border-[#f1f5f9] flex flex-col gap-1 transition-all duration-300 hover:scale-105 z-20"
                    >
                        <span className="text-[#64748b] text-[12px] font-medium leading-none">Trusted by,</span>
                        <div className="flex items-baseline gap-0.5 mt-2 mb-0.5">
                            <h3 className="text-[40px] font-extrabold text-[#0f172a] tracking-tight leading-none">1000</h3>
                            <span className="text-[22px] font-bold text-[#0f172a] leading-none mb-1">+</span>
                        </div>
                        <p className="text-[#64748b] text-[11px] font-medium leading-tight">of locals across Tauranga.</p>
                    </div>

                    {/* Card 2: Google — top-right */}
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        className="absolute top-[10%] right-[17%] xl:right-[21%] w-[250px] bg-white p-5 rounded-[16px] shadow-[0px_6px_28px_rgba(0,0,0,0.08)] border border-[#f1f5f9] flex flex-col gap-2 transition-all duration-300 hover:scale-105 z-20"
                    >
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} size={14} fill="#fbbf24" color="#fbbf24" strokeWidth={0} />
                            ))}
                        </div>
                        <span className="text-[34px] font-bold tracking-tight inline-flex items-center leading-none">
                            <span className="text-[#4285F4]">G</span>
                            <span className="text-[#EA4335]">o</span>
                            <span className="text-[#FBBC05]">o</span>
                            <span className="text-[#4285F4]">g</span>
                            <span className="text-[#34A853]">l</span>
                            <span className="text-[#EA4335]">e</span>
                        </span>
                        <p className="text-[#0f172a] text-[11px] font-semibold leading-tight">Fully Insured &amp; Safety Certified</p>
                    </div>

                    {/* Card 3: Fast Communication — middle-left */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="400"
                        className="absolute top-[35%] left-[4%] xl:left-[7%] w-[255px] bg-white p-5 rounded-[18px] shadow-[0px_6px_28px_rgba(0,0,0,0.08)] border border-[#f1f5f9] flex flex-col gap-3 transition-all duration-300 hover:scale-105 z-20"
                    >
                        <div className="w-10 h-10 relative">
                            <Image src="/assets/icons/bandwidth 1.png" alt="Fast Communication" fill className="object-contain" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-[17px] font-bold text-[#0f172a] leading-tight">Fast Communication</h4>
                            <p className="text-[12px] text-[#64748b] font-medium leading-snug">Quick responses and clear updates</p>
                        </div>
                    </div>

                    {/* Card 4: IICRC — middle-right */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="600"
                        className="absolute top-[35%] right-[3%] xl:right-[6%] w-[295px] bg-white p-5 rounded-[18px] shadow-[0px_6px_28px_rgba(0,0,0,0.08)] border border-[#f1f5f9] flex flex-col gap-3 transition-all duration-300 hover:scale-105 z-20"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 relative shrink-0">
                                <Image src="/assets/icons/image 2.png" alt="IICRC" fill className="object-contain" />
                            </div>
                            <span className="font-bold text-[18px] text-[#0f172a] tracking-tight leading-none">IICRC</span>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-[17px] font-bold text-[#0f172a] leading-snug">Fully Insured &amp; Safety Certified</h4>
                            <p className="text-[12px] text-[#64748b] font-medium leading-tight">IICRC Certified</p>
                        </div>
                    </div>

                    {/* Card 5: Locally Owned — bottom-left */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="800"
                        className="absolute bottom-[12%] left-[2%] xl:left-[5%] w-[270px] bg-white p-5 rounded-[18px] shadow-[0px_6px_28px_rgba(0,0,0,0.08)] border border-[#f1f5f9] flex flex-col gap-3 transition-all duration-300 hover:scale-105 z-20"
                    >
                        <div className="w-10 h-10 relative">
                            <Image src="/assets/icons/place 1.png" alt="Locally Owned" fill className="object-contain" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-[18px] font-bold text-[#0f172a] leading-tight">Locally Owned</h4>
                            <p className="text-[12px] text-[#64748b] font-medium leading-snug">A Tauranga business you can count on</p>
                        </div>
                    </div>

                    {/* Card 6: Flexible Scheduling — bottom-right */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="1000"
                        className="absolute bottom-[12%] right-[2%] xl:right-[5%] w-[270px] bg-white p-5 rounded-[18px] shadow-[0px_6px_28px_rgba(0,0,0,0.08)] border border-[#f1f5f9] flex flex-col gap-3 transition-all duration-300 hover:scale-105 z-20"
                    >
                        <div className="w-10 h-10 relative">
                            <Image src="/assets/icons/calendar 1.png" alt="Flexible Scheduling" fill className="object-contain" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-[18px] font-bold text-[#0f172a] leading-tight">Flexible Scheduling</h4>
                            <p className="text-[12px] text-[#64748b] font-medium leading-snug">Days, Nights, Weekends, and Holidays</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ========== MOBILE LAYOUT (below lg) ========== */}
            <section className="lg:hidden w-full bg-white flex flex-col items-center py-14 px-5 gap-5 overflow-hidden">

                {/* Title */}
                <h2
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-[28px] font-[500] text-[#1e2b58] text-center leading-snug max-w-[260px] mb-2"
                >
                    Why Choose Bay Ultra Dry
                </h2>

                {/* Card 1: Trusted By */}
                <div data-aos="fade-up" data-aos-duration="800" className="relative w-full max-w-[320px] h-[160px]">
                    <Image src="/assets/images/1000++.png" alt="Trusted by 1000+ locals" fill className="object-contain" />
                </div>

                {/* Card 2: Google */}
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="relative w-full max-w-[320px] h-[160px]">
                    <Image src="/assets/images/google2.png" alt="Google Certified" fill className="object-contain" />
                </div>

                {/* Specialist Image — Mobile */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="relative w-full max-w-[320px] flex justify-center py-4"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[190%] aspect-square z-0 pointer-events-none opacity-90">
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
                        width={320}
                        height={360}
                        className="object-contain relative z-10 w-full h-auto"
                        priority
                    />
                </div>

                {/* Card 3: Fast Communication */}
                <div data-aos="fade-up" data-aos-duration="800" className="relative w-full max-w-[320px] h-[160px] top-[-46px]">
                    <Image src="/assets/images/fast_com.png" alt="Fast Communication" fill className="object-contain" />
                </div>

                {/* Card 4: IICRC */}
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" className="relative w-full max-w-[320px] h-[160px]">
                    <Image src="/assets/images/IICRC.png" alt="IICRC Certified" fill className="object-contain" />
                </div>

                {/* Card 5: Locally Owned */}
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" className="relative w-full max-w-[320px] h-[160px]">
                    <Image src="/assets/images/locally.png" alt="Locally Owned" fill className="object-contain" />
                </div>

                {/* Card 6: Flexible Scheduling */}
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" className="relative w-full max-w-[320px] h-[160px] mb-6">
                    <Image src="/assets/images/flexible.png" alt="Flexible Scheduling" fill className="object-contain" />
                </div>

            </section>
        </>
    );
};

export default WhyChooseUsSection;
