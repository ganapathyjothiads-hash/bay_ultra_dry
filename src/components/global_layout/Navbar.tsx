"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import ActionButton from "../ui/ActionButton";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Flood Restoration", href: "/flood-restoration" },
        { label: "Carpet Cleaning", href: "/carpet-cleaning" },
        { label: "Upholstery Cleaning", href: "/upholstery-cleaning" },
        { label: "Contact Us", href: "/contact" },
    ];

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href;
    };

    return (
        <>
            {/* <div
                className="hidden lg:block w-full pt-10"
                style={{ padding: '0 16px', position: 'relative', zIndex: 50 }}
            >
                <div
                    style={{
                        maxWidth: '1380px',
                        margin: '0 auto',
                        position: 'relative',
                        height: '62px',
                    }}
                >
                    <Link
                        href="/"
                        style={{
                            position: 'absolute',
                            left: "40px",
                            top: '-50px',
                            width: '160px',
                            height: '100px',
                            display: 'block',
                            zIndex: 10,
                        }}
                    >
                        <Image
                            src="/assets/images/logo.png"
                            alt="Bay Ultra Dry"
                            fill
                            priority
                            style={{ objectFit: 'contain', objectPosition: 'left center' }}
                        />
                    </Link>

                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'white',
                            borderRadius: '100px',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '174px',
                            paddingRight: '8px',
                            gap: '0',
                        }}
                    >
                        <nav style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            flex: 1,
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                            alignContent: 'flex-end',
                            paddingRight: '24px',
                        }}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    style={{
                                        fontFamily: "alt",
                                        fontSize: 'medium',
                                        fontWeight: isActive(link.href) ? 500 : 500,
                                        color: isActive(link.href) ? '#1A4299' : '#333333',
                                        textDecoration: isActive(link.href) ? 'underline' : 'none',
                                        textUnderlineOffset: '2px',
                                        textDecorationThickness: '1px',
                                        whiteSpace: 'nowrap',
                                        letterSpacing: '0%',
                                        lineHeight: '1.5',
                                        padding: '0 2px',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div style={{
                            width: '1px',
                            height: '28px',
                            background: '#e5e7eb',
                            flexShrink: 0,
                            marginRight: '16px',
                        }} />

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            flexShrink: 0,
                            marginRight: '20px',
                        }}>
                            <Image
                                src="/assets/images/Contact_icon.png"
                                alt="Contact"
                                width={42}
                                height={42}
                                priority
                                style={{ objectFit: 'contain' }}
                            />
                            <span
                                style={{
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    color: '#1e293b',
                                    letterSpacing: '0.01em',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                07 571 2279
                            </span>
                        </div>

                        <Link
                            href="/contact"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: '#F59E0B',
                                color: '#1D1D1D',
                                fontSize: '14px',
                                fontWeight: 600,
                                padding: '10px 24px',
                                borderRadius: '100px',
                                whiteSpace: 'nowrap',
                                textDecoration: 'none',
                                flexShrink: 0,
                                letterSpacing: '0%',
                                boxShadow: '0 2px 8px rgba(245, 158, 11, 0.3)',
                                transition: 'background 0.2s ease',
                                lineHeight: "25px"
                            }}
                        >
                            Enquire Now
                        </Link>
                    </div>
                </div>
            </div> */}

            <div className="hidden lg:block w-full px-4 relative z-50">
                <div className="max-w-[1380px] mx-auto relative h-[62px]">

                    <Link
                        href="/"
                        className="absolute left-[40px] -top-[50px] w-[120px] h-[100px] xl:w-[160px] block z-10"
                    >
                        <Image
                            src="/assets/images/logo.png"
                            alt="Bay Ultra Dry"
                            fill
                            priority
                            className="object-contain object-left"
                        />
                    </Link>

                    <div className="absolute inset-0 bg-white rounded-[100px] shadow-[0_4px_24px_rgba(0,0,0,0.10)] flex items-center pl-[174px] pr-2">

                        <nav className="flex items-center justify-evenly flex-1 flex-wrap flex-row content-end pr-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`font-alt text-[13px] xl:text-[16px] font-medium whitespace-nowrap leading-[1.5] px-[2px] tracking-normal
            ${isActive(link.href)
                                            ? "text-[#1A4299] underline underline-offset-[2px] decoration-[1px]"
                                            : "text-[#333333]"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-3 shrink-0 mr-5">
                            <div className="w-[33px] xl:w-[42px] h-[33px] xl:h-[42px] relative">
                                <Image
                                    src="/assets/images/Contact_icon.png"
                                    alt="Contact"
                                    fill
                                    priority
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-[13px] xl:text-[16px] font-semibold text-slate-800 tracking-[0.01em] whitespace-nowrap">
                                07 571 2279
                            </span>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-amber-500 text-[#1D1D1D] text-[13px] xl:text-[14px] font-semibold px-4 py-[8px] xl:px-6 xl:py-[10px] rounded-[100px] whitespace-nowrap shrink-0 tracking-normal shadow-[0_2px_8px_rgba(245,158,11,0.3)] hover:bg-amber-600 transition leading-[25px]"
                        >
                            Enquire Now
                        </Link>

                    </div>
                </div>
            </div>

            <div
                className="lg:hidden w-full flex items-center justify-between bg-white px-5 shadow-lg border-b border-gray-100 sticky top-0 z-[100]"
                style={{ height: '80px' }}
            >
                <Link href="/" className="relative block w-[140px] h-[60px]">
                    <Image
                        src="/assets/images/logo.png"
                        alt="Bay Ultra Dry"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 -mr-2 text-gray-700 transition-colors hover:text-blue-600"
                    aria-label="Toggle Menu"
                >
                    {/* {isMenuOpen ? <X size={32} /> : <Menu size={32} />} */}
                    {isMenuOpen ? (
                        <X size={32} />
                    ) : (
                        <Image
                            src="/assets/images/menu.svg"
                            alt="Menu"
                            width={32}
                            height={32}
                            className="object-contain"
                        />
                    )}
                </button>
            </div>

            <div
                className={`fixed inset-0 z-[90] bg-white transition-all duration-500 ease-in-out lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col h-full pt-24 px-8 pb-10">
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-2xl font-bold tracking-tight py-1 inline-block ${isActive(link.href) ? 'text-blue-600 underline underline-offset-8 decoration-2' : 'text-gray-900 transition-colors hover:text-blue-600'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto pt-10 border-t border-gray-100 flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Call Us Today</p>
                                <p className="text-xl font-bold text-gray-900">07 571 2279</p>
                            </div>
                        </div>

                        <ActionButton
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            variant="amber"
                            className="w-full h-14 !text-white text-lg font-bold"
                        >
                            Enquire Now
                        </ActionButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
