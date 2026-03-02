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
        <section className="w-full py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 relative" style={{ backgroundColor: "#E9E9E9" }}>
            {/* Side frame decoration at top right */}
            <div className="absolute top-0 right-0 z-0">
                <img
                    src="/assets/images/sideframe.png"
                    alt="Side decoration"
                    aria-hidden
                    className="w-[300px] md:w-[400px] lg:w-[580px] h-auto object-contain"
                />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Main Container - Two columns layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 items-center">
                    {/* Left Column - Image with Cloud overlay */}
                    <div className="relative flex justify-center items-center h-[600px] md:h-[700px]">
                        {/* Cloud background image */}
                        <div className="absolute top-10 right-0 transform -translate-x-1/2 z-10">
                            <img
                                src="/assets/images/cloud.png"
                                alt="Cloud decoration"
                                aria-hidden
                                className="w-[220px] md:w-[200px] lg:w-[250px] h-auto object-contain"
                            />
                        </div>

                        {/* Cleaning guy image */}
                        <div className="relative z-0 flex justify-center items-end h-full">
                            <img
                                src="/assets/images/cleaning_guy.png"
                                alt="Professional flood restoration expert"
                                className="w-full max-w-[500px] md:max-w-[550px] lg:max-w-[650px] h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Column - Text Content with Process Steps */}
                    <div className="flex flex-col gap-8">
                        {/* Section Heading */}
                        <div>
                            <h2 className="text-[#304462] font-medium text-[32px] md:text-[40px] lg:text-[50px] leading-tight mb-0">
                                Our Flood Restoration Process
                            </h2>
                        </div>

                        {/* Process Steps List */}
                        <div className="space-y-4">
                            {processSteps.map((step, index) => (
                                <div key={index} className="flex gap-3 items-start pb-4 border-b border-[#304462]/10">
                                    {/* Vector Icon */}
                                    <div className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center">
                                        <img
                                            src="/assets/images/vector.png"
                                            alt="Step indicator"
                                            className="w-6 h-6 object-contain"
                                        />
                                    </div>

                                    {/* Step Content */}
                                    <div className="flex-1">
                                        <h3 className="text-[#000000] font-semibold text-[16px] md:text-[18px] mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-[#000000] text-[13px] md:text-[14px] leading-relaxed font-normal">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quote Section */}
                        <div className="mt-6">
                            <p className="text-[#1D1D1D] italic font-normal text-[13px] md:text-[15px] leading-relaxed">
                                "Flooding doesn't wait — and neither do we. We'll be there <><br /></>fast to protect your property."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FloodRestorationProcess;
