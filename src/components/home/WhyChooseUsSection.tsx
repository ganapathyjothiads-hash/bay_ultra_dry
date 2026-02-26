"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "../ui/InfoCard";

const WhyChooseUsSection = () => {
    return (
        <section className="w-full py-24 bg-white relative overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-50 -ml-48 -mb-48"></div>

            <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
                <div className="text-center space-y-4 mb-20">
                    <span className="text-[#FBA41C] font-bold text-sm uppercase tracking-[0.2em]">Our Values</span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900">Why Choose Bay Ultra Dry</h2>
                </div>

                <div className="relative">
                    {/* The Man in Uniform - Absolute positioned in center for desktop */}
                    <div className="hidden lg:block absolute left-1/2 bottom-0 -translate-x-1/2 z-20 w-[500px]">
                        <Image
                            src="/assets/images/cleaner-man.png"
                            alt="Bay Ultra Dry Professional"
                            width={500}
                            height={700}
                            className="object-contain"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center lg:min-h-[600px]">
                        {/* Left Side Content */}
                        <div className="space-y-8 lg:pr-12">
                            <InfoCard
                                variant="horizontal"
                                title="Prompt & Reliable"
                                description="We value your time and always arrive when promised."
                                icon={<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl">01</div>}
                                className="!bg-white !shadow-xl"
                            />
                            <InfoCard
                                variant="horizontal"
                                title="Expert Cleaning"
                                description="Certified specialists using the best industry tech."
                                icon={<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl">02</div>}
                                className="!bg-white !shadow-xl"
                            />
                        </div>

                        {/* Mid Side (Empty on desktop for the man image) */}
                        <div className="hidden lg:block"></div>

                        {/* Mobile mid side image */}
                        <div className="lg:hidden flex justify-center py-8">
                            <div className="relative w-full max-w-[300px] aspect-square">
                                <Image
                                    src="/assets/images/cleaner-man.png"
                                    alt="Bay Ultra Dry Professional"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Right Side Content */}
                        <div className="space-y-8 lg:pl-12">
                            <InfoCard
                                variant="horizontal"
                                title="Eco-Friendly"
                                description="Safe cleaning solutions for your family and pets."
                                icon={<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl">03</div>}
                                className="!bg-white !shadow-xl"
                            />
                            <InfoCard
                                variant="horizontal"
                                title="Fully Insured"
                                description="Peace of mind with a fully insured professional team."
                                icon={<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xl">04</div>}
                                className="!bg-white !shadow-xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Trust markers below the main area */}
                <div className="mt-16 flex flex-wrap justify-center gap-12 border-t border-gray-100 pt-16">
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-black text-gray-900">5000+</span>
                        <span className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-2">Happy Customers</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-black text-gray-900">10+</span>
                        <span className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-2">Years Service</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-black text-gray-900">100%</span>
                        <span className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-2">Guaranteed</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
