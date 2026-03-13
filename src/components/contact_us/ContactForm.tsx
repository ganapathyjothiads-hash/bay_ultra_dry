"use client";

import React, { useState } from "react";
import ActionButton from "../ui/ActionButton";
import PhoneInput from "../ui/PhoneInput";
import TimePicker from "../ui/TimePicker";
import DatePicker from "../ui/DatePicker";
import Toast from "../ui/Toast";
import SuccessAnimation from "../ui/SuccessAnimation";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        emailId: "",
        phoneNumber: "+64", // Default starting with NZ code
        service: "CARPET_CLEANING",
        requiredDate: "",
        requiredTime: "",
        address: "",
        message: "",
        confirmed: false
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [toastMessage, setToastMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
        if (errors[name]) {
            setErrors(prev => {
                const updated = { ...prev };
                delete updated[name];
                return updated;
            });
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.emailId.trim()) {
            newErrors.emailId = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailId)) {
            newErrors.emailId = "Invalid email format";
        }

        // Phone number validation
        const countryCode = formData.phoneNumber.startsWith("+91") ? "+91" : "+64";
        const pureNumber = formData.phoneNumber.slice(countryCode.length).replace(/\D/g, "");

        if (!pureNumber) {
            newErrors.phoneNumber = "Phone number is required";
        } else if (countryCode === "+91" && pureNumber.length !== 10) {
            newErrors.phoneNumber = "Indian phone number must be exactly 10 digits";
        } else if (countryCode === "+64" && (pureNumber.length < 8 || pureNumber.length > 11)) {
            newErrors.phoneNumber = "NZ phone number must be between 8 and 11 digits";
        }

        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.requiredDate) newErrors.requiredDate = "Date is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleClear = () => {
        setFormData({
            fullName: "",
            emailId: "",
            phoneNumber: "+64",
            service: "CARPET_CLEANING",
            requiredDate: "",
            requiredTime: "",
            address: "",
            message: "",
            confirmed: false
        });
        setErrors({});
    };

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        if (!formData.confirmed) {
            setToastMessage({ text: "Please confirm the information is accurate.", type: "error" });
            return;
        }

        setIsSubmitting(true);
        try {
            const dateTimeString = formData.requiredTime ? `${formData.requiredDate}T${formData.requiredTime}` : formData.requiredDate;
            const dateTime = new Date(dateTimeString);
            const response = await fetch("/api/enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    requiredDate: dateTime.toISOString(),
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setShowSuccess(true);
                handleClear();
            } else {
                setToastMessage({ text: data.error || "Something went wrong. Please try again.", type: "error" });
            }
        } catch (error) {
            console.error("Submission error:", error);
            setToastMessage({ text: "Failed to send enquiry. Please check your connection and try again.", type: "error" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative w-full pt-0 pb-[240px] md:py-12 px-6 overflow-hidden">
            {/* Decoration Layer - Locked to Content Max-Width */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="relative max-w-[1300px] mx-auto h-full w-full">
                    {/* Water Splash Decoration - Center Right */}
                    <div className="absolute w-[30%] md:w-[12%] top-[12%] md:top-[35%] lg:top-[30%] right-[2%] md:right-[-30px] z-[2]">
                        <img
                            src="/assets/images/contact_us/Water_Splash_top.png"
                            alt=""
                            className="w-full h-full object-contain opacity-70 md:opacity-100"
                        />
                    </div>

                    {/* Water Splash Decoration - Bottom */}
                    <div className="hidden md:block absolute w-[300px] h-[300px] bottom-[5%] left-[-150px] z-0">
                        <img
                            src="/assets/images/contact_us/Water_Splash_Bottom.png"
                            alt=""
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Left S-Frame Decoration */}
                    <div className="absolute top-[10%]  md:top-[1%] lg:top-[1%] left-[-129%] md:left-[-22%] w-[171%] md:w-[37%] lg:w-[50%] z-0">
                        <img
                            src="/assets/images/upholsteryCleaning/Upholstery_SFrame.png"
                            alt=""
                            className="w-full h-auto opacity-100"
                        />
                    </div>

                    {/* Right S-Frame Decoration */}
                    <div className="absolute bottom-[-7%] md:bottom-[-1%] lg:bottom-[-1%] md:top-[10%] lg:top-[1%] right-[-60%] md:right-[-22%] w-[150%] md:w-[37%] lg:w-[50%] z-0">
                        <img
                            src="/assets/images/upholsteryCleaning/Upholstery_SFrame2.png"
                            alt=""
                            className="w-full h-auto opacity-100"
                        />
                    </div>

                    {/* Color Glow - Green — positioned above the address card */}
                    
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto relative z-10 px-0 sm:px-4">
                <div className="text-center mb-14 md:mb-20 relative z-10 pt-1 md:pt-1 mt-[20px] md:mt-0">
                    <p className="text-[#304462] font-sans italic font-medium text-[14px] md:text-[16px] max-w-[800px] mx-auto mb-[30px] md:mb-[80px] px-4" data-aos="fade-up">
                        "Let our professional cleaning team <br className="block md:hidden" /> make your home or business shine. <br className="hidden md:block" />
                        Contact us today for a free quote— <br className="block md:hidden" /> fast, friendly, and hassle-free!"
                    </p>

                    <h2
                        className="text-[#304462] font-display font-medium md:font-normal leading-tight text-[18px] md:text-[36px] lg:text-[42px] mb-2 md:mb-4"
                        data-aos="fade-up"
                    >
                        Tell Us What You Need!
                    </h2>
                    <p className="text-[#1D1D1D] font-sans text-[12px] md:text-[12px] px-4 md:px-8 mb-4 md:mb-8" data-aos="fade-up" data-aos-delay="100">
                        Fill out the form below and our team will <br className="block md:hidden" /> reach out within <span className="text-[#005D38] font-medium">24 hours</span>.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-[1000px] mx-auto bg-transparent mb-[10px] sm:mt-[60px] md:mt-0 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 sm:gap-x-4 md:gap-x-6 gap-y-6">
                        {/* Full Name */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1D1D1D] font-sans font-medium text-[14px] sm:text-[15px] md:text-[16px]">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className={`w-full border rounded-[10px] px-4 sm:px-5 md:px-6 h-[46px] sm:h-[48px] md:h-[52px] focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] placeholder:text-[14px] text-[16px] ${errors.fullName ? "border-red-500" : "border-[#7687A1] focus:border-[#1e3a8a]"}`}
                                required
                            />
                            {errors.fullName && <p className="text-red-500 text-[12px]">{errors.fullName}</p>}
                        </div>

                        {/* Email ID */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1D1D1D] font-sans font-medium text-[14px] sm:text-[15px] md:text-[16px]">Email ID</label>
                            <input
                                type="email"
                                name="emailId"
                                placeholder="Enter your email id."
                                value={formData.emailId}
                                onChange={handleChange}
                                className={`w-full border rounded-[10px] px-4 sm:px-5 md:px-6 h-[46px] sm:h-[48px] md:h-[52px] focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] placeholder:text-[14px] text-[16px] ${errors.emailId ? "border-red-500" : "border-[#7687A1] focus:border-[#1e3a8a]"}`}
                                required
                            />
                            {errors.emailId && <p className="text-red-500 text-[12px]">{errors.emailId}</p>}
                        </div>

                        {/* Phone Number */}
                        <PhoneInput
                            label="Phone Number"
                            value={formData.phoneNumber}
                            onChange={(val) => setFormData(prev => ({ ...prev, phoneNumber: val }))}
                            error={errors.phoneNumber}
                        />

                        {/* Service Selection */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1D1D1D] font-sans font-medium text-[14px] sm:text-[15px] md:text-[16px]">Service</label>
                            <div className="relative">
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full border border-[#7687A1] rounded-[10px] px-4 sm:px-5 md:px-6 h-[46px] sm:h-[48px] md:h-[52px] focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all appearance-none bg-white text-[#374151] text-[16px]"
                                    required
                                >
                                    <option value="" disabled className="text-[#9ca3af] text-[14px]">Select your service</option>
                                    <option value="CARPET_CLEANING">Carpet Cleaning</option>
                                    <option value="UPHOLSTERY_CLEANING">Upholstery Cleaning</option>
                                    <option value="FLOOD_RESTORATION">Flood Restoration</option>
                                    <option value="COMMERCIAL_CLEANING">Commercial Cleaning</option>
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Required Date */}
                        <DatePicker
                            label="Your Required Date"
                            value={formData.requiredDate}
                            onChange={(val: string) => setFormData(prev => ({ ...prev, requiredDate: val }))}
                            error={errors.requiredDate}
                        />

                        {/* Required Time */}
                        <TimePicker
                            label="Your Required Time"
                            value={formData.requiredTime}
                            onChange={(val: string) => setFormData(prev => ({ ...prev, requiredTime: val }))}
                            error={errors.requiredTime}
                        />


                        {/* Address */}
                        <div className="flex flex-col gap-3 sm:col-span-2">
                            <label className="text-[#1D1D1D] font-sans font-medium text-[14px] sm:text-[15px] md:text-[16px]">Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter your address"
                                value={formData.address}
                                onChange={handleChange}
                                className={`w-full border rounded-[10px] px-4 sm:px-5 md:px-6 h-[46px] sm:h-[48px] md:h-[52px] focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] placeholder:text-[14px] text-[16px] ${errors.address ? "border-red-500" : "border-[#7687A1] focus:border-[#1e3a8a]"}`}
                                required
                            />
                            {errors.address && <p className="text-red-500 text-[12px]">{errors.address}</p>}
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-3 sm:col-span-2 md:col-span-2">
                            <label className="text-[#1D1D1D] font-sans font-medium text-[14px] sm:text-[15px] md:text-[16px]">Message</label>
                            <textarea
                                name="message"
                                placeholder="Write your message..."
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full border border-[#7687A1] rounded-[10px] px-4 py-3 sm:px-5 sm:py-5 md:px-6 md:py-6 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] placeholder:text-[14px] text-[16px] resize-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Footer Row: Checkbox and Buttons */}
                    <div className="mt-5 md:mt-8 flex flex-col sm:flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-8 md:gap-6">
                        <div className="flex items-center gap-4">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    id="confirmed"
                                    name="confirmed"
                                    checked={formData.confirmed}
                                    onChange={(e) => setFormData(prev => ({ ...prev, confirmed: e.target.checked }))}
                                    className="w-3 h-3 md:w-4 md:h-4 rounded border-[#D1D5DB] text-[#1e3a8a] focus:ring-[#1e3a8a] cursor-pointer"
                                />
                            </div>
                            <label htmlFor="confirmed" className="text-[#1D1D1D] text-[14px] sm:text-[14px] font-sans font-medium cursor-pointer opacity-100">
                                I confirm that all the information provided is accurate and complete.
                            </label>
                        </div>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 w-full md:w-auto mt-0 md:mt-0">
                            <ActionButton
                                type="button"
                                onClick={handleClear}
                                variant="amber"
                                className="w-full sm:w-[50%] md:w-[160px] py-3 text-[16px]"
                            >
                                Clear
                            </ActionButton>
                            <ActionButton
                                type="submit"
                                variant="primary"
                                className="w-full md:w-[180px] py-3 text-[16px]"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Enquiry Now"}
                            </ActionButton>
                        </div>
                    </div>
                </form>

                {toastMessage && (
                    <Toast
                        message={toastMessage.text}
                        type={toastMessage.type}
                        onClose={() => setToastMessage(null)}
                    />
                )}
                <SuccessAnimation 
                    isOpen={showSuccess} 
                    message="Your enquiry has been submitted successfully." 
                    onClose={() => setShowSuccess(false)} 
                />
            </div>
        </section>
    );
};

export default ContactForm;
