"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "accent" | "outline";
    className?: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    className = "",
    children,
    ...props
}) => {
    const baseStyles = "px-9 py-3.5 rounded-full font-bold text-[14px] transition-all active:scale-95 uppercase tracking-wide flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-[#2B59C3] hover:bg-[#1E3A8A] text-white shadow-[0_4px_12px_rgba(43,89,195,0.25)]",
        secondary: "bg-[#FBA41C] hover:bg-[#E89512] text-white shadow-[0_4px_12px_rgba(251,164,28,0.25)]",
        accent: "bg-white hover:bg-gray-50 text-[#2B59C3] shadow-[0_4px_12px_rgba(0,0,0,0.1)]",
        outline: "bg-transparent border-2 border-white/20 hover:border-white/40 text-white",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
