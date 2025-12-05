import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
    return (
        <div className="max-w-[1440px] mx-auto px-5 my-5">
            <footer className="w-full bg-[#0b1116] rounded-2xl pt-16 pb-8 text-white text-center mt-12">
                {/* Logo and Tagline */}
                    <div className="flex flex-col items-center gap-4 mb-10">
                        <div className="flex items-center gap-2">
                            {/* Logo Icon */}
                            <div className="w-8 h-8 bg-[#C6EA65] relative mask-hexagon flex items-center justify-center rounded-md" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                                <div className="w-4 h-4 bg-white opacity-40 transform rotate-45"></div>
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">ZapShift</span>
                        </div>
                        <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                        </p>
                    </div>

                    {/* Separator Line */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-300 mb-8">
                        <a href="#" className="hover:text-white transition-colors">Services</a>
                        <a href="#" className="hover:text-white transition-colors">Coverage</a>
                        <a href="#" className="hover:text-white transition-colors">About Us</a>
                        <a href="#" className="hover:text-white transition-colors">Pricing</a>
                        <a href="#" className="hover:text-white transition-colors">Blog</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    {/* Separator Line */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-10"></div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-4">
                        {/* LinkedIn */}
                        <a href="#" className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center hover:scale-110 transition-transform">
                            <Linkedin className="w-5 h-5 text-white" fill="white" />
                        </a>

                        {/* X (Twitter) */}
                        <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform">
                            <Twitter className="w-5 h-5 text-black" fill="black" />
                        </a>

                        {/* Facebook */}
                        <a href="#" className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center hover:scale-110 transition-transform">
                            <Facebook className="w-5 h-5 text-white" fill="white" />
                        </a>

                        {/* YouTube */}
                        <a href="#" className="w-10 h-10 rounded-full bg-[#ff0000] flex items-center justify-center hover:scale-110 transition-transform">
                            <Youtube className="w-5 h-5 text-white" fill="white" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="mt-12 text-gray-600 text-xs">
                        © {new Date().getFullYear()} ZapShift Courier. All rights reserved.
                    </div>
            </footer>
        </div>
    );
}
