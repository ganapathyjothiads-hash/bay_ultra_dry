"use client";

import React, { useState } from "react";
import ActionButton from "../ui/ActionButton";

const ContactForm = () => {
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
                alert("Thank you! Your enquiry has been submitted successfully. We will contact you shortly.");
                handleClear();
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
        <section className="relative w-full pt-12 pb-[240px] md:py-12 px-6 overflow-hidden">
            {/* Decoration Layer - Locked to Content Max-Width */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="relative max-w-[1300px] mx-auto h-full w-full">
                    {/* Water Splash Decoration - Center Right */}
                    <div className="absolute w-[30%] md:w-[12%] top-[14%] md:top-[35%] lg:top-[30%] right-[2%] md:right-[-30px] z-[2]">
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
                    <div className="absolute top-[14%]  md:top-[1%] lg:top-[1%] left-[-18%] md:left-[-22%] w-[75%] md:w-[37%] lg:w-[50%] z-0">
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

                    {/* Color Glow - Green */}
                    <div
                        className="absolute z-[1] w-[300px] h-[300px] top-[0%] left-[50%] md:w-[250px] md:h-[250px] md:top-[6%] md:left-[68%] -translate-x-1/2 bg-[#00FF26] opacity-[45%] md:opacity-50 blur-[80px] md:blur-[80px] rounded-full"
                    />

                    {/* Color Glow - Blue */}
                    <div
                        className="absolute z-[1] w-[250px] h-[300px] top-[50%] left-[0%] md:w-[300px] md:top-[350px] md:left-[9%] bg-[#006FFF] opacity-[20%] md:opacity-[30%] blur-[80px] md:blur-[80px] rounded-full"
                    />
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto relative z-10 px-0 sm:px-4">
                <div className="text-center mb-14 md:mb-20 relative z-10 pt-1 md:pt-1 mt-[-20px] md:mt-0">
                    <p className="text-[#304462] font-sans italic font-medium text-[14px] md:text-[16px] max-w-[800px] mx-auto mb-[30px] md:mb-[80px] px-4" data-aos="fade-up">
                        "Let our professional cleaning team <br className="block md:hidden" /> make your home or business shine. <br className="hidden md:block" />
                        Contact us today for a free quote— <br className="block md:hidden" /> fast, friendly, and hassle-free!"
                    </p>

                    <h2
                        className="text-[#304462] font-display font-medium md:font-normal leading-tight text-[24px] md:text-[36px] lg:text-[42px] mb-2 md:mb-4 pt-5 md:pt-0"
                        data-aos="fade-up"
                    >
                        Tell Us What You Need!
                    </h2>
                    <p className="text-[#1D1D1D] font-sans text-[10px] md:text-[12px] px-4 md:px-8 mb-4 md:mb-8" data-aos="fade-up" data-aos-delay="100">
                        Fill out the form below and our team will <br className="block md:hidden" /> reach out within <span className="text-[#005D38] font-medium">24 hours</span>.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-[1000px] mx-auto bg-transparent mt-[40px] sm:mt-[60px] md:mt-0 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 sm:gap-x-4 md:gap-x-6 gap-y-2">
                        {/* Full Name */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1D1D1D] font-sans font-medium text-[14px] sm:text-[15px] md:text-[16px]">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border border-[#7687A1] rounded-[10px] px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] placeholder:text-[14px] text-[16px]"
                                required
                            />
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
                                className="w-full border border-[#7687A1] rounded-[10px] px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] placeholder:text-[14px] text-[16px]"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1D1D1D] font-sans font-medium text-[14px] sm:text-[15px] md:text-[16px]">Phone Number</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="0000 000 000"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full border border-[#7687A1] rounded-[10px] px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] placeholder:text-[14px] text-[16px]"
                                required
                            />
                        </div>

                        {/* Service Selection */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1D1D1D] font-sans font-medium text-[14px] sm:text-[15px] md:text-[16px]">Service</label>
                            <div className="relative">
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full border border-[#7687A1] rounded-[10px] px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all appearance-none bg-white text-[#374151] text-[16px]"
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
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1D1D1D] font-sans font-medium text-[14px] sm:text-[15px] md:text-[16px]">Your Required Date</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="requiredDate"
                                    placeholder="00.00.0000"
                                    value={formData.requiredDate}
                                    onChange={handleChange}
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")}
                                    className="w-full border border-[#7687A1] rounded-[10px] px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] placeholder:text-[14px] text-[16px]"
                                    required
                                />
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#334155">
                                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1D1D1D] font-sans font-medium text-[14px] sm:text-[15px] md:text-[16px]">Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter your address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full border border-[#7687A1] rounded-[10px] px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] placeholder:text-[14px] text-[16px]"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-3 sm:col-span-2 md:col-span-2 mt-4">
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
                    <div className="mt-8 flex flex-col sm:flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 md:gap-6">
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
                            <label htmlFor="confirmed" className="text-[#1D1D1D] text-[13px] sm:text-[14px] font-sans font-medium cursor-pointer opacity-90">
                                I confirm that all the information provided is accurate and complete.
                            </label>
                        </div>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 w-full md:w-auto mt-6 md:mt-0">
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
            </div>
        </section>
    );
};

export default ContactForm;
