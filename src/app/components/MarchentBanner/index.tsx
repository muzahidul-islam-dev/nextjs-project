

// --- Merchant Banner Illustration ---
const MerchantIllustration = () => (
    <svg viewBox="0 0 300 200" className="w-full h-full opacity-50">
        {/* Wireframe Packages */}
        {/* Bottom Box */}
        <g transform="translate(50, 80)">
            <path d="M0,40 L80,40 L120,20 L40,20 Z" fill="none" stroke="#2dd4bf" strokeWidth="1" /> {/* Top Face */}
            <path d="M0,40 L0,80 L80,80 L80,40" fill="none" stroke="#2dd4bf" strokeWidth="1" /> {/* Front Face */}
            <path d="M80,80 L120,60 L120,20" fill="none" stroke="#2dd4bf" strokeWidth="1" /> {/* Side Face */}
        </g>

        {/* Top Box */}
        <g transform="translate(80, 40)">
            <path d="M0,40 L80,40 L110,25 L30,25 Z" fill="none" stroke="#2dd4bf" strokeWidth="1" /> {/* Top Face */}
            <path d="M0,40 L0,70 L80,70 L80,40" fill="none" stroke="#2dd4bf" strokeWidth="1" /> {/* Front Face */}
            <path d="M80,70 L110,55 L110,25" fill="none" stroke="#2dd4bf" strokeWidth="1" /> {/* Side Face */}

            {/* Pin on top */}
            <g transform="translate(55, -20)">
                <path d="M0,0 C-10,0 -15,-10 -15,-20 C-15,-35 0,-45 0,-45 C0,-45 15,-35 15,-20 C15,-10 10,0 0,0 Z" fill="none" stroke="#2dd4bf" strokeWidth="1.5" />
                <circle cx="0" cy="-20" r="5" fill="none" stroke="#2dd4bf" strokeWidth="1.5" />
                <ellipse cx="0" cy="5" rx="10" ry="3" fill="none" stroke="#2dd4bf" strokeWidth="0.5" opacity="0.5" /> {/* Shadow */}
            </g>
        </g>

        {/* Decorative Wavy Line */}
        <path d="M20,150 Q60,120 100,160 T200,140" fill="none" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />
    </svg>
);

export default function MarchentBanner() {
    return (
        <div className="max-w-[1440px] mx-auto px-5 my-5">
            <section className="mt-16 w-full bg-[#003B46] rounded-[2.5rem] p-8 md:p-12 lg:px-16 lg:py-16 overflow-hidden relative">
                {/* Background Glow Effect - subtle cyan gradient */}
                <div className="absolute top-0 left-1/3 w-full h-full bg-gradient-to-br from-[#0e5c6b] to-transparent opacity-30 pointer-events-none"></div>

                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                    {/* Left Text */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Merchant and Customer Satisfaction is Our First Priority
                        </h2>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
                            We offer the lowest delivery charge with the highest value along with 100% safety of your product. ZapShift courier delivers your parcels in every corner of Bangladesh right on time.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="px-8 py-3.5 rounded-full bg-[#C6EA65] text-[#1a2b3b] font-bold hover:bg-[#b5d950] transition-colors shadow-lg">
                                Become a Merchant
                            </button>
                            <button className="px-8 py-3.5 rounded-full border border-[#C6EA65] text-[#C6EA65] font-semibold hover:bg-[#C6EA65] hover:text-[#1a2b3b] transition-all">
                                Earn with ZapShift Courier
                            </button>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="flex-1 w-full max-w-sm md:max-w-md flex justify-center md:justify-end">
                        <div className="w-full h-64 md:h-72">
                            <MerchantIllustration />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}