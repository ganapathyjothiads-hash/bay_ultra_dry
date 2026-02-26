"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import InfoCard from "../ui/InfoCard";

const RestorationSection = () => {
    return (
        <section className="w-full py-24 bg-gradient-to-r from-blue-600 to-blue-400 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-15deg] translate-x-1/2"></div>

            <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left side: Image */}
                    <div className="relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/20">
                        <Image
                            src="/assets/images/flood-restoration-detail.jpg"
                            alt="24/7 Flood Restoration"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-blue-900/10"></div>
                        <div className="absolute top-8 left-8 bg-[#FBA41C] text-white px-6 py-3 rounded-full font-black text-sm uppercase tracking-widest shadow-lg">
                            Emergency 24/7
                        </div>
                    </div>

                    {/* Right side: Content */}
                    <div className="text-white space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                                24/7 Flood Restoration
                            </h2>
                            <p className="text-xl text-blue-50 font-medium leading-relaxed">
                                Rapid response to minimize damage and restore your property. We handle everything from water extraction to drying and sanitization.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Rapid Response Team",
                                "Expert Water Extraction",
                                "Professional Sanitization",
                                "Structural Drying",
                            ].map((item, idx) => (
                                <InfoCard
                                    key={idx}
                                    variant="horizontal"
                                    className="!bg-white/10 !border-white/20 !p-4"
                                    icon={<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">✓</div>}
                                >
                                    <span className="text-white font-bold">{item}</span>
                                </InfoCard>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-6 pt-4">
                            <Button variant="secondary" className="px-12">
                                Call Now: 07 571 2279
                            </Button>
                            <Button variant="outline" className="px-12">
                                Request Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RestorationSection;
