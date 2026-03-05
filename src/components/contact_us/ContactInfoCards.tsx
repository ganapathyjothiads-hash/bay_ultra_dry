"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfoCards = () => {
    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6 text-[#005D38]" />,
            label: "Phone Number",
            value: "07 571 2279",
            href: "tel:075712279",
            color: "#005D38"
        },
        {
            icon: <Mail className="w-6 h-6 text-[#005D38]" />,
            label: "Email ID",
            value: "info@gmail.com",
            href: "mailto:info@gmail.com",
            color: "#005D38"
        },
        {
            icon: <MapPin className="w-6 h-6 text-[#005D38]" />,
            label: "Address",
            value: "162 Durham Street Tauranga Bay of Plenty",
            href: "https://maps.google.com/?q=162+Durham+Street+Tauranga+Bay+of+Plenty",
            color: "#005D38"
        }
    ];

    return (
        <div className="relative z-20 -mt-[100px] max-w-[1240px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[20px] p-8 shadow-[0_4px_30px_rgba(0,0,0,0.08)] flex flex-col items-center text-center transition-transform hover:-translate-y-1"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <h3 className="text-[#1e293b] font-bold text-xl mb-6">{info.label}</h3>
                        <div className="flex items-center gap-3">
                            {info.icon}
                            <a
                                href={info.href}
                                className="text-[#005D38] font-bold text-[15px] hover:text-[#16a34a] transition-colors"
                                target={info.label === "Address" ? "_blank" : undefined}
                                rel={info.label === "Address" ? "noopener noreferrer" : undefined}
                            >
                                {info.value}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactInfoCards;
