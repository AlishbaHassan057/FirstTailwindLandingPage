"use client"
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import Front from './Front';
import Hero from './Hero';
import Testimonials from './Testimonials';


const Page = () => {
    return (
        <>
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mt-2">
                    <div className="logo">
                        <img src="https://raw.githubusercontent.com/bradtraversy/tailwind-landing-page/249d73eaa143aa213a5d56de2b2a941f68b20a7a/img/logo.svg"
                            alt="" />
                    </div>
                    <div className="menu">
                        <div className="hidden list-none gap-[28px] md:flex">
                            <li className='cursor-pointer hover:text-orange-600 transition-all font-semibold'>Home</li>
                            <li className='cursor-pointer hover:text-orange-600 transition-all font-semibold'>About</li>
                            <li className='cursor-pointer hover:text-orange-600 transition-all font-semibold'>Services</li>
                            <li className='cursor-pointer hover:text-orange-600 transition-all font-semibold'>Projects</li>
                            <li className='cursor-pointer hover:text-orange-600 transition-all font-semibold'>Portfolio</li>

                        </div>
                    </div>
                    <GiHamburgerMenu className='md:hidden sm:block' />
                    <div className="button">
                        <button className='bg-rose-600 text-white p-2 rounded-full px-10 hover:bg-rose-800 transition-all font-bold'>Contact</button>
                    </div>


                </div>
            </div>
            <Front />
            <Hero />
            <Testimonials />
        </>
    );
}

export default Page;
