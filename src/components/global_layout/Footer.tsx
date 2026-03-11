"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-white font-nunito">

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Column 1: Logo & Description */}
                    <div className="lg:col-span-5 flex flex-col items-start space-y-5">
                        <Link href="/">
                            <div className="relative w-[90px] h-[80px]">
                                <Image
                                    src="/assets/images/logo.png"
                                    alt="Bay Ultra Dry Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>

                        <p className="text-[#000000] text-[15px] font-regular leading-relaxed max-w-sm">
                            Professional cleaning and restoration services you can trust — delivered with care, speed, and precision.
                        </p>

                        <div className="flex gap-3">
                            {/* Social Icons */}
                            <Link href="#" className="w-10 h-10 rounded-full bg-[#FBA41C] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.388 14.185 5 15.324 5H18V0h-4.26c-3.153 0-5.74 2.5-5.74 5.636V8z" />
                                </svg>
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-[#FBA41C] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-[#FBA41C] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                                <span className="text-[16px] font-bold">𝕏</span>
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-3 flex flex-col items-start space-y-6">
                        <h4 className="text-[#000000] font-bold text-[16px] uppercase tracking-wider">Quick Link</h4>
                        <nav className="flex flex-col space-y-4">
                            {[
                                { label: "Home", href: "/" },
                                { label: "About Us", href: "/about" },
                                { label: "Carpet Cleaning", href: "/carpet-cleaning" },
                                { label: "Upholstery Cleaning", href: "/upholstery-cleaning" },
                                { label: "Flood Restoration", href: "/flood-restoration" },
                                { label: "Enquiry Now", href: "/contact" },
                            ].map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-[#1D1D1D] hover:text-[#1E3A8A] text-[15px] font-regular transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Get In Touch */}
                    <div className="lg:col-span-4 flex flex-col items-start space-y-6">
                        <h4 className="text-[#000000] font-bold text-[16px] uppercase tracking-wider">Get In Touch</h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-[#1E3A8A] w-5 h-5 mt-1 shrink-0" />
                                <p className="text-[#1D1D1D] text-[16px] leading-snug">
                                    162 Durham Street
                                    Tauranga Bay of Plenty
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-[#1E3A8A] w-5 h-5 shrink-0" />
                                <p className="text-[#1D1D1D] text-[16px] font-regular">07 571 2279</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 my-10"></div>

                {/* Bottom Section */}
                <div className="text-center">
                    <p className="text-[#1D1D1D] text-[13px] md:text-[14px] leading-relaxed max-w-5xl mx-auto">
                        Tauranga | Papamoa | Mount Maunganui | Omokoroa | Katikati | Omanawa | Ohauiti | Te Puna | Te Puke | BOP | Bay of Plenty © 2018 - 2026 Bay Ultra Dry. 162 Durham Street, Tauranga, Bay of Plenty 07 571 2279. Powered by Web Genius. Page: Carpet Cleaning Tauranga, Mt Maunganui, Papamoa, Bay of Plenty - Last updated: 9th November, 2025 Site Map | Links to other quality businesses.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

