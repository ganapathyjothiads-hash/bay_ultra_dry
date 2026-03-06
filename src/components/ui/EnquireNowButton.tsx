"use client";

import React from "react";

interface EnquireNowButtonProps {
    /** "fixed" — sticky on the right edge of the viewport (default).
     *  "section" — anchored to the bottom-right of the nearest `relative` parent. */
    variant?: "fixed" | "section";
}

const EnquireNowButton = ({ variant = "fixed" }: EnquireNowButtonProps) => {
    const positionClass =
        variant === "section"
            ? "absolute bottom-6 right-0 z-50"
            : "fixed right-0 top-1/2 -translate-y-1/2 z-50";

    return (
        <button
            className={`${positionClass} bg-[#002F74] text-white py-4 px-2 rounded-l-xl flex flex-col items-center gap-2 shadow-2xl hover:bg-[#001f4d] transition-all group`}
            onClick={() => {
                // Add your enquiry logic here
                console.log("Enquiry Clicked");
            }}
        >
            <span className="[writing-mode:vertical-lr] rotate-180 font-bold uppercase tracking-widest text-sm">
                Enquire Now
            </span>
        </button>
    );
};

export default EnquireNowButton;
