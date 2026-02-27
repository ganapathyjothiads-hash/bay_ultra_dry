"use client";

import React from "react";

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
                    <span className="text-white flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L13.5 9.5L21 8L16.5 12L21 16L13.5 14.5L12 22L10.5 14.5L3 16L7.5 12L3 8L10.5 9.5L12 2Z" />
                        </svg>
                    </span>
                    <span className="text-[#FFFEE0] text-lg md:text-xl font-semibold tracking-wide py-1">
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

