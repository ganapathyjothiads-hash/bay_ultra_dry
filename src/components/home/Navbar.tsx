import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { label: "Home", href: "/", active: true },
        { label: "About Us", href: "/about" },
        { label: "Flood Restoration", href: "/flood-restoration" },
        { label: "Carpet Cleaning", href: "/carpet-cleaning" },
        { label: "Upholstery Cleaning", href: "/upholstery-cleaning" },
        { label: "Contact Us", href: "/contact" },
    ];

    return (
        <>
            <div
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
                            justifyContent: 'space-between',
                            flex: 1,
                            paddingRight: '24px',
                        }}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: link.active ? 700 : 500,
                                        color: link.active ? '#2563EB' : '#374151',
                                        textDecoration: link.active ? 'underline' : 'none',
                                        textUnderlineOffset: '4px',
                                        textDecorationThickness: '2px',
                                        whiteSpace: 'nowrap',
                                        letterSpacing: '0.01em',
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
                                color: 'white',
                                fontSize: '14px',
                                fontWeight: 700,
                                padding: '10px 24px',
                                borderRadius: '100px',
                                whiteSpace: 'nowrap',
                                textDecoration: 'none',
                                flexShrink: 0,
                                letterSpacing: '0.02em',
                                boxShadow: '0 2px 8px rgba(245, 158, 11, 0.3)',
                                transition: 'background 0.2s ease',
                            }}
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
                    {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
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
                                className={`text-2xl font-bold tracking-tight py-1 inline-block ${link.active ? 'text-blue-600 underline underline-offset-8 decoration-2' : 'text-gray-900 transition-colors hover:text-blue-600'
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

                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center text-lg font-bold shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
                        >
                            Enquire Now
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
