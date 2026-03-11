"use client";

import React, { useState, useEffect, useRef } from "react";
import { Clock, ChevronDown } from "lucide-react";

interface TimePickerProps {
    value: string;
    onChange: (time: string) => void;
    error?: string;
}

const TimePicker = ({ value, onChange, error }: TimePickerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const timeSlots = [
        "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
        "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
        "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
        "05:00 PM", "05:30 PM", "06:00 PM"
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const formatTimeTo24h = (timeStr: string) => {
        const [time, modifier] = timeStr.split(" ");
        let [hours, minutes] = time.split(":");
        if (hours === "12") hours = "00";
        if (modifier === "PM") hours = (parseInt(hours, 10) + 12).toString();
        return `${hours.padStart(2, '0')}:${minutes}`;
    };

    const formatTo12h = (time24: string) => {
        if (!time24) return "";
        const [hours, minutes] = time24.split(":");
        let h = parseInt(hours, 10);
        const ampm = h >= 12 ? "PM" : "AM";
        h = h % 12 || 12;
        return `${h}:${minutes} ${ampm}`;
    };

    return (
        <div className="flex flex-col gap-1.5 sm:gap-2 relative" ref={containerRef}>
            <div
                className={`relative flex items-center group rounded-[8px] sm:rounded-[10px] overflow-hidden border transition-all cursor-pointer h-[52px] ${error ? "border-red-500" : "border-[#7687A1] hover:border-[#1e3a8a] focus-within:ring-2 focus-within:ring-blue-500/10"
                    }`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex-1 px-4 py-3 sm:px-5 sm:py-3 bg-white text-[#1D1D1D] text-[14px] sm:text-[15px] font-medium flex justify-between items-center group-hover:bg-gray-50 transition-colors">
                    <span>{value ? formatTo12h(value) : "Select Time"}</span>
                    <ChevronDown className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} size={18} />
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-[52px] bg-[#1A4299] flex items-center justify-center pointer-events-none group-hover:bg-[#1e40af] transition-colors">
                    <Clock className="text-white" size={20} />
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-[105%] left-0 right-0 z-[2000] bg-white border border-[#E5E7EB] rounded-[12px] shadow-2xl max-h-[280px] overflow-y-auto animate-in fade-in zoom-in duration-200 p-2 grid grid-cols-3 gap-1">
                    {timeSlots.map((slot) => (
                        <button
                            key={slot}
                            type="button"
                            onClick={() => {
                                onChange(formatTimeTo24h(slot));
                                setIsOpen(false);
                            }}
                            className={`px-2 py-2 rounded-[6px] text-[13px] font-medium transition-all ${formatTo12h(value) === slot
                                ? "bg-[#1A4299] text-white"
                                : "hover:bg-[#F3F4F6] text-gray-700"
                                }`}
                        >
                            {slot}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TimePicker;
