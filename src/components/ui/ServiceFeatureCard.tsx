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
            className={`bg-white rounded-[8px] px-5 py-5 md:px-[5px] w-full flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 ${className}`}
            style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)" }}
        >
            <div className="flex-shrink-0 ml-3 mt-0.5">
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
            <div className="flex flex-col flex-1 pl-1">
                <p className="text-left leading-[1.6]">
                    <span className="text-[#1A1A1A] font-semibold text-[15px] md:text-[15px] mr-[4px]">
                        {title}
                    </span>
                    {description && (
                        <span className="text-[#1D1D1D] font-[600] text-[15px] md:text-[15px]">
                            {description}
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default ServiceFeatureCard;



