"use client";

import React from "react";

const AboutUsHero: React.FC = () => {
    const title = (
        <>About&nbsp;✨&nbsp;Bay Ultra Dry,Your Local <br />Tauranga Cleaning Experts</>
    );
    const subtitle =
        "A locally owned and highly rated Tauranga business committed to reliable, quality service.";
    const description = undefined;
    const bgImage = "/assets/images/clean_man.png";
    const ringImage = "/assets/images/wavyring.png";
    const verticalText = "About Us";
    return (
        <section className="relative w-full min-h-[600px] h-[80vh] lg:h-screen overflow-hidden bg-[#1C2A45]">
            {/* full‑bleed background */}
            <img
                src={bgImage}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
            />

            {/* gradient overlay */}
            <div
                aria-hidden
                className="absolute inset-0 z-[1] bg-gradient-to-r from-[#142038]/95 via-[#142038]/90 to-[#142038]/20 lg:from-[#142038]/92 lg:via-[#142038]/85 lg:to-[#142038]/05"
            />

            {/* decorative overlay graphic placed top-left */}
            {ringImage && (
                <div
                    aria-hidden
                    className="absolute top-0 left-0 w-[100%] h-[100%] lg:w-[110%] lg:h-[110%] z-80 opacity-100 pointer-events-none -translate-x-[10%] -translate-y-[10%]"
                >
                    <img
                        src={ringImage}
                        alt=""
                        className="w-full h-full object-contain"
                    />
                </div>
            )}

            <div
                aria-hidden
                className="hidden lg:flex"
                style={{
                    position: 'absolute',
                    right: '5px',
                    top: '170px',
                    bottom: 0,
                    width: '100px',
                    zIndex: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                    overflow: 'visible',
                }}
            >
                <div
                    style={{
                        width: '800px',
                        height: '100px',
                        transform: 'rotate(90deg)',
                        transformOrigin: 'center center',
                        fontSize: '90px',
                        fontFamily: "'Aksara Bali Galang', sans-serif",
                        fontWeight: 400,
                        fontStyle: 'normal',
                        color: "rgba(37, 99, 235, 0.8)",
                        opacity: 1,
                        whiteSpace: 'nowrap',
                        lineHeight: '100px',
                        textAlign: 'center',
                        letterSpacing: '0.01em',
                        marginLeft: '0px',
                    }}
                >
                    {verticalText}
                </div>
            </div>

            {/* textual content */}
            <div className="absolute inset-0 z-80 flex flex-col justify-center px-6 md:px-12 lg:px-24 text-[#304462]">
                <h1 className="text-[36px] md:text-[48px] lg:text-[px] font-bold leading-tight mb-4">
                    {title}
                </h1>

                {subtitle && (
                    <p className="text-[18px] md:text-[16px] mb-3 font-semibold text-[#2c2c2c]">
                        {subtitle}
                    </p>
                )}

                {description && (
                    <p className="text-[16px] md:text-[18px] max-w-[600px] text-[#626880]">
                        {description}
                    </p>
                )}
            </div>

            <style jsx>{`
                @keyframes spinSlow {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spinSlow 20s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default AboutUsHero;
