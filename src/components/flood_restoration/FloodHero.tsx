"use client";

import React from "react";

const FloodHero = () => {
    return (
        <div className="w-full flex flex-col items-center bg-white">
            {/* Main Hero Section */}
            <section className="relative w-full min-h-screen flex flex-col items-center pt-24 md:pt-32 lg:pt-40 overflow-hidden">
                {/* Background Image (Subtle) */}
                <img
                    src="/assets/images/Flood_Restroation_bg.png"
                    alt=""
                    aria-hidden
                    className="absolute inset-x-0 top-0 w-full h-[50%] object-cover opacity-15 block z-0 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
                />

                {/* Yellow Glow (Left) */}
                <div
                    className="absolute z-10 pointer-events-none rounded-full"
                    style={{
                        width: '525px',
                        height: '675px',
                        top: '30%',
                        left: '-300px',
                        background: '#F4A51B',
                        opacity: 0.65,
                        filter: 'blur(75px)',
                    }}
                />

                {/* Blue Glow (Right) */}
                <div
                    className="absolute z-10 pointer-events-none rounded-full"
                    style={{
                        width: '525px',
                        height: '675px',
                        top: '30%',
                        right: '-300px',
                        background: '#006FFF',
                        opacity: 0.75,
                        filter: 'blur(75px)',
                    }}
                />

                {/* Content Overlay */}
                <div className="relative z-20 flex flex-col items-center text-center px-6 md:px-12 lg:px-24 w-full">
                    <h1
                        data-aos="fade-up"
                        className="text-[#304462] font-display font-bold text-[32px] md:text-[50px] lg:text-[68px] leading-[1.1] max-w-[1300px] mb-6 tracking-tight pt-5"
                    >
                        Emergency Flood Restoration In<br />Tauranga, <span className="text-[#005D38]">24/7</span> Water Damage Experts
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-[#1D1D1D] font-medium text-[16px] md:text-[18px] lg:text-[20px] max-w-[800px] mb-12 opacity-80"
                    >
                        Water damage? Call your local Tauranga team for a fast, effective response.
                    </p>

                    {/* Team Photo Container */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="400"
                        className="w-full max-w-[1200px] mx-auto mb-16 rounded-[20px] overflow-hidden"
                    >
                        <img
                            src="/assets/images/owner_fullwidth.png"
                            alt="Our team on site"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Integrated Star Section */}
                    <div
                        data-aos="fade-up"
                        className="max-w-[1200px] mx-auto flex flex-col items-center pb-12"
                    >
                        <div className="flex items-center justify-center gap-4 md:gap-6 mb-6">
                            <img src="/assets/images/star_2.png" alt="" className="w-6 h-6 md:w-8 md:h-8" />
                            <h2 className="text-[#304462] font-display font-[400] text-[24px] md:text-[36px] lg:text-[48px] leading-tight">
                                Gentle, Powerful, And Effective
                            </h2>
                            <img src="/assets/images/star_1.png" alt="" className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <p className="text-[#1D1D1D] text-center max-w-[950px] mx-auto font-medium text-[14px] md:text-[16px] lg:text-[14px] leading-[1.7] opacity-70">
                            From your family's favourite sofa to large-scale commercial seating, our upholstery cleaning service revives fabrics deeply and safely. Our advanced cleaning systems gently yet powerfully lift away embedded dirt, grime, and odours, restoring your furniture's freshness and appearance.
                        </p>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default FloodHero;
