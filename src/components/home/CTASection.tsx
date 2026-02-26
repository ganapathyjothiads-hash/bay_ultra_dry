"use client";

import React from "react";
import Button from "../ui/Button";

const CTASection = () => {
    return (
        <section className="w-full py-8 bg-[#4065B3] relative overflow-hidden">
            {/* Background pattern - matching the cleaning icons pattern in the image */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="cleaning-pattern" width="200" height="200" patternUnits="userSpaceOnUse">
                            {/* Spray Bottle */}
                            <g transform="translate(50, 20) scale(0.5)" stroke="white" strokeWidth="2" fill="none">
                                <path d="M15 10 L25 10 L25 20 Q25 25 20 25 L10 25 Q5 25 5 20 L5 10 Z" />
                                <rect x="10" y="25" width="10" height="30" rx="2" />
                                <path d="M25 15 L35 15 L35 18" />
                            </g>
                            
                            {/* Broom */}
                            <g transform="translate(20, 100) scale(0.6) rotate(-15)" stroke="white" strokeWidth="2" fill="none">
                                <rect x="0" y="50" width="40" height="20" rx="2" />
                                <line x1="10" y1="50" x2="10" y2="70" />
                                <line x1="20" y1="50" x2="20" y2="70" />
                                <line x1="30" y1="50" x2="30" y2="70" />
                                <line x1="20" y1="50" x2="20" y2="0" />
                            </g>
                            
                            {/* Glove */}
                            <g transform="translate(150, 120) scale(0.5) rotate(10)" stroke="white" strokeWidth="2" fill="none">
                                <path d="M10 50 Q0 40 10 30 T20 10 T30 30 T40 10 T50 30 T60 10 T70 30 T70 80 L10 80 Z" />
                            </g>
                            
                            {/* Brush */}
                            <g transform="translate(140, 30) scale(0.6)" stroke="white" strokeWidth="2" fill="none">
                                <path d="M10 30 H70 V45 Q70 55 60 55 H20 Q10 55 10 45 Z" />
                                <path d="M15 30 V10 Q15 0 25 0 H55 Q65 0 65 10 V30" />
                            </g>
                            
                            {/* Bucket */}
                            <g transform="translate(30, 150) scale(0.5)" stroke="white" strokeWidth="2" fill="none">
                                <path d="M10 20 L20 60 H60 L70 20 Z" />
                                <path d="M10 20 Q40 0 70 20" />
                            </g>
                            
                            {/* Sparkles */}
                            <g transform="translate(100, 100) scale(0.4)" fill="white" opacity="0.6">
                                <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
                            </g>
                            <g transform="translate(10, 20) scale(0.3)" fill="white" opacity="0.6">
                                <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
                            </g>
                            <g transform="translate(180, 50) scale(0.3)" fill="white" opacity="0.6">
                                <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
                            </g>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#cleaning-pattern)" />
                </svg>
            </div>

            <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center relative z-10 space-y-4">
                <div className="space-y-2 max-w-5xl mx-auto">
                    <h2 
                        className="font-normal text-white capitalize text-center"
                        style={{ 
                            fontFamily: 'Nebulas, sans-serif',
                            fontSize: '52px',
                            lineHeight: '76px',
                            letterSpacing: '0.01em',
                        }}
                    >
                        Ready For A Fresher, Cleaner Space?
                    </h2>
                    <p className="text-white/90 text-sm md:text-base lg:text-lg font-medium max-w-[850px] mx-auto leading-relaxed">
                        Experience the Bay Ultra Dry difference today. Whether it&apos;s a routine deep clean or an
                        urgent restoration, our expert team is just a call away — ensuring your home or business
                        looks its best with minimal disruption and maximum care.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center pt-2">
                    <Button 
                        variant="accent" 
                        className="px-12 py-4 text-[16px] font-bold bg-white text-[#1E293B] hover:bg-white/90 rounded-full normal-case tracking-normal shadow-lg"
                    >
                        Enquire Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
