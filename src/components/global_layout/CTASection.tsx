"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

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
                className="max-w-[1440px] mx-auto px-8 md:px-16 text-center relative z-10 space-y-4"
            >
                <div className="space-y-2 max-w-5xl mx-auto">
                    <h2
                        className="font-normal text-white capitalize text-center text-[26px] md:text-[40px] lg:text-[52px]"
                    >
                        Ready For A Fresher, Cleaner Space?
                    </h2>
                    <p
                        className="text-white/80 font-normal max-w-[850px] mx-auto text-center"
                        style={{
                            fontFamily: 'Nebulas, sans-serif',
                            fontSize: '17px',
                            lineHeight: '20px',
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
                    className="flex flex-col sm:flex-row items-center justify-center pt-2"
                >
                    <Button
                        variant="accent"
                        className="px-12 py-4 text-[16px] font-bold bg-black text-black hover:bg-white/90 rounded-full normal-case tracking-normal shadow-lg"
                    >
                        Enquire Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
