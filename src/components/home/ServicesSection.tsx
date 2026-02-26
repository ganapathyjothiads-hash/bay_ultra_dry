"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const serviceCards = [
    {
        title: "Carpet Cleaning",
        description: "Professional deep cleaning for all types of carpets, removing stains and allergens.",
        image: "/assets/images/service-carpet.jpg",
        href: "/carpet-cleaning",
    },
    {
        title: "Upholstery Cleaning",
        description: "Specialized care for your furniture, restoring its beauty and extending its life.",
        image: "/assets/images/service-upholstery.jpg",
        href: "/upholstery-cleaning",
    },
    {
        title: "Flood Restoration",
        description: "24/7 emergency response for water damage, minimizing impact and restoring your space.",
        image: "/assets/images/service-flood.jpg",
        href: "/flood-restoration",
    }
];

const ServicesSection = () => {
    return (
        <section className="w-full py-24 bg-[#FFFDE7]">
            <div className="max-w-[1440px] mx-auto px-8 md:px-16">
                <div className="space-y-4 mb-16 text-center">
                    <span className="text-[#FBA41C] font-bold text-sm uppercase tracking-[0.2em]">What we do</span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900">Our Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {serviceCards.map((service, index) => (
                        <Link
                            href={service.href}
                            key={index}
                            className="group bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="relative h-[250px] w-full">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors duration-500"></div>

                                {/* Decorative circle */}
                                <div className="absolute -bottom-6 right-8 w-12 h-12 bg-[#FBA41C] rounded-full border-4 border-white z-10 shadow-lg group-hover:scale-125 transition-transform duration-500"></div>
                            </div>

                            <div className="p-10 space-y-4">
                                <h3 className="text-2xl font-black text-gray-900 group-hover:text-[#2B59C3] transition-colors">{service.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">{service.description}</p>
                                <div className="pt-4 flex items-center gap-2 text-[#2B59C3] font-bold uppercase text-xs tracking-[0.1em]">
                                    Discover More
                                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
