"use client";

import React from "react";

const TopBanner = () => {
    return (
        <div className="hidden md:flex w-full justify-center" style={{ position: 'relative', zIndex: 70 }}>
            <div
                style={{
                    background: '#FFF1A4',
                    borderRadius: '0 0 28px 28px',
                    padding: '7px 32px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '520px',
                    maxWidth: '780px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                }}
            >
                <p
                    style={{
                        color: '#1e293b',
                        fontSize: '13px',
                        fontWeight: 500,
                        lineHeight: '1.5',
                        textAlign: 'center',
                        margin: 0,
                        letterSpacing: '0.01em',
                        fontFamily: "Nunito Sans"
                    }}
                >
                    Carpet &amp; upholstery cleaning and flood restoration across Tauranga, Mt Maunganui and the wider Bay of Plenty
                </p>
            </div>
        </div>
    );
};

export default TopBanner;
