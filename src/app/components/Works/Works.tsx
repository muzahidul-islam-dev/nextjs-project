import React from 'react';
import TrackMap from './../../../assets/track-map.png'
import Image from 'next/image';
const Works = () => {
    return (
        <div className='max-w-[1400px] mx-auto my-10 px-20'>
            <h3 className='text-[#03373D] text-3xl font-bold my-10'>How it Works</h3>
            <div className="grid grid-cols-4 gap-5">
                <div className="bg-white rounded-2xl py-7 px-8 grid">
                    <Image src={TrackMap} alt='Icon' />
                    <h3 className='text-[#03373D] font-bold text-xl mt-5'>Booking Pick & Drop</h3>
                    <p className='text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className="bg-white rounded-2xl py-7 px-8 grid">
                    <Image src={TrackMap} alt='Icon' />
                    <h3 className='text-[#03373D] font-bold text-xl mt-5'>Booking Pick & Drop</h3>
                    <p className='text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className="bg-white rounded-2xl py-7 px-8 grid">
                    <Image src={TrackMap} alt='Icon' />
                    <h3 className='text-[#03373D] font-bold text-xl mt-5'>Booking Pick & Drop</h3>
                    <p className='text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className="bg-white rounded-2xl py-7 px-8 grid">
                    <Image src={TrackMap} alt='Icon' />
                    <h3 className='text-[#03373D] font-bold text-xl mt-5'>Booking Pick & Drop</h3>
                    <p className='text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default Works;