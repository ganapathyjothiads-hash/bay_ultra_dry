"use client";

import React from "react";

const ServiceAreas = () => {
    return (
        <section className="w-full bg-white py-10 md:py-20 md:pb-24 border-b border-gray-100">
            <div
                className="max-w-[1440px] mx-auto px-4 md:px-16 text-center flex flex-col items-center justify-center"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <h2 className="text-[42px] md:text-[56px] font-regular text-[#304462] mb-6 md:mb-10 leading-tight">
                    Service Areas
                </h2>

                <p className="font-inter text-[#1D1D1D] text-[12px] md:text-[20px] leading-relaxed md:leading-normal max-w-[900px] mx-auto font-medium text-center px-4">
                    We proudly serve all of Tauranga and the wider Bay of Plenty, including Papamoa |
                    Mount Maunganui | Omokoroa | Katikati | Omanawa | Ohauiti | Te Puna | Te Puke |
                    BOP
                </p>
            </div>
        </section>
    );
};

export default ServiceAreas;
