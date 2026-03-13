"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceFeatureCard from "../ui/ServiceFeatureCard";

const easing = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: easing
    }
  }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.15, filter: "blur(4px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.6,
      ease: easing
    }
  }
};

const CarpetCleaningSection = () => {
    const features = [
        { title: "Residential Cleaning:", description: "Revitalise your home's carpets for a healthier living space." },
        { title: "Commercial Cleaning:", description: "Large-scale solutions for offices and facilities with minimal downtime." },
        { title: "Stain & Odour Elimination:", description: "Targeted treatments to remove stubborn spots and unpleasant smells." },
        { title: "Eco-Friendly Solutions:", description: "Pet- and child-safe cleaning products for your peace of mind." }
    ];

    return (
        <section
            className={`w-full overflow-hidden relative bg-white`}
        >
            <div className={`w-full flex flex-col lg:flex-row-reverse items-stretch lg:items-center pt-0 pb-12 lg:py-10`}>
                {/* VIDEO SIDE */}
                <motion.div
                    variants={imageReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-120px" }}
                    className={`w-full lg:w-[42%] h-[380px] md:h-[480px] lg:h-[591px] relative lg:shadow-4xl lg:rounded-l-[20px] overflow-hidden`}
                >

                    {/* Cinematic Wipe Reveal */}
                    <motion.div
                        initial={{ x: "0%" }}
                        whileInView={{ x: "110%" }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 2.4,
                            delay: 0.1,
                            ease: easing
                        }}
                        className="absolute inset-0 z-20 pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(270deg,#FFFFFF 0%,#FFFFFF 40%,#F5F5F5 70%,#E8E8E8 90%,rgba(255,255,255,0) 100%)"
                        }}
                    />

                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover lg:rounded-l-[20px]"
                    >
                        <source src="/assets/video/Carpet-Cleaning-section-video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

                </motion.div>

                {/* TEXT SIDE */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className={`w-full lg:w-[58%] flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-8 lg:pt-0`}
                >
                    <div>

                        <motion.div variants={fadeUp} className="mb-8 lg:mb-10">
                            <h2 className="text-[#304462] text-[36px] md:text-[54px] lg:text-[49px] font-[400]  leading-[1.05] mb-3 lg:mb-4 tracking-tighter">
                                Carpet Cleaning
                            </h2>

                            <div className="space-y-4 mb-8">
                                <motion.p
                                    variants={fadeUp}
                                    className="text-[#2C2C2C] text-[16px] md:text-[15px] font-medium leading-[1.6] max-w-[650px]"
                                >
                                    Experience a deeper, faster-drying carpet clean with our powerful industrial-grade equipment. Get back to your routine in hours, not days. Perfect for protecting your home's air quality, refreshing rental properties, and maintaining professional business environments.
                                </motion.p>
                                <motion.p
                                    variants={fadeUp}
                                    className="text-[#1A1A1A]/90 text-[16px] md:text-[15px] font-medium leading-[1.6] max-w-[650px]"
                                >
                                    We work around your schedule, offering after-hours and weekend appointments for your convenience.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* FEATURE GRID */}
                        <motion.div
                            variants={container}
                            className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 lg:gap-y-5 lg:gap-x-6 max-w-[850px]"
                        >
                            {features.map((feature, index) => (
                                <motion.div key={index} variants={fadeUp}>
                                    <ServiceFeatureCard
                                        key={index}
                                        title={feature.title}
                                        description={feature.description}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CarpetCleaningSection;
