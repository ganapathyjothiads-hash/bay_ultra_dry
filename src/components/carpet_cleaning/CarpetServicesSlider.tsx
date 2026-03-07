"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const CarpetServicesSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const baseServices = [
        {
            title: "Residential Carpet & Upholstery Cleaning",
            image: "/assets/images/carpet/Carpet_slider1.png",
        },
        {
            title: "Commercial Carpet & Upholstery Cleaning",
            image: "/assets/images/carpet/Carpet_slider2.png",
        },
        {
            title: "Bond Cleaning",
            image: "/assets/images/carpet/Carpet_slider3.png",
        },
        {
            title: "Pet Stain & Odour Removal",
            image: "/assets/images/carpet/Carpet_slider4.png",
        },
        {
            title: "Eco-Conscious Cleaning Products",
            image: "/assets/images/carpet/Carpet_slider5.png",
        },
    ];

    // const itemsPerView = 3.6;
    // const maxIndex = services.length - 1;

    const [itemsPerView, setItemsPerView] = useState(3);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // const maxIndex = Math.max(0, baseServices.length - Math.ceil(itemsPerView));
    const maxIndex = baseServices.length - Math.ceil(itemsPerView);

    // const handlePrev = () => {
    //     setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    // };

    // const handleNext = () => {
    //     setCurrentIndex((prev) => (prev === baseServices.length - 1 ? 0 : prev + 1));
    // };
    const handleNext = () => {
  setCurrentIndex((prev) =>
    prev >= maxIndex ? 0 : prev + 1
  );
};

const handlePrev = () => {
  setCurrentIndex((prev) =>
    prev <= 0 ? maxIndex : prev - 1
  );
};

//     React.useEffect(() => {
//         const interval = setInterval(() => {
//             handleNext();
//         }, 5000);
//         return () => clearInterval(interval);
//     }, [currentIndex]);
    

//   return () => clearInterval(interval);
// }, [maxIndex]);
React.useEffect(() => {
  const slider = setInterval(() => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  }, 4000);

  return () => clearInterval(slider);
}, [maxIndex]);

    return (
        <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Yellow Glow - Left Side */}
                <img
                    src="/assets/images/carpet/Carpet_DeepY.png"
                    alt=""
                    className="absolute -left-[15%] top-[20%] w-[55%] md:w-[45%] h-auto opacity-70"
                />

                {/* Blue Glow - Right Side */}
                <img
                    src="/assets/images/carpet/Carpet_DeepB.png"
                    alt=""
                    className="absolute -right-[15%] top-[-5%] w-[65%] md:w-[55%] h-auto opacity-60"
                />

                {/* Wavy lines */}
                <img
                    src="/assets/images/carpet/Carpet_wave_Slider.png"
                    alt=""
                    className="absolute w-full h-auto top-[50%] left-0 z-0 opacity-100"
                    style={{ transform: 'translateY(-10%)' }}
                />
            </div>


            <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                {/* Top Descriptive Content (Exactly like the image) */}
                <div className="text-center max-w-[900px] mx-auto mb-16 md:mb-24">
                    <h1 className="text-[#304462] font-display font-normal text-[24px] md:text-[45px] lg:text-[58px] mb-8 leading-tight">
                        Deep Cleaning That Lasts
                    </h1>
                    {/* <p className="text-[#304462] text-[14px] md:text-[20px]">
                        Your carpets put up with a lot daily. We restore them to look, feel, and smell like new again.
                    </p> */}
                    <div className="space-y-6 text-[#304462] text-[14px] md:text-[16px] leading-relaxed max-w-[800px] mx-auto opacity-90">
                        <p>
                            Your carpets put up with a lot daily. We restore them to look, feel, and smell like new again.
                        </p>
                        <p>
                            Using our powerful, fast-drying equipment and safe cleaning solutions, we eliminate deep-seated dirt, stubborn stains, unpleasant odours, and allergens, leaving you with a healthier, fresher space.
                        </p>
                        <p>
                            Whether you need a quick refresh or a comprehensive commercial clean, our local Tauranga team delivers exceptional results you can trust.
                        </p>
                    </div>
                </div>

                {/* Slider Header Section */}

                <div className="flex flex-col md:flex-row items-center md:items-center justify-between mb-16 gap-8">
                    <div className="flex items-center gap-6 flex-1">
                        <h2 className="text-[#304462] font-display font-normal text-[24px] md:text-[44px] lg:text-[55px] leading-[1.1] whitespace-nowrap">
                            Deep Cleaning That Lasts
                        </h2>
                        <div className="hidden md:block h-[1.5px] bg-[#304462] opacity-20 flex-grow mt-2 max-w-[280px]"></div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="hidden lg:flex gap-4 self-end md:self-auto">
                        <button
                            onClick={handlePrev}
                            aria-label="Previous services"
                            className="w-14 h-14 rounded-full bg-[#1e44a3] hover:bg-[#163075] flex items-center justify-center text-white transition-all shadow-lg active:scale-95"
                        >
                            <ChevronLeft size={28} strokeWidth={2.5} />
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Next services"
                            className="w-14 h-14 rounded-full bg-[#1e44a3] hover:bg-[#163075] flex items-center justify-center text-white transition-all shadow-lg active:scale-95"
                        >
                            <ChevronRight size={28} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                {/* Slider Content */}
                <div className="relative overflow-visible pb-12">
                    <div
                        className="flex transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] gap-10"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                            // width: `${(services.length / itemsPerView) * 100}%`,
                        }}
                    >
                        {baseServices.map((service, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex justify-center items-center"
                                // style={{ width: `${100 / baseServices.length}%` }}
                                style={{ width: `${100 / itemsPerView}%` }}
                            >
                                <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden z-20 group">
                                    {/* Main Service Image - Behind */}
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute z-30 pointer-events-none"
                                        style={{
                                            width: '78%',
                                            height: '100%',
                                            top: '65px',
                                            left: '82px',
                                        }}
                                    >
                                        <img
                                            src="/assets/images/carpet/Carpet_Slider_Frame.png"
                                            alt=""
                                            className="w-full h-full object-contain absolute inset-0 opacity-[0.88]"
                                        />
                                        <div className="relative h-full flex items-center justify-start pl-[55px] pt-[20px]">
                                            <div className="flex items-start gap-4">
                                                <div className="w-2.5 h-2.5 rounded-full bg-[#006341] flex-shrink-0 mt-2.5"></div>
                                                <h3 className="text-[#006341] font-sans font-bold text-[15px] md:text-[18px] leading-[1.2] max-w-[210px]">
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex lg:hidden gap-10 justify-center mt-3">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous services"
                        className="w-14 h-14 rounded-full bg-[#1e44a3] hover:bg-[#163075] flex items-center justify-center text-white transition-all shadow-lg active:scale-95"
                    >
                        <ChevronLeft size={28} strokeWidth={2.5} />
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next services"
                        className="w-14 h-14 rounded-full bg-[#1e44a3] hover:bg-[#163075] flex items-center justify-center text-white transition-all shadow-lg active:scale-95"
                    >
                        <ChevronRight size={28} strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CarpetServicesSlider;

