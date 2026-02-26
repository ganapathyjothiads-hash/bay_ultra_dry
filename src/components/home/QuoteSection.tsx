"use client";

import React from "react";
import Button from "../ui/Button";

const QuoteSection = () => {
    return (
        <section className="w-full py-24 bg-[#FFF9C4]/30 relative">
            <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left side: Content and Info */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <span className="text-[#FBA41C] font-bold text-sm uppercase tracking-[0.2em]">Contact Us</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                Request A Fast Quote
                            </h2>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-xl">
                                Fill out the form below and our team will get back to you within 2 business hours with a personalized quote for your cleaning needs.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">Reach Out Directly</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#2B59C3]">📞</div>
                                    <div>
                                        <p className="font-bold text-gray-900">Phone</p>
                                        <p>07 571 2279</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#2B59C3]">✉️</div>
                                    <div>
                                        <p className="font-bold text-gray-900">Email</p>
                                        <p>info@bayultradry.co.nz</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#2B59C3]">📍</div>
                                    <div>
                                        <p className="font-bold text-gray-900">Location</p>
                                        <p>Tauranga, Bay of Plenty, NZ</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-[300px] rounded-[32px] overflow-hidden shadow-xl bg-gray-200 relative">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold italic">
                                MAP_PLACEHOLDER
                            </div>
                        </div>
                    </div>

                    {/* Right side: Contact Form */}
                    <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Full Name</label>
                                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2B59C3] transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
                                    <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2B59C3] transition-all" placeholder="012 345 6789" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
                                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2B59C3] transition-all" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Service Required</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2B59C3] transition-all appearance-none">
                                    <option>Carpet Cleaning</option>
                                    <option>Upholstery Cleaning</option>
                                    <option>Flood Restoration</option>
                                    <option>Other Services</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Your Message</label>
                                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2B59C3] transition-all" placeholder="Tell us more about your needs..."></textarea>
                            </div>

                            <Button variant="primary" className="w-full py-5 text-lg">
                                Submit Request
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;
