"use client";

import React from "react";
import Image from "next/image";
import { Phone, Calendar, Clock, ChevronDown } from "lucide-react";

const QuoteSection = () => {
    return (
        <section className="relative w-full py-8 md:py-12 bg-[#F9AC27] overflow-hidden">
            {/* Background Wavy Lines - Top Right */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-100 pointer-events-none translate-x-1/4 -translate-y-1/4">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>
            {/* Background Wavy Lines - Bottom Left */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-100 pointer-events-none -translate-x-1/4 translate-y-1/4 rotate-180">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    
                    {/* Left Side: Content & Map */}
                    <div className="flex flex-col space-y-6 lg:pt-4">
                        <div className="space-y-6">
                            <h2 className="text-[38px] md:text-[52px] font-bold text-[#1D3557] leading-[1.1] tracking-tight">
                                Request A Fast Quote
                            </h2>
                            <div className="space-y-3 max-w-lg">
                                <p className="text-[17px] text-[#1D3557] font-semibold leading-relaxed">
                                    Need urgent flood assistance or want to refresh your carpets and upholstery? Simply fill out the form below — our team will get back to you within the hour.
                                </p>
                                <p className="text-[17px] text-[#1D3557] font-semibold leading-relaxed">
                                    For urgent flood emergencies, please call us directly at
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-5 pt-0">
                                <div className="relative w-12 h-12 bg-transparent border-2 border-[#1D3557] rounded-full flex items-center justify-center text-[#1D3557]">
                                    <Phone size={24} />
                                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#1D3557] rounded-full flex items-center justify-center text-[7px] font-bold text-white border-2 border-[#F9AC27]">
                                        24/7
                                    </div>
                                </div>
                                <span className="text-[28px] md:text-[36px] font-bold text-[#1D3557] tracking-tight">07 571 2279</span>
                            </div>
                        </div>

                        {/* Map Image */}
                        <div className="relative w-full aspect-[16/9] max-w-[550px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10 mt-2">
                            <Image
                                src="/assets/images/map.png"
                                alt="Service Area Map"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side: Form Card */}
                    <div className="bg-white rounded-[40px] p-6 md:p-8 shadow-[0_40px_80px_rgba(0,0,0,0.15)] flex flex-col w-full max-w-[650px] ml-auto">
                        <form className="space-y-4">
                            {/* Full Name */}
                            <div className="space-y-1.5">
                                <label className="text-[16px] font-bold text-[#1E293B]">Full Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Enter Your Name" 
                                    className="w-full px-5 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#1E40AF] transition-colors text-slate-800 font-medium placeholder:text-gray-400"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="space-y-1.5">
                                <label className="text-[16px] font-bold text-[#1E293B]">Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="Enter Your Email ID" 
                                    className="w-full px-5 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#1E40AF] transition-colors text-slate-800 font-medium placeholder:text-gray-400"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-1.5">
                                <label className="text-[16px] font-bold text-[#1E293B]">Phone Number</label>
                                <div className="flex gap-2">
                                    <div className="w-16 min-w-[70px] px-1 py-3 rounded-xl border border-gray-300 flex items-center justify-center text-slate-800 font-bold bg-gray-50">
                                        +91
                                    </div>
                                    <input 
                                        type="tel" 
                                        placeholder="0000 000 000" 
                                        className="flex-1 px-5 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#1E40AF] transition-colors text-slate-800 font-medium placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Service Type */}
                            <div className="space-y-1.5">
                                <label className="text-[16px] font-bold text-[#1E293B]">Service Type</label>
                                <div className="relative">
                                    <select className="w-full px-5 py-3 rounded-xl border border-gray-300 outline-none appearance-none focus:border-[#1E40AF] transition-colors text-slate-800 font-medium bg-white cursor-pointer pr-10">
                                        <option>Carpet Cleaning</option>
                                        <option>Upholstery Cleaning</option>
                                        <option>Flood Restoration</option>
                                        <option>Mattress Cleaning</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1E40AF]" size={20} />
                                </div>
                            </div>

                            {/* Preferred Date & Time */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[16px] font-bold text-[#1E293B]">Preferred Date</label>
                                    <div className="relative flex items-center overflow-hidden">
                                        <input 
                                            type="text" 
                                            placeholder="00/00/0000" 
                                            className="w-full px-5 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#1E40AF] transition-colors text-slate-800 font-medium pr-14"
                                        />
                                        <div className="absolute right-0 top-0 bottom-0 w-12 bg-[#1E40AF] flex items-center justify-center text-white cursor-pointer rounded-r-xl">
                                            <Calendar size={20} />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[16px] font-bold text-[#1E293B]">Preferred Time</label>
                                    <div className="relative flex items-center overflow-hidden">
                                        <input 
                                            type="text" 
                                            placeholder="00:00AM" 
                                            className="w-full px-5 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#1E40AF] transition-colors text-slate-800 font-medium pr-14"
                                        />
                                        <div className="absolute right-0 top-0 bottom-0 w-12 bg-[#1E40AF] flex items-center justify-center text-white cursor-pointer rounded-r-xl">
                                            <Clock size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Your Message */}
                            <div className="space-y-1.5">
                                <label className="text-[16px] font-bold text-[#1E293B]">Your Message</label>
                                <textarea 
                                    rows={2}
                                    placeholder="Enter Your Query's..."
                                    className="w-full px-5 py-3 rounded-xl border border-gray-300 outline-none focus:border-[#1E40AF] transition-colors text-slate-800 font-medium resize-none placeholder:text-gray-400"
                                />
                            </div>

                            {/* Submit Button */}
                            <button className="w-full bg-[#1E40AF] hover:bg-[#15317E] text-white py-3 rounded-[18px] font-bold text-[18px] transition-all duration-300 shadow-xl active:scale-[0.98] mt-2 h-[50px]">
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <style jsx>{`
                input::placeholder, textarea::placeholder {
                    color: #9CA3AF;
                }
            `}</style>
        </section>
    );
};

export default QuoteSection;
