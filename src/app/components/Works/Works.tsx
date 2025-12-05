import React from 'react';
import TrackMap from './../../../assets/track-map.png'
import Image from 'next/image';
// Icon for the cards (Truck + Pin)
const ServiceIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#003B46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Truck */}
        <path d="M10 17h4V5H2v12h3" />
        <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
        <path d="M14 17h1" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
        {/* Pin on top/side */}
        <path d="M12 2a3 3 0 0 1 3 3c0 2-3 5-3 5s-3-3-3-5a3 3 0 0 1 3-3z" fill="white" strokeWidth="1.5" />
        <circle cx="12" cy="5" r="1" />
    </svg>
);
const Works = () => {
    const cards = [
        { title: "Booking Pick & Drop", description: "From personal packages to business shipments — we deliver on time, every time." },
        { title: "Cash On Delivery", description: "From personal packages to business shipments — we deliver on time, every time." },
        { title: "Delivery Hub", description: "From personal packages to business shipments — we deliver on time, every time." },
        { title: "Booking SME & Corporate", description: "From personal packages to business shipments — we deliver on time, every time." },
    ];
    return (
        <div className="max-w-[1440px] mx-auto px-10 my-5">
            <section className="mt-12 w-full">
                <h2 className="text-3xl font-bold text-[#003B46] mb-8 px-2">How it Works</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-white rounded-3xl p-8 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow cursor-default">
                            <div className="mb-2">
                                <ServiceIcon />
                            </div>
                            <h3 className="text-xl font-bold text-[#003B46]">{card.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Works;