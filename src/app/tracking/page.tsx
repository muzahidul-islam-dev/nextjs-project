import { Check, Search } from "lucide-react";

export default function TrackingPage() {
    const trackingSteps = [
        { date: 'Jun 02, 2025', time: '12:21 am', status: 'Assigned to rider', completed: true },
        { date: 'Jun 02, 2025', time: '12:21 am', status: 'Assigned to rider', completed: true },
        { date: 'Jun 02, 2025', time: '12:21 am', status: 'Assigned to rider', completed: true },
        { date: 'Jun 02, 2025', time: '12:21 am', status: 'Assigned to rider', completed: true },
        { date: 'Jun 02, 2025', time: '12:21 am', status: 'Assigned to rider', completed: true },
        { date: 'Jun 02, 2025', time: '12:21 am', status: 'Assigned to rider', completed: true },
        { date: 'Jun 02, 2025', time: '12:21 am', status: 'Assigned to rider', completed: true },
    ];

    return (
        <div className="max-w-[1440px] mx-auto px-5">
            <div className="min-h-screen flex items-center justify-center font-sans">
                <div className="bg-white w-full rounded-3xl shadow-sm px-6 py-10 md:px-12 md:py-14">

                    {/* Header Section */}
                    <div className="mb-8">
                        <h1 className="text-[#0B3B3C] text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                            Track Your Consignment
                        </h1>
                        <p className="text-gray-400 text-sm">
                            Now you can easily track your consignment
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="mb-12 max-w-3xl">
                        <div className="relative flex items-center">
                            <div className="absolute left-4 text-gray-400">
                                <Search size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search tracking code here"
                                className="w-full bg-[#F2F4F8] rounded-full py-3 md:py-4 pl-12 pr-32 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C8E85E]/50 transition-all"
                            />
                            <button className="absolute right-2 bg-[#C8E85E] hover:bg-[#b8d84e] text-[#0B3B3C] font-semibold px-6 py-2 md:py-2.5 rounded-full transition-colors text-sm md:text-base">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* Left Card: Product Details */}
                        <div className="bg-[#F2F4F8] rounded-3xl p-8 md:p-10">
                            <h2 className="text-[#0B3B3C] text-2xl font-bold mb-8">Product details</h2>

                            <div className="space-y-6 text-[#5A6B6C] text-[15px]">
                                <div>
                                    <p className="mb-1">May 31, 2025 03:41 pm</p>
                                    <p>Id : <span className="text-gray-500">148976175</span></p>
                                    <p>Invoice : <span className="text-gray-500">24227</span></p>
                                    <p>Tracking Code : <span className="text-gray-400 font-light">OUWJVEXWZ9823Q7H5H55YV7</span></p>
                                </div>

                                <div className="pt-2">
                                    <p className="mb-1"><span className="font-semibold text-[#0B3B3C]">Name :</span> Zahid Hossain</p>
                                    <p className="leading-relaxed">
                                        <span className="font-semibold text-[#0B3B3C]">Address :</span> Madrasha Road, Chandpur sadar, Chandpur, Chandpur, 3600, BD
                                    </p>
                                    <p className="mt-1"><span className="font-semibold text-[#0B3B3C]">Phone Number :</span> 01780448866</p>
                                </div>

                                <div className="pt-2 space-y-1">
                                    <p><span className="font-semibold text-[#0B3B3C]">Approved :</span> <span className="text-gray-400">N/A</span></p>
                                    <p><span className="font-semibold text-[#0B3B3C]">Weight :</span> <span className="text-gray-400">KG</span></p>
                                    <p><span className="font-semibold text-[#0B3B3C]">COD:</span> <span className="text-gray-400">৳ 0</span></p>
                                    <p className="text-yellow-500 font-medium mt-2">Pending</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Card: Tracking Updates */}
                        <div className="bg-[#F2F4F8] rounded-3xl p-8 md:p-10">
                            <h2 className="text-[#0B3B3C] text-2xl font-bold mb-8">Tracking Updates</h2>

                            <div className="relative">
                                {/* Vertical Line */}
                                <div className="absolute left-[125px] sm:left-[140px] top-4 bottom-4 w-px bg-gray-200"></div>

                                <div className="space-y-8">
                                    {trackingSteps.map((step, index) => (
                                        <div key={index} className="flex items-start relative z-10">
                                            {/* Date/Time Column */}
                                            <div className="w-[110px] sm:w-[120px] text-xs sm:text-sm text-[#0B3B3C] font-medium pt-2 text-right pr-6 md:pr-8">
                                                <div>{step.date}</div>
                                                <div className="text-gray-500 font-normal">{step.time}</div>
                                            </div>

                                            {/* Checkmark Icon */}
                                            <div className="shrink-0 w-8 h-8 rounded-full bg-[#E5F7E6] flex items-center justify-center border-2 border-white shadow-sm text-[#4CAF50]">
                                                <Check size={16} strokeWidth={3} />
                                            </div>

                                            {/* Status Text */}
                                            <div className="ml-6 pt-2 text-[#0B3B3C] text-sm sm:text-base font-medium">
                                                {step.status}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
