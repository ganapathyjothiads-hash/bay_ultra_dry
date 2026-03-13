"use client";

import React from "react";
import Image from "next/image";

interface DatePickerProps {
    value: string;
    onChange: (date: string) => void;
    error?: string;
    label?: string;
}

const DatePicker = ({ value, onChange, error, label }: DatePickerProps) => {
    return (
        <div className="flex flex-col gap-3">
            {label && (
                <label className="text-[#1D1D1D] font-sans font-medium text-[14px] sm:text-[15px] md:text-[16px]">
                    {label}
                </label>
            )}
            <div className={`relative flex items-center group rounded-[10px] overflow-hidden border transition-all h-[46px] sm:h-[48px] md:h-[52px] ${error ? "border-red-500" : "border-[#7687A1] focus-within:border-[#1e3a8a] focus-within:ring-2 focus-within:ring-blue-500/10"
                }`}>
                <input
                    type="date"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full h-full bg-white px-4 focus:outline-none text-[#374151] text-[16px] font-medium cursor-pointer"
                    placeholder="dd-mm-yyyy"
                    required
                />
                <div className="absolute right-0 top-0 bottom-0 w-[52px] bg-[#1A4299] flex items-center justify-center pointer-events-none">
                    <div className="relative w-5 h-5">
                        <Image
                            src="/assets/icons/Calendar.png"
                            alt="Date"
                            fill
                            className="object-contain brightness-0 invert"
                        />
                    </div>
                </div>
            </div>
            {error && <p className="text-red-500 text-[12px]">{error}</p>}
        </div>
    );
};

export default DatePicker;
