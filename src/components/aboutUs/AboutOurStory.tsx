"use client";

import React from "react";
import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";
import EnquireNowButton from "../ui/EnquireNowButton";

const AboutOurStory: React.FC = () => {
    return (
        <section className="relative w-full bg-white pb-24 items-center flex flex-col pt-10 lg:pt-0">
            {/* Transitional Row: Disk and Cards bridging the sections */}
            <div className="relative z-[50] w-full max-w-[1400px] mx-auto px-6 -mt-[180px] lg:-mt-[220px] mb-12 lg:mb-20">
                <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10">

                    {/* Rotating Disk Item - Positioned to exactly match the reference overlap */}
                    <div
                        className="relative w-[340px] lg:w-[400px] h-[340px] lg:h-[400px] flex items-center justify-center pointer-events-none flex-shrink-0 lg:ml-[20px] "
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
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
                    <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-5 w-full justify-end lg:mb-0">
                        {/* Card 1: Trusted By */}
                        <div
                            className="w-full max-w-[240px] h-[160px] relative transition-all duration-300  rounded-[12px] overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <Image src="/assets/images/Trust.png" alt="Google Review" fill className="object-contain" />
                        </div>

                        {/* Card 2: Google Review */}
                        <div
                            className="w-full max-w-[240px] h-[160px] relative transition-all duration-300  rounded-[12px] overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <Image src="/assets/images/google1.png" alt="Google Review" fill className="object-contain" />
                        </div>

                        {/* Card 3: IICRC */}
                        <div
                            className="w-full max-w-[340px] h-[160px] relative transition-all duration-300 rounded-[12px] overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <Image src="/assets/images/IICR.png" alt="IICRC" fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area (Story) */}
            {/* Main Content Area (Story) - Positioned behind the disk and perfectly contained */}
            <div className="relative z-[10] w-full max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-stretch justify-between gap-10  -mt-[80px] lg:-mt-[150px]">

                {/* Left Side: Image Content - Placed behind the disk with exact overlap */}
                <div
                    className="relative w-full lg:w-[750px] flex justify-center lg:justify-start flex-shrink-0"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <div className="relative w-full max-w-[750px] h-[450px] sm:h-[550px] lg:h-[495px] rounded-[50px] lg:rounded-[65px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.18)]">
                        <Image src="/assets/images/Bucket_Sofa.png" alt="Cleaning bucket and sofa" fill className="object-cover" />
                    </div>
                </div>

                {/* Right Side: Our Story Text - Exactly contained within the 680px image height */}
                <div
                    className="w-full lg:flex-1 flex flex-col text-left text-[#303030] lg:h-[460px] justify-between lg:pl-10 py-2"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <div className="flex flex-col">
                        <h2 className="text-[#304462] text-[52px] md:text-[60px] lg:text-[40px] font-['Nebulas'] tracking-tight mb-4 leading-[1]">
                            Our Story
                        </h2>

                        <div className="text-[14px] md:text-[14px] lg:text-[14px] leading-[1.8] space-y-[24px] font-[400] text-[#2C2C2C] tracking-normal mb-8 max-w-[620px]">
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
                            <button className="bg-[#1C4195] text-white px-9 py-3 rounded-full font-bold text-[13px] shadow-[0_10px_35px_rgba(28,65,149,0.3)] hover:bg-[#133170] transition-all transform hover:scale-105">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* This quote is pushed to the absolute bottom of the 680px box by justify-between */}
                    <div
                        className="text-[#0082FB] font-[600] italic text-[16px] lg:text-[16px] leading-[1.6] max-w-[550px] lg:mt-0 mt-10"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        "A cleaner space creates a sharper mind. Let us transform your place so you can focus on what truly matters."
                    </div>
                </div>

            </div>



            {/* Enquire Now — bottom-right of this section */}
            <EnquireNowButton variant="section" />

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
