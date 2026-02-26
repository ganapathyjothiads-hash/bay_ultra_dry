"use client";

import React from "react";

const Marquee = () => {
    const text = "Carpet Cleaning ★ Upholstery Cleaning ★ Flood Restoration ★ Commercial & Rental Cleaning ★ Free Quotes ★ 24/7 Service ★";

    return (
        <div className="w-full bg-[#002F74] py-4 overflow-hidden whitespace-nowrap relative z-10 border-y border-white/10">
            <div className="flex animate-marquee">
                {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-[#FFFEE0] text-xl md:text-2xl font-black uppercase tracking-widest px-8 flex items-center gap-8">
                        {text}
                    </span>
                ))}
            </div>

            <style jsx>{`
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
};

export default Marquee;
