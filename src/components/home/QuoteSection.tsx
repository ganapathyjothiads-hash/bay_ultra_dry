"use client";

import React from "react";
import Image from "next/image";
import { Phone, Calendar, Clock, ChevronDown } from "lucide-react";

const QuoteSection = () => {
    return (
        <section className="relative w-full py-8 md:py-12 overflow-hidden" style={{ background: "linear-gradient(243.29deg, #F5A51C 6.14%, #FFFFFF 116.88%)" }}>
            {/* Background Wavy Lines - Top Right */}
            <div className="absolute top-0 right-0 w-[650px] h-[400px] opacity-100 pointer-events-none translate-x-1/4 -translate-y-1/4">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            {/* Background Wavy Lines - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[700px] opacity-100 pointer-events-none -translate-x-1/4 translate-y-1/4 rotate-200">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Side: Content & Map */}
                    <div className="flex flex-col space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-[38px] md:text-[48px] font-normal text-[#1D3547] leading-[1.1] tracking-tight">
                                Request A Fast Quote
                            </h2>
                            <div className="space-y-3 max-w-lg">
                                <p className="text-[13px] text-[#1D3557] font-semibold leading-relaxed">
                                    Need urgent flood assistance or want to refresh your carpets and upholstery? Simply fill out the form below — our team will get back to you within the hour.
                                </p>
                                <p className="text-[13px] text-[#1D3557] font-semibold leading-relaxed">
                                    For urgent flood emergencies, please call us directly at
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-5 pt-0">
                                <div className="relative w-[40px] h-[40px]">
                                    <Image
                                        src="/assets/images/Contact_icon.png"
                                        alt="Call 24/7"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-[20px] md:text-[20px] font-normal text-[#1D3557] tracking-tight">07 571 2279</span>
                            </div>
                        </div>

                        {/* Map Image */}
                        <div className="relative w-full h-[380px] lg:h-[500px] max-w-[700px] rounded-[20px] overflow-hidden shadow-2xl border-4 border-white/10 mt-4">
                            <Image
                                src="/assets/images/map.png"
                                alt="Service Area Map"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side: Form Card */}
                    <div className="bg-white rounded-[30px] p-6 md:p-8 shadow-[0_40px_80px_rgba(0,0,0,0.15)] flex flex-col w-full max-w-[550px] ml-auto">
                        <form className="space-y-4">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-[16px] md:text-[18px] font-bold text-[#334155]">Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Name" 
                                    className="w-full px-6 py-4 rounded-xl border border-[#CBD5E1] outline-none focus:border-[#1E40AF] transition-all text-[#1e293b] font-medium placeholder:text-[#94A3B8]"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="space-y-2">
                                <label className="text-[16px] md:text-[18px] font-bold text-[#334155]">Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="Enter Your Email ID" 
                                    className="w-full px-6 py-4 rounded-xl border border-[#CBD5E1] outline-none focus:border-[#1E40AF] transition-all text-[#1e293b] font-medium placeholder:text-[#94A3B8]"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-2">
                                <label className="text-[16px] md:text-[18px] font-bold text-[#334155]">Phone Number</label>
                                <div className="flex gap-0">
                                    <div className="w-20 min-w-[80px] px-2 py-4 rounded-l-xl border-y border-l border-[#CBD5E1] flex items-center justify-center text-[#1e293b] font-bold bg-[#F8FAFC]">
                                        +91
                                    </div>
                                    <input 
                                        type="tel" 
                                        placeholder="0000 000 000" 
                                        className="flex-1 px-6 py-4 rounded-r-xl border border-[#CBD5E1] outline-none focus:border-[#1E40AF] transition-all text-[#1e293b] font-medium placeholder:text-[#94A3B8]"
                                    />
                                </div>
                            </div>

                            {/* Service Type */}
                            <div className="space-y-2">
                                <label className="text-[16px] md:text-[18px] font-bold text-[#334155]">Service Type</label>
                                <div className="relative">
                                    <select className="w-full px-6 py-4 rounded-xl border border-[#CBD5E1] outline-none appearance-none focus:border-[#1E40AF] transition-all text-[#1e293b] font-medium bg-white cursor-pointer pr-12">
                                        <option>Carpet Cleaning</option>
                                        <option>Upholstery Cleaning</option>
                                        <option>Flood Restoration</option>
                                        <option>Mattress Cleaning</option>
                                    </select>
                                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#1E3A8A]" size={24} />
                                </div>
                            </div>

                            {/* Preferred Date & Time */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-[16px] md:text-[18px] font-bold text-[#334155]">Preferred Date</label>
                                    <div className="relative flex items-center overflow-hidden h-[60px]">
                                        <input 
                                            type="text" 
                                            placeholder="00/00/0000" 
                                            className="w-full px-6 py-4 h-full rounded-xl border border-[#CBD5E1] outline-none focus:border-[#1E40AF] transition-all text-[#1e293b] font-medium pr-14"
                                        />
                                        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-14 bg-[#1E3A8A] flex items-center justify-center text-white cursor-pointer rounded-r-xl">
                                            <Calendar size={22} />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[16px] md:text-[18px] font-bold text-[#334155]">Preferred Time</label>
                                    <div className="relative flex items-center overflow-hidden h-[60px]">
                                        <input 
                                            type="text" 
                                            placeholder="00:00AM" 
                                            className="w-full px-6 py-4 h-full rounded-xl border border-[#CBD5E1] outline-none focus:border-[#1E40AF] transition-all text-[#1e293b] font-medium pr-14"
                                        />
                                        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-14 bg-[#1E3A8A] flex items-center justify-center text-white cursor-pointer rounded-r-xl">
                                            <Clock size={22} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Your Message */}
                            <div className="space-y-2">
                                <label className="text-[16px] md:text-[18px] font-bold text-[#334155]">Your Message</label>
                                <textarea 
                                    rows={3}
                                    placeholder="Enter Your Query's..."
                                    className="w-full px-6 py-4 rounded-xl border border-[#CBD5E1] outline-none focus:border-[#1E40AF] transition-all text-[#1e293b] font-medium resize-none placeholder:text-[#94A3B8]"
                                />
                            </div>

                            {/* Submit Button */}
                            <button className="w-full bg-[#1E3A8A] hover:bg-[#1e40af] text-white h-[64px] rounded-[32px] font-bold text-[20px] transition-all duration-300 shadow-xl active:scale-[0.98] mt-4 flex items-center justify-center">
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default QuoteSection;
