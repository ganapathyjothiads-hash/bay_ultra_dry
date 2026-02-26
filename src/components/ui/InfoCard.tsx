"use client";

import React from "react";

interface InfoCardProps {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    variant?: "default" | "compact" | "horizontal";
}

const InfoCard: React.FC<InfoCardProps> = ({
    title,
    description,
    icon,
    children,
    className = "",
    variant = "default",
}) => {
    const baseStyles = "bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-6 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1";

    if (variant === "horizontal") {
        return (
            <div className={`${baseStyles} flex items-center gap-4 ${className}`}>
                {icon && <div className="flex-shrink-0">{icon}</div>}
                <div>
                    {title && <h4 className="font-bold text-gray-800 text-[16px] mb-1">{title}</h4>}
                    {description && <p className="text-gray-500 text-[14px] leading-relaxed">{description}</p>}
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div className={`${baseStyles} ${className}`}>
            {icon && <div className="mb-4">{icon}</div>}
            {title && <h3 className="font-bold text-gray-800 text-[18px] mb-2">{title}</h3>}
            {description && <p className="text-gray-500 text-[14px] leading-relaxed mb-4">{description}</p>}
            {children}
        </div>
    );
};

export default InfoCard;
