"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "../ui/InfoCard";

const CarpetCleaningSection = () => {
    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content */}
                    <div className="flex-1 space-y-10 order-2 lg:order-1">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                Professional Carpet Cleaning
                            </h2>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                Our advanced hot water extraction method removes deep-seated dirt, stains, and allergens, leaving your carpets fresh and sanitized.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Deeper Clean", desc: "Reaches the base of the carpet" },
                                { title: "Stain Removal", desc: "Expert treatment for tough spots" },
                                { title: "Fast Drying", desc: "Back in use in just hours" },
                                { title: "Eco Solutions", desc: "Safe for kids and pets" },
                            ].map((feature, idx) => (
                                <InfoCard
                                    key={idx}
                                    title={feature.title}
                                    description={feature.desc}
                                    className="!p-6 !rounded-[24px]"
                                    icon={<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">✓</div>}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 order-1 lg:order-2">
                        <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl group">
                            <Image
                                src="/assets/images/carpet-cleaning-hero.jpg"
                                alt="Professional Carpet Cleaning in Action"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarpetCleaningSection;
