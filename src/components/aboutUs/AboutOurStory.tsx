"use client";

import React from "react";
import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";

const AboutOurStory: React.FC = () => {
    return (
        <section className="relative w-full bg-white pb-24 items-center flex flex-col pt-10 lg:pt-0">
            {/* Transitional Row: Disk and Cards bridging the sections */}
            <div className="relative z-[50] w-full max-w-[1400px] mx-auto px-6 -mt-[180px] lg:-mt-[240px] mb-12 lg:mb-20">
                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10">

                    {/* Rotating Disk Item - Positioned to exactly match the reference overlap */}
                    <div className="relative w-[340px] lg:w-[480px] h-[340px] lg:h-[480px] flex items-center justify-center pointer-events-none flex-shrink-0 lg:ml-[20px]">
                        {/* The White Disc Background */}
                        <div className="absolute inset-0 bg-white rounded-full shadow-[0_20px_70px_rgba(0,0,0,0.12)] z-0 border border-white" />

                        {/* Rotating Text Container */}
                        <div className="absolute inset-0 w-full h-full text-[#1C4195] z-10" style={{ animation: 'heroRingSpin 40s linear infinite' }}>
                            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                                <path id="circlePathAboutDeepRef" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                                <text fontSize="6.2" fontWeight="700" fill="currentColor" style={{ letterSpacing: '0.12em' }}>
                                    <textPath href="#circlePathAboutDeepRef" startOffset="0%" textLength="220" lengthAdjust="spacingAndGlyphs">
                                        * Get In Touch * Get In Touch * Get In Touch * Get In Touch
                                    </textPath>
                                </text>
                            </svg>
                        </div>

                        {/* Center Blue Circle with Arrow */}
                        <div className="relative w-[130px] lg:w-[195px] h-[130px] lg:h-[195px] bg-[#1C4195] rounded-full flex items-center justify-center z-20 text-white pointer-events-auto cursor-pointer transition-transform hover:scale-105 shadow-[0_15px_45px_rgba(28,65,149,0.35)]">
                            <ArrowUpRight className="w-[50px] h-[50px] lg:w-[85px] lg:h-[85px]" strokeWidth={2.5} />
                        </div>
                    </div>

                    {/* Trust Cards row - Aligned to the top right of the story area */}
                    <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6 w-full justify-end lg:mb-[130px]">
                        {/* Card 1: Trusted By */}
                        <div className="w-full max-w-[260px] bg-white pt-10 pb-8 px-9 rounded-[20px] shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-start h-[195px] justify-between transition-all duration-300 hover:shadow-xl">
                            <span className="text-[#626881] text-[15px] font-semibold">Trusted by,</span>
                            <div className="flex items-baseline gap-0.5 my-1">
                                <h3 className="text-[58px] font-[900] text-[#111111] leading-none tracking-tighter">1000</h3>
                                <span className="text-[44px] font-[900] text-[#111111] leading-none">+</span>
                            </div>
                            <p className="text-[#626881] text-[10px] font-semibold">of locals across Tauranga.</p>
                        </div>

                        {/* Card 2: Google Review */}
                        <div className="w-full max-w-[295px] bg-white pt-10 pb-8 px-9 rounded-[20px] shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-start h-[195px] justify-between transition-all duration-300 hover:shadow-xl">
                            <div className="flex gap-[4px]">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} size={15} fill="#F9AB00" color="#F9AB00" strokeWidth={0} />
                                ))}
                            </div>
                            <div className="my-1">
                                <span className="text-[52px] font-bold tracking-tighter inline-flex items-center leading-none">
                                    <span className="text-[#4285F4]">G</span>
                                    <span className="text-[#EA4335]">o</span>
                                    <span className="text-[#FBBC05]">o</span>
                                    <span className="text-[#4285F4]">g</span>
                                    <span className="text-[#34A853]">l</span>
                                    <span className="text-[#EA4335]">e</span>
                                </span>
                            </div>
                            <p className="text-[#111111] text-[10px] font-[900]">Fully Insured & Safety Certified</p>
                        </div>

                        {/* Card 3: IICRC */}
                        <div className="w-full max-w-[395px] bg-white pt-10 pb-8 px-9 rounded-[20px] shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center h-[195px] overflow-hidden transition-all duration-300 hover:shadow-xl">
                            <div className="flex items-center gap-6">
                                <div className="flex-shrink-0">
                                    <div className="relative w-[80px] h-[80px]">
                                        <Image src="/assets/icons/image 2.png" alt="IICRC" fill className="object-contain" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <h4 className="text-[17px] font-[900] text-[#111111] leading-tight uppercase tracking-tight">Fully Insured & Safety Certified</h4>
                                    <p className="text-[13px] text-[#888888] font-extrabold uppercase tracking-[0.15em]">IICRC Certified</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area (Story) */}
            {/* Main Content Area (Story) - Positioned behind the disk and perfectly contained */}
            <div className="relative z-[10] w-full max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-24 -mt-[80px] lg:-mt-[185px]">

                {/* Left Side: Image Content - Placed behind the disk with exact overlap */}
                <div className="relative w-full lg:w-[750px] flex justify-center lg:justify-start flex-shrink-0">
                    <div className="relative w-full max-w-[750px] h-[450px] sm:h-[550px] lg:h-[680px] rounded-[50px] lg:rounded-[65px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.18)]">
                        <Image src="/assets/images/Bucket_Sofa.png" alt="Cleaning bucket and sofa" fill className="object-cover" />
                    </div>
                </div>

                {/* Right Side: Our Story Text - Exactly contained within the 680px image height */}
                <div className="w-full lg:flex-1 flex flex-col text-left text-[#303030] lg:h-[680px] justify-between lg:pl-4 py-2">
                    <div className="flex flex-col">
                        <h2 className="text-[#324B6E] text-[52px] md:text-[60px] lg:text-[76px] font-[500] tracking-tight mb-8 leading-[1]">
                            Our Story
                        </h2>

                        <div className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.8] space-y-[26px] font-[500] text-[#303030]/80 tracking-normal mb-8 max-w-[620px]">
                            <p>
                                Since 2022, our mission at Bay Ultra Dry has been straightforward—to set the standard for reliable, high-quality cleaning and restoration in Tauranga.
                            </p>
                            <p>
                                Tired of the common frustrations with tradespeople? So were we. We commit to punctuality, clear communication, and getting the job done properly without callbacks.
                            </p>
                            <p>
                                We believe in working with you, not around you. That means scheduling around your life, not ours.
                            </p>
                        </div>

                        <div>
                            <button className="bg-[#1C4195] text-white px-11 py-4 rounded-full font-bold text-[18px] shadow-[0_10px_35px_rgba(28,65,149,0.3)] hover:bg-[#133170] transition-all transform hover:scale-105">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* This quote is pushed to the absolute bottom of the 680px box by justify-between */}
                    <div className="text-[#0A6CFF] font-[700] italic text-[22px] lg:text-[26px] leading-[1.5] max-w-[600px] lg:mt-0 mt-10">
                        "A cleaner space creates a sharper mind. Let us transform your place so you can focus on what truly matters."
                    </div>
                </div>

            </div>



            <style>{`
                @keyframes heroRingSpin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default AboutOurStory;
