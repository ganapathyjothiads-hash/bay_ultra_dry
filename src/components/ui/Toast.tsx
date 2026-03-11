"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

interface ToastProps {
    message: string;
    type?: "success" | "error";
    onClose: () => void;
}

const Toast = ({ message, type = "success", onClose }: ToastProps) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="fixed bottom-10 right-10 z-[1000] animate-in slide-in-from-right duration-300">
            <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border ${type === "success"
                    ? "bg-white border-green-100 text-green-800"
                    : "bg-white border-red-100 text-red-800"
                }`}>
                {type === "success" ? (
                    <CheckCircle className="text-green-500" size={24} />
                ) : (
                    <XCircle className="text-red-500" size={24} />
                )}
                <p className="font-medium text-[15px]">{message}</p>
                <button
                    onClick={onClose}
                    className="ml-4 hover:opacity-70 transition-opacity"
                >
                    <X size={18} className="text-gray-400" />
                </button>
            </div>
        </div>
    );
};

export default Toast;
