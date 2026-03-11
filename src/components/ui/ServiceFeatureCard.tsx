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
        <div
            className={`bg-white rounded-[8px] p-3 w-full flex items-start gap-2 transition-all duration-300 hover:-translate-y-1 ${className}`}
            style={{ boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.08)" }}
        >
            <div className="flex-shrink-0">
                {icon ? (
                    icon
                ) : (
                    <img
                        src="/assets/icons/Star 15.png"
                        alt="Feature icon"
                        className="w-[20px] h-[20px] md:w-[20px] md:h-[24px] object-contain"
                    />
                )}
            </div>
            <div className="flex flex-col flex-1">
                <p className="text-left leading-[1.6]">
                    <span className="text-[#1A1A1A] font-semibold text-[12px] md:text-[14px] mr-[4px]">
                        {title}
                    </span>
                    {description && (
                        <span className="text-[#1D1D1D] font-[600] text-[12px] md:text-[14px]">
                            {description}
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default ServiceFeatureCard;



