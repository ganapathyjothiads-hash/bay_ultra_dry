import React from "react";

const UpholsteryHero = () => {
    return (
        <div className="w-full bg-white relative font-sans">
            {/* The dark hero section with V clip-path */}
            <section
                className="relative w-full min-h-[85vh] lg:min-h-[700px] bg-[#1B1D33] flex items-center
                   [clip-path:polygon(0%_0%,100%_0%,100%_75%,50%_100%,0%_75%)]
                   lg:[clip-path:polygon(0%_0%,100%_0%,100%_80%,50%_100%,0%_80%)]"
            >
                {/* Background Image & Overlays */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                        src="/assets/images/upholsteryCleaning/Upholstery_Bg.png"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                    />
                    <div
                        aria-hidden
                        className="absolute inset-0 z-[1] w-full h-full
                       [background:linear-gradient(84.38deg,#1B1D33_23.53%,rgba(27,29,51,0.537107)_78.52%,rgba(27,29,51,0)_97.93%)]"
                    />
                </div>
                {/* Hero Text Content */}
                <div className="relative z-[10] max-w-[1440px] mx-auto px-6 md:px-16 lg:px-20 w-full flex flex-col items-center md:items-start pt-[40%] pb-[50%] sm:pt-[20%] sm:pb-[30%] lg:pt-0 lg:pb-0">
                    <div className="w-full text-left">
                        <h1 
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            className="text-white font-medium text-[27px] sm:text-[38px] md:text-[42px] lg:text-[60px] leading-[1.2] md:leading-[1.2] mb-5 lg:mb-8 tracking-tight "
                        >
                            Professional Upholstery Cleaning <br className="hidden md:block" />
                            In Tauranga Sofas, Chairs & More
                        </h1>
                        <p 
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            className="text-[E8E8E8] text-[17px] md:text-[17px] font-medium max-w-[875px] leading-relaxed opacity-90 mx-auto md:mx-0"
                        >
                            Breathe new life into your furniture for a fresher, cleaner, and allergen-free home.
                        </p>
                    </div>
                </div>

                {/* Yellow Decorative Frame */}
                {/* Mobile & Tablet Version */}
                <img
                    src="/assets/images/upholsteryCleaning/Rectangle 8992.png"
                    alt="Yellow Decorative Shape"
                    className="absolute z-[3] pointer-events-none lg:hidden
                        bottom-[-12%] -left-[-2%] w-[75%] h-[40%] object-fill rotate-[353deg]"
                    referrerPolicy="no-referrer"
                />
                {/* Desktop Version */}
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_frame2.png"
                    alt="Yellow Decorative Shape"
                    className="absolute z-[3] pointer-events-none hidden lg:block
                        lg:bottom-[-6%] lg:left-[5px] lg:w-[58%] lg:h-[35%] lg:rotate-[352deg]"
                    referrerPolicy="no-referrer"
                />

                {/* Blue Decorative Frame */}
                <img
                    src="/assets/images/upholsteryCleaning/Upholstery_frame.png"
                    alt="Blue Decorative Shape"
                    className="absolute z-[4] pointer-events-none
                        bottom-[-8%] left-[-20%] w-[100%] h-[18%] object-fill
                        lg:bottom-[-12%] lg:left-auto lg:right-[24%] lg:w-[80%] lg:h-[18%]"
                    referrerPolicy="no-referrer"
                />
            </section>
        </div>
    );
};

export default UpholsteryHero;
