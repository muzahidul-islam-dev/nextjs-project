
// --- New Illustrations for Feature Section ---

const TrackingFeatureIllustration = () => (
    <svg viewBox="0 0 200 150" className="w-full h-full max-h-[160px]">
        {/* Background Map Elements */}
        <path d="M30,120 Q50,110 70,125 T120,115" fill="none" stroke="#e0e0e0" strokeWidth="2" />
        <path d="M10,40 Q60,20 90,50" fill="none" stroke="#e0e0e0" strokeWidth="2" />

        {/* Package */}
        <rect x="80" y="60" width="40" height="40" fill="white" stroke="#1a2b3b" strokeWidth="2" />
        <line x1="80" y1="70" x2="120" y2="70" stroke="#1a2b3b" strokeWidth="1" />
        <path d="M95,60 L95,70" stroke="#1a2b3b" strokeWidth="1" />
        <path d="M105,60 L105,70" stroke="#1a2b3b" strokeWidth="1" />
        {/* Package Details */}
        <path d="M90,80 L110,80" stroke="#1a2b3b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M92,86 L108,86" stroke="#1a2b3b" strokeWidth="1.5" strokeLinecap="round" />

        {/* Location Pins */}
        <path d="M50,50 C50,40 60,30 60,30 C60,30 70,40 70,50 C70,60 60,70 60,70 C60,70 50,60 50,50 Z" fill="#1a2b3b" />
        <circle cx="60" cy="50" r="3" fill="white" />

        <path d="M140,40 C140,30 150,20 150,20 C150,20 160,30 160,40 C160,50 150,60 150,60 C150,60 140,50 140,40 Z" fill="#C6EA65" stroke="#1a2b3b" strokeWidth="1.5" />
        <circle cx="150" cy="40" r="3" fill="#1a2b3b" />

        {/* Dashed Route Line */}
        <path d="M65,55 Q100,20 145,45" fill="none" stroke="#1a2b3b" strokeWidth="2" strokeDasharray="4 4" />

        {/* Courier Figure Small */}
        <g transform="translate(140, 90)">
            <circle cx="10" cy="0" r="8" fill="white" stroke="#1a2b3b" strokeWidth="1.5" />
            <path d="M10,8 L10,25" stroke="#1a2b3b" strokeWidth="1.5" />
            <path d="M10,25 L-5,40" stroke="#1a2b3b" strokeWidth="1.5" />
            <path d="M10,25 L25,40" stroke="#1a2b3b" strokeWidth="1.5" />
            <path d="M10,12 L-5,20" stroke="#1a2b3b" strokeWidth="1.5" />
            <path d="M10,12 L25,20" stroke="#1a2b3b" strokeWidth="1.5" />
        </g>
    </svg>
);


const SupportIllustration = () => (
    <svg viewBox="0 0 200 150" className="w-full h-full max-h-[160px]">
        {/* Person */}
        <path d="M70,140 L70,100 C70,85 85,80 100,80" fill="none" stroke="#1a2b3b" strokeWidth="2" />

        {/* Head */}
        <circle cx="100" cy="60" r="18" fill="white" stroke="#1a2b3b" strokeWidth="2" />

        {/* Headset */}
        <path d="M82,60 C82,45 90,38 100,38 C110,38 118,45 118,60" fill="none" stroke="#1a2b3b" strokeWidth="2" />
        <rect x="80" y="55" width="4" height="10" fill="#1a2b3b" rx="2" />
        <rect x="116" y="55" width="4" height="10" fill="#1a2b3b" rx="2" />
        <path d="M118,65 L108,70" stroke="#1a2b3b" strokeWidth="1.5" />
        <circle cx="106" cy="70" r="2" fill="#1a2b3b" />

        {/* Hand holding phone or box */}
        <path d="M100,80 L120,100 L110,120" fill="none" stroke="#1a2b3b" strokeWidth="2" strokeLinejoin="round" />

        {/* Box/Package floating nearby */}
        <g transform="translate(40, 80)">
            <rect x="0" y="0" width="30" height="30" fill="white" stroke="#1a2b3b" strokeWidth="2" transform="rotate(-15)" />
            <line x1="5" y1="5" x2="25" y2="25" stroke="#1a2b3b" strokeWidth="1" transform="rotate(-15)" />
        </g>
    </svg>
);






const SafeDeliveryIllustration = () => (
    <svg viewBox="0 0 200 150" className="w-full h-full max-h-[160px]">
        {/* Courier Body */}
        <path d="M70,140 L70,90 C70,80 80,70 100,70 L110,70" fill="none" stroke="#1a2b3b" strokeWidth="2" />

        {/* Head with Cap */}
        <g transform="translate(90, 40)">
            <path d="M0,10 Q10,0 20,10 L25,10" fill="#white" stroke="#1a2b3b" strokeWidth="2" /> {/* Cap */}
            <circle cx="10" cy="20" r="12" fill="white" stroke="#1a2b3b" strokeWidth="2" /> {/* Face */}
        </g>

        {/* Box being held */}
        <g transform="translate(60, 80)">
            <path d="M10,0 L60,0 L70,20 L20,20 Z" fill="white" stroke="#1a2b3b" strokeWidth="2" /> {/* Top */}
            <path d="M10,0 L10,50 L20,70 L20,20" fill="white" stroke="#1a2b3b" strokeWidth="2" /> {/* Left Side */}
            <path d="M20,70 L70,70 L70,20" fill="white" stroke="#1a2b3b" strokeWidth="2" /> {/* Front */}
            {/* Box Tape/Details */}
            <path d="M20,20 L70,70" stroke="#1a2b3b" strokeWidth="1" opacity="0.1" />
            <line x1="35" y1="35" x2="55" y2="55" stroke="#C6EA65" strokeWidth="4" />
        </g>

        {/* Hands */}
        <path d="M110,75 L120,90 L100,100" fill="none" stroke="#1a2b3b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="100" cy="100" r="4" fill="white" stroke="#1a2b3b" strokeWidth="2" />

        <path d="M50,90 L40,100 L60,110" fill="none" stroke="#1a2b3b" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export default function FeatureLists() {
    return (
        <div className="max-w-[1440px] mx-auto px-5 my-5">
            <section className="mt-16 w-full flex flex-col gap-8">
                {/* Feature 1 */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="w-64 h-48 md:w-full md:h-64">
                            <TrackingFeatureIllustration />
                        </div>
                    </div>
                    <div className="flex-1 text-left relative pl-0 md:pl-8 border-l-0 md:border-l-2 border-dashed border-gray-200">
                        <h3 className="text-2xl font-bold text-[#003B46] mb-3">Live Parcel Tracking</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.
                        </p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="w-64 h-48 md:w-full md:h-64">
                            <SafeDeliveryIllustration />
                        </div>
                    </div>
                    <div className="flex-1 text-left relative pl-0 md:pl-8 border-l-0 md:border-l-2 border-dashed border-gray-200">
                        <h3 className="text-2xl font-bold text-[#003B46] mb-3">100% Safe Delivery</h3>
                        <p className="text-gray-500 leading-relaxed">
                            We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="w-64 h-48 md:w-full md:h-64">
                            <SupportIllustration />
                        </div>
                    </div>
                    <div className="flex-1 text-left relative pl-0 md:pl-8 border-l-0 md:border-l-2 border-dashed border-gray-200">
                        <h3 className="text-2xl font-bold text-[#003B46] mb-3">24/7 Call Center Support</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}