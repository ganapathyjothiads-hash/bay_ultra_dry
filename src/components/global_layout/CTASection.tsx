"use client";

import React from "react";
import Image from "next/image";
import ActionButton from "../ui/ActionButton";

const CTASection = () => {
    return (
        <section className="w-full py-18 bg-[#1A449A] relative overflow-hidden">
            {/* Background images */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <Image
                    src="/assets/images/clean_banner.png"
                    alt="Clean background banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0">
                    <Image
                        src="/assets/images/Ellipse 8.png"
                        alt="Ellipse background"
                        fill
                        className="object-cover opacity-100"
                        priority
                    />
                </div>
            </div>

            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="max-w-[1440px] mx-auto px-4 md:px-16 text-center relative z-10 space-y-6 md:space-y-4"
            >
                <div className="space-y-4 md:space-y-2 max-w-5xl mx-auto">
                    <h2
                        className="font-normal text-white capitalize text-center text-[26px] md:text-[40px] lg:text-[52px]"
                    >
                        Ready For A Fresher,<br className="block md:hidden" /> Cleaner Space?
                    </h2>
                    <p
                        className="text-white md:text-white/80 font-normal max-w-[850px] mx-auto text-center text-[17px] leading-[28px] md:text-[17px] md:leading-[20px] px-2 md:px-0"
                        style={{
                            fontFamily: 'Nebulas, sans-serif',
                        }}
                    >
                        Experience the Bay Ultra Dry difference today. Whether it&apos;s a routine deep clean or an
                        urgent restoration, our expert team is just a call away — ensuring your home or business
                        looks its best with minimal disruption and maximum care.
                    </p>
                </div>

                <div
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-duration="800"
                    className="flex flex-col sm:flex-row items-center justify-center pt-4 md:pt-2"
                >
                    <ActionButton
                        variant="accent"
                    >
                        Enquire Now
                    </ActionButton>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
