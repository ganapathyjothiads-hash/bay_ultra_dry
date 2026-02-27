"use client";

import React from "react";
import Link from "next/link";

interface ContactUsButtonProps {
    className?: string;
}

const ContactUsButton: React.FC<ContactUsButtonProps> = ({ className = "" }) => {
    return (
        <Link
            href="/contact"
            className={`
                bg-[#1A4299] text-white px-8 py-4 rounded-full 
                text-[18px] font-bold shadow-md hover:bg-[#15357a] 
                transition-all active:scale-95 inline-flex items-center justify-center
                ${className}
            `}
        >
            Contact Us
        </Link>
    );
};

export default ContactUsButton;
