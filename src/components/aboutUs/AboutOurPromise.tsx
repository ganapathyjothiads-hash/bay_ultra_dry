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
        <section className="relative w-full bg-white overflow-hidden pb-40">
            {/* Top Section: Our Promise */}
            <div className="max-w-[1380px] mx-auto px-6 pt-24 relative z-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Side: Text Content */}
                    <div className="w-full lg:w-[48%] flex flex-col items-start text-left z-20">
                        <h2 className="text-[#324B6E] text-[52px] md:text-[60px] lg:text-[72px] font-[500] tracking-tight mb-8 leading-none">
                            Our Promise
                        </h2>

                        <p className="text-[#303030] text-[16px] md:text-[17px] font-[500] leading-[1.6] max-w-[550px] mb-12 opacity-90">
                            We treat every job like it's our own home or business, with respect, reliability, and care.
                        </p>

                        <div className="w-full flex flex-col items-start">
                            <h4 className="text-[#134391] text-[18px] font-[700] mb-8">
                                Our Values:
                            </h4>

                            <div className="space-y-6 w-full max-w-[520px]">
                                {values.map((value, index) => (
                                    <div key={index} className="flex flex-col gap-5">
                                        <div className="flex items-center gap-5 group">
                                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                                <Image
                                                    src="/assets/icons/Upgrade.png"
                                                    alt="icon"
                                                    width={24}
                                                    height={24}
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="flex items-center flex-wrap gap-x-2">
                                                <span className="text-[#111111] text-[16px] font-[700]">
                                                    {value.title}
                                                </span>
                                                <span className="text-[#555555] text-[16px] font-[500] opacity-80">
                                                    — {value.description}
                                                </span>
                                            </div>
                                        </div>
                                        {index !== values.length - 1 && (
                                            <div className="w-full h-[1px] bg-[#E5E5E5]" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Circular Image and Review Overlay */}
                    <div className="relative w-full lg:w-[50%] flex justify-center lg:justify-end pr-0 lg:pr-10">
                        {/* Background Wavy Lines behind the circular image as in reference */}
                        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                            <div className="absolute top-[10%] left-[-60%] w-[160%] h-[160%] opacity-80">
                                <Image
                                    src="/assets/images/About_BG1.png"
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="absolute top-[20%] left-[-40%] w-[140%] h-[140%] opacity-60">
                                <Image
                                    src="/assets/images/About_BG2.png"
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="relative w-[340px] md:w-[480px] lg:w-[620px] aspect-square z-10">
                            {/* Main Circular Image */}
                            <div className="absolute inset-0 rounded-full overflow-hidden border-[1px] border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                                <Image
                                    src="/assets/images/About_Service.png"
                                    alt="Our Service"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Review Badge Overlay (The circles) */}
                            <div className="absolute bottom-[15%] left-0 z-30 transform -translate-x-[15%] flex flex-col items-start">
                                <div className="relative w-[180px] md:w-[220px] lg:w-[240px] h-[60px] md:h-[80px]">
                                    <Image
                                        src="/assets/images/About_Review.png"
                                        alt="Customers"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="mt-2 ml-4 flex flex-col items-start">
                                    <span className="text-[#111111] text-[14px] md:text-[15px] font-[800] leading-none">
                                        10k+ Happy Customer
                                    </span>
                                    <div className="flex items-center gap-1.5 mt-2">
                                        <Image src="/assets/icons/About_star.png" alt="star" width={14} height={14} />
                                        <span className="text-[#303030]/80 text-[13px] md:text-[14px] font-[700]">
                                            4.9 (6,540)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Areas Section (framing with Service_Frame) */}
            <div className="w-full mt-24 relative min-h-[500px] flex items-center justify-center pb-20">
                {/* Two Copies of Service_Frame correctly placed */}
                <div className="absolute inset-x-0 bottom-0 z-0 pointer-events-none overflow-hidden h-full">
                    {/* Left Frame Copy */}
                    <div className="absolute bottom-[-15%] left-[-15%] w-[60%] h-[500px]">
                        <Image
                            src="/assets/images/Service_Frame.png"
                            alt="Background wave"
                            fill
                            className="object-contain object-left scale-[1.4]"
                        />
                    </div>
                    {/* Right Frame Copy (Mirrored) */}
                    <div className="absolute bottom-[-15%] right-[-15%] w-[60%] h-[500px] scale-x-[-1]">
                        <Image
                            src="/assets/images/Service_Frame.png"
                            alt="Background wave"
                            fill
                            className="object-contain object-left scale-[1.4]"
                        />
                    </div>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-[1000px]">
                    <h2 className="text-[#324B6E] text-[52px] md:text-[62px] lg:text-[76px] font-[500] tracking-tight mb-8 leading-none">
                        Service Areas
                    </h2>

                    <p className="text-[#303030] text-[16px] md:text-[18px] font-[500] leading-[1.8] opacity-90 max-w-[850px]">
                        We proudly serve all of <span className="text-[#134391] font-[700]">Tauranga</span> and the <span className="text-[#134391] font-[700]">wider Bay of Plenty</span>, including Papamoa |<br className="hidden md:block" />
                        Mount Maunganui | Omokoroa | Katikati | Omanawa | Ohauiti | Te Puna | Te Puke | BOP
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutOurPromise;
