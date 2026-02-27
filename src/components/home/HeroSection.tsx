"use client";

import React from "react";
const HeroSection = () => {
    return (
        <section
            className="relative w-full h-[880px] xs:h-[920px] lg:h-screen overflow-hidden bg-[#1C2A45]"
        >
            {/* Background GIF */}
            <img
                src="/assets/video/hero_section.gif"
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover opacity-60 lg:opacity-50 z-0 brightness-[1.1]"
            />

            {/* Gradient Overlay */}
            <div
                aria-hidden
                className="absolute inset-0 z-[1] bg-gradient-to-b from-[#142038]/95 via-[#142038]/70 to-transparent lg:bg-gradient-to-r lg:from-[#142038]/95 lg:via-[#142038]/90 lg:to-[#142038]/20"
            />

            {/* Frame - Reposition for mobile */}
            <img
                src="/assets/images/Hero_Section%20frame.png"
                alt=""
                aria-hidden
                className="absolute top-0 right-0 h-full w-auto object-cover object-right z-[2] pointer-events-none opacity-40 lg:opacity-100"
            />

            {/* Rotating Donut Ring - Hidden or smaller on mobile */}
            <div
                aria-hidden
                className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-[9%] bottom-[8%] lg:top-[18%] w-[200px] lg:w-[375px] h-[375px] lg:h-[460px] z-[3] pointer-events-none opacity-100"
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
                src="/assets/images/clean-girl%203.png"
                alt="Professional Cleaner"
                className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-[2%] bottom-0 h-[43%] lg:h-[64%] w-auto lg:w-[50%] object-contain object-bottom z-[4] pointer-events-none opacity-100"
            />

            {/* Z:5  "BayUltraDry" vertical text — far-right edge */}
            <div
                aria-hidden
                className="hidden lg:flex"
                style={{
                    position: 'absolute',
                    right: '5px',
                    top: '170px',
                    bottom: 0,
                    width: '100px',
                    zIndex: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                    overflow: 'visible',
                }}
            >
                <div
                    style={{
                        width: '800px',
                        height: '100px',
                        transform: 'rotate(90deg)',
                        transformOrigin: 'center center',
                        fontSize: '90px',
                        fontFamily: "'Aksara Bali Galang', sans-serif",
                        fontWeight: 400,
                        fontStyle: 'normal',
                        color: " rgba(255, 255, 255, 0.61)",
                        opacity: 1,
                        whiteSpace: 'nowrap',
                        lineHeight: '100px',
                        textAlign: 'center',
                        letterSpacing: '0.01em',
                        marginLeft: '0px',
                    }}
                >
                    BayUltraDry
                </div>
            </div>

            {/* Content Container */}
            <div
                className="absolute inset-0 z-10 flex flex-col justify-start lg:justify-center items-center lg:items-start text-center lg:text-left px-6 md:px-12 lg:pl-[max(48px,6vw)] lg:pr-32 pt-[95px] lg:pt-10 lg:w-[70%]"
            >
                <h1
                    className="text-white font-medium text-[28px] xs:text-[32px] md:text-[48px] lg:text-[60px] leading-[1.2] lg:leading-[1.15] mb-6 lg:mb-5 tracking-tight"
                >
                    <span className="lg:hidden">
                        Professional Carpet,<br />
                        Upholstery &amp; Flood<br />
                        Restoration Services In<br />
                        Tauranga
                    </span>
                    <span className="hidden lg:inline">
                        Professional Carpet, Upholstery &amp; Flood Restoration<br />
                        Services In Tauranga
                    </span>
                </h1>

                <p
                    className="text-[#FFF1A4] font-semibold text-[17px] xs:text-[18px] md:text-[22px] mb-4 leading-tight max-w-[300px] xs:max-w-[340px] lg:max-w-none"
                >
                    Fast, Reliable &amp; Flexible Cleaning for Your Tauranga Home or Business.
                </p>

                <p
                    className="text-[#CDCDCD] text-[15px] md:text-[18px] max-w-[340px] lg:max-w-[620px] leading-relaxed px-2 lg:px-0"
                >
                    As Tauranga&apos;s 5-star-rated specialists, we excel in carpet cleaning,
                    upholstery care, and emergency flood restoration.
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
