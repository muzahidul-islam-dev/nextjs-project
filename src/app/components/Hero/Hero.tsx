import React from 'react';
import HeroIcon from './../../../assets/hero-icon.png';
import Image from 'next/image';
import SliderBanner from './../../../assets/slider-banner.png'
import { ArrowUpRight } from 'lucide-react';

// Custom Illustration Component to mimic the Line Art style
const DeliveryVehicleIllustration = () => {
    return (
        <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
            <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-sm">
                {/* Ground Line */}
                <line x1="20" y1="280" x2="380" y2="280" stroke="#1a2b3b" strokeWidth="2" strokeLinecap="round" />

                {/* Speed lines */}
                <line x1="340" y1="260" x2="370" y2="260" stroke="#1a2b3b" strokeWidth="1.5" />
                <line x1="330" y1="270" x2="360" y2="270" stroke="#1a2b3b" strokeWidth="1.5" />

                {/* Vehicle Body (Main Shape) */}
                {/* Cabin */}
                <path d="M100,200 L150,120 L220,120 L220,250 L100,250 Z" fill="white" stroke="#1a2b3b" strokeWidth="2" strokeLinejoin="round" />
                {/* Front Shield */}
                <path d="M100,200 L100,150" fill="none" stroke="#1a2b3b" strokeWidth="2" />
                <path d="M60,180 L80,180 M60,200 L80,200 M60,220 L80,220" stroke="#1a2b3b" strokeWidth="1.5" /> {/* Grill lines */}

                {/* Driver Body */}
                <circle cx="190" cy="140" r="15" fill="white" stroke="#1a2b3b" strokeWidth="2" /> {/* Head */}
                <path d="M185,135 L195,135" stroke="#1a2b3b" strokeWidth="2" /> {/* Eyes/Cap brim */}
                <path d="M180,125 Q190,115 200,125" fill="#C6EA65" stroke="#1a2b3b" strokeWidth="2" /> {/* Cap */}

                {/* Driver Arm & Shirt */}
                <path d="M190,155 L160,180 L140,175" fill="#C6EA65" stroke="#1a2b3b" strokeWidth="2" strokeLinejoin="round" />
                <circle cx="140" cy="175" r="5" fill="white" stroke="#1a2b3b" strokeWidth="2" /> {/* Hand on wheel */}

                {/* Steering Wheel */}
                <path d="M130,165 L150,185" stroke="#1a2b3b" strokeWidth="3" strokeLinecap="round" />

                {/* Seat/Legs */}
                <path d="M190,155 L190,210 L150,210" fill="white" stroke="#1a2b3b" strokeWidth="2" /> {/* Body/Legs */}
                <path d="M190,210 L210,210 L210,250 L170,250 L170,210" fill="#1a1a1a" /> {/* Seat Box */}

                {/* Cargo Area */}
                <rect x="230" y="100" width="50" height="50" fill="#1a1a1a" stroke="#1a2b3b" strokeWidth="2" /> {/* Top Box Black */}
                <rect x="235" y="110" width="20" height="2" fill="white" /> {/* Box Label */}

                <rect x="230" y="150" width="60" height="40" fill="white" stroke="#1a2b3b" strokeWidth="2" /> {/* Middle Box White */}
                <line x1="230" y1="170" x2="290" y2="170" stroke="#1a2b3b" strokeWidth="1" />

                <rect x="230" y="190" width="60" height="40" fill="#C6EA65" stroke="#1a2b3b" strokeWidth="2" /> {/* Bottom Box Green */}
                <circle cx="270" cy="210" r="4" fill="none" stroke="#1a2b3b" strokeWidth="1.5" />

                {/* Wheels */}
                <g transform="translate(80, 250)">
                    <circle cx="0" cy="0" r="25" fill="#C6EA65" stroke="#1a2b3b" strokeWidth="2" />
                    <circle cx="0" cy="0" r="8" fill="white" stroke="#1a2b3b" strokeWidth="2" />
                    <line x1="-8" y1="0" x2="8" y2="0" stroke="#1a2b3b" strokeWidth="1.5" />
                    <line x1="0" y1="-8" x2="0" y2="8" stroke="#1a2b3b" strokeWidth="1.5" />
                </g>
                <g transform="translate(290, 250)">
                    <circle cx="0" cy="0" r="25" fill="#C6EA65" stroke="#1a2b3b" strokeWidth="2" />
                    <circle cx="0" cy="0" r="8" fill="white" stroke="#1a2b3b" strokeWidth="2" />
                    <line x1="-8" y1="0" x2="8" y2="0" stroke="#1a2b3b" strokeWidth="1.5" />
                    <line x1="0" y1="-8" x2="0" y2="8" stroke="#1a2b3b" strokeWidth="1.5" />
                </g>
            </svg>
        </div>
    );
};

const RunningManIllustration = () => {
    return (
        <svg width="60" height="60" viewBox="0 0 100 100" className="mb-4 opacity-90">
            {/* Simple Stick figure running with box */}
            <line x1="10" y1="80" x2="90" y2="80" stroke="#1a2b3b" strokeWidth="1" />

            {/* Legs */}
            <path d="M40,75 L45,60 L35,50" fill="none" stroke="#1a2b3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M45,60 L55,75" fill="none" stroke="#1a2b3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Body */}
            <line x1="45" y1="60" x2="48" y2="40" stroke="#1a2b3b" strokeWidth="2" strokeLinecap="round" />

            {/* Head */}
            <circle cx="48" cy="35" r="4" fill="white" stroke="#1a2b3b" strokeWidth="2" />

            {/* Arms Holding Box */}
            <path d="M48,45 L55,45" stroke="#1a2b3b" strokeWidth="2" strokeLinecap="round" />
            <rect x="52" y="38" width="14" height="10" fill="white" stroke="#1a2b3b" strokeWidth="1.5" />
        </svg>
    )
}





const Hero = () => {
    return (
        <div className='max-w-[1440px] mx-auto px-5'>
            <section className="mt-6 w-full">
                <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm min-h-[600px]">

                    {/* Left Content */}
                    <div className="flex-1 space-y-8 max-w-xl">

                        {/* Small Illustration */}
                        <div className="relative">
                            <RunningManIllustration />
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#1a2b3b] leading-[1.15]">
                            We Make Sure Your <br />
                            <span className="text-[#3c8c9e]">Parcel Arrives</span> On Time <br />
                            – No Fuss.
                        </h1>

                        {/* Subtext */}
                        <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <button className="px-8 py-3.5 rounded-full bg-[#C6EA65] text-[#1a2b3b] font-bold text-base hover:bg-[#b5d950] transition-colors shadow-sm">
                                    Track Your Parcel
                                </button>
                                <button className="w-11 h-11 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>

                            <button className="px-8 py-3.5 rounded-full border border-gray-200 text-[#1a2b3b] font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all">
                                Be A Rider
                            </button>
                        </div>

                        {/* Pagination Indicators */}
                        <div className="flex gap-3 pt-8">
                            <div className="w-8 h-1.5 rounded-full bg-[#3c8c9e]"></div>
                            <div className="w-8 h-1.5 rounded-full bg-gray-200"></div>
                            <div className="w-8 h-1.5 rounded-full bg-gray-200"></div>
                            <div className="w-8 h-1.5 rounded-full bg-gray-200"></div>
                        </div>
                    </div>

                    {/* Right Content - Illustration */}
                    <div className="flex-1 w-full h-full flex items-center justify-center pl-0 md:pl-10">
                        <DeliveryVehicleIllustration />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Hero;