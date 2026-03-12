"use client";

import React, { useState } from "react";
import EnquiryPopup from "./EnquiryPopup";

interface EnquireNowButtonProps {
    /** "fixed" — sticky on the right edge of the viewport (default).
     *  "section" — anchored to the bottom-right of the nearest `relative` parent. */
    variant?: "fixed" | "section";
    className?: string;
}

const EnquireNowButton = ({ variant = "fixed", className = "" }: EnquireNowButtonProps) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const positionClass =
        variant === "section"
            ? "absolute bottom-6 right-[0] z-[40]"
            : "fixed right-0 top-1/2 -translate-y-1/2 z-[40]";

    return (
        <>
            <button
                className={`${positionClass} ${className} relative overflow-hidden bg-[#1A4299] text-white py-4 px-2 rounded-l-xl flex flex-col items-center gap-2 shadow-2xl transition-all group active:scale-95`}
                onClick={() => setIsPopupOpen(true)}
            >
                <span
                    className="
                        absolute
                        left-1/2
                        bottom-0
                        w-[160%]
                        h-[220%]
                        -translate-x-1/2
                        translate-y-[100%]
                        rounded-[50%]
                        bg-[#FFF1A4]
                        transition-transform
                        duration-[1000ms]
                        ease-[cubic-bezier(0.16,1,0.3,1)]
                        group-hover:translate-y-[10%]
                        z-0
                    "
                />
                <span className="relative z-10 [writing-mode:vertical-lr] rotate-180 font-bold uppercase tracking-widest text-sm transition-colors duration-300 group-hover:text-[#304462]">
                    Enquire Now
                </span>
            </button>

            <EnquiryPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </>
    );
};

export default EnquireNowButton;