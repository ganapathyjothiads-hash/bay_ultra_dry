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
            ? "absolute bottom-6 right-0 z-[40]"
            : "fixed right-0 top-1/2 -translate-y-1/2 z-[40]";

    return (
        <>
            <button
                className={`${positionClass} ${className} bg-[#1A4299] text-white py-4 px-2 rounded-l-xl flex flex-col items-center gap-2 shadow-2xl hover:bg-[#001f4d] transition-all group active:scale-95`}
                onClick={() => setIsPopupOpen(true)}
            >
                <span className="[writing-mode:vertical-lr] rotate-180 font-bold uppercase tracking-widest text-sm">
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