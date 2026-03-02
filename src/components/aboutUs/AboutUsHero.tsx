"use client";

import React from "react";

const AboutUsHero: React.FC = () => {
    const title = (
        <span className="text-[#324b6e]">
            About ✨ <span className="text-[#134391]">Bay Ultra Dry,</span> Your Local <br className="hidden lg:block" />
            Tauranga Cleaning Experts
        </span>
    );
    const subtitle =
        "A locally owned and highly rated Tauranga business committed to reliable, quality service.";
    const description = undefined;
    const bgImage = "/assets/images/clean_man.png";
    const ringImage = "/assets/images/wavyring.png";
    const verticalText = "About Us";

    return (
        <section className="relative w-full min-h-[100vh] lg:min-h-[820px] overflow-hidden bg-white pt-32 lg:pt-0">
            {/* background image (man cleaning) positioned on the right */}
            <div className="absolute right-0 top-0 w-full h-full z-0 overflow-hidden">
                <img
                    src={bgImage}
                    alt=""
                    aria-hidden
                    className="absolute right-0 top-0 w-full h-[120%] object-cover z-0"
                    style={{ objectPosition: 'center center' }}
                />
                {/* absolute page background gradient as requested */}
                <div
                    aria-hidden
                    className="absolute inset-0 z-[1]"
                    style={{ background: 'linear-gradient(246.21deg, rgba(9, 18, 36, 0) -7.98%, #091224 60.42%)' }}
                />
            </div>

            {/* White Bend Shape & Rings Overlay (wavyring.png) */}
            {/* This image handles the curve and the white background transition */}
            <img
                src={ringImage}
                alt=""
                aria-hidden
                className="absolute inset-y-0 -left-[1%] w-[93%] h-[79%] object-cover z-[10] pointer-events-none opacity-100"
                style={{
                    objectPosition: 'left center',
                }}
            />

            {/* Right side 'About Us' vertical text */}
            <div
                aria-hidden
                className="hidden lg:flex"
                style={{
                    position: 'absolute',
                    right: '-40px',
                    top: '0',
                    bottom: 0,
                    width: '180px',
                    zIndex: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                    overflow: 'visible',
                }}
            >
                <div
                    style={{
                        width: '800px',
                        height: '150px',
                        transform: 'rotate(90deg)',
                        transformOrigin: 'center center',
                        fontSize: '140px',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 700,
                        fontStyle: 'normal',
                        color: "transparent",
                        WebkitTextStroke: "1px rgba(135, 178, 255, 0.6)",
                        opacity: 1,
                        whiteSpace: 'nowrap',
                        lineHeight: '150px',
                        textAlign: 'center',
                        letterSpacing: '0.04em',
                    }}
                >
                    {verticalText}
                </div>
            </div>

            {/* textual content */}
            <div className="absolute inset-0 z-[30] flex flex-col justify-center px-6 md:px-12 lg:pl-[min(8%,120px)] max-w-[1440px] mx-auto pb-20 lg:pb-32 mt-10 lg:mt-0">
                <h1 className="text-[42px] md:text-[52px] lg:text-[60px] font-[500] leading-[1.05] mb-8 tracking-[-0.03em] max-w-[1100px] text-[#324B6E]">
                    About ✨ <span className="text-[#1C4195]">Bay Ultra Dry,</span> Your Local <br className="hidden lg:block" />
                    Tauranga Cleaning Experts
                </h1>

                {subtitle && (
                    <p className="text-[17px] md:text-[19px] lg:text-[20px] mb-4 font-semibold text-[#303030]/80 max-w-[700px] leading-relaxed">
                        {subtitle}
                    </p>
                )}

                {description && (
                    <p className="text-[16px] md:text-[18px] max-w-[600px] text-[#626880]">
                        {description}
                    </p>
                )}
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

export default AboutUsHero;

