"use client"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";


// --- Hand Truck Illustration for Testimonials ---
const HandTruckIllustration = () => (
    <svg viewBox="0 0 200 120" className="w-full h-full">
        {/* Hand Truck */}
        <path d="M80,80 L80,20 Q80,10 90,10 L100,10" fill="none" stroke="#003B46" strokeWidth="2" /> {/* Handle */}
        <path d="M80,80 L70,100" stroke="#003B46" strokeWidth="2" />
        <circle cx="70" cy="100" r="5" fill="none" stroke="#003B46" strokeWidth="2" /> {/* Wheel */}
        <path d="M70,100 L100,100" stroke="#003B46" strokeWidth="2" /> {/* Platform */}

        {/* Boxes on Truck */}
        <rect x="80" y="70" width="20" height="20" fill="white" stroke="#003B46" strokeWidth="1.5" transform="rotate(-5)" />
        <rect x="82" y="50" width="18" height="20" fill="white" stroke="#003B46" strokeWidth="1.5" transform="rotate(-5)" />

        {/* Stacked Boxes to the right */}
        <rect x="110" y="80" width="25" height="20" fill="white" stroke="#003B46" strokeWidth="1.5" />
        <rect x="135" y="80" width="20" height="20" fill="white" stroke="#003B46" strokeWidth="1.5" />
        <rect x="120" y="60" width="20" height="20" fill="white" stroke="#003B46" strokeWidth="1.5" />

        {/* Squiggly Line */}
        <path d="M155,50 Q165,40 170,55" fill="none" stroke="#003B46" strokeWidth="1.5" />
    </svg>
);
export default function Testimonial(){
    const testimonials = [
        {
            text: "ZapShift has completely transformed how we handle our business deliveries. Fast, reliable, and the tracking is spot on!",
            name: "Awlad Hossin",
            role: "Senior Product Designer",
            avatarColor: "bg-[#003B46]"
        },
        {
            text: "The best courier service in Dhaka! My parcels always arrive on time and safety is never a concern.",
            name: "Rasel Ahamed",
            role: "CTO",
            avatarColor: "bg-gray-400"
        },
        {
            text: "Customer support is amazing. They resolved my issue within minutes. Highly recommended!",
            name: "Nasir Uddin",
            role: "CEO",
            avatarColor: "bg-gray-400"
        },
        {
            text: "Excellent service for small businesses. The cash on delivery feature works seamlessly.",
            name: "Ayesha Khan",
            role: "Business Owner",
            avatarColor: "bg-gray-400"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    // Handle responsive card count
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCards(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };
        handleResize(); // Init
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getVisibleTestimonials = () => {
        const items = [];
        for (let i = 0; i < visibleCards; i++) {
            const index = (currentIndex + i) % testimonials.length;
            items.push({ ...testimonials[index], id: index });
        }
        return items;
    };

    return (
        <section className="mt-20 w-full text-center">
            {/* Top Illustration */}
            <div className="w-full flex justify-center mb-6">
                <div className="w-48 h-32">
                    <HandTruckIllustration />
                </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#003B46] mb-4">What our customers are saying</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-12 px-4">
                See why thousands of merchants and individuals trust ZapShift for their daily deliveries. We are committed to providing the best logistics experience.
            </p>

            {/* Slider Container */}
            <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="flex gap-6 justify-center transition-all duration-500 ease-in-out">
                    {getVisibleTestimonials().map((item, idx) => (
                        <div 
                            key={`${item.id}-${idx}`} 
                            className={`flex-1 min-w-[300px] max-w-sm bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between text-left h-[300px] transform transition-transform duration-500 ${idx === 1 && visibleCards === 3 ? 'scale-105 shadow-md z-10' : 'scale-95 opacity-80'}`}
                        >
                            <div>
                                <Quote className="w-10 h-10 text-gray-200 mb-4 fill-gray-100" />
                                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                                    {item.text}
                                </p>
                            </div>
                            
                            <div className="mt-auto pt-6 border-t border-dashed border-gray-200 flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full ${item.avatarColor} flex-shrink-0`}></div>
                                <div>
                                    <h4 className="font-bold text-[#003B46]">{item.name}</h4>
                                    <p className="text-xs text-gray-400">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-10">
                    <button 
                        onClick={prevSlide}
                        className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors shadow-sm"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    {/* Pagination Dots */}
                    <div className="flex items-center gap-2">
                         {testimonials.map((_, idx) => (
                             <div 
                                key={idx} 
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-[#003B46] w-4' : 'bg-gray-300'}`}
                             ></div>
                         ))}
                    </div>

                    <button 
                        onClick={nextSlide}
                        className="w-10 h-10 rounded-full bg-[#C6EA65] text-[#003B46] flex items-center justify-center hover:bg-[#b5d950] transition-colors shadow-md"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}