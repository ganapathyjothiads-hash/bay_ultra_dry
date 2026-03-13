"use client";

import React from "react";

const FloodRestorationProcess = () => {
    const processSteps = [
        {
            title: "Assessment",
            description: "Inspect and measure moisture levels",
        },
        {
            title: "Extraction",
            description: "Remove standing water",
        },
        {
            title: "Drying",
            description: "Air movers & dehumidifiers restore humidity",
        },
        {
            title: "Prevention",
            description: "Treat odours & bacteria to stop mould",
        },
        {
            title: "Monitoring",
            description: "Revisit until fully dry",
        },
    ];

    return (
        <section className="w-full min-h-screen flex items-center py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden" style={{ backgroundColor: "#E9E9E9" }}>
            {/* Side frame decoration at top right */}
            <div className="absolute top-0 right-0 z-0 select-none pointer-events-none">
                <img
                    src="/assets/images/sideframe.png"
                    alt=""
                    aria-hidden
                    className="w-[300px] md:w-[450px] lg:w-[680px] h-auto object-contain translate-x-12 -translate-y-12 opacity-90"
                />
            </div>

            <div className="max-w-[1300px] mx-auto relative z-10 w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Left Column - Image with Arch Effect and Badge */}
                    <div
                        data-aos="fade-right"
                        className="relative w-full lg:w-[48%] flex justify-center lg:justify-start"
                    >
                        <div className="relative w-full max-w-[540px] aspect-[1/1.1] rounded-t-[250px] overflow-hidden shadow-xl border-b-0">
                            <img
                                src="/assets/images/cleaning_guy.png"
                                alt="Professional flood restoration expert"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Badge/Cloud Overlay */}
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="500"
                            className="absolute top-[5%] right-[-10%] md:right-[-8%] z-20 transform scale-90 md:scale-100"
                        >
                            <div className="relative">
                                <img
                                    src="/assets/images/cloud.png"
                                    alt=""
                                    aria-hidden
                                    className="w-[140px] md:w-[180px] lg:w-[220px] h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Process Steps */}
                    <div
                        data-aos="fade-left"
                        className="w-full lg:w-[52%] flex flex-col gap-4 md:gap-6"
                    >
                        <h2 className="text-[#304462] font-display font-medium text-[32px] md:text-[42px] lg:text-[46px] leading-[1.2] tracking-tight">
                            Our Flood Restoration<br />Process
                        </h2>

                        <div className="flex flex-col gap-3 md:gap-4">
                            {processSteps.map((step, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-left"
                                    data-aos-delay={index * 100}
                                    className="group pb-3 border-b border-black/10 last:border-0"
                                >
                                    <div className="flex gap-4 items-start">
                                        <div className="flex-shrink-0 w-5 h-5 mt-1 flex items-center justify-center">
                                            <img
                                                src="/assets/images/vector.png"
                                                alt=""
                                                className="w-4 h-4 object-contain"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-display text-[#304462] font-medium text-[16px] md:text-[17px] lg:text-[18px] mb-0.5">
                                                {step.title}
                                            </h3>
                                            <p className="text-[#333333] text-[12px] md:text-[13px] lg:text-[14px] font-normal leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-delay="600"
                            className="mt-2"
                        >
                            <p className="font-nunito text-[#1D1D1D] italic font-normal text-[13px] md:text-[14px] lg:text-[15px] leading-[1.6] max-w-[500px]">
                                "Flooding doesn't wait — and neither do we. We'll be there fast to protect your property."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FloodRestorationProcess;
