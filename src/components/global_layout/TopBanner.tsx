"use client";

import React from "react";

const TopBanner = () => {
    return (
        <div className="hidden lg:flex w-full justify-center relative z-[70]">
            <div className=" bg-[#FFF1A4] rounded-b-[28px] px-8 py-[7px] inline-flex items-center justify-center min-w-[520px] max-w-[780px] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                <p className="font-alt text-slate-800 text-[13px] font-medium leading-[1.5] text-center m-0 tracking-[0.01em]">
                    Carpet &amp; upholstery cleaning and flood restoration across Tauranga, Mt Maunganui and the wider Bay of Plenty
                </p>
            </div>
        </div>
    );
};

export default TopBanner;
