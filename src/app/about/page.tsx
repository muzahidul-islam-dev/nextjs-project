"use client"
import { useState } from "react";

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState<'story' | 'mission' | 'success' | 'team'>('story');

    const tabs: Array<{ id: 'story' | 'mission' | 'success' | 'team'; label: string }> = [
        { id: 'story', label: 'Story' },
        { id: 'mission', label: 'Mission' },
        { id: 'success', label: 'Success' },
        { id: 'team', label: 'Team & Others' },
    ];

    // Mock content for each tab based on the image structure
    const content = {
        story: (
            <div className="space-y-6 text-gray-500 leading-relaxed text-[15px]">
                <p>
                    We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                </p>
                <p>
                    We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                </p>
                <p>
                    We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
                </p>
            </div>
        ),
        mission: (
            <div className="space-y-6 text-gray-500 leading-relaxed text-[15px]">
                <p>
                    Our mission is to redefine the logistics landscape by integrating cutting-edge technology with human-centric service. We aim to bridge distances not just by moving packages, but by delivering trust and reliability with every shipment.
                </p>
                <p>
                    Sustainability is at the core of our operations. We are actively reducing our carbon footprint through optimized routes and eco-friendly packaging solutions, ensuring a greener future for the communities we serve.
                </p>
            </div>
        ),
        success: (
            <div className="space-y-6 text-gray-500 leading-relaxed text-[15px]">
                <p>
                    Success to us isn't just about numbers; it's about the millions of smiles we've delivered. From a small local courier to a nationwide logistics network, our growth has been fueled by the unwavering trust of our clients.
                </p>
                <p>
                    We have successfully maintained a 99.8% on-time delivery rate for three consecutive years, a testament to the hard work and dedication of our ground operations team.
                </p>
            </div>
        ),
        team: (
            <div className="space-y-6 text-gray-500 leading-relaxed text-[15px]">
                <p>
                    Our team is our greatest asset. Comprising logistics experts, tech innovators, and dedicated delivery partners, we work in unison to solve complex shipping challenges.
                </p>
                <p>
                    We believe in fostering a culture of continuous learning and inclusivity, where every team member is empowered to contribute to our collective success and innovation.
                </p>
            </div>
        ),
    };

    return (
        <div className="max-w-[1440px] mx-auto px-5">
            <div className="flex items-center justify-center font-sans">
                <div className="bg-white w-full rounded-2xl shadow-sm px-8 py-10 md:px-12 md:py-14">

                    {/* Header Section */}
                    <div className="mb-10">
                        <h1 className="text-[#0B3B3C] text-4xl font-bold mb-4 tracking-tight">
                            About Us
                        </h1>
                        <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
                            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-100 w-full mb-8"></div>

                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap gap-8 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                text-lg font-medium transition-colors duration-200 relative pb-1 cursor-pointer
                ${activeTab === tab.id
                                        ? 'text-[#6B8E23] font-bold' // Olive/Green tone for active
                                        : 'text-gray-300 hover:text-gray-400'
                                    }
              `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="animate-fade-in">
                        {content[activeTab]}
                    </div>

                </div>
            </div>
        </div>
    );
}
