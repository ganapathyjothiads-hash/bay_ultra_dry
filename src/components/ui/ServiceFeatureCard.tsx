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
        <div className={`bg-white rounded-[15px] p-6 md:p-8 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.1)] flex items-center gap-6 transition-all duration-300 hover:shadow-[0_20px_55px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-1 ${className}`}>
            <div className="flex-shrink-0">
                {icon ? (
                    icon
                ) : (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0L13.1667 8.83333L22 7.66667L14.6667 12L22 16.3333L13.1667 15.1667L12 24L10.8333 15.1667L2 16.3333L9.33333 12L2 7.66667L10.8333 8.83333L12 0Z" fill="#1E40AF" />
                    </svg>
                )}
            </div>
            <div className="flex flex-col flex-1">
                <p className="text-[#1A1A1A] font-bold text-[17px] md:text-[15px] leading-[1.3] text-left">
                    {title}
                </p>
                {description && (
                    <p className="text-[#1A1A1A]/80 text-[14px] md:text-[15px] mt-1.5 leading-relaxed font-medium text-left">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ServiceFeatureCard;
