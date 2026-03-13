"use client";

import React from "react";
import Image from "next/image";

const AboutOurPromise: React.FC = () => {
    const values = [
        {
            title: "Reliability",
            description: "We Show Up On Time, Every Time.",
        },
        {
            title: "Quality",
            description: "We Never Cut Corners And Use Industry-Best Practices.",
        },
        {
            title: "Care",
            description: "We Treat Your Home Or Business With The Utmost Respect",
        },
    ];

    return (
        <section className="relative w-full overflow-hidden pb-24">

            {/* ─── MOBILE LAYOUT (hidden on lg+) ─── */}
            <div className="lg:hidden relative bg-white overflow-hidden">
                {/* Yellow glow (About_BG2) — top-right, bleeds off screen */}
                <div className="absolute top-[120px] right-[-80px] w-[320px] h-[320px] pointer-events-none z-0 opacity-90">
                    <Image
                        src="/assets/images/About_BG2.png"
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Blue glow (About_BG1) — lower-centre, behind image area */}
                <div className="absolute bottom-[190px] left-[-120px] w-[300px] h-[300px] pointer-events-none z-0 opacity-80">
                    <Image
                        src="/assets/images/About_BG1.png"
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="relative z-10 px-5 pt-10 pb-0">
                    {/* Heading */}
                    <h2
                        className="text-[#2C9F7A] text-[28px] font-[500] tracking-tight mb-3 leading-tight"
                        data-aos="fade-down"
                    >
                        Our Promise
                    </h2>

                    {/* Sub-paragraph */}
                    <p
                        className="text-[#333333] text-[14px] font-normal leading-[1.7] mb-6 opacity-90"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        We treat every job like it&apos;s our own home or business, with respect,
                        reliability, and care.
                    </p>

                    {/* Our Values label */}
                    <h4
                        className="text-[#1A449A] text-[15px] font-[700] mb-4"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        Our Values:
                    </h4>

                    {/* Values list */}
                    <div className="w-full space-y-0 mb-10">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 py-4 border-b border-[#C8C8C8]/70 first:border-t"
                                data-aos="fade-up"
                                data-aos-delay={200 + index * 120}
                            >
                                <div className="flex-shrink-0 mt-0.5">
                                    <Image
                                        src="/assets/icons/Upgrade.png"
                                        alt="value icon"
                                        width={22}
                                        height={22}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-[#222222] text-[14px] font-normal leading-[1.65]">
                                    <strong className="font-semibold">{value.title}</strong>
                                    {" \u2014 "}
                                    {value.description}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Circular image + badge row */}
                    <div
                        className="relative w-full flex justify-end pb-8"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        {/* Circle image */}
                        <div className="relative w-[240px] h-[240px] rounded-full overflow-hidden z-20">
                            <Image
                                src="/assets/images/About_Service.png"
                                alt="Our Service"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Review badge — bottom-left, slightly overlapping circle */}
                        <div
                            className="absolute bottom-8 left-0 z-30 flex flex-col items-start"
                            data-aos="fade-right"
                            data-aos-delay="500"
                        >
                            <div className="relative w-[115px] h-[48px] left-[-5px]">
                                <Image
                                    src="/assets/images/About_Review.png"
                                    alt="Customers"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="mt-1 flex flex-col items-start">
                                <span className="text-[#111111] text-[11px] font-[700] tracking-tight leading-none">
                                    10k+ Happy Customer
                                </span>
                                <div className="flex items-center gap-1 mt-1">
                                    <Image
                                        src="/assets/icons/Star 13.png"
                                        alt="star"
                                        width={12}
                                        height={12}
                                        className="object-contain"
                                    />
                                    <span className="text-[#333333] text-[11px] font-[600]">
                                        4.9 (6,540)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── DESKTOP LAYOUT (hidden below lg) — fully original ─── */}
            <div className="hidden lg:block bg-white">
                <div className="max-w-[1400px] mx-auto px-6 py-16 lg:py-20 relative z-20">
                    <div className="flex flex-row items-center justify-between gap-10 lg:gap-12">

                        {/* Left Side: Text Content */}
                        <div
                            className="w-full lg:w-[65%] flex flex-col items-start text-left z-20 ml-[5%]"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <h2 className="text-[#324B6E] text-[34px] md:text-[38px] lg:text-[46px] font-[500] tracking-tight mb-5 leading-tight">
                                Our Promise
                            </h2>

                            <p className="text-[#333333] text-[13px] md:text-[15px] font-medium leading-[1.65] max-w-[600px] mb-8 opacity-85">
                                We treat every job like it&apos;s our own home or business, with respect, reliability, and care.
                            </p>

                            <div className="w-full flex flex-col items-start mb-[10%]">
                                <h4 className="text-[#1A449A] text-[14px] md:text-[15px] font-[600] mb-5 uppercase tracking-[0.1em]">
                                    Our Values:
                                </h4>

                                <div className="w-full max-w-[750px] space-y-0">
                                    {values.map((value, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 py-4 md:py-5 border-b border-[#E5E5E5]/80 first:border-t"
                                            data-aos="fade-up"
                                            data-aos-delay={index * 150}
                                        >
                                            <div className="flex-shrink-0 mt-1 md:mt-1.5">
                                                <Image
                                                    src="/assets/icons/Upgrade.png"
                                                    alt="value icon"
                                                    width={24}
                                                    height={24}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="flex flex-wrap items-baseline gap-x-2">
                                                <span className="text-[#333333] text-[16px] md:text-[18px] font-normal">
                                                    {value.title}
                                                </span>
                                                <span className="text-[#333333]/70 text-[15px] md:text-[16px] font-normal">
                                                    &mdash;
                                                </span>
                                                <span className="text-[#333333]/85 text-[15px] md:text-[16px] font-normal leading-relaxed">
                                                    {value.description}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Circular Image and Review Overlay */}
                        <div
                            className="relative w-full lg:w-[45%] flex justify-center lg:justify-end"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            <div className="relative w-[300px] md:w-[420px] lg:w-[500px] aspect-square flex items-center justify-center">

                                {/* Background Elements (Glow/Shapes) */}
                                <div className="absolute top-[-20%] right-[-20%] w-[140%] h-[140%] z-0 pointer-events-none overflow-visible">
                                    <div className="absolute top-0 right-0 opacity-70">
                                        <Image
                                            src="/assets/images/About_BG1.png"
                                            alt=""
                                            fill
                                            className="object-contain object-right-top scale-[1.3]"
                                        />
                                    </div>
                                    <div className="absolute inset-0 opacity-70 scale-[1.2]">
                                        <Image
                                            src="/assets/images/About_BG2.png"
                                            alt=""
                                            fill
                                            className="object-contain scale-[1.2]"
                                        />
                                    </div>
                                </div>

                                {/* Main Circular Image */}
                                <div
                                    className="relative w-full h-full rounded-full overflow-hidden z-20"
                                    data-aos="zoom-in"
                                    data-aos-duration="1200"
                                >
                                    <Image
                                        src="/assets/images/About_Service.png"
                                        alt="Our Service"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Review Badge Overlay */}
                                <div
                                    className="absolute bottom-[3%] left-[-8%] md:left-[-15%] lg:left-[-17%] z-30 flex flex-col items-center"
                                    data-aos="fade-right"
                                    data-aos-delay="600"
                                >
                                    <div className="relative w-[140px] md:w-[180px] lg:w-[220px] h-[60px] md:h-[80px]">
                                        <Image
                                            src="/assets/images/About_Review.png"
                                            alt="Customers"
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                    <div className="mt-1 flex flex-col items-center">
                                        <span className="text-[#111111] text-[12px] md:text-[14px] lg:text-[15px] font-[700] tracking-tight leading-none text-center">
                                            10k+ Happy Customer
                                        </span>
                                        <div className="flex items-center gap-1.5 mt-1.5">
                                            <Image src="/assets/icons/Star 13.png" alt="star" width={14} height={14} className="object-contain" />
                                            <span className="text-[#333333] text-[12px] md:text-[14px] font-[600]">
                                                4.9 (6,540)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Service Areas Section (shared) ─── */}
            <div className="w-full relative mt-0 lg:pb-60">
                <div className="absolute inset-0 z-0 pointer-events-none overflow-visible">
                    <div
                        className="absolute bottom-[-10%] lg:bottom-[-30%] left-[-12%] w-[65%] h-[200%] opacity-90 transform rotate-[-5deg]"
                        data-aos="fade-up-right"
                        data-aos-duration="2000"
                    >
                        <Image
                            src="/assets/images/About_Frame2.png"
                            alt=""
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                    <div
                        className="absolute bottom-[-100%] lg:bottom-[-50%] right-[-12%] w-[65%] h-[200%] opacity-90 transform rotate-[5deg]"
                        data-aos="fade-up-left"
                        data-aos-duration="2000"
                    >
                        <Image
                            src="/assets/images/About_Frame1.png"
                            alt=""
                            fill
                            className="object-contain object-right"
                            priority
                        />
                    </div>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[1240px] mx-auto pt-24 pb-12">
                    <h2
                        className="text-[#324B6E] text-[24px] md:text-[44px] lg:text-[55px] font-[500] tracking-tight mb-10 leading-none"
                        data-aos="fade-up"
                    >
                        Service Areas
                    </h2>

                    <p
                        className="text-[#303030] text-[15px] lg:text-[17px] font-[500] leading-[1.8] opacity-80 max-w-[950px]"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        We proudly serve all of <span className="font-[700]">Tauranga</span> and the{" "}
                        <span className="font-[700]">wider Bay of Plenty</span>, including Papamoa |
                        <br className="hidden md:block" />
                        Mount Maunganui | Omokoroa | Katikati | Omanawa | Ohauiti | Te Puna | Te Puke | BOP
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutOurPromise;
