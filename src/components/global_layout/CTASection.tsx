"use client";

import React from "react";
import Image from "next/image";
import ActionButton from "../ui/ActionButton";

const CTASection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#1A449A] py-20">

            {/* Pattern Background */}
            {/* Desktop Pattern Background */}
            <Image
                src="/assets/images/clean_banner.png"
                alt="Cleaning pattern"
                fill
                priority
                className="hidden object-cover md:block"
            />

            {/* Mobile Pattern Background */}
            <Image
                src="/assets/images/mobile_ready.png"
                alt="Cleaning pattern mobile"
                fill
                priority
                className="block object-cover md:hidden"
            />

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-[#1A449A]/60"></div>

            {/* Ellipse Gradient */}
            <Image
                src="/assets/images/Ellipse 8.png"
                alt="Gradient ellipse"
                fill
                priority
                className="object-cover opacity-10"
            />

            {/* Content */}
            <div className="relative z-10 max-w-[1440px] mx-auto px-[6px] md:px-[16px] text-center">

                <div className="max-w-[850px] mx-auto space-y-6">

                    <h2 className="font-instrument font-medium text-white capitalize text-[25px] md:text-[42px] lg:text-[56px] leading-tight">
                        Ready For A Fresher, <br className="md:hidden" /> Cleaner Space?
                    </h2>

                    <p
                        className="text-white/85 text-[16px] md:text-[17px] leading-[28px]"
                        style={{ fontFamily: "Nebulas, sans-serif" }}
                    >
                        Experience the Bay Ultra Dry difference today. Whether it’s a routine deep clean
                        or an urgent restoration, our expert team is just a call away — ensuring your home
                        or business looks its best with minimal disruption and maximum care.
                    </p>

                    <div className="pt-4 flex justify-center">
                        <ActionButton variant="accent" href="/contact">
                            Enquire Now
                        </ActionButton>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CTASection;