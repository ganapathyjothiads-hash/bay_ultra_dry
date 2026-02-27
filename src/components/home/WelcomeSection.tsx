"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { Check, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        text: "Excellent communication, fantastic results. Will definitely use again. Very fast response for a flood emergency — saved our carpet! Great value, friendly team — carpets look like new!",
        author: "Alen",
        role: "Consult Director",
        image: "/assets/images/Alen-user.png"
    },
    {
        id: 2,
        text: "Professional, punctual and high-quality service. They handled our upholstery with great care and the results are amazing. Highly recommend Bay Ultra Dry!",
        author: "Sarah J.",
        role: "Home Owner",
        image: "/assets/images/Alen-user.png"
    },
    {
        id: 3,
        text: "The team was incredible! They fixed a major spill on our office carpet that we thought was permanent. Incredible service and very friendly staff.",
        author: "Michael T.",
        role: "Facility Manager",
        image: "/assets/images/Alen-user.png"
    }
];

const WelcomeSection = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full py-8 md:py-12 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                
                {/* FIRST ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-center">
                    
                    {/* Headline & Badge */}
                    <div className="lg:col-span-5 flex flex-col justify-start">
                        <div className="flex items-center mb-4">
                            <div className="relative w-[80px] h-[32px]">
                                <Image
                                    src="/assets/images/Mask group.png"
                                    alt="Trust Badges"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-[#2563EB] font-bold text-lg tracking-wide uppercase">About Us</span>
                        </div>
                        <h2 className="text-[32px] md:text-[42px] lg:text-[49px] font-bold leading-[1.2] text-[#1E293B] tracking-tight">
                            Where Quality Cleaning<br />Meets Genuine Care
                        </h2>
                    </div>

                    {/* 100% Splash Badge */}
                    <div className="lg:col-span-3 flex justify-center">
                        <div className="relative w-[180px] h-[180px] md:w-[240px] md:h-[240px]">
                            {/* Splash Background Image */}
                            <Image
                                src="/assets/images/splash.png"
                                alt="Splash Background"
                                fill
                                className="object-contain"
                                priority
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                <span className="text-[36px] md:text-[46px] font-serif italic text-[#1E40AF] leading-none mb-1">100%</span>
                                <span className="text-[10px] md:text-[12px] font-extrabold text-[#1E40AF] uppercase tracking-[0.1em] leading-tight">Better Cleaning<br />Services</span>
                            </div>
                        </div>
                    </div>

                    {/* Yellow Commitment Card */}
                    <div className="lg:col-span-4 bg-[#FBBF24] p-6 md:p-8 rounded-[32px] shadow-lg">
                        <p className="text-[13px] md:text-[15px] leading-relaxed text-slate-900 font-medium mb-6">
                            <span className="font-bold">Bay Ultra Dry</span> is committed to exceptional results, clear communication, and a rapid response. Whether you need a deep carpet clean, an upholstery refresh, or emergency flood restoration, we deliver a thorough job with minimal disruption and the utmost care.
                        </p>
                        <Button 
                            variant="primary" 
                            className="bg-[#1E40AF] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-[#1e3a8a] transition-colors"
                        >
                            CONTACT US
                        </Button>
                    </div>
                </div>

                {/* SECOND ROW */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    
                    {/* 1. Owners Image */}
                    <div className="lg:col-span-3 relative rounded-[32px] overflow-hidden shadow-xl min-h-[300px]">
                        <Image
                            src="/assets/images/owners.png"
                            alt="Bay Ultra Dry Owners"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* 2 & 3 & 4. Features + Trust Cards Middle Section */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Features Checklist */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                            {[
                                "24/7 Emergency Response",
                                "Advanced Deep-Clean Equipment",
                                "Eco-Friendly Cleaning Solutions",
                                "Fast Drying Technology"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border-2 border-[#2563EB] flex items-center justify-center">
                                        <Check className="w-2 h-2 text-[#2563EB] stroke-[4]" />
                                    </div>
                                    <span className="text-[13px] font-bold text-[#1E293B] leading-tight">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Trust Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                            {/* Google Card */}
                            <div className="bg-[#0F172A] text-white p-6 rounded-[24px] flex flex-col justify-between shadow-md h-full">
                                <div className="space-y-2">
                                    <div className="relative h-[120px] w-[150px]">
                                        <Image
                                            src="/assets/images/google.png"
                                            alt="Google"
                                            fill
                                            className="object-contain object-left"
                                        />
                                    </div>
                                </div>
                                <p className="text-[20px] font-bold leading-tight mt-4">
                                    Fully Insured & Safety Certified
                                </p>
                            </div>

                            {/* Experience Card */}
                            <div className="bg-white border border-slate-100 p-6 rounded-[24px] shadow-sm flex flex-col justify-between h-full">
                                <div className="flex items-center gap-3">
                                    <span className="text-[45px] font-bold text-slate-900 leading-none">10+</span>
                                    <p className="text-[14px] font-bold text-slate-500 uppercase leading-tight">
                                        Years<br />Experience
                                    </p>
                                </div>
                                <div className="mt-2 pt-2 border-t border-slate-50">
                                    <h4 className="text-[18px] font-bold text-slate-900 mb-1">Fast Communication</h4>
                                    <p className="text-[16px] text-slate-500 font-medium leading-relaxed">
                                        quick responses and clear updates
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5. Testimonial Card */}
                    <div 
                        className="lg:col-span-4 p-8 rounded-[30px] relative overflow-hidden flex flex-col shadow-lg"
                        style={{ background: 'linear-gradient(241.26deg, #DAF1FF 28.79%, #FFCB71 98.22%)' }}
                    >
                        {/* Decorative Gradient Overlays */}
                        <div 
                            className="absolute bottom-0 left-0 w-full h-[25%] z-0"
                            style={{ background: 'linear-gradient(91.57deg, #FFF8AA -7.72%, #C0E683 48.06%, #2B97FB 103.83%)' }}
                        ></div>
                        <div 
                            className="absolute top-0 right-0 w-[20%] h-full z-0 bg-gradient-to-b from-transparent to-[#2B97FB]/50"
                        ></div>
                        
                        {/* Quote Icon */}
                        <div className="absolute top-8 left-8 w-14 h-12 pointer-events-none select-none z-10 opacity-60">
                            <Image
                                src="/assets/images/Frame 35.png"
                                alt="Quote Icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        
                        {/* Dots */}
                        <div className="absolute top-8 right-8 flex gap-2 z-20">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveTestimonial(idx)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === idx ? "bg-[#1E40AF]" : "bg-[#94A3B8] hover:bg-[#64748B]"}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Slider Content */}
                        <div className="relative z-10 mt-16 flex-grow overflow-hidden">
                            <div 
                                className="flex h-full transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                            >
                                {testimonials.map((testimonial, idx) => (
                                    <div key={idx} className="w-full h-full flex-shrink-0 flex flex-col justify-between pr-10">
                                        <p className="text-[15.5px] font-medium text-[#1E293B] leading-[1.6]">
                                            {testimonial.text}
                                        </p>
                                        
                                        <div className="flex items-center gap-4 mt-8 pb-1">
                                            <div className="relative w-[52px] h-[52px] rounded-full overflow-hidden shadow-sm border-2 border-white/50">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.author}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h5 className="text-[17px] font-bold text-[#1E293B] leading-none mb-1.5">{testimonial.author}</h5>
                                                <p className="text-[13.5px] font-medium text-[#334155]">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
