"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "../ui/InfoCard";

const UpholsteryCleaningSection = () => {
    return (
        <section className="w-full py-24 bg-[#FAFAFA]">
            <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image */}
                    <div className="flex-1">
                        <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl group">
                            <Image
                                src="/assets/images/upholstery-cleaning-hero.jpg"
                                alt="Professional Upholstery Cleaning"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                Expert Upholstery Cleaning
                            </h2>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                From sofas to armchairs, we use specialized tools and solutions to clean delicate fabrics safely and effectively.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Fabric Safety", desc: "Gentle yet effective cleaning" },
                                { title: "Odor Removal", desc: "Eliminates pet and smoke smells" },
                                { title: "Protctive Coating", desc: "Prevents future staining" },
                                { title: "Total Refresh", desc: "Restores color and texture" },
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
                </div>
            </div>
        </section>
    );
};

export default UpholsteryCleaningSection;
