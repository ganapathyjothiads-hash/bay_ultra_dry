"use client";

import React from "react";
const HeroSection = () => {
    return (
        <section
            className="relative w-full h-[850px] sm:h-[700px] md:h-[850px] lg:h-[720px] xl:h-[730px] overflow-hidden bg-[#1C2A45]"
        >
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 lg:opacity-50 brightness-[1.1]"
            >
                <source src="/assets/video/Carpet-Cleaning-section-video.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            <div
                aria-hidden
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    background: "linear-gradient(249.93deg, rgba(9, 18, 36, 0) -33.16%, #091224 95.99%)",
                }}
            />

            {/* Frame - Reposition for mobile */}
            <img
                src="/assets/images/hero_section_frame.png"
                alt=""
                aria-hidden
                className="absolute bottom-0 right-0 w-full h-[45%] xs:h-[50%] lg:object-cover lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto lg:h-full lg:w-auto z-[2] pointer-events-none opacity-100 mr-[-8%] lg:mr-0"
            />

            {/* Rotating Donut Ring - Hidden or smaller on mobile */}
            <div
                aria-hidden
                className="absolute right-[3%] bottom-[10%] lg:left-auto lg:right-[9%]  xs:bottom-[15%] lg:bottom-auto lg:top-[22%] w-[235px] h-[340px] xs:w-[370px] xs:h-[370px] lg:w-[300px] lg:h-[400px] xl:w-[375px] xl:h-[460px] z-[3] pointer-events-none opacity-100"
                style={{
                    animation: 'heroRingSpin 18s linear infinite',
                }}
            >
                <img
                    src="/assets/images/donut_ring.png"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Cleaner Girl - Repositioned for mobile overlap */}
            <img
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="600"
                src="/assets/images/clean-girl%203.png"
                alt="Professional Cleaner"
                className="absolute right-[5%] lg:left-auto lg:right-[8%] xl:right-[3%] bottom-0 max-w-[350px] lg:max-w-full w-[100%] xs:h-[53%] lg:h-[64%] lg:w-[43%] xl:w-[50%] object-contain object-bottom z-[4] pointer-events-none opacity-100"
            />

            <div
                aria-hidden
                className="hidden lg:flex absolute right-[5px] top-[170px] bottom-0 w-[100px] z-[5] items-center justify-center pointer-events-none overflow-visible"
            >
                <div
                    className="w-[800px] h-[100px] rotate-90 origin-center text-[70px] xl:text-[90px] font-normal text-[rgba(255,255,255,0.61)] whitespace-nowrap leading-[100px] text-center tracking-[0.01em]"
                >
                    BayUltraDry
                </div>
            </div>

            {/* Content Container */}
            <div
                className="absolute inset-0 z-10 flex flex-col justify-start lg:justify-center items-center lg:items-start text-center lg:text-left px-4 md:px-12 lg:pl-[max(48px,6vw)] lg:pr-32 pt-[120px] lg:pt-10 lg:w-[70%]"
            >
                <h1
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="font-display text-white font-medium font-display lg:font-medium text-[28px] md:text-[40px] lg:text-[47px] xl:text-[60px] leading-[1.3] lg:leading-[1.15] mb-4 lg:mb-8 tracking-wide lg:tracking-medium"
                >
                    <span >
                        Professional Carpet, Upholstery &amp; Flood Restoration
                        Services In Tauranga
                    </span>
                </h1>

                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    className="font-inter text-[#FFF1A4] font-semibold text-[16px] xs:text-[16px] md:text-[16px] mb-5 leading-[1.5] lg:max-w-none"
                >
                    <span>
                        Fast, Reliable &amp; Flexible Cleaning for Your Tauranga Home or Business.
                    </span>
                </p>

                <p
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    className="text-[#CDCDCD] text-[16px] md:text-[12px] lg:max-w-[620px] leading-[1.3] px-2 lg:px-0"
                >
                    <span className="text-[15px] md:text-[13px] leading-relaxed font-sans">
                        As Tauranga&apos;s 5-star-rated specialists, we excel in carpet cleaning,
                        upholstery <br />care, and emergency flood restoration.
                    </span>
                </p>
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

export default HeroSection;
