"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Clock, ChevronDown } from "lucide-react";

interface QuoteSectionProps {
    variant?: "home" | "about";
}

const QuoteSection = ({ variant = "home" }: QuoteSectionProps) => {
    const backgroundStyle = variant === "home"
        ? "linear-gradient(243.29deg, #F5A51C 6.14%, #FFFFFF 116.88%)"
        : "linear-gradient(239.87deg, #B2DAFF 4.79%, #FFFFFF 140.86%)";

    return (
        <section className="relative w-full py-12 lg:py-20 overflow-hidden"
            style={{
                background: backgroundStyle,
            }}>
            {/* Background Wavy Lines - Top Right */}
            <div className="absolute top-[10%] right-[10%] w-[500px] lg:w-[720px] h-[300px] lg:h-[400px]  pointer-events-none translate-x-1/4 -translate-y-1/4">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt=""
                    fill
                    className="object-cover object-right-top"
                />
            </div>

            {/* Background Wavy Lines - Bottom Left */}
            <div className="absolute bottom-[10%] left-[10%] w-[400px] lg:w-[600px] h-[500px] lg:h-[700px] pointer-events-none -translate-x-1/4 translate-y-1/4 rotate-180">
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
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="flex flex-col space-y-8 lg:sticky lg:top-24"
                    >
                        <div className="space-y-6">
                            <h2 className="font-display text-[32px] md:text-[48px] font-regular text-[#304462] leading-tight tracking-tight">
                                Request A Fast Quote
                            </h2>
                            <div className="space-y-5 max-w-[600px]">
                                <p className="text-[14px] md:text-[17px] text-[#1D1D1D] font-medium leading-[1.6]">
                                    Need urgent flood assistance or want to refresh your carpets and upholstery? Simply fill out the form below — our team will get back to you within the hour.
                                </p>
                                <p className="text-[14px] md:text-[17px] text-[#1D1D1D] font-medium leading-[1.6]">
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
                                <span className="text-[22px] md:text-[26px] font-semibold text-[#1D1D1D] tracking-tight">07 571 2279</span>
                            </div>
                        </div>

                        {/* Map Image */}
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            className="relative w-full aspect-[16/10] md:aspect-auto md:h-[350px] lg:h-[380px] rounded-[24px] overflow-hidden shadow-sm"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.3990875736154!2d176.16452847568848!3d-37.686825472007676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6ddbdcf31994ed%3A0x6325ddbd94a4c66e!2s162%20Durham%20Street%2C%20Tauranga%203110%2C%20New%20Zealand!5e0!3m2!1sen!2sin!4v1772450751643!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Side: Form Card */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="bg-white rounded-[20px] p-8 md:p-8 shadow-sm flex flex-col w-full border border-gray-100 mt-2 lg:mt-0"
                    >
                        <form className="space-y-5">
                            {/* Full Name */}
                            <div className="space-y-1.5">
                                <label className="font-inter text-[14px] md:text-[15px] font-medium text-[#1D1D1D]">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="w-full h-[52px] px-4 rounded-[8px] border border-[#CCCCCC] outline-none focus:border-[#F5A51C] transition-all text-[#333333] font-medium placeholder:text-[#999999] bg-white text-[14px]"
                                />
                            </div>

                            {/* Email Address */}
                            <div className="space-y-1.5">
                                <label className="font-inter text-[14px] md:text-[15px] font-medium text-[#1D1D1D]">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email ID"
                                    className="w-full h-[52px] px-4 rounded-[8px] border border-[#CCCCCC] outline-none focus:border-[#F5A51C] transition-all text-[#333333] font-medium placeholder:text-[#999999] bg-white text-[14px]"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-1.5">
                                <label className="font-inter text-[14px] md:text-[15px] font-medium text-[#1D1D1D]">Phone Number</label>
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
                                <label className="font-inter text-[14px] md:text-[15px] font-medium text-[#1D1D1D]">Service Type</label>
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
                                    <label className="font-inter text-[14px] md:text-[15px] font-medium text-[#1D1D1D]">Preferred Date</label>
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
                                    <label className="font-inter text-[14px] md:text-[15px] font-medium text-[#1D1D1D]">Preferred Time</label>
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
                                <label className="font-inter text-[14px] md:text-[15px] font-medium text-[#1D1D1D]">Your Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Enter Your Query's..."
                                    className="w-full px-4 py-3 rounded-[8px] border border-[#CCCCCC] outline-none focus:border-[#F5A51C] transition-all text-[#333333] font-medium resize-none placeholder:text-[#999999] min-h-[100px] bg-white text-[14px]"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="button"
                                className="w-full bg-[#1A4299] hover:bg-[#1e40af] text-white h-[52px] rounded-full font-semibold text-[15px] transition-all duration-300 shadow-md mt-2 flex items-center justify-center"
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
