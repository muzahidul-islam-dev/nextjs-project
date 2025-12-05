"use client";

import dynamic from "next/dynamic";
import { MapPin, Search } from "lucide-react";

const CoverageMap = dynamic(() => import("./CoverageMap"), {
    ssr: false,
});

export default function CoveragePage() {
    return (
        <div className="max-w-[1440px] mx-auto px-5">
            <div className="flex items-center justify-center font-sans">
                <div className="bg-white w-full rounded-3xl shadow-sm px-6 py-10 md:px-12 md:py-14">

                    {/* Header Section */}
                    <div className="mb-8">
                        <h1 className="text-[#0B3B3C] text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                            We are available in 64 districts
                        </h1>

                        <div className="max-w-2xl">
                            <div className="relative flex items-center bg-[#F2F4F8] rounded-full p-1.5">
                                <div className="pl-4 text-gray-400">
                                    <Search size={20} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search here"
                                    className="w-full bg-transparent border-none focus:ring-0 text-gray-700 placeholder-gray-400 px-3 py-2 outline-none"
                                />
                                <button className="bg-[#C8E85E] text-[#0B3B3C] font-semibold px-8 py-2.5 rounded-full">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-[#0B3B3C] text-xl font-bold">
                            We deliver almost all over Bangladesh
                        </h2>
                    </div>

                    {/* Map Container */}
                    <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden relative border border-gray-100">
                        <CoverageMap />
                    </div>

                </div>
            </div>
        </div>
    );
}