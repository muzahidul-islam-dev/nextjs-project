"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from './../../../assets/logo.png'
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname();
    console.log(pathname, 'this is pathname')
    return (
        <div className="max-w-[1440px] mx-auto px-5 my-5">
            <nav className="bg-white rounded-3xl px-6 py-4 flex items-center justify-between shadow-sm relative z-50">
                {/* Logo */}
                <Link href={'/'} className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#C6EA65] relative mask-hexagon flex items-center justify-center rounded-md" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                        <div className="w-4 h-4 bg-white opacity-40 transform rotate-45"></div>
                    </div>
                    <span className="text-2xl font-bold text-[#1a2b3b] tracking-tight">ZapShift</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-500">
                    <a href="#" className={`hover:text-black transition-colors`}>Services</a>
                    <Link href="/coverage" className={`hover:text-black transition-colors ${pathname == '/coverage' ? 'text-black' : ''}`}>Coverage</Link>
                    <Link href="/tracking" className={`hover:text-black transition-colorscolors ${pathname == '/coverage' ? 'text-black' : ''}`}>Track Order</Link>
                    <Link href="/about" className={`hover:text-black transition-colors ${pathname == '/coverage' ? 'text-black' : ''}`}>About Us</Link>
                    <a href="/price-calculator" className={`hover:text-black transition-colors ${pathname == '/coverage' ? 'text-black' : ''}`}>Pricing</a>
                    <Link href="/be-a-rider" className={`hover:text-black transition-colors ${pathname == '/coverage' ? 'text-black' : ''}`}>Be a Rider</Link>
                </div>

                {/* Auth Buttons */}
                <div className="hidden lg:flex lg:items-center gap-4">
                    <button className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:border-gray-400 transition-all text-sm">
                        Sign In
                    </button>
                    <div className="flex items-center gap-2">
                        <button className="px-6 py-2.5 rounded-xl bg-[#C6EA65] text-[#1a2b3b] font-bold hover:bg-[#b5d950] transition-colors text-sm shadow-sm">
                            Sign Up
                        </button>
                        <button className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-black transition-colors shadow-md group">
                            <ArrowUpRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 lg:hidden border border-gray-100">
                        <a href="#" className="text-gray-600 font-medium">Services</a>
                        <a href="#" className="text-gray-600 font-medium">Coverage</a>
                        <a href="#" className="text-gray-600 font-medium">About Us</a>
                        <div className="h-px bg-gray-100 my-2"></div>
                        <button className="w-full py-3 rounded-xl border border-gray-200 font-semibold">Sign In</button>
                        <button className="w-full py-3 rounded-xl bg-[#C6EA65] font-bold text-[#1a2b3b]">Sign Up</button>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;