"use client";

import React from "react";
import Image from "next/image";

const AboutWhatWeDo: React.FC = () => {
    const services = [
        {
            title: "Residential Carpet & Upholstery Cleaning",
        },
        {
            title: "Commercial Carpet & Upholstery Cleaning",
        },
        {
            title: "Flood Restoration & Drying",
        },
        {
            title: "Forensic & Biohazard Cleaning",
        },
    ];

    return (
        <section className="relative w-full bg-[#FFE4B7] h-[650px] min-h-[700px] overflow-hidden flex flex-col items-center justify-center py-20">

            {/* Background Images - Positioned directly on the beige background */}
            <div className="absolute top-0 right-0 w-[400px] md:w-[600px] lg:w-[550px] h-[60%] md:h-[80%] z-10 pointer-events-none translate-x-[15%] -translate-y-[15%] lg:translate-x-[10%] lg:-translate-y-[10%] opacity-80 lg:opacity-100">
                <Image
                    src="/assets/images/Cleaning_Bucket.png"
                    alt="Cleaning Bucket"
                    fill
                    className="object-contain object-right-top"
                    priority
                />
            </div>

            <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] lg:w-[550px] h-[60%] md:h-[80%] z-10 pointer-events-none -translate-x-[15%] translate-y-[15%] lg:-translate-x-[10%] lg:translate-y-[10%] opacity-80 lg:opacity-100">
                <Image
                    src="/assets/images/Cleaning_Tools.png"
                    alt="Cleaning Tools"
                    fill
                    className="object-contain object-left-bottom"
                    priority
                />
            </div>

            <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 flex flex-col items-center text-center">
                {/* Title and Subtitle */}
                <h2 className="text-[#324B6E] text-[38px] md:text-[48px] lg:text-[56px] font-[500] tracking-tight mb-6 leading-tight">
                    What We Do
                </h2>

                <p className="text-[#303030] text-[15px] md:text-[16px] lg:text-[17px] font-[500] max-w-[650px] mb-12 leading-relaxed opacity-90">
                    We handle all types of cleaning and restoration, from quick refreshes to large-scale projects:
                </p>

                {/* Services Grid (Cards) - Constrained width to avoid overlap with side images */}
                <div className="w-full max-w-[1100px] px-4 md:px-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14 w-full mb-16">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col items-start text-left">
                                <div className="mb-4 h-[40px] flex items-center">
                                    <Image
                                        src="/assets/icons/About_star.png"
                                        alt="star"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-[#111111] text-[16px] md:text-[17px] lg:text-[18px] font-[600] leading-[1.3] mb-5 min-h-[48px] max-w-[200px]">
                                    {service.title}
                                </h3>
                                <div className="w-[100%] h-[1px] bg-black opacity-30" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Text */}
                <div className="max-w-[750px] mt-4">
                    <p className="text-[#303030] text-[15px] md:text-[16px] lg:text-[17px] font-[500] leading-relaxed">
                        No matter the size or scope, from a single couch to full office buildings or vehicle fleets, we've got the tools and experience to deliver exceptional results.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutWhatWeDo;
