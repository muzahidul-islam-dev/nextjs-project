import React from 'react';
import HeroIcon from './../../../assets/hero-icon.png';
import Image from 'next/image';
import SliderBanner from './../../../assets/slider-banner.png'
import { ArrowUpRight } from 'lucide-react';
const Hero = () => {
    return (
        <div className='max-w-[1400px] mx-auto px-5'>
            <div className="bg-white rounded-2xl px-20 py-12">
                <div className="grid grid-cols-2 gap-5 justify-between items-center">
                    <div className='col-span-1'>
                        <Image src={HeroIcon} height={100} width={200} alt='Hero Icon' />
                        <h3 className='text-4xl font-bold'>
                            We Make Sure Your <br /><span className='text-[#33929D]'>Parcel Arrives</span>  On Time <br />– No Fuss.
                        </h3>
                        <p className='text-[#606060] my-3'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                        <div className="grid grid-cols-2 mt-5">
                            <div className="flex items-center">
                                <button className='text-[#1F1F1F] font-bold py-3 px-7 text-lg bg-[#CAEB66] rounded-full'>Track Your Parcel</button>
                                <button className='bg-gray-900 cursor-pointer rounded-full text-[#CAEB66] h-12 w-12 flex items-center justify-center'><ArrowUpRight /></button>
                            </div>
                            <button className='border border-gray-300 py-2 px-5 rounded-lg cursor-pointer w-1/2 font-semibold'>Be A Rider</button>
                        </div>
                    </div>
                    <div className='col-span-1 grid items-end justify-end'>
                        <Image src={SliderBanner} height={400} alt='Slider Banner' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;