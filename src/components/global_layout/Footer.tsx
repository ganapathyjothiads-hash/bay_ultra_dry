"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-white pt-16 pb-8 border-t border-gray-400">
            <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="max-w-[1440px] mx-auto px-6 md:px-16"
            >
                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Logo & Socials */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:max-w-[350px]">
                        <Link href="/">
                            <div className="relative w-[180px] h-[60px]">
                                <Image
                                    src="/assets/images/logo.png"
                                    alt="Bay Ultra Dry Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-[#374151] text-[15px] leading-relaxed font-normal">
                            Professional cleaning and restoration services you can trust — delivered with care, speed, and precision.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { name: "facebook", icon: "f", color: "#FBA41C" },
                                { name: "instagram", icon: "📸", color: "#FBA41C" },
                                { name: "twitter", icon: "X", color: "#FBA41C" }
                            ].map((social) => (
                                <Link
                                    key={social.name}
                                    href="#"
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold hover:opacity-80 transition-opacity"
                                    style={{ backgroundColor: social.color }}
                                >
                                    {social.name === "facebook" ? (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.388 14.185 5 15.324 5H18V0h-4.26c-3.153 0-5.74 2.5-5.74 5.636V8z" />
                                        </svg>
                                    ) : social.name === "instagram" ? (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                    ) : (
                                        <span className="text-[14px]">𝕏</span>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                        <h4 className="text-[#1E3A8A] font-bold text-[16px] uppercase tracking-wide">Quick Link</h4>
                        <nav className="flex flex-col space-y-3">
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
                                    className="text-gray-600 hover:text-[#1E3A8A] text-[15px] font-medium transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Get In Touch */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                        <h4 className="text-[#1E3A8A] font-bold text-[16px] uppercase tracking-wide">Get In Touch</h4>
                        <div className="flex flex-col space-y-6">
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                                <div className="text-[#1E3A8A] mt-1">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                                <p className="text-gray-600 text-[15px] max-w-[200px] leading-snug">
                                    162 Durham Street<br />
                                    Tauranga Bay of Plenty
                                </p>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                                <div className="text-[#1E3A8A] mt-1">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                </div>
                                <p className="text-gray-600 text-[18px] font-bold">07 571 2279</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Separator */}
                <div className="w-full h-px bg-gray-300 mb-8"></div>

                {/* Locations and Copyright */}
                <div className="text-center space-y-4">
                    <p className="text-gray-600 text-[13px] md:text-[14px] leading-relaxed max-w-[1000px] mx-auto">
                        Tauranga | Papamoa | Mount Maunganui | Omokoroa | Katikati | Omanawa | Ohauiti | Te Puna | Te Puke | BOP | Bay of Plenty © 2018 - 2025 Bay Ultra Dry. 162 Durham Street, Tauranga, Bay of Plenty 07 571 2279. Powered by Web Genius. Page: Carpet Cleaning Tauranga, Mt Maunganui, Papamoa, Bay of Plenty - Last updated: 9th November, 2025 Site Map | Links to other quality businesses.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
