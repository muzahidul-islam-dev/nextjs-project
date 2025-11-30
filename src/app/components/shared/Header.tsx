import Image from 'next/image';
import React from 'react';
import Logo from './../../../assets/logo.png'
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
const Header = () => {
    return (
        <div className='max-w-[1400px] mx-auto px-5 my-10'>
            <div className="grid grid-cols-12 px-5 items-center bg-white py-5 rounded-2xl">
                <div className="col-span-3">
                    <Link href={'/'}>
                        <Image src={Logo} height={50} width={100} alt='Logo' />
                    </Link>
                </div>
                <div className='col-span-6'>
                    <nav>
                        <ul className='flex gap-3 items-center justify-center'>
                            <li><a href="#" className='text-[#606060] hover:underline'>Services</a></li>
                            <li><a href="#" className='text-[#606060] hover:underline'>Coverage</a></li>
                            <li><a href="#" className='text-[#606060] hover:underline'>About Us</a></li>
                            <li><a href="#" className='text-[#606060] hover:underline'>Pricing</a></li>
                            <li><a href="#" className='text-[#606060] hover:underline'>Blog</a></li>
                            <li><a href="#" className='text-[#606060] hover:underline'>Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-span-3">
                    <div className="flex items-center justify-end">
                        <button className='border border-gray-300 py-2 px-5 rounded-lg cursor-pointer'>Sign In</button>
                        <button className='bg-[#CAEB66] cursor-pointer py-2 px-5 rounded-lg ml-3'>Sign Up</button>
                        <button className='bg-gray-900 cursor-pointer rounded-full ml-1 text-[#CAEB66] h-10 w-10 flex items-center justify-center'><ArrowUpRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;