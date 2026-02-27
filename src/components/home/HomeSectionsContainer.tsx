"use client";

import React from "react";
import ServiceSections from "./ServiceSections";

const pageContent = {
    restoration: {
        title: "Flood Restoration",
        highlightPrefix: "24/7",
        description: [
            "When flooding strikes, every minute counts. Your quick action and our immediate response are critical to preventing long-term damage and mould.",
            "Our Tauranga-based emergency team is on call 24/7—including weekends and public holidays. We arrive fast to extract water, thoroughly dry all affected areas, and restore your property."
        ],
        features: [
            "Rapid Water Extraction & Drying",
            "Advanced Dehumidification & Odour Removal",
            "Comprehensive drying of carpets, underlay, and structures",
            "Thorough Cleaning & Sanitisation of affected areas"
        ],
        gifSrc: "/assets/video/Flood_Restoration.gif",
        imagePosition: "left" as const,
        backgroundType: "gradient" as const
    },
    carpet: {
        title: "Carpet Cleaning",
        description: [
            "Experience a deeper, faster-drying carpet clean with our powerful industrial-grade equipment. Get back to your routine in hours, not days. Perfect for protecting your home's air quality, refreshing rental properties, and maintaining professional business environments.",
            "We work around your schedule, offering after-hours and weekend appointments for your convenience."
        ],
        features: [
            "Residential Cleaning: Revitalise your home's carpets for a healthier living space.",
            "Commercial Cleaning: Large-scale solutions for offices and facilities with minimal downtime.",
            "Stain & Odour Elimination: Targeted treatments to remove stubborn spots and unpleasant smells.",
            "Eco-Friendly Solutions: Pet- and child-safe cleaning products for your peace of mind."
        ],
        gifSrc: "/assets/video/Carpet_Cleaning.gif", // Assuming this exists or using placeholder
        imagePosition: "right" as const,
        backgroundType: "white" as const
    },
    upholstery: {
        title: "Upholstery Cleaning",
        description: [
            "Breathe new life into your furniture. Our professional upholstery cleaning revives your favourite pieces, leaving them fresh, clean, and free from allergens and odours.",
            "Using fabric-safe, powerful products, we deliver a deep clean that protects your investment and your well-being.",
            "We gently yet powerfully clean a wide range of fabrics and materials:"
        ],
        features: [
            "Residential Upholstery: Couches, armchairs, dining chairs, cushions, and headboards.",
            "Commercial Settings: Cinemas, public transport, offices, and more.",
            "Targeted Treatments: Effective removal of stubborn stains, pet odours, and allergens."
        ],
        gifSrc: "/assets/video/Upholstery_Cleaning.gif", // Assuming this exists
        imagePosition: "left" as const,
        backgroundType: "gradient" as const
    }
};

const HomeSectionsContainer = () => {
    return (
        <div className="flex flex-col">
            <ServiceSections {...pageContent.restoration} />
            <ServiceSections {...pageContent.carpet} />
            <ServiceSections {...pageContent.upholstery} />
        </div>
    );
};

export default HomeSectionsContainer;
