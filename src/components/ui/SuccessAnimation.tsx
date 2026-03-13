"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SuccessAnimationProps {
    isOpen: boolean;
    message?: string;
    onClose: () => void;
}

const SuccessAnimation = ({ isOpen, message = "Submitted Successfully!", onClose }: SuccessAnimationProps) => {
    useEffect(() => {
        if (isOpen) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            
            const timer = setTimeout(() => {
                onClose();
            }, 3500);
            
            return () => {
                clearTimeout(timer);
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative bg-white rounded-[24px] shadow-2xl p-8 md:p-12 flex flex-col items-center justify-center max-w-sm w-full mx-auto"
                    >
                        {/* Animated Circle & Checkmark */}
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-6 flex items-center justify-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                                className="absolute inset-0 bg-[#002F74] rounded-full"
                            />
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="relative z-10 w-12 h-12 sm:w-14 sm:h-14"
                            >
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                                    d="M20 6L9 17l-5-5"
                                />
                            </motion.svg>
                        </div>
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.4 }}
                            className="font-display text-[24px] md:text-[28px] font-semibold text-[#304462] text-center leading-tight mb-2"
                        >
                            Success!
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.4 }}
                            className="text-[#1D1D1D] text-center font-medium text-[15px] md:text-[16px] opacity-80"
                        >
                            {message}
                        </motion.p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SuccessAnimation;
