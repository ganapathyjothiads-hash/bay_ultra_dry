"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface EnquiryPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const EnquiryPopup = ({ isOpen, onClose }: EnquiryPopupProps) => {
    const [formData, setFormData] = useState({
        fullName: "",
        emailId: "",
        phoneNumber: "",
        service: "CARPET_CLEANING",
        requiredDate: "",
        address: "",
        message: "",
        confirmed: false
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = "hidden";
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = "unset";
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isOpen && !isVisible) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleClear = () => {
        setFormData({
            fullName: "",
            emailId: "",
            phoneNumber: "",
            service: "CARPET_CLEANING",
            requiredDate: "",
            address: "",
            message: "",
            confirmed: false
        });
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.confirmed) {
            alert("Please confirm the information is accurate.");
            return;
        }
        
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Thank you! Your enquiry has been submitted successfully.");
                handleClear();
                onClose();
            } else {
                alert(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to send enquiry. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className={`relative w-full max-w-[95%] sm:max-w-xl md:max-w-4xl bg-white rounded-[20px] sm:rounded-[24px] shadow-2xl overflow-y-auto max-h-[95vh] md:overflow-hidden transition-all duration-300 ease-out transform ${isOpen ? "translate-y-0 scale-100" : "translate-y-8 scale-95"
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#9CA3AF] hover:text-[#1D1D1D] hover:rotate-90 transition-transform duration-300 z-50"
                >
                    <X size={28} className="sm:w-9 sm:h-9" strokeWidth={1} />
                </button>

                <div className="px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-10">
                    {/* Header */}
                    <div className="mb-4 sm:mb-6">
                        <h2 className="font-instrument text-[28px] sm:text-[32px] font-sans font-[500] text-[#000000] mb-0.5 leading-tight">
                            Enquire Now
                        </h2>
                        <p className="text-[#1D1D1D] font-[500] opacity-80 text-[14px] sm:text-[15px] md:text-[16px]">
                            Fill in your details and we'll get back to you shortly.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-4">
                            {/* Full Name */}
                            <div className="flex flex-col gap-1.5 sm:gap-2">
                                <label className="text-[#1D1D1D] font-alt font-medium text-[15px] sm:text-[16px] leading-tight">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full bg-[#E3E3E3] rounded-[8px] sm:rounded-[10px] px-4 py-3 sm:px-5 sm:py-3 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all text-[#1D1D1D] text-[14px] sm:text-[15px]"
                                    required
                                />
                            </div>

                            {/* Email ID */}
                            <div className="flex flex-col gap-1.5 sm:gap-2">
                                <label className="text-[#1D1D1D] font-sans font-medium text-[15px] sm:text-[16px] leading-tight">Email ID</label>
                                <input
                                    type="email"
                                    name="emailId"
                                    value={formData.emailId}
                                    onChange={handleChange}
                                    className="w-full bg-[#E3E3E3] rounded-[8px] sm:rounded-[10px] px-4 py-3 sm:px-5 sm:py-3 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all text-[#1D1D1D] text-[14px] sm:text-[15px]"
                                    required
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="flex flex-col gap-1.5 sm:gap-2">
                                <label className="text-[#1D1D1D] font-sans font-medium text-[15px] sm:text-[16px] leading-tight">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="w-full bg-[#E3E3E3] rounded-[8px] sm:rounded-[10px] px-4 py-3 sm:px-5 sm:py-3 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all text-[#1D1D1D] text-[14px] sm:text-[15px]"
                                    required
                                />
                            </div>

                            {/* Service */}
                            <div className="flex flex-col gap-1.5 sm:gap-2 text-[#1D1D1D]">
                                <label className="text-[#1D1D1D] font-sans font-medium text-[15px] sm:text-[16px] leading-tight">Service</label>
                                <div className="relative">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full bg-[#E3E3E3] rounded-[8px] sm:rounded-[10px] px-4 py-3 sm:px-5 sm:py-3 outline-none appearance-none cursor-pointer text-[14px] sm:text-[15px]"
                                        required
                                    >
                                        <option value="" disabled>Select your service</option>
                                        <option value="CARPET_CLEANING">Carpet Cleaning</option>
                                        <option value="UPHOLSTERY_CLEANING">Upholstery Cleaning</option>
                                        <option value="FLOOD_RESTORATION">Flood Restoration</option>
                                        <option value="COMMERCIAL_CLEANING">Commercial Cleaning</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Your Required Date */}
                            <div className="flex flex-col gap-1.5 sm:gap-2">
                                <label className="text-[#1D1D1D] font-sans font-medium text-[15px] sm:text-[16px] leading-tight">Your Required Date</label>
                                <input
                                    type="text"
                                    name="requiredDate"
                                    value={formData.requiredDate}
                                    onChange={handleChange}
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")}
                                    className="w-full bg-[#E3E3E3] rounded-[8px] sm:rounded-[10px] px-4 py-3 sm:px-5 sm:py-3 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all text-[#1D1D1D] text-[14px] sm:text-[15px]"
                                    required
                                />
                            </div>

                            {/* Address */}
                            <div className="flex flex-col gap-1.5 sm:gap-2">
                                <label className="text-[#1D1D1D] font-sans font-medium text-[15px] sm:text-[16px] leading-tight">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full bg-[#E3E3E3] rounded-[8px] sm:rounded-[10px] px-4 py-3 sm:px-5 sm:py-3 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all text-[#1D1D1D] text-[14px] sm:text-[15px]"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-1.5 sm:gap-2 md:col-span-2 mt-1 sm:mt-2">
                                <label className="text-[#1D1D1D] font-sans font-medium text-[15px] sm:text-[16px] mb-0.5 sm:mb-1">Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Write your message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full bg-[#E3E3E3] rounded-[10px] sm:rounded-[12px] px-4 py-3 sm:px-6 sm:py-4 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all text-[#1D1D1D] text-[14px] sm:text-[15px] resize-none"
                                    required
                                />
                            </div>
                        </div>

                        {/* Footer Row */}
                        <div className="mt-6 sm:mt-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                            <div className="flex items-start gap-3">
                                <div className="relative pt-0.5">
                                    <input
                                        type="checkbox"
                                        id="confirmed-popup"
                                        name="confirmed"
                                        checked={formData.confirmed}
                                        onChange={handleChange}
                                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-[4px] border-none bg-[#E5E7EB] text-[#002F74] focus:ring-transparent cursor-pointer"
                                        required
                                    />
                                </div>
                                <label htmlFor="confirmed-popup" className="text-[#1D1D1D] text-[13px] sm:text-[14px] md:text-[15px] font-sans font-medium cursor-pointer opacity-80 select-none leading-snug">
                                    I confirm that all the information provided is accurate and complete.
                                </label>
                            </div>

                            <div className="flex items-center gap-3 w-full md:w-auto mt-2 md:mt-0">
                                <button
                                    type="button"
                                    onClick={handleClear}
                                    className="flex-1 md:flex-none md:w-[150px] lg:w-[170px] bg-black text-white font-sans font-bold py-2.5 sm:py-3.5 rounded-full hover:bg-black/90 transition-all active:scale-95 text-[14px] sm:text-[16px]"
                                >
                                    Clear
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 md:flex-none md:w-[180px] lg:w-[200px] bg-[#002F74] text-white font-sans font-bold py-2.5 sm:py-3.5 rounded-full hover:bg-[#001d4a] transition-all shadow-md active:scale-95 text-[14px] sm:text-[16px] disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Enquire Now"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EnquiryPopup;
