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
                className="absolute bottom-0 left-0 w-full h-[45%] xs:h-[50%] object-cover object-left lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto lg:h-full lg:w-auto lg:object-right z-[2] pointer-events-none opacity-100"
            />

            {/* Rotating Donut Ring - Hidden or smaller on mobile */}
            <div
                aria-hidden
                className="absolute left-[60%] -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-[9%] bottom-[8%] xs:bottom-[15%] lg:bottom-auto lg:top-[18%] w-[235px] xs:w-[370px] lg:w-[375px] h-[340px] xs:h-[370px] lg:h-[460px] z-[3] pointer-events-none opacity-100"
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
                className="absolute left-[50%] -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-[2%] bottom-0 h-[48%] xs:h-[53%] lg:h-[64%] w-[100%] lg:w-[50%] object-contain object-bottom z-[4] pointer-events-none opacity-100"
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
                className="absolute inset-0 z-10 flex flex-col justify-start lg:justify-center items-center lg:items-start text-center lg:text-left px-4 md:px-12 lg:pl-[max(48px,6vw)] lg:pr-32 pt-[100px] xs:pt-[90px] lg:pt-10 lg:w-[70%]"
            >
                <h1
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-white font-[600] font-family: 'nebula' lg:font-medium text-[24px] xs:text-[38px] md:text-[48px] lg:text-[60px] leading-[1.3] lg:leading-[1.15] mb-6 lg:mb-5 tracking-wide lg:tracking-tight"
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
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    className="text-[#FFF1A4] font-[600] text-[18px] xs:text-[20px] md:text-[22px] mb-6 xs:mb-8 leading-[1.5] max-w-[340px] xs:max-w-[380px] lg:max-w-none"
                >
                    <span className="lg:hidden">
                        Fast, Reliable &amp; Flexible Cleaning for<br />
                        Your Tauranga Home or Business.
                    </span>
                    <span className="hidden lg:inline leading-tight">
                        Fast, Reliable &amp; Flexible Cleaning for Your Tauranga Home or Business.
                    </span>
                </p>

                <p
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    className="text-[#CDCDCD] text-[16px] md:text-[18px] max-w-[360px] xs:max-w-[390px] lg:max-w-[620px] leading-[1.65] px-2 lg:px-0"
                >
                    <span className="lg:hidden">
                        As Tauranga&apos;s 5-star-rated specialists,<br />
                        we excel in carpet cleaning, upholstery<br />
                        care, and emergency flood restoration.
                    </span>
                    <span className="hidden lg:inline text-[15px] md:text-[18px] leading-relaxed">
                        As Tauranga&apos;s 5-star-rated specialists, we excel in carpet cleaning,
                        upholstery care, and emergency flood restoration.
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
