"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { Check, Star } from "lucide-react";
import EnquireNowButton from "../ui/EnquireNowButton";

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
            <div className="max-w-[1400px] mx-auto px-4 md:px-10">

                {/* COMBINED ROW FOR MOBILE ORDERING */}
                <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-6 lg:items-stretch lg:mb-8">

                    {/* Headline & Badge */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="order-1 lg:order-none lg:col-span-6 xl:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left mt-2 lg:mt-0"
                    >
                        <div className="flex items-center justify-center lg:justify-start mb-3">
                            <div className="relative w-[36px] h-[36px] mr-2">
                                <Image
                                    src="/assets/images/Mask group.png"
                                    alt="Trust Badges"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-[#1A4299] font-semibold text-[18px]">About Us</span>
                        </div>
                        <h2 className="text-[24px] md:text-[35px] xl:text-[50px] font-[400] leading-[1.3] text-[#304462] tracking-tight mx-auto lg:mx-0">
                            Where Quality Cleaning<br /> Meets Genuine Care
                        </h2>
                    </div>

                    {/* 100% Splash Badge */}
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        className="order-2 lg:order-none lg:col-span-6 xl:col-span-2 flex justify-center py-4 lg:py-0"
                    >
                        <div className="relative w-[260px] h-[260px] md:w-[240px] md:h-[240px]">
                            {/* Splash Background Image */}
                            <Image
                                src="/assets/images/splash.png"
                                alt="Splash Background"
                                fill
                                className="object-contain"
                                priority
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                <span className="text-[44px] md:text-[46px] font-serif italic text-[#1E40AF] leading-none mb-1 font-family:'Jomolhari'">100%</span>
                                <span className="text-[12px] md:text-[12px] font-[800] text-[#1E40AF] tracking-[0.05em] leading-[1.3] mt-1 font-family:'Jomolhari'">Better Cleaning<br />Services</span>
                            </div>
                        </div>
                    </div>

                    {/* Yellow Commitment Card */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                        className="order-7 flex flex-col items-start xl:order-none lg:col-span-6 xl:col-span-5 bg-[#FBBF24] p-8 md:p-8 rounded-[16px] shadow-lg mt-2 lg:mt-0"
                    >
                        <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#1e293b] mb-6">
                            <span className="font-bold">Bay Ultra Dry</span> is committed to exceptional results, clear communication, and a rapid response. Whether you need a deep carpet clean, an upholstery refresh, or emergency flood restoration, we deliver a thorough job with minimal disruption and the utmost care.
                        </p>
                        <Button>Contact Us</Button>
                    </div>

                    {/* 1. Owners Image */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="order-3 lg:order-none lg:col-span-4 xl:col-span-3 relative rounded-[16px] overflow-hidden shadow-xl min-h-[460px] lg:min-h-[300px]"
                    >
                        <Image
                            src="/assets/images/owners.png"
                            alt="Bay Ultra Dry Owners"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* 2 & 3 & 4. Features + Trust Cards Middle Section */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        className="order-4 lg:order-none lg:col-span-8 xl:col-span-4 flex flex-col gap-5 pt-2 lg:pt-0"
                    >
                        {/* Features Checklist */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-[14px]">
                            {[
                                "24/7 Emergency Response",
                                "Advanced Deep-Clean Equipment",
                                "Eco-Friendly Cleaning Solutions",
                                "Fast Drying Technology"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full border-[1.5px] border-[#2563EB] flex items-center justify-center">
                                        <Check className="w-[11px] h-[11px] text-[#2563EB] stroke-[3.5]" />
                                    </div>
                                    <span className="text-[15px] font-semibold text-[#1E293B] leading-tight">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Trust Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-grow mt-1 lg:mt-0">
                            {/* Google Card */}
                            <div className="bg-[#020617] text-white p-5 rounded-[16px] flex flex-col shadow-md h-auto lg:h-full justify-between">
                                <div>
                                    <div className="flex items-center gap-[3px] mb-[15px]">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-[20px] h-[20px] fill-[#FBBF24] text-[#FBBF24]" />
                                        ))}
                                    </div>
                                    <div className="relative h-[48px] w-[120px] mb-4">
                                        <Image
                                            src="/assets/images/google.png"
                                            alt="Google"
                                            fill
                                            className="object-contain object-left"
                                        />
                                    </div>
                                </div>
                                <p className="text-[15px] font-semibold leading-[1.3] text-white">
                                    Fully Insured & Safety<br />Certified
                                </p>
                            </div>

                            {/* Experience Card */}
                            <div className="bg-white border border-slate-100 p-6 pt-5 rounded-[16px] shadow-[0px_8px_24px_rgba(0,0,0,0.12)] flex flex-col justify-between gap-[26px] h-full">
                                <div>
                                    <div className="flex items-center gap-3 pb-2">
                                        <span className="text-[38px] font-medium text-[#0f172a] leading-none">10+</span>
                                        <p className="text-[15px] font-medium text-[#475569] leading-[1.3]">
                                            Years<br />Experience
                                        </p>
                                    </div>
                                    <hr />
                                </div>
                                <div className="flex flex-col gap-[6px]">
                                    <h4 className="text-[15px] font-semibold text-[#0f172a] leading-tight">Fast Communication</h4>
                                    <p className="text-[15px] text-[#475569] font-medium leading-[1.4]">
                                        quick responses<br />and clear updates
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5. Testimonial Card */}
                    {/* <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                        className="order-8 lg:order-none lg:col-span-4 p-8 rounded-[16px] relative overflow-hidden flex flex-col shadow-lg lg:mt-0"
                        style={{ background: 'linear-gradient(241.26deg, #DAF1FF 28.79%, #FFCB71 98.22%)' }}
                    >
                        <div
                            className="absolute bottom-0 left-0 w-full h-[25%] z-0"
                            style={{ background: 'linear-gradient(91.57deg, #FFF8AA -7.72%, #C0E683 48.06%, #2B97FB 103.83%)' }}
                        ></div>
                        <div
                            className="hidden lg:block absolute top-0 right-0 w-[20%] h-full z-0 bg-gradient-to-b from-transparent to-[#2B97FB]/50"
                        ></div>

                        <div className="absolute top-8 left-8 w-14 h-12 pointer-events-none select-none z-10 opacity-60">
                            <Image
                                src="/assets/images/quote.png"
                                alt="Quote Icon"
                                fill
                                className="object-contain"
                            />
                        </div>

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

                        <div className="relative z-10 mt-16 flex-grow overflow-hidden">
                            <div
                                className="flex h-full transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                            >
                                {testimonials.map((testimonial, idx) => (
                                    <div key={idx} className="w-full h-full flex-shrink-0 flex flex-col justify-between">
                                        <p className="text-[15.5px] font-medium text-[#1E293B] leading-[1.6]">
                                            {testimonial.text}
                                        </p>

                                        <div className="flex items-center gap-4 mt-20 pb-1">
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
                    </div> */}

                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-delay="400"
                        className="order-8 lg:order-none lg:col-span-6 xl:col-span-5 rounded-[20px] overflow-hidden shadow-lg relative"
                    >

                        {/* Top Gradient */}
                        <div className="relative p-8 bg-[linear-gradient(241.26deg,#DAF1FF_28.79%,#FFCB71_98.22%)]">

                            {/* Quote */}
                            <div className="absolute top-8 left-8 w-14 h-12 opacity-60">
                                <Image
                                    src="/assets/images/quote.png"
                                    alt="Quote Icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Dots */}
                            <div className="absolute top-8 right-8 flex gap-2">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTestimonial(idx)}
                                        className={`w-3 h-3 rounded-full transition ${activeTestimonial === idx
                                            ? "bg-[#1E40AF]"
                                            : "bg-[#94A3B8] hover:bg-[#64748B]"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Slider */}
                            <div className="mt-16 overflow-hidden">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                                >
                                    {testimonials.map((testimonial, idx) => (
                                        <div key={idx} className="min-w-full">
                                            <p className="text-[16px] font-medium text-[#1E293B] leading-[1.7] max-w-[420px]">
                                                {testimonial.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Bottom Author Section */}
                        <div className="flex items-center gap-4 px-8 py-6 bg-[linear-gradient(91.57deg,#FFF8AA_-7.72%,#C0E683_48.06%,#2B97FB_103.83%)]">

                            <div className="relative w-[54px] h-[54px] rounded-full overflow-hidden border-2 border-white shadow-md">
                                <Image
                                    src={testimonials[activeTestimonial].image}
                                    alt={testimonials[activeTestimonial].author}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div>
                                <h5 className="text-[18px] font-bold text-[#1E293B]">
                                    {testimonials[activeTestimonial].author}
                                </h5>
                                <p className="text-[14px] text-[#334155]">
                                    {testimonials[activeTestimonial].role}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Enquire Now — bottom-right of this section */}
            <EnquireNowButton variant="section" />
        </section>
    );
};

export default WelcomeSection;
