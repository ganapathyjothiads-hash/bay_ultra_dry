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

const FloodRestorationSection = () => {
  const features = [
    "Rapid Water Extraction & Drying",
    "Advanced Dehumidification & Odour Removal",
    "Comprehensive drying of carpets, underlay, and structures",
    "Thorough Cleaning & Sanitisation of affected areas"
  ];

  return (
    <section
      className={`w-full overflow-hidden relative bg-[linear-gradient(90deg,#FFF8AA_0%,#C0E683_50%,#2B97FB_100%)] lg:bg-[linear-gradient(90deg,#FFF8AA_5.05%,#C0E683_54.35%,#2B97FB_100%)]`}
    >
      <div
        className={`w-full flex flex-col lg:flex-row items-stretch lg:items-center pt-0 pb-8 lg:py-14`}
      >

        {/* VIDEO SIDE */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className={`w-full lg:w-[48%] h-[320px] md:h-[400px] lg:h-[480px] relative lg:shadow-2xl lg:rounded-r-[20px] overflow-hidden`}
        >

          {/* Cinematic Wipe Reveal */}
          <motion.div
            initial={{ x: "0%" }}
            whileInView={{ x: "-110%" }}
            viewport={{ once: true }}
            transition={{
              duration: 2.4,
              delay: 0.1,
              ease: easing
            }}
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg,#2B97FB 0%,#2B97FB 40%,#C0E683 70%,#FFF8AA 90%,rgba(255,248,170,0) 100%)"
            }}
          />

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover lg:rounded-r-[10px]"
          >
            <source src="/assets/video/24-7-Flood-Restoration-section-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className={`w-full lg:w-[52%] flex flex-col justify-center px-4 md:px-12  lg:pr-20 pt-8 lg:pt-0 lg:pb-2`}
        >
          <div>

            <motion.div variants={fadeUp} className="mb-4 lg:mb-6">

              <h2 className="font-display text-[#1D1D1D] text-[25px] md:text-[54px] lg:text-[49px] font-[400] leading-[1.05] mb-4 lg:mb-6 tracking-tighter flex items-center lg:block">
                <span className="text-[#1A4299] mr-1 lg:mr-2">24/7</span>
                Flood Restoration
              </h2>

              <div className="space-y-4 lg:space-y-5 mb-8 lg:mb-12">

                <motion.p
                  variants={fadeUp}
                  className="text-[#2C2C2C] text-[17px] md:text-[15px] font-medium leading-[1.6] max-w-[850px]"
                >
                  When flooding strikes, every minute counts. Your quick action and our immediate response are critical to preventing long-term damage and mould.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="text-[#2C2C2C] text-[14px] md:text-[15px] font-medium leading-[1.6] max-w-[850px]"
                >
                  Our Tauranga-based emergency team is on call 24/7—including weekends and public holidays. We arrive fast to extract water, thoroughly dry all affected areas, and restore your property.
                </motion.p>

              </div>

            </motion.div>

            {/* FEATURE GRID */}
            <motion.div
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 lg:gap-x-6 lg:gap-y-5 max-w-[1050px]"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <ServiceFeatureCard
                    title={feature}
                    className="!border-none"
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

export default FloodRestorationSection;