"use client";

import React from "react";

const FloodHero = () => {
    return (
        <>
            <section className="relative w-full h-[900px] lg:h-[1000px] overflow-hidden">
            {/* yellow ellipse at left */}
            <img
                src="/assets/images/Ellipse yellow.png"
                alt=""
                aria-hidden
                className="absolute left-0 top-60 w-[30%] h-auto object-contain z-0 opacity-100"
            />

            {/* blue ellipse at right */}
            <img
                src="/assets/images/Ellipse blue.png"
                alt=""
                aria-hidden
                className="absolute right-0 bottom-0 w-[30%] h-auto object-contain z-0 opacity-100"
            />

            {/* owner photo overlay inside a centered container */}
            <div className="absolute left-0 right-0 z-30 flex justify-center items-end pointer-events-none" style={{ bottom: '60px' }}>
                <img
                    src="/assets/images/owner_fullwidth.png"
                    alt="Our team on site"
                    className="w-auto max-w-[100%] lg:max-w-[80%] h-auto object-contain opacity-100"
                />
            </div>

            {/* text content positioned near top */}
            <div className="absolute inset-0 z-20 flex flex-col justify-start items-center text-center pt-20 md:pt-30 lg:pt-38 px-6 md:px-12 lg:px-24">
                {/* subtle white overlay for legibility */}
                <div className="absolute inset-0 bg-white/40 z-0"></div>
                <h1 className="relative text-[#304462] font-bold text-[20px] md:text-[30px] lg:text-[65px] leading-tight lg:leading-[1.1] max-w-[1200px]">
                    Emergency Flood Restoration In Tauranga,{' '}
                    <span className="text-[#005D38]">24/7</span>{' '}
                    Water Damage Experts
                </h1>
                <p className="relative mt-6 text-[#1D1D1D] font-medium text-[16px] md:text-[17px] max-w-[640px]">
                    Water damage? Call your local Tauranga team for a fast, effective response.
                </p>
            </div>
            </section>

            {/* Star section with description */}
            <section className="w-full py-6 md:py-8 lg:py-0 bg-white px-6 md:px-12 lg:px-24">
                <div className="max-w-[1000px] mx-auto">
                    {/* Star icon decorations with text */}
                    <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
                        <img
                            src="/assets/images/star_image.png"
                            alt=""
                            aria-hidden
                            className="w-8 h-8 md:w-10 md:h-10"
                        />
                        <h2 className="text-[#304462] font-bold text-[28px] md:text-[38px] lg:text-[48px] leading-tight text-center">
                            Gentle, Powerful, And Effective
                        </h2>
                        <img
                            src="/assets/images/star_image.png"
                            alt=""
                            aria-hidden
                            className="w-8 h-8 md:w-10 md:h-10"
                        />
                    </div>

                    {/* Description text */}
                    <p className="text-[#1D1D1D] text-center max-w-[1000px] mx-auto" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '17px', lineHeight: '26px', letterSpacing: '0%' }}>
                        From your family&apos;s favourite sofa to large-scale commercial seating, our upholstery cleaning service revives fabrics deeply and safely. Our advanced cleaning systems gently yet powerfully lift away embedded dirt, grime, and odours, restoring your furniture&apos;s freshness and appearance.
                    </p>
                </div>
            </section>
        </>
    );
};

export default FloodHero;
