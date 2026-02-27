"use client";

import React from "react";
import Image from "next/image";
import { Phone, Calendar, Clock, ChevronDown } from "lucide-react";

const QuoteSection = () => {
    return (
        <section className="relative w-full py-12 lg:py-20 overflow-hidden"
            style={{
                background: "linear-gradient(180deg, #F5A51C 0%, #F5A51C 100%)",
                backgroundImage: "linear-gradient(180deg, #F5A51C 0%, #F5A51C 100%)"
            }}>
            {/* Background Wavy Lines - Top Right */}
            <div className="absolute top-0 right-0 w-[500px] lg:w-[650px] h-[300px] lg:h-[400px] opacity-40 pointer-events-none translate-x-1/4 -translate-y-1/4">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            {/* Background Wavy Lines - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-[400px] lg:w-[600px] h-[500px] lg:h-[700px] opacity-40 pointer-events-none -translate-x-1/4 translate-y-1/4 rotate-180">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">

                    {/* Left Side: Content & Map */}
                    <div className="flex flex-col space-y-8 lg:sticky lg:top-24">
                        <div className="space-y-6">
                            <h2 className="text-[32px] md:text-[48px] font-bold text-[#1a1a1a] leading-tight tracking-tight">
                                Request A Fast Quote
                            </h2>
                            <div className="space-y-5 max-w-lg">
                                <p className="text-[14px] md:text-[15px] text-[#1a1a1a] font-medium leading-[1.6]">
                                    Need urgent flood assistance or want to refresh your carpets and upholstery? Simply fill out the form below — our team will get back to you within the hour.
                                </p>
                                <p className="text-[14px] md:text-[15px] text-[#1a1a1a] font-medium leading-[1.6]">
                                    For urgent flood emergencies, please call us directly at
                                </p>
                            </div>

                            <div className="flex items-center gap-4 pt-2">
                                <div className="relative w-[50px] h-[50px] shrink-0">
                                    <Image
                                        src="/assets/images/Contact_icon.png"
                                        alt="Call 24/7"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-[24px] md:text-[28px] font-bold text-[#1a1a1a] tracking-tight">07 571 2279</span>
                            </div>
                        </div>

                        {/* Map Image */}
                        <div className="relative w-full aspect-[16/10] md:aspect-auto md:h-[400px] lg:h-[480px] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white/20">
                            <Image
                                src="/assets/images/map.png"
                                alt="Service Area Map"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side: Form Card */}
                    <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.12)] flex flex-col w-full">
                        <form className="space-y-6">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-[14px] md:text-[16px] font-bold text-[#334155] ml-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="w-full h-[56px] px-6 rounded-[14px] border border-[#E2E8F0] outline-none focus:border-[#F5A51C] transition-all text-[#1e293b] font-medium placeholder:text-[#94A3B8] shadow-sm"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="space-y-2">
                                <label className="text-[14px] md:text-[16px] font-bold text-[#334155] ml-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email ID"
                                    className="w-full h-[56px] px-6 rounded-[14px] border border-[#E2E8F0] outline-none focus:border-[#F5A51C] transition-all text-[#1e293b] font-medium placeholder:text-[#94A3B8] shadow-sm"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-2">
                                <label className="text-[14px] md:text-[16px] font-bold text-[#334155] ml-1">Phone Number</label>
                                <div className="flex h-[56px]">
                                    <div className="w-[80px] h-full flex items-center justify-center border border-r-0 border-[#E2E8F0] rounded-l-[14px] bg-[#F8FAFC] text-[#1e293b] font-bold text-[15px]">
                                        +91
                                    </div>
                                    <input
                                        type="tel"
                                        placeholder="0000 000 000"
                                        className="flex-1 h-full px-6 border border-[#E2E8F0] rounded-r-[14px] outline-none focus:border-[#F5A51C] transition-all text-[#1e293b] font-medium placeholder:text-[#94A3B8] shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* Service Type */}
                            <div className="space-y-2">
                                <label className="text-[14px] md:text-[16px] font-bold text-[#334155] ml-1">Service Type</label>
                                <div className="relative group">
                                    <select className="w-full h-[56px] px-6 rounded-[14px] border border-[#E2E8F0] outline-none appearance-none focus:border-[#F5A51C] transition-all text-[#1e293b] font-medium bg-white cursor-pointer pr-12 shadow-sm">
                                        <option>Carpet Cleaning</option>
                                        <option>Upholstery Cleaning</option>
                                        <option>Flood Restoration</option>
                                        <option>Mattress Cleaning</option>
                                    </select>
                                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#334155] group-hover:text-[#F5A51C] transition-colors" size={20} />
                                </div>
                            </div>

                            {/* Preferred Date & Time */}
                            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[14px] md:text-[16px] font-bold text-[#334155] ml-1">Preferred Date</label>
                                    <div className="relative flex items-center h-[56px] shadow-sm group">
                                        <input
                                            type="text"
                                            placeholder="00/00/0000"
                                            className="w-full h-full px-6 rounded-[14px] border border-[#E2E8F0] outline-none focus:border-[#F5A51C] transition-all text-[#1e293b] font-medium pr-14"
                                        />
                                        <div className="absolute right-0 top-0 bottom-0 w-[52px] bg-[#1E3A8A] flex items-center justify-center text-white cursor-pointer rounded-r-[14px] group-hover:bg-[#1e40af] transition-colors">
                                            <Calendar size={20} />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[14px] md:text-[16px] font-bold text-[#334155] ml-1">Preferred Time</label>
                                    <div className="relative flex items-center h-[56px] shadow-sm group">
                                        <input
                                            type="text"
                                            placeholder="00:00AM"
                                            className="w-full h-full px-6 rounded-[14px] border border-[#E2E8F0] outline-none focus:border-[#F5A51C] transition-all text-[#1e293b] font-medium pr-14"
                                        />
                                        <div className="absolute right-0 top-0 bottom-0 w-[52px] bg-[#1E3A8A] flex items-center justify-center text-white cursor-pointer rounded-r-[14px] group-hover:bg-[#1e40af] transition-colors">
                                            <Clock size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Your Message */}
                            <div className="space-y-2">
                                <label className="text-[14px] md:text-[16px] font-bold text-[#334155] ml-1">Your Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Enter Your Query's..."
                                    className="w-full px-6 py-4 rounded-[14px] border border-[#E2E8F0] outline-none focus:border-[#F5A51C] transition-all text-[#1e293b] font-medium resize-none placeholder:text-[#94A3B8] shadow-sm min-h-[120px]"
                                />
                            </div>

                            {/* Submit Button */}
                            <button className="w-full bg-[#1E3A8A] hover:bg-[#1e40af] text-white h-[60px] rounded-[14px] font-bold text-[18px] transition-all duration-300 shadow-lg active:scale-[0.98] mt-2 flex items-center justify-center">
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
