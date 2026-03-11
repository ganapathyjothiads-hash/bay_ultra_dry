"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Phone } from "lucide-react";

interface PhoneInputProps {
    value: string;
    onChange: (phone: string) => void;
    error?: string;
    label?: string;
}

const countries = [
    { name: "NZ", code: "+64", flag: "🇳🇿", min: 8, max: 11 },
    { name: "IN", code: "+91", flag: "🇮🇳", min: 10, max: 10 },
];

const PhoneInput = ({ value, onChange, error, label }: PhoneInputProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [displayNumber, setDisplayNumber] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);

    // Sync display number from total phone value
    useEffect(() => {
        if (!value) {
            setDisplayNumber("");
            return;
        }

        // Try to find matching country code in value
        const match = countries.find(c => value.startsWith(c.code));
        if (match) {
            setSelectedCountry(match);
            setDisplayNumber(value.slice(match.code.length).replace(/\s+/g, ""));
        } else {
            // Default to first country if no match (e.g., initial state)
            setDisplayNumber(value.replace(/\s+/g, ""));
        }
    }, [value]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.replace(/\D/g, ""); // Only allow digits
        if (input.length > selectedCountry.max) return;

        setDisplayNumber(input);
        onChange(`${selectedCountry.code}${input}`);
    };

    const handleCountrySelect = (country: typeof countries[0]) => {
        setSelectedCountry(country);
        setIsOpen(false);
        // Reset current value if swapping country
        // Actually, just update code and keep number if valid or within max
        const newNumber = displayNumber.slice(0, country.max);
        setDisplayNumber(newNumber);
        onChange(`${country.code}${newNumber}`);
    };

    return (
        <div className="flex flex-col space-y-1 relative" ref={containerRef}>
            {label && (
                <label className="font-inter text-[14px] md:text-[15px] font-medium text-[#1D1D1D]">
                    {label}
                </label>
            )}

            <div className={`flex items-center h-[52px] bg-white rounded-[8px] border transition-all ${error ? "border-red-500" : "border-[#7687A1] focus-within:border-[#1e3a8a] focus-within:ring-2 focus-within:ring-blue-500/10"
                }`}>
                {/* Country Selector */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-1.5 h-full px-3 border-r border-[#CCCCCC] hover:bg-gray-50 transition-colors rounded-l-[8px]"
                >
                    <span className="text-[14px] font-semibold text-[#333333]">{selectedCountry.name} {selectedCountry.code}</span>
                    <ChevronDown size={14} className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Input Field */}
                <input
                    type="tel"
                    value={displayNumber}
                    onChange={handleNumberChange}
                    placeholder={`Enter ${selectedCountry.name === 'IN' ? '10 digits' : '8-11 digits'}`}
                    className="flex-1 h-full px-4 outline-none bg-transparent text-[#1D1D1D] font-medium text-[14px] placeholder:text-[#999999]"
                />
            </div>

            {/* Country Dropdown */}
            {isOpen && (
                <div className="absolute top-[105%] left-0 z-[2000] w-[140px] bg-white border border-gray-100 rounded-[12px] shadow-2xl animate-in fade-in zoom-in duration-200 p-1.5">
                    {countries.map((c) => (
                        <button
                            key={c.code}
                            type="button"
                            onClick={() => handleCountrySelect(c)}
                            className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-[8px] text-[14px] font-medium transition-all ${selectedCountry.code === c.code
                                ? "bg-[#1A4299] text-white"
                                : "hover:bg-gray-100 text-gray-700"
                                }`}
                        >
                            <span className="text-[18px]">{c.flag}</span>
                            <span>{c.name} ({c.code})</span>
                        </button>
                    ))}
                </div>
            )}

            {error && <p className="text-red-500 text-[12px]">{error}</p>}
        </div>
    );
};

export default PhoneInput;
