"use client";

import React from "react";
import Button from "../ui/Button";

const CTASection = () => {
    return (
        <section className="w-full py-24 bg-[#2B59C3] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center relative z-10 space-y-10">
                <div className="space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                        Ready For A Fresher, Cleaner Space?
                    </h2>
                    <p className="text-blue-100 text-lg md:text-xl font-medium">
                        Join thousands of happy customers in Tauranga. Get your free, no-obligation quote today!
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Button variant="secondary" className="px-12 py-5 text-lg">
                        Get a Free Quote
                    </Button>
                    <Button variant="outline" className="px-12 py-5 text-lg">
                        Call Us: 07 571 2279
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
