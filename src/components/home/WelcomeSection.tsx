"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { Check, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        text: "Excellent communication, fantastic results. Will definitely use again. Very fast response for a flood emergency — saved our carpet! Great value, friendly team — carpets look like new!",
        author: "Alen",
        role: "Consult Director",
        image: "/assets/images/placeholder-user.jpg"
    },
    {
        id: 2,
        text: "Professional, punctual and high-quality service. They handled our upholstery with great care and the results are amazing. Highly recommend Bay Ultra Dry!",
        author: "Sarah J.",
        role: "Home Owner",
        image: "/assets/images/placeholder-user.jpg"
    },
    {
        id: 3,
        text: "The team was incredible! They fixed a major spill on our office carpet that we thought was permanent. Incredible service and very friendly staff.",
        author: "Michael T.",
        role: "Facility Manager",
        image: "/assets/images/placeholder-user.jpg"
    }
];

const WelcomeSection = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    return (
        <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Container */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12">

                    {/* TOP ROW CONTENT (Lg screens) / Sequential (Mobile) */}

                    {/* Col 1-5: Headline & About Us */}
                    <div className="lg:col-span-5 flex flex-col justify-start">
                        <div className="flex items-center gap-2 mb-6 md:mb-10">
                            <div className="flex -space-x-1">
                                {[1, 2, 3].map((i) => (
                                    <Star key={i} className="w-4 h-4 fill-[#FBA41C] text-[#FBA41C]" />
                                ))}
                            </div>
                            <span className="text-[#2B59C3] font-bold text-sm uppercase tracking-wide">About Us</span>
                        </div>

                        <h2 className="text-[32px] md:text-[56px] font-bold text-[#1E3A8A] leading-[1.1] mb-8 md:mb-0">
                            Where Quality Cleaning<br className="hidden md:block" /> Meets Genuine Care
                        </h2>
                    </div>

                    {/* Col 6-8: 100% Splash Badge (Center on mobile, next to headline on desktop) */}
                    <div className="lg:col-span-3 flex justify-center items-center py-4 lg:py-0">
                        <div className="relative w-[180px] h-[180px] md:w-[240px] md:h-[240px]">
                            {/* Splash SVG background */}
                            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full fill-[#E0F2FE]">
                                <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-46.5C87.4,-33.8,90.1,-18.7,87.6,-4.3C85,10.1,77.3,23.8,68.4,36.1C59.5,48.4,49.5,59.2,37.6,67.4C25.8,75.7,12,81.4,-2,84.9C-16,88.4,-32.1,89.7,-45.1,83.1C-58.2,76.5,-68.2,61.9,-75.4,46.9C-82.6,31.9,-86.9,16.4,-86.4,1.1C-85.9,-14.2,-80.6,-29.4,-72.2,-42.9C-63.7,-56.3,-52.1,-68.1,-38.7,-75.8C-25.3,-83.5,-10.1,-87.2,2.8,-92.1C15.7,-97,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                                <path className="fill-[#BAE6FD] opacity-40" d="M37.3,-65.4C48.4,-59.5,57.5,-49.6,64.2,-38.3C70.9,-27,75.2,-14.3,74.5,-1.9C73.9,10.5,68.3,22.7,60.5,33.4C52.7,44.1,42.7,53.2,31.1,59.3C19.5,65.4,6.4,68.5,-6.1,66.5C-18.6,64.4,-30.5,57.3,-40.8,48.8C-51.1,40.3,-59.9,30.4,-65,18.9C-70.1,7.4,-71.5,-5.7,-68.6,-18.1C-65.7,-30.5,-58.5,-42.2,-48.7,-48.5C-38.9,-54.8,-26.5,-55.7,-14.8,-62.4C-3.1,-69,7.9,-81.4,19.9,-83.1C31.9,-84.8,37.3,-65.4,37.3,-65.4Z" transform="translate(100 100)" />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                <span className="text-[36px] md:text-[48px] font-serif italic text-[#1E3A8A] leading-none mb-1">100%</span>
                                <span className="text-[12px] md:text-[14px] font-bold text-[#2B59C3] uppercase tracking-wider leading-tight">Better Cleaning<br />Services</span>
                            </div>
                        </div>
                    </div>

                    {/* Col 9-12: Yellow Trust Box */}
                    <div className="lg:col-span-4 bg-[#FBA41C] p-8 md:p-10 rounded-[32px] md:rounded-[40px] text-white flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-lg">
                        <p className="text-[18px] md:text-[20px] font-medium leading-relaxed mb-8">
                            <span className="font-bold">Bay Ultra Dry</span> is committed to exceptional results, clear communication, and a rapid response. Whether you need a deep carpet clean, an upholstery refresh, or emergency flood restoration, we deliver a thorough job with minimal disruption and the utmost care.
                        </p>
                        <Button variant="primary" className="!bg-[#1E3A8A] !text-white w-fit px-10 rounded-2xl normal-case text-base font-bold shadow-md">
                            Contact Us
                        </Button>
                    </div>

                    {/* BOTTOM ROW CONTENT / Grid Layout */}

                    {/* Main Content Area (Grouping the remaining items for desktop layout control) */}
                    <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

                        {/* Col 1-5 Left Side: Image & Features */}
                        <div className="lg:col-span-5 space-y-12">
                            {/* Team Image */}
                            <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[1.2/1] group">
                                {/* Image Placeholder - User will provide locally */}
                                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                    <p className="text-gray-400 font-bold">Team Photo Placeholder</p>
                                </div>
                                <Image
                                    src="/assets/images/team-in-van.jpg"
                                    alt="Bay Ultra Dry Team"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-0 bg-transparent"
                                    onLoadingComplete={(img) => img.classList.remove('opacity-0')}
                                />
                            </div>

                            {/* Features Grid (2x2) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-4">
                                {[
                                    "24/7 Emergency Response",
                                    "Advanced Deep-Clean Equipment",
                                    "Eco-Friendly Cleaning Solutions",
                                    "Fast Drying Technology"
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#2B59C3] flex items-center justify-center">
                                            <Check className="w-3 h-3 text-[#2B59C3] stroke-[3]" />
                                        </div>
                                        <span className="text-[16px] md:text-[18px] font-bold text-[#1E3A8A] leading-snug">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Col 6-12 Right Side: Trust Cards & Slider */}
                        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Google Trust Box */}
                            <div className="bg-black text-white p-8 rounded-[32px] md:rounded-[40px] flex flex-col justify-between h-full shadow-xl">
                                <div className="space-y-4">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="w-5 h-5 fill-[#FBA41C] text-[#FBA41C]" />
                                        ))}
                                    </div>
                                    <div className="text-[48px] font-bold tracking-tight">
                                        <span className="text-[#4285F4]">G</span>
                                        <span className="text-[#EA4335]">o</span>
                                        <span className="text-[#FBBC05]">o</span>
                                        <span className="text-[#4285F4]">g</span>
                                        <span className="text-[#34A853]">l</span>
                                        <span className="text-[#EA4335]">e</span>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <p className="text-[22px] font-bold leading-tight">
                                        Fully Insured & Safety<br />Certified
                                    </p>
                                </div>
                            </div>

                            {/* Years Experience / Fast Comms Box */}
                            <div className="bg-white border border-gray-100 p-8 rounded-[40px] shadow-sm flex flex-col justify-between">
                                <div>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-[48px] md:text-[56px] font-bold text-gray-900 leading-none">10+</span>
                                        <span className="text-[16px] font-bold text-gray-500 uppercase">Years<br />Experience</span>
                                    </div>
                                    <div className="w-full h-[1px] bg-gray-100 my-6"></div>
                                </div>
                                <div>
                                    <h4 className="text-[22px] font-bold text-gray-900 mb-2">Fast Communication</h4>
                                    <p className="text-gray-500 font-medium leading-relaxed">
                                        quick responses<br />and clear updates
                                    </p>
                                </div>
                            </div>

                            {/* Testimonial Slider Box */}
                            <div className="md:col-span-2 bg-gradient-to-br from-[#FFF9E5] via-[#E0F2FE] to-[#F0FDFA] p-8 md:p-12 rounded-[40px] shadow-sm border border-white/50 relative overflow-hidden flex flex-col h-full min-h-[360px]">
                                {/* Quote Icon */}
                                <div className="absolute top-8 left-10 text-[120px] font-serif text-[#A3A3A3]/20 pointer-events-none select-none">“</div>

                                {/* Dots Navigation */}
                                <div className="absolute top-10 right-10 flex gap-2 z-10">
                                    {testimonials.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveTestimonial(idx)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === idx ? "bg-[#1E3A8A] w-6" : "bg-[#1E3A8A]/20"
                                                }`}
                                            aria-label={`Testimonial ${idx + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Content Wrapper */}
                                <div className="relative flex flex-col flex-1 justify-between gap-10">
                                    <div className="mt-8">
                                        <p className="text-[18px] md:text-[22px] font-medium text-gray-700 leading-relaxed italic pr-4">
                                            {testimonials[activeTestimonial].text}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-gray-200">
                                            <Image
                                                src={testimonials[activeTestimonial].image}
                                                alt={testimonials[activeTestimonial].author}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h5 className="text-[18px] font-bold text-[#1E3A8A]">{testimonials[activeTestimonial].author}</h5>
                                            <p className="text-[14px] font-medium text-gray-500">{testimonials[activeTestimonial].role}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-[#2B59C3]/10 to-transparent blur-3xl lg:block hidden"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default WelcomeSection;
