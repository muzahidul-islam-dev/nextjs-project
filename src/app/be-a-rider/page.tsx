import Image from 'next/image'
import RiderImage from './../../assets/rider.png'
export default function Page() {
    return (
        <div className="max-w-[1440px] mx-auto px-5">
            <div className="flex items-center justify-center font-sans">
                <div className="bg-white w-full rounded-2xl shadow-sm px-8 py-10 md:px-12 md:py-14">

                    {/* Header Section */}
                    <div className="mb-10">
                        <h1 className="text-[#0B3B3C] text-4xl font-bold mb-4 tracking-tight">
                            Be a Rider
                        </h1>
                        <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
                            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-100 w-full mb-10"></div>

                    {/* Main Content: Form & Illustration */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                        {/* Left Column: Form */}
                        <div className="flex-1">
                            <h2 className="text-[#0B3B3C] text-xl font-bold mb-6">
                                Tell us about yourself
                            </h2>

                            <form className="space-y-5">
                                {/* Row 1 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-600 ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#84D52C] transition-colors text-gray-600 placeholder-gray-300"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-600 ml-1">Your age</label>
                                        <input
                                            type="text"
                                            placeholder="Your age"
                                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#84D52C] transition-colors text-gray-600 placeholder-gray-300"
                                        />
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-600 ml-1">Your Email</label>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#84D52C] transition-colors text-gray-600 placeholder-gray-300"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-600 ml-1">Your District</label>
                                        <div className="relative">
                                            <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#84D52C] transition-colors text-gray-400 appearance-none bg-white cursor-pointer">
                                                <option value="">Select your District</option>
                                                <option value="dhaka">Dhaka</option>
                                                <option value="chittagong">Chittagong</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 3 */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-600 ml-1">NID No</label>
                                        <input
                                            type="text"
                                            placeholder="NID"
                                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#84D52C] transition-colors text-gray-600 placeholder-gray-300"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-600 ml-1">Contact</label>
                                        <input
                                            type="text"
                                            placeholder="Contact"
                                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#84D52C] transition-colors text-gray-600 placeholder-gray-300"
                                        />
                                    </div>
                                </div>

                                {/* Row 4: Warehouse */}
                                <div className="space-y-2">
                                    <div className="relative">
                                        <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#84D52C] transition-colors text-gray-400 appearance-none bg-white cursor-pointer">
                                            <option value="">Select warehouse</option>
                                            <option value="warehouse_a">Warehouse A</option>
                                            <option value="warehouse_b">Warehouse B</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="button"
                                        className="w-full bg-[#C8E85E] hover:bg-[#b8d84e] text-[#0B3B3C] font-bold py-3 rounded-lg transition-colors duration-200 shadow-sm"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right Column: Illustration */}
                        <div className="flex-1 flex items-end justify-center relative">
                            {/* This is a CSS art representation of the rider or a placeholder for the image.
              In a real project, you would use: <img src="/path-to-rider.png" alt="Rider" />
            */}
                            <div className="relative w-full max-w-md">
                                {/* Background Blobs (Optional for effect) */}
                                <div className="absolute top-10 right-10 w-20 h-20 bg-gray-50 rounded-full opacity-50"></div>

                                {/* Image Placeholder using SVG to mimic the rider illustration */}
                                <Image src={RiderImage} alt='Rider' />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}