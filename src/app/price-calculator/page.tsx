"use client"
import React, { useState } from 'react';

const PricingCalculator = () => {
    // Placeholder state for form fields
    const [parcelType, setParcelType] = useState('');
    const [destination, setDestination] = useState('');
    const [weight, setWeight] = useState('');
    const [cost, setCost] = useState('0'); // State for the calculated cost

    const handleCalculate = (e: any) => {
        e.preventDefault();
        // Logic to calculate cost would go here (e.g., based on type, destination, and weight)
        // For this example, we'll just set the cost to the displayed 50 Tk.
        setCost('50');
    };

    const handleReset = () => {
        setParcelType('');
        setDestination('');
        setWeight('');
        setCost('0');
    };

    return (
        <div className="max-w-[1440px] mx-auto px-5">
            <div className="flex justify-center items-center">
                <div className="bg-white rounded-3xl p-8 sm:p-12 w-full">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Pricing Calculator</h1>
                    <p className="text-gray-500 mb-8 max-w-lg">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal
                        packages to business shipments — we deliver on time, every time.
                    </p>

                    <hr className="my-8 border-gray-200" />

                    <h2 className="text-xl font-semibold text-teal-700 mb-8 text-center">Calculate Your Cost</h2>

                    <form onSubmit={handleCalculate} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            {/* Parcel type dropdown */}
                            <div>
                                <label htmlFor="parcelType" className="block text-sm font-medium text-gray-700 mb-1">
                                    Parcel type
                                </label>
                                <select
                                    id="parcelType"
                                    value={parcelType}
                                    onChange={(e) => setParcelType(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white pr-8"
                                >
                                    <option value="">Select Parcel type</option>
                                    {/* Add more options here */}
                                    <option value="document">Document</option>
                                    <option value="small_parcel">Small Parcel</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    {/* Custom arrow icon (Tailwind's focus-visible) */}
                                </div>
                            </div>

                            {/* Delivery Destination dropdown */}
                            <div>
                                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                                    Delivery Destination
                                </label>
                                <select
                                    id="destination"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white pr-8"
                                >
                                    <option value="">Select Delivery Destination</option>
                                    {/* Add more options here */}
                                    <option value="local">Local</option>
                                    <option value="national">National</option>
                                </select>
                            </div>

                            {/* Weight input */}
                            <div>
                                <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                                    Weight (KG)
                                </label>
                                <input
                                    id="weight"
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder="Contact"
                                    className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex space-x-4 pt-4">
                                <button
                                    type="button" // Use type="button" for reset to prevent form submission
                                    onClick={handleReset}
                                    className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
                                >
                                    Reset
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 transition duration-150 ease-in-out"
                                >
                                    Calculate
                                </button>
                            </div>
                        </div>

                        {/* Cost Display */}
                        <div className="flex items-center justify-center md:justify-end">
                            <p className="text-6xl sm:text-7xl font-extrabold text-gray-900">
                                {cost} <span className="text-4xl sm:text-5xl font-bold">Tk</span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PricingCalculator;