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
    const baseClasses = `font-alt font-medium rounded-[30px] shadow-lg transition-all text-center flex items-center justify-center relative overflow-hidden group ${disabled ? 'opacity-70 cursor-not-allowed' : 'active:scale-95 cursor-pointer'}`;

    // Variant specific styles
    let variantClasses = "";
    if (variant === "primary") {
        variantClasses = "bg-[#1e3a8a] text-white shadow-blue-500/20";
    } else if (variant === "amber") {
        variantClasses = "bg-[#F5A51C] text-[#000000] shadow-amber-500/20";
    } else if (variant === "accent") {
        variantClasses = "px-10 py-3 md:px-12 md:py-4 text-[18px] md:text-[16px] font-bold bg-white text-black shadow-lg w-[220px] md:w-auto";
    } else if (variant === "outline") {
        variantClasses = "bg-transparent border-2 border-white/20 hover:border-white/40 text-white";
    }

    // Combine classes allowing tailwind overrides via className
    const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

    const content = (
        <>
            {/* Curved Hover Background */}
            {variant !== "outline" && (
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
            )}
            {/* Button Content */}
            <span className={`relative z-10 flex items-center justify-center gap-2 transition-colors duration-300 ${variant !== "outline" ? "group-hover:text-[#304462]" : ""}`}>
                {children}
            </span>
        </>
    );

    if (href) {
        return (
            <Link href={href} onClick={onClick} className={combinedClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClasses} disabled={disabled}>
            {content}
        </button>
    );
};

export default ActionButton;
