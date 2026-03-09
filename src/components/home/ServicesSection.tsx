"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const serviceCardsData = [
    {
        title: "Carpet Cleaning",
        description: "See our qualified residential and commercial carpet cleaners for effective dirt removal on carpet and rugs and specialist stain removal for a range of spot stains.",
        image: "/assets/images/carpet_cleaning.png",
    },
    {
        title: "Upholstery Cleaning",
        description: "Professional upholstery cleaning and mattress cleaning will give your home a new lease of life. And our team can get your car upholstery looking like new as well.",
        image: "/assets/images/upeholstery_cleaning.png",
    },
    {
        title: "Flood Restoration",
        description: "Flooded your floors? Get help fast with Bay Ultra Dry's affordable flood restoration services; guaranteed to restore your water damaged carpet and floor.",
        image: "/assets/images/flood_restoration1.png",
    }
];

// Duplicate cards to enable slider looping/flowing visuals
// const serviceCards = [...serviceCardsData, ...serviceCardsData];

const ServicesSection = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // const scrollNext = () => {
    //     if (scrollContainerRef.current) {
    //         const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    //         const maxScroll = scrollWidth - clientWidth;

    //         // Loop back to start if at the end
    //         if (scrollLeft >= maxScroll - 10) {
    //             scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    //         } else {
    //             scrollContainerRef.current.scrollBy({ left: clientWidth / 1.5, behavior: 'smooth' });
    //         }
    //     }
    // };

    // const scrollPrev = () => {
    //     if (scrollContainerRef.current) {
    //         const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    //         // Loop back to end if at the start
    //         if (scrollLeft <= 10) {
    //             const maxScroll = scrollWidth - clientWidth;
    //             scrollContainerRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' });
    //         } else {
    //             scrollContainerRef.current.scrollBy({ left: -(clientWidth / 1.5), behavior: 'smooth' });
    //         }
    //     }
    // };

    useEffect(() => {
        if (isHovered) return;
        // const interval = setInterval(() => {
        //     scrollNext();
        // }, 4000);
        // return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <section className="relative w-full bg-[#FFF1A4] overflow-hidden py-12 md:py-24 px-6 md:px-12 lg:px-20 min-h-screen flex items-center">
            {/* Background Wavy Lines */}
            <div className="absolute top-0 right-0 w-[50%] h-[400px] md:w-[43%] md:h-[600px] opacity-80 pointer-events-none">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt="Background wavy lines"
                    fill
                    className="object-contain object-right-top"
                    priority
                />
            </div>
            <div className="absolute bottom-0 left-0 w-[50%] h-[400px] md:w-[43%] md:h-[600px] opacity-80 pointer-events-none rotate-180">
                <Image
                    src="/assets/images/Service_Frame.png"
                    alt="Background wavy lines"
                    fill
                    className="object-contain object-right-top"
                />
            </div>

            <div className="max-w-[1400px] mx-auto w-full relative z-10 px-4">
                {/* Header section - Left Aligned with Right Aligned Navigation */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="flex flex-row items-end justify-between mb-10 md:mb-14"
                >
                    <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="relative w-[36px] h-[36px]">
                                <Image  
                                    src="/assets/icons/Star_3.png"
                                    alt="Services Icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-[#1A4299] font-semibold text-[18px]">Services</span>
                        </div>
                        <h2 className="text-[28px] md:text-[42px] xl:text-[52px] font-[400] leading-[1.2] text-[#304462] tracking-tight">
                            Our Services
                        </h2>
                    </div>

                    {/* Navigation Buttons (Desktop) */}
                    {/* <div className="hidden md:flex items-center gap-4 mb-2">
                        <button
                            onClick={scrollPrev}
                            className="w-[50px] h-[50px] rounded-full bg-[#82A8FF] flex items-center justify-center text-white hover:bg-[#6FA0F5] transition-colors shadow-sm active:scale-95"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-[50px] h-[50px] rounded-full bg-[#11317A] flex items-center justify-center text-white hover:bg-[#0c245c] transition-colors shadow-sm active:scale-95"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </div> */}
                </div>

                {/* Cards Slider */}
                {/* <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                    className="w-full relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        // ref={scrollContainerRef}
                        className="flex gap-6 md:gap-8"
                        // style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {serviceCards.map((service, index) => (
                            <div
                                key={index}
                                // Card layout settings
                                className="snap-start shrink-0 w-[calc(100vw-48px)] sm:w-[calc(50vw-40px)] lg:w-[calc(33.333%-22px)] group relative bg-white rounded-[28px] overflow-visible shadow-sm flex flex-col h-full border border-gray-100"
                            >
                                <div className="relative h-[250px] md:h-[280px] w-full overflow-hidden rounded-[28px]">
                                    <div className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-125">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                                </div>

                                <div className="relative p-7 flex flex-col flex-grow bg-white rounded-b-[28px]">
                                    <div className="absolute -top-[50px] right-6 w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center z-20">
                                        <div className="w-[65px] h-[65px] bg-[#F5A51C] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#E8950B] transition-colors">
                                            <ArrowRight
                                                className="text-white w-8 h-8 transition-transform duration-[600ms] ease-out group-hover:-rotate-45"
                                                strokeWidth={2.5}
                                            />
                                        </div>
                                    </div>

                                    <h3 className="text-[24px] md:text-[26px] font-bold text-[#1A4299] mb-4 pr-16 tracking-tight leading-tight mt-1 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#2C2C2C] leading-[1.65] text-[15px] md:text-[15px] font-medium border-t border-transparent transition-all">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                    className="w-full relative"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {serviceCardsData.map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-[28px] overflow-visible shadow-sm flex flex-col border border-gray-100"
                            >
                                {/* Image */}
                                <div className="relative h-[250px] md:h-[280px] w-full overflow-hidden rounded-[28px]">
                                    <div className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-125">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                                </div>

                                {/* Content */}
                                <div className="relative p-7 flex flex-col flex-grow bg-white rounded-b-[28px]">
                                    <div className="absolute -top-[50px] right-6 w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center z-20">
                                        <div className="w-[65px] h-[65px] bg-[#F5A51C] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#E8950B] transition-colors">
                                            <ArrowRight
                                                className="text-white w-8 h-8 transition-transform duration-[600ms] ease-out group-hover:-rotate-45"
                                                strokeWidth={2.5}
                                            />
                                        </div>
                                    </div>

                                    <h3 className="text-[24px] md:text-[26px] font-bold text-[#1A4299] mb-4 pr-16 tracking-tight leading-tight mt-1">
                                        {service.title}
                                    </h3>

                                    <p className="text-[#2C2C2C] leading-[1.65] text-[13px] font-medium">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation (Visible only on small screens) */}
                {/* <div className="flex md:hidden items-center justify-center gap-4 mt-10 z-20 relative">
                    <button
                        onClick={scrollPrev}
                        className="w-[50px] h-[50px] rounded-full bg-[#82A8FF] flex items-center justify-center text-white transition-colors shadow-sm active:scale-95"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-[50px] h-[50px] rounded-full bg-[#11317A] flex items-center justify-center text-white transition-colors shadow-sm active:scale-95"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                </div> */}
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default ServicesSection;
