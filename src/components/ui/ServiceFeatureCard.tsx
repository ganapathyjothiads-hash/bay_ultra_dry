"use client";

import React from "react";

interface ServiceFeatureCardProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    className?: string;
}

const ServiceFeatureCard: React.FC<ServiceFeatureCardProps> = ({
    title,
    description,
    icon,
    className = ""
}) => {
    return (
        <div className={`bg-white rounded-[12px] px-6 py-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-5 transition-all duration-300 hover:shadow-[0_15px_45px_rgb(0,0,0,0.08)] hover:-translate-y-1 ${className}`}>
            <div className="flex-shrink-0">
                {icon ? (
                    icon
                ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0L14 9L23 7L17 12L23 17L14 15L12 24L10 15L1 17L7 12L1 7L10 9L12 0Z" fill="#1A42C1" />
                    </svg>
                )}
            </div>
            <div className="flex flex-col flex-1">
                <p className="text-[#1A1A1A] font-bold text-[17px] md:text-[18px] leading-[1.2] text-left tracking-tight">
                    {title}
                </p>
                {description && (
                    <p className="text-[#1A1A1A]/70 text-[14px] md:text-[15px] mt-2 leading-relaxed font-medium text-left">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ServiceFeatureCard;


