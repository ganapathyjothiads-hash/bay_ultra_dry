"use client";

import React, { useState } from "react";
import ActionButton from "../ui/ActionButton";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        emailId: "",
        phoneNumber: "",
        service: "",
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
            service: "",
            requiredDate: "",
            address: "",
            message: "",
            confirmed: false
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.confirmed) {
            alert("Please confirm the information is accurate.");
            return;
        }
        console.log("Form submitted:", formData);
        // Handle form submission logic here
    };

    return (
        <section className="relative w-full pt-12 pb-[240px] md:py-12 px-6 overflow-hidden">
            {/* Water Splash Decoration - Center Right */}
            <div className="absolute w-[30%] md:w-[12%] top-[16%] md:top-[30%] right-[2%] md:right-[90px] pointer-events-none z-[2]">
                <img
                    src="/assets/images/contact_us/Water_Splash_top.png"
                    alt=""
                    className="w-full h-full object-contain opacity-70 md:opacity-100"
                />
            </div>

            {/* Water Splash Decoration - Bottom */}
            <div className="hidden md:block absolute w-[40%] bottom-[2%] right-[-5%] md:bottom-[5%] md:right-auto md:left-[-150px] md:w-[300px] md:h-[300px] pointer-events-none z-0">
                <img
                    src="/assets/images/contact_us/Water_Splash_Bottom.png"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Left S-Frame Decoration */}
            <div className="absolute top-[17%] left-[-22%] w-[75%] md:top-[8%] md:left-0 md:w-[37%] pointer-events-none z-0">
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_SFrame.png"
                    alt=""
                    className="w-full h-auto opacity-100"
                />
            </div>

            {/* Right S-Frame Decoration */}
            <div className="absolute bottom-[-7%] left-[15%] w-[190%] md:top-[8%] md:left-[auto] md:right-0 md:w-[37%] md:right-[-2%] md:bottom-auto pointer-events-none z-0">
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_SFrame2.png"
                    alt=""
                    className="w-full h-auto opacity-100"
                />
            </div>

            {/* Color Glow - Green (Centered behind title) */}
            <div
                className="absolute pointer-events-none z-[1] w-[300px] h-[300px] top-[0%] left-[50%] md:w-[250px] md:h-[250px] md:top-[6%] md:left-[68%] -translate-x-1/2 bg-[#00FF26] opacity-[25%] md:opacity-50 blur-[120px] md:blur-[160px] rounded-full"
            />

            {/* Color Glow - Blue (Left side of form) */}
            <div
                className="absolute pointer-events-none z-[1] w-[250px] h-[300px] top-[50%] left-[0%] md:w-[300px] md:top-[350px] md:left-[9%] bg-[#006FFF] opacity-[20%] md:opacity-[30%] blur-[120px] md:blur-[160px] rounded-full"
            />

            <div className="max-w-[1240px] mx-auto relative z-10">
                <div className="text-center mb-10 md:mb-16 relative z-10 pt-2 md:pt-10 mt-[-10px] md:mt-0">
                    <p className="text-[#304462] font-sans italic font-medium text-[16px] md:text-[18px] max-w-[800px] mx-auto mb-[30px] md:mb-[60px] px-4" data-aos="fade-up">
                        "Let our professional cleaning team <br className="block md:hidden" /> make your home or business shine. <br className="hidden md:block" />
                        Contact us today for a free quote— <br className="block md:hidden" /> fast, friendly, and hassle-free!"
                    </p>

                    <h2
                        className="text-[#304462] font-display font-medium md:font-normal leading-tight text-[24px] md:text-[36px] lg:text-[42px] mb-2 md:mb-4  md:pt-0"
                        data-aos="fade-up"
                    >
                        Tell Us What You Need!
                    </h2>
                    <p className="text-[#1D1D1D] font-sans text-[14px] md:text-[16px] px-4 md:px-8 mb-4 md:mb-8" data-aos="fade-up" data-aos-delay="100">
                        Fill out the form below and our team will <br className="block md:hidden" /> reach out within <span className="text-[#005D38] font-medium">24 hours</span>.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-[900px] mx-auto bg-transparent mt-[130px] md:mt-0 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {/* Full Name */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1D1D1D] font-sans font-medium text-[16px] md:text-[18px]">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border border-[#7687A1] rounded-[10px] px-4 py-3 md:px-6 md:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] text-[16px]"
                                required
                            />
                        </div>

                        {/* Email ID */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1D1D1D] font-sans font-medium text-[16px] md:text-[18px]">Email ID</label>
                            <input
                                type="email"
                                name="emailId"
                                placeholder="Enter your email id."
                                value={formData.emailId}
                                onChange={handleChange}
                                className="w-full border border-[#7687A1] rounded-[10px] px-4 py-3 md:px-6 md:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] text-[16px]"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1D1D1D] font-sans font-medium text-[16px] md:text-[18px]">Phone Number</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="0000 000 000"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full border border-[#7687A1] rounded-[10px] px-4 py-3 md:px-6 md:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] text-[16px]"
                                required
                            />
                        </div>

                        {/* Service Selection */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1D1D1D] font-sans font-medium text-[16px] md:text-[18px]">Service</label>
                            <div className="relative">
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full border border-[#7687A1] rounded-[10px] px-4 py-3 md:px-6 md:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all appearance-none bg-white text-[#374151] text-[16px]"
                                    required
                                >
                                    <option value="" disabled className="text-[#9ca3af]">Select your service</option>
                                    <option value="Carpet Cleaning">Carpet Cleaning</option>
                                    <option value="Upholstery Cleaning">Upholstery Cleaning</option>
                                    <option value="Flood Restoration">Flood Restoration</option>
                                    <option value="Commercial Cleaning">Commercial Cleaning</option>
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
                            <label className="text-[#1D1D1D] font-sans font-medium text-[16px] md:text-[18px]">Your Required Date</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="requiredDate"
                                    placeholder="00.00.0000"
                                    value={formData.requiredDate}
                                    onChange={handleChange}
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")}
                                    className="w-full border border-[#7687A1] rounded-[10px] px-4 py-3 md:px-6 md:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] text-[16px]"
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
                            <label className="text-[#1D1D1D] font-sans font-medium text-[16px] md:text-[18px]">Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter your address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full border border-[#7687A1] rounded-[10px] px-4 py-3 md:px-6 md:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] text-[16px]"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-3 md:col-span-2 mt-4">
                            <label className="text-[#1D1D1D] font-sans font-medium text-[16px] md:text-[18px]">Message</label>
                            <textarea
                                name="message"
                                placeholder="Write your message..."
                                value={formData.message}
                                onChange={handleChange}
                                rows={8}
                                className="w-full border border-[#7687A1] rounded-[10px] px-4 py-4 md:px-6 md:py-6 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] text-[16px] resize-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Footer Row: Checkbox and Buttons */}
                    <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    id="confirmed"
                                    name="confirmed"
                                    checked={formData.confirmed}
                                    onChange={(e) => setFormData(prev => ({ ...prev, confirmed: e.target.checked }))}
                                    className="w-5 h-5 md:w-6 md:h-6 rounded border-[#D1D5DB] text-[#1e3a8a] focus:ring-[#1e3a8a] cursor-pointer"
                                />
                            </div>
                            <label htmlFor="confirmed" className="text-[#1D1D1D] text-[14px] md:text-[15px] font-sans font-medium cursor-pointer opacity-90">
                                I confirm that all the information provided is accurate and complete.
                            </label>
                        </div>

                        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-6 w-full md:w-auto mt-6 md:mt-0">
                            <ActionButton
                                type="button"
                                onClick={handleClear}
                                variant="amber"
                                className="w-full md:w-[160px] py-3 md:py-4 text-[16px]"
                            >
                                Clear
                            </ActionButton>
                            <ActionButton
                                type="submit"
                                variant="primary"
                                className="w-full md:w-[180px] py-3 md:py-4 text-[16px]"
                            >
                                Enquiry Now
                            </ActionButton>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
