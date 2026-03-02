"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Clock, ChevronDown } from "lucide-react";

const QuoteSection = () => {
    return (
        <section className="relative w-full py-12 lg:py-20 overflow-hidden"
            style={{
                background: "linear-gradient(243.29deg, #F5A51C 6.14%, #FFFFFF 116.88%)",
            }}>
            {/* Background Wavy Lines - Top Right */}
            <div className="absolute top-0 right-0 w-[500px] lg:w-[720px] h-[300px] lg:h-[400px] opacity-40 pointer-events-none translate-x-1/4 -translate-y-1/4">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt=""
                    fill
                    className="object-cover object-right-top"
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

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full mb-10 lg:mb-0">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(400px,500px)] gap-10 lg:gap-16 items-start">

                    {/* Left Side: Content & Map */}
                    <div className="flex flex-col space-y-8 lg:sticky lg:top-24">
                        <div className="space-y-6">
                            <h2 className="text-[32px] md:text-[48px] font-bold text-[#1E3A8A] leading-tight tracking-tight">
                                Request A Fast Quote
                            </h2>
                            <div className="space-y-5 max-w-[500px]">
                                <p className="text-[14px] md:text-[16px] text-[#1a1a1a] font-medium leading-[1.6]">
                                    Need urgent flood assistance or want to refresh your carpets and upholstery? Simply fill out the form below — our team will get back to you within the hour.
                                </p>
                                <p className="text-[14px] md:text-[16px] text-[#1a1a1a] font-medium leading-[1.6]">
                                    For urgent flood emergencies, please call us directly at
                                </p>
                            </div>

                            <div className="flex items-center gap-4 pt-2">
                                <div className="relative w-[30px] h-[30px] md:w-[40px] md:h-[40px] shrink-0">
                                    <Image
                                        src="/assets/images/Contact_icon.png"
                                        alt="Call 24/7"
                                        fill
                                        className="object-contain" // Or object-cover if it matches better
                                    />
                                </div>
                                <span className="text-[22px] md:text-[26px] font-bold text-[#1a1a1a] tracking-tight">07 571 2279</span>
                            </div>
                        </div>

                        {/* Map Image */}
                        <div className="relative w-full aspect-[16/10] md:aspect-auto md:h-[350px] lg:h-[420px] rounded-[16px] overflow-hidden">
                            <Image
                                src="/assets/images/map.png"
                                alt="Service Area Map"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Side: Form Card */}
                    <div className="bg-white rounded-[20px] p-8 md:p-8 shadow-sm flex flex-col w-full border border-gray-100 mt-2 lg:mt-0">
                        <form className="space-y-5">
                            {/* Full Name */}
                            <div className="space-y-1.5">
                                <label className="text-[14px] md:text-[15px] font-semibold text-[#333333]">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="w-full h-[52px] px-4 rounded-[8px] border border-[#CCCCCC] outline-none focus:border-[#F5A51C] transition-all text-[#333333] font-medium placeholder:text-[#999999] bg-white text-[14px]"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="space-y-1.5">
                                <label className="text-[14px] md:text-[15px] font-semibold text-[#333333]">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email ID"
                                    className="w-full h-[52px] px-4 rounded-[8px] border border-[#CCCCCC] outline-none focus:border-[#F5A51C] transition-all text-[#333333] font-medium placeholder:text-[#999999] bg-white text-[14px]"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-1.5">
                                <label className="text-[14px] md:text-[15px] font-semibold text-[#333333]">Phone Number</label>
                                <div className="flex h-[52px] w-full rounded-[8px] border border-[#CCCCCC] bg-white overflow-hidden focus-within:border-[#F5A51C] transition-all">
                                    <div className="w-[56px] h-full flex items-center justify-center border-r border-[#CCCCCC] text-[#333333] font-semibold text-[14px] shrink-0 bg-white">
                                        +91
                                    </div>
                                    <input
                                        type="tel"
                                        placeholder="0000 000 000"
                                        className="flex-1 h-full px-4 outline-none text-[#333333] font-medium placeholder:text-[#999999] bg-transparent text-[14px]"
                                    />
                                </div>
                            </div>

                            {/* Service Type */}
                            <div className="space-y-1.5">
                                <label className="text-[14px] md:text-[15px] font-semibold text-[#333333]">Service Type</label>
                                <div className="relative group">
                                    <select className="w-full h-[52px] px-4 rounded-[8px] border border-[#CCCCCC] outline-none appearance-none focus:border-[#F5A51C] transition-all text-[#333333] font-medium bg-white cursor-pointer pr-12 text-[14px]">
                                        <option>Carpet Cleaning</option>
                                        <option>Upholstery Cleaning</option>
                                        <option>Flood Restoration</option>
                                        <option>Mattress Cleaning</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1E3A8A] transition-colors" size={18} />
                                </div>
                            </div>

                            {/* Preferred Date & Time */}
                            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-[14px] md:text-[15px] font-semibold text-[#333333]">Preferred Date</label>
                                    <div className="relative flex items-center h-[52px] group">
                                        <input
                                            type="text"
                                            placeholder="00/00/000"
                                            className="w-full h-full px-4 rounded-[8px] border border-[#CCCCCC] outline-none focus:border-[#F5A51C] transition-all text-[#333333] font-medium pr-12 bg-white text-[14px]"
                                        />
                                        <div className="absolute right-0 top-0 bottom-0 w-[46px] bg-[#1E3A8A] flex items-center justify-center text-white cursor-pointer rounded-r-[8px] transition-colors border-y border-r border-[#1E3A8A]">
                                            <Calendar size={18} />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[14px] md:text-[15px] font-semibold text-[#333333]">Preferred Time</label>
                                    <div className="relative flex items-center h-[52px] group">
                                        <input
                                            type="text"
                                            placeholder="00:00AM"
                                            className="w-full h-full px-4 rounded-[8px] border border-[#CCCCCC] outline-none focus:border-[#F5A51C] transition-all text-[#333333] font-medium pr-12 bg-white text-[14px]"
                                        />
                                        <div className="absolute right-0 top-0 bottom-0 w-[46px] bg-[#1E3A8A] flex items-center justify-center text-white cursor-pointer rounded-r-[8px] transition-colors border-y border-r border-[#1E3A8A]">
                                            <Clock size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Your Message */}
                            <div className="space-y-1.5">
                                <label className="text-[14px] md:text-[15px] font-semibold text-[#333333]">Your Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Enter Your Query's..."
                                    className="w-full px-4 py-3 rounded-[8px] border border-[#CCCCCC] outline-none focus:border-[#F5A51C] transition-all text-[#333333] font-medium resize-none placeholder:text-[#999999] min-h-[100px] bg-white text-[14px]"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="button"
                                className="w-full bg-[#1E3A8A] hover:bg-[#1e40af] text-white h-[52px] rounded-full font-semibold text-[15px] transition-all duration-300 shadow-md mt-2 flex items-center justify-center"
                            >
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
