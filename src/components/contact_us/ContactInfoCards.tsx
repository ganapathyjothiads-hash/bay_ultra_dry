"use client";

import React from "react";

const ContactInfoCards = () => {
    const contactInfo = [
        {
            icon: <img src="/assets/icons/phone.png" alt="Phone" />,
            label: "Phone Number",
            value: "07 571 2279",
            href: "tel:075712279",
            color: "#005D38"
        },
        {
            icon: <img src="/assets/icons/Mail.png" alt="Mail" />,
            label: "Email ID",
            value: "info@gmail.com",
            href: "mailto:info@gmail.com",
            color: "#005D38"
        },
        {
            icon: <img src="/assets/icons/Location.png" alt="Location" />,
            label: "Address",
            value: "162 Durham Street Tauranga Bay of Plenty",
            href: "https://maps.google.com/?q=162+Durham+Street+Tauranga+Bay+of+Plenty",
            color: "#005D38"
        }
    ];

    return (
        <div className="relative z-20 mt-[18px] sm:mt-[25px] md:mt-[40px] max-w-[1100px] px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactInfo.map((info, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[20px] p-8 shadow-[0px_2px_15px_0px_#00000040] flex flex-col justify-between items-center text-center transition-transform hover:-translate-y-1 w-full"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <h3 className="font-display text-[#304462] text-[16px] lg:text-[20px] font-medium mb-4 leading-[1.2]">{info.label}</h3>
                        <div className="flex items-center gap-3">
                            {info.icon}
                            <a
                                href={info.href}
                                className="text-[#005D38] font-sans text-[14px] lg:text-[16px] font-medium hover:text-[#16a34a] transition-colors text-left"
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
