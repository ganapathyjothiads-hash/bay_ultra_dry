import React from "react";
import Link from "next/link";

interface ActionButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
    variant?: "primary" | "amber" | "outline" | "accent";
    disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
    children,
    href,
    onClick,
    type = "button",
    className = "",
    variant = "primary",
    disabled = false
}) => {
    // Shared base styles matching the requested button
    const baseClasses = `font-alt font-semibold rounded-[30px] shadow-lg transition-all text-center flex items-center justify-center ${disabled ? 'opacity-70 cursor-not-allowed' : 'active:scale-95 cursor-pointer'}`;

    // Variant specific styles
    let variantClasses = "";
    if (variant === "primary") {
        variantClasses = "bg-[#1e3a8a] text-white shadow-blue-500/20 hover:bg-[#1e3a8a]/90";
    } else if (variant === "amber") {
        variantClasses = "bg-[#F5A51C] text-[#000000] shadow-amber-500/20 hover:bg-amber-500/90";
    } else if (variant === "accent") {
        variantClasses = "px-10 py-3 md:px-12 md:py-4 text-[18px] md:text-[16px] font-bold bg-white text-black md:text-black hover:bg-gray-100 md:hover:bg-white/90 rounded-full normal-case tracking-normal shadow-lg w-[220px] md:w-auto";
    }

    // Combine classes allowing tailwind overrides via className
    const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

    if (href) {
        return (
            <Link href={href} onClick={onClick} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClasses} disabled={disabled}>
            {children}
        </button>
    );
};

export default ActionButton;
