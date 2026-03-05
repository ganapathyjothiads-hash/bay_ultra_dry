"use client";

import React from "react";
import Image from "next/image";

const Marquee = () => {
    const items = [
        "Carpet Cleaning",
        "Upholstery Cleaning",
        "Flood Restoration",
        "Forensic & Biohazard Cleaning"
    ];

    // Create a duplicated list for seamless looping
    const marqueeContent = (
        <div className="flex items-center space-x-12 px-6">
            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                    <Image src="/assets/icons/Marque_icon.png" alt="" width={26} height={26} />
                    <span className="text-[#FFFEE0] font-family:'inter' text-[20px] md:text-[20px] font-semibold tracking-wide py-1">
                        {item}
                    </span>
                </div>
            ))}
        </div>
    );

    return (
        <div className="w-full bg-[#002F74] py-3 md:py-4 overflow-hidden whitespace-nowrap relative z-10">
            <div className="flex w-fit animate-marquee">
                {marqueeContent}
                {marqueeContent}
                {marqueeContent}
                {marqueeContent}
            </div>

            <style jsx>{`
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-25%);
                    }
                }
            `}</style>
        </div>
    );
};

export default Marquee;

