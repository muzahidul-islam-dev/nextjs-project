import Image from 'next/image'
import RiderImage from './../../assets/rider.png'
export default function Page() {
    return (
        <div className="max-w-[1440px] mx-auto px-5 my-5">
            <div className="bg-white rounded-2xl py-20 px-14">
                <div className="border-b border-gray-200 pb-12">
                    <h3 className="text-4xl md:text-5xl font-semibold text-[#03373D]">Be a Rider</h3>
                    <p className="text-[#606060]">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className="pt-10">
                    <div className="grid grid-cols-2">
                        <div>
                            <h3 className="font-semibold text-3xl text-[#03373D]">Tell us about yourself</h3>
                            <form action="" className="my-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block my-2 text-[#0F172A] font-semibold">Your Name</label>
                                        <input type="text" id="name" placeholder="Your Name" className="border border-gray-300 focus:border-gray-400 outline-none text-gray-800 rounded-lg p-2 w-full" />
                                    </div>
                                    <div>
                                        <label htmlFor="age" className="block my-2 text-[#0F172A] font-semibold">Your Age</label>
                                        <input type="text" id="age" placeholder="Your Age" className="border border-gray-300 focus:border-gray-400 outline-none text-gray-800 rounded-lg p-2 w-full" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block my-2 text-[#0F172A] font-semibold">Your Email</label>
                                        <input type="text" id="email" placeholder="Your Name" className="border border-gray-300 focus:border-gray-400 outline-none text-gray-800 rounded-lg p-2 w-full" />
                                    </div>
                                    <div>
                                        <label htmlFor="district" className="block my-2 text-[#0F172A] font-semibold">Your District</label>
                                        <select className="border border-gray-300 focus:border-gray-400 outline-none text-gray-800 rounded-lg py-3 px-2 w-full">
                                            <option value="">Select your District</option>
                                            <option value="1">Dhaka</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="name" className="block my-2 text-[#0F172A] font-semibold">NID No.</label>
                                        <input type="text" placeholder="NID" className="border border-gray-300 focus:border-gray-400 outline-none text-gray-800 rounded-lg p-2 w-full" />
                                    </div>
                                    <div>
                                        <label htmlFor="name" className="block my-2 text-[#0F172A] font-semibold">Contact</label>
                                        <input type="text" placeholder="Contact" className="border border-gray-300 focus:border-gray-400 outline-none text-gray-800 rounded-lg p-2 w-full" />
                                    </div>
                                    <div className="col-span-2">
                                        <label htmlFor="name" className="block my-2 text-[#0F172A] font-semibold">Which wire-house you want to work?</label>
                                        <select className="border border-gray-300 focus:border-gray-400 outline-none text-gray-800 rounded-lg p-2 w-full">
                                            <option value="">Select wire-house</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="grid items-end justify-end">
                            <Image src={RiderImage} alt={'Rider'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}