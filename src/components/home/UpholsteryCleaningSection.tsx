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

const UpholsteryCleaningSection = () => {
  const features = [
    {
      title: "Residential Upholstery:",
      description: "Couches, armchairs, dining chairs, cushions, and headboards."
    },
    {
      title: "Commercial Settings:",
      description: "Cinemas, public transport, offices, and more."
    },
    {
      title: "Targeted Treatments:",
      description: "Effective removal of stubborn stains, pet odours, and allergens."
    }
  ];

  return (
    <section
      className="w-full overflow-hidden relative bg-[linear-gradient(90deg,#FBF0A6_0%,#C3E985_45%,#44A4F6_100%)] lg:bg-[linear-gradient(90deg,#44A4F6_0%,#C3E985_45%,#FBF0A6_100%)]"
    >
      <div className="w-full flex flex-col lg:flex-row items-stretch lg:items-center pt-0 pb-8 lg:py-16">

        {/* VIDEO SIDE */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="w-full lg:w-[46%] h-[320px] lg:h-[480px] relative lg:shadow-2xl lg:rounded-r-[20px] overflow-hidden"
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
                "linear-gradient(90deg,#44A4F6 0%,#44A4F6 40%,#C3E985 70%,#FBF0A6 90%,rgba(251,240,166,0) 100%)"
            }}
          />

          {/* Video */}
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: easing }}
            className="w-full h-full object-cover lg:rounded-r-[20px]"
          >
            <source
              src="/assets/video/Upholstery-Cleaning-section.mp4"
              type="video/mp4"
            />
          </motion.video>

          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>

        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-[54%] flex flex-col justify-center px-4 md:px-12 lg:px-[60px] xl:px-[80px] pt-8 lg:pt-0"
        >
          <div>

            <motion.div variants={fadeUp} className="mb-4 lg:mb-5">

              <h2 className="text-[#1A1A1A] text-[26px] md:text-[46px] lg:text-[48px] font-[500] lg:font-[400] leading-[1.05] mb-3 lg:mb-6 tracking-tighter">
                Upholstery Cleaning
              </h2>

              <div className="space-y-2 mb-4">

                <motion.p
                  variants={fadeUp}
                  className="text-[#1A1A1A] text-[14px] md:text-[15px] font-medium leading-[1.6] max-w-[700px]"
                >
                  Breathe new life into your furniture. Our professional upholstery cleaning revives your favourite pieces, leaving them fresh, clean, and free from allergens and odours.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="text-[#1A1A1A] text-[14px] md:text-[15px] font-medium leading-[1.6] max-w-[700px]"
                >
                  Using fabric-safe, powerful products, we deliver a deep clean that protects your investment and your well-being.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="text-[#1A1A1A] text-[14px] md:text-[13px] font-medium leading-[1.6] max-w-[700px]"
                >
                  We gently yet powerfully clean a wide range of fabrics and materials:
                </motion.p>

              </div>

            </motion.div>

            {/* FEATURES */}
            <motion.div
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 lg:gap-x-4 lg:gap-y-3 max-w-[950px]"
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <ServiceFeatureCard
                    title={feature.title}
                    description={feature.description}
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

export default UpholsteryCleaningSection;