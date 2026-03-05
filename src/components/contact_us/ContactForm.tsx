"use client";

import React, { useState } from "react";

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
        <section className="relative w-full py-12 px-6 overflow-hidden">
            {/* Water Splash Decoration - Center Right (Next to Email ID field) */}
            <div className="absolute w-[15%] top-[20%] right-[40px] md:right-[40px] pointer-events-none z-0">
                <img
                    src="/assets/images/contact_us/Water_Splash_top.png"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Water Splash Decoration - Bottom Left */}
            <div className="absolute bottom-[5%] left-[-150px] w-[300px] h-[300px] pointer-events-none z-0">
                <img
                    src="/assets/images/contact_us/Water_Splash_Bottom.png"
                    alt=""
                    className="w-full h-full object-contain "
                />
            </div>

            {/* Left S-Frame Decoration */}
            <div className="absolute top-[2%] left-0 w-[30%] pointer-events-none z-0">
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_SFrame.png"
                    alt=""
                    className="w-full h-auto opacity-90"
                />
            </div>

            {/* Right S-Frame Decoration */}
            <div className="absolute top-[2%] right-0 w-[30%] pointer-events-none z-0">
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_SFrame2.png"
                    alt=""
                    className="w-full h-auto opacity-90"
                />
            </div>

            {/* Color Glow - Green (Centered behind title) */}
            <div
                className="absolute pointer-events-none z-[1]"
                style={{
                    width: '300px',
                    height: '300px',
                    top: '6%',
                    left: '68%',
                    transform: 'translateX(-50%)',
                    background: '#00FF26',
                    opacity: 0.5,
                    filter: 'blur(150px)',
                    WebkitFilter: 'blur(150px)',
                    borderRadius: '50%'
                }}
            />

            {/* Color Glow - Blue (Left side of form) */}
            <div
                className="absolute pointer-events-none z-[1]"
                style={{
                    width: '300px',
                    height: '300px',
                    top: '350px',
                    left: '9%',
                    background: '#006FFF',
                    opacity: 0.5,
                    filter: 'blur(150px)',
                    WebkitFilter: 'blur(150px)',
                    borderRadius: '50%'
                }}
            />

            <div className="max-w-[1240px] mx-auto relative z-10">
                <div className="text-center mb-16">
                    <p className="text-[#374151] italic text-[500] line- mb-8" data-aos="fade-up">
                        "Let our professional cleaning team make your home or business shine. <br />
                        Contact us today for a free quote—fast, friendly, and hassle-free!"
                    </p>

                    <h2
                        className="text-[#304462] font-['Nebula2'] text-[40px] md:text-[54px] mb-4"
                        data-aos="fade-up"
                    >
                        Tell Us What You Need!
                    </h2>
                    <p className="text-[#16a34a] font-medium" data-aos="fade-up" data-aos-delay="100">
                        Fill out the form below and our team will reach out within 24 hours.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-[900px] mx-auto bg-transparent">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {/* Full Name */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1e293b] font-bold text-[20px]">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border border-[#7687A1] rounded-[10px] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] text-[16px]"
                                required
                            />
                        </div>

                        {/* Email ID */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1e293b] font-bold text-[20px]">Email ID</label>
                            <input
                                type="email"
                                name="emailId"
                                placeholder="Enter your email id."
                                value={formData.emailId}
                                onChange={handleChange}
                                className="w-full border border-[#7687A1] rounded-[10px] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] text-[16px]"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1e293b] font-bold text-[20px]">Phone Number</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="0000 000 000"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full border border-[#7687A1] rounded-[10px] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] text-[16px]"
                                required
                            />
                        </div>

                        {/* Service Selection */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[#1e293b] font-bold text-[20px]">Service</label>
                            <div className="relative">
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full border border-[#7687A1] rounded-[10px] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all appearance-none bg-white text-[#374151] text-[16px]"
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
                            <label className="text-[#1e293b] font-bold text-[20px]">Your Required Date</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="requiredDate"
                                    placeholder="00.00.0000"
                                    value={formData.requiredDate}
                                    onChange={handleChange}
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")}
                                    className="w-full border border-[#7687A1] rounded-[10px] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] text-[16px]"
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
                            <label className="text-[#1e293b] font-bold text-[20px]">Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter your address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full border border-[#7687A1] rounded-[10px] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] text-[16px]"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-3 md:col-span-2 mt-4">
                            <label className="text-[#1e293b] font-bold text-[20px]">Message</label>
                            <textarea
                                name="message"
                                placeholder="Write your message..."
                                value={formData.message}
                                onChange={handleChange}
                                rows={8}
                                className="w-full border border-[#7687A1] rounded-[10px] px-6 py-6 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a] transition-all bg-white text-[#374151] placeholder:text-[#9ca3af] text-[16px] resize-none"
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
                                    className="w-6 h-6 rounded border-[#D1D5DB] text-[#1e3a8a] focus:ring-[#1e3a8a] cursor-pointer"
                                />
                            </div>
                            <label htmlFor="confirmed" className="text-[#1e293b] text-[12px] font-bold cursor-pointer opacity-90">
                                I confirm that all the information provided is accurate and complete.
                            </label>
                        </div>

                        <div className="flex flex-wrap gap-4 md:gap-6">
                            <button
                                type="button"
                                onClick={handleClear}
                                className="w-[130px] md:w-[130px] py-4 bg-[#F59E0B] text-[#1e293b] font-[400] text-[12px] rounded-[30px] shadow-lg shadow-amber-500/20 hover:bg-amber-500/90 transition-all active:scale-95 text-center flex items-center justify-center"
                            >
                                Clear
                            </button>
                            <button
                                type="submit"
                                className="w-[150px] md:w-[150px] py-4 bg-[#1e3a8a] text-white font-[400] text-[12px]  rounded-[30px] shadow-lg shadow-blue-900/20 hover:bg-[#1e3a8a]/90 transition-all active:scale-95 text-center flex items-center justify-center"
                            >
                                Enquiry Now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
