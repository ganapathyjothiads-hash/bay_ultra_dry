"use client";

import React from "react";

const AboutUsHero: React.FC = () => {
    const title = (
        <span className="text-[#304462] font-[400] font-display">
            About  <span className="text-[#134391]">Bay Ultra Dry,</span> Your Local <br className="hidden lg:block" />
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
        <section className="relative w-full min-h-[550px] lg:min-h-[900px] overflow-hidden bg-white pt-30 lg:pt-0">
            {/* background image (man cleaning) positioned on the right */}
            <div
                className="absolute right-0 top-0 w-full h-full z-0 overflow-hidden"
                data-aos="fade-left"
                data-aos-duration="1500"
            >
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
                data-aos="fade-right"
                data-aos-duration="1200"
                className="absolute top-[80px] lg:top-0 min-w-[430px] lg:min-w-none -left-[2%] w-[100%] xl:w-[93%] h-[75%] lg:h-[85%] xl:object-cover z-[10] pointer-events-none opacity-100"
                style={{
                    objectPosition: 'left center',
                }}
            />

            {/* Right side 'About Us' vertical text */}
            <div
                aria-hidden
                className="hidden lg:flex"
                data-aos="fade-down"
                data-aos-delay="500"
                style={{
                    position: 'absolute',
                    right: '-35px',
                    top: '0',
                    bottom: "-85px",
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
                        width: '900px',
                        height: '150px',
                        transform: 'rotate(90deg)',
                        transformOrigin: 'center center',
                        fontSize: '100px',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontStyle: 'normal',
                        color: "#77A2FF",
                        opacity: 0.8,
                        whiteSpace: 'nowrap',
                        lineHeight: '150px',
                        textAlign: 'center',
                        letterSpacing: '-0.02em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    About Us
                </div>
            </div>

            {/* textual content */}
            <div className="absolute inset-x-0 top-0 h-full z-[30] flex flex-col justify-center px-6 md:px-12 max-w-[1440px] mx-auto pb-20 lg:pb-32">
                <h1
                    className="font-display text-[24px] md:text-[45px] lg:text-[50px] xl:text-[60px] font-semibold leading-[1.3] mb-8 tracking-[-0.03em] max-w-[80%] sm:max-w-[90%] lg:max-w-[80%] xl:max-w-[1100px] text-[#304462]"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    About <img src="/assets/images/star 1.png" alt="star" className="inline-block w-[35px] md:w-[45px] lg:w-[45px] h-auto align-middle mx-1 lg:mx-2 -mt-2 lg:-mt-3" /> <span className="text-[#1C4195]">Bay Ultra Dry,</span> Your Local <br className="hidden lg:block" />
                    Tauranga Cleaning Experts
                </h1>

                {subtitle && (
                    <p
                        className="text-[15px] md:text-[15px] lg:text-[16px] mb-4 font-semibold text-[#303030]/90 max-w-[280px] lg:max-w-[750px] leading-relaxed"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
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

