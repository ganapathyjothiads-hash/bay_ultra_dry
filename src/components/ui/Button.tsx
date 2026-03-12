"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "px-9 py-3.5 rounded-full font-bold text-[14px] uppercase tracking-wide flex items-center justify-center gap-2 relative overflow-hidden group transition-transform active:scale-95";

  const variants = {
    primary:
      "bg-[#2B59C3] text-white shadow-[0_4px_12px_rgba(43,89,195,0.25)]",
    secondary:
      "bg-[#FBA41C] hover:bg-[#E89512] text-white shadow-[0_4px_12px_rgba(251,164,28,0.25)]",
    accent:
      "bg-white hover:bg-gray-50 text-[#2B59C3] shadow-[0_4px_12px_rgba(0,0,0,0.1)]",
    outline:
      "bg-transparent border-2 border-white/20 hover:border-white/40 text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Curved Hover Background (only for primary) */}
      {variant === "primary" && (
        <span
          className="
            absolute
            left-1/2
            bottom-0
            w-[160%]
            h-[220%]
            -translate-x-1/2
            translate-y-[100%]
            rounded-[50%]
            bg-[#FFF1A4]
            transition-transform
            duration-[1000ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            group-hover:translate-y-[10%]
          "
        />
      )}

      {/* Button Content */}
      <span
        className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${variant === "primary" ? "group-hover:text-[#304462]" : ""
          }`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;