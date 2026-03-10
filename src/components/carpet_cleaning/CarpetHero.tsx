"use client";

import React from "react";

const CarpetHero = () => {
    return (
        <div className="w-full flex flex-col items-center bg-white">
            <section className="relative w-full min-h-[600px] lg:min-h-[850px] overflow-hidden bg-white pt-24 lg:pt-0">
                {/* Desktop Background Original */}
                <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden">
                    <img
                        src="/assets/images/carpet/Carpet_Cleaning_bg.png"
                        alt=""
                        aria-hidden
                        className="absolute inset-0 w-[90%] h-full object-cover"
                        style={{ objectPosition: 'left center' }}
                    />
                    <div
                        aria-hidden
                        className="absolute inset-0 z-[1]"
                        style={{
                            background: "linear-gradient(124.88deg, rgba(9, 18, 36, 0) -2.84%, #091224 61.16%)",
                        }}
                    />
                </div>

                {/* Mobile Background and Overlay */}
                <div className="lg:hidden absolute inset-0 z-0">
                    <img
                        src="/assets/images/carpet/Carpet_mobile_bg.png"
                        alt=""
                        aria-hidden
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <img
                        src="/assets/images/carpet/Carpet_mobile.png"
                        alt=""
                        aria-hidden
                        className="absolute inset-0 w-full h-full object-cover opacity-90 z-[2]"
                    />
                    {/* Linear Gradient for depth */}
                    <div
                        className="absolute inset-0 z-[1]"
                        style={{
                            background: "linear-gradient(to bottom, transparent 0%, #091224 100%)"
                        }}
                    />
                    {/* Transparent White Overlay with rounded bottom */}
                </div>

                <img
                    src="/assets/images/carpet/Carpet_Cleaning.png"
                    alt=""
                    aria-hidden
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    className="hidden lg:block absolute top-0 right-0 w-full h-[480px] lg:h-[80%] object-cover lg:object-fill z-[10] pointer-events-none opacity-80 lg:opacity-100"
                />

                <div className="absolute inset-x-0 top-0 h-full z-[30] flex flex-col items-start lg:items-end justify-start lg:justify-center px-6 md:px-8 xl:px-12 max-w-[1440px] mx-auto pt-20 lg:pt-0 lg:pb-32 lg:mt-[-22px]">
                    <div className="w-full lg:w-[72%] mt-10 lg:mt-[-8%]">
                        <h1
                            className="font-display text-[32px] md:text-[38px] lg:text-[48px] xl:text-[58px] font-medium leading-[1.3] mb-[8] tracking-[-0.03em] max-w-[1100px] text-[#304462]"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Professional Carpet Cleaning In{" "}
                            <br className="hidden lg:block" />
                            Tauranga, Residential &amp; Commercial
                        </h1>

                        <p
                            className="text-[17px] md:text-[19px] lg:text-[18px] mb-4 font-medium text-[#2C2C2C]/90 max-w-[750px] leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Professional carpet cleaning that revitalises your home, rental, or business—delivering fresh, fast-drying, and long-lasting results.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarpetHero;
