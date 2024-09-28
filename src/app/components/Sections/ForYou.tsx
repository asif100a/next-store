import Image from 'next/image';
import React, { FC } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoStar } from 'react-icons/io5';
import SeeMoreBtn from '../UI-parts/SeeMoreBtn';

const ForYou: FC = () => {
    const productTitle = "Rescue Bots Deformation Transformer Car One-Step Car Robot Vehicle Model Action Figures Toy Transform Car for Kids";

    return (
        <section className='mx-2 md:mx-3 lg:mx-auto'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl lg:text-2xl font-medium mb-2'>For You</h1>
                <div className='hidden md:flex justify-between items-center gap-6'>
                    <button><IoIosArrowBack className='hover:text-orange-400 text-lg' /></button>
                    <button><IoIosArrowForward className='hover:text-orange-400 text-lg' /></button>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-fit gap-2 md:gap-3 mx-auto'>
                {/* Card 1 */}
                <div>
                    <div className='border border-[#dd37fc4d] w-full lg:w-60 p-2 md:p-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/Ws5S6XM/24-FOR-hero-1.webp'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <div className='space-y-1'>
                            <h5 className='font-semibold text-sm md:text-base'>{productTitle.slice(0, 40)}...</h5>
                            <p className="text-xs md:text-base"><span className='font-medium'>Price:</span> <span>$500</span></p>

                            {/* Star Rating Component */}
                            <p className='flex items-center gap-1 text-xs md:text-base'>
                                <span className='font-medium'>Ratings:</span>
                                <span className='flex gap-1 text-orange-400'>
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                </span>
                            </p>
                        </div>
                        <button className='border border-[#6593fc66] px-2 md:px-3 py-[2px] md:py-1 text-[#6593fc] text-xs md:text-base font-bold'>Buy</button>
                    </div>
                </div>
                {/* Card 2 */}
                <div>
                    <div className='border border-[#dd37fc4d] w-full lg:w-60 p-2 md:p-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/Ws5S6XM/24-FOR-hero-1.webp'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <div className='space-y-1'>
                            <h5 className='font-semibold text-sm md:text-base'>{productTitle.slice(0, 40)}...</h5>
                            <p className="text-xs md:text-base"><span className='font-medium'>Price:</span> <span>$500</span></p>

                            {/* Star Rating Component */}
                            <p className='flex items-center gap-1 text-xs md:text-base'>
                                <span className='font-medium'>Ratings:</span>
                                <span className='flex gap-1 text-orange-400'>
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                </span>
                            </p>
                        </div>
                        <button className='border border-[#6593fc66] px-2 md:px-3 py-[2px] md:py-1 text-[#6593fc] text-xs md:text-base font-bold'>Buy</button>
                    </div>
                </div>
                {/* Card 3 */}
                <div>
                    <div className='border border-[#dd37fc4d] w-full lg:w-60 p-2 md:p-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/Ws5S6XM/24-FOR-hero-1.webp'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <div className='space-y-1'>
                            <h5 className='font-semibold text-sm md:text-base'>{productTitle.slice(0, 40)}...</h5>
                            <p className="text-xs md:text-base"><span className='font-medium'>Price:</span> <span>$500</span></p>

                            {/* Star Rating Component */}
                            <p className='flex items-center gap-1 text-xs md:text-base'>
                                <span className='font-medium'>Ratings:</span>
                                <span className='flex gap-1 text-orange-400'>
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                </span>
                            </p>
                        </div>
                        <button className='border border-[#6593fc66] px-2 md:px-3 py-[2px] md:py-1 text-[#6593fc] text-xs md:text-base font-bold'>Buy</button>
                    </div>
                </div>
                {/* Card 4 */}
                <div>
                    <div className='border border-[#dd37fc4d] w-full lg:w-60 p-2 md:p-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/Ws5S6XM/24-FOR-hero-1.webp'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <div className='space-y-1'>
                            <h5 className='font-semibold text-sm md:text-base'>{productTitle.slice(0, 40)}...</h5>
                            <p className="text-xs md:text-base"><span className='font-medium'>Price:</span> <span>$500</span></p>

                            {/* Star Rating Component */}
                            <p className='flex items-center gap-1 text-xs md:text-base'>
                                <span className='font-medium'>Ratings:</span>
                                <span className='flex gap-1 text-orange-400'>
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                </span>
                            </p>
                        </div>
                        <button className='border border-[#6593fc66] px-2 md:px-3 py-[2px] md:py-1 text-[#6593fc] text-xs md:text-base font-bold'>Buy</button>
                    </div>
                </div>
                {/* Card 5 */}
                <div>
                    <div className='border border-[#dd37fc4d] w-full lg:w-60 p-2 md:p-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/Ws5S6XM/24-FOR-hero-1.webp'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <div className='space-y-1'>
                            <h5 className='font-semibold text-sm md:text-base'>{productTitle.slice(0, 40)}...</h5>
                            <p className="text-xs md:text-base"><span className='font-medium'>Price:</span> <span>$500</span></p>

                            {/* Star Rating Component */}
                            <p className='flex items-center gap-1 text-xs md:text-base'>
                                <span className='font-medium'>Ratings:</span>
                                <span className='flex gap-1 text-orange-400'>
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                </span>
                            </p>
                        </div>
                        <button className='border border-[#6593fc66] px-2 md:px-3 py-[2px] md:py-1 text-[#6593fc] text-xs md:text-base font-bold'>Buy</button>
                    </div>
                </div>
                {/* Card 6 */}
                <div>
                    <div className='border border-[#dd37fc4d] w-full lg:w-60 p-2 md:p-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/Ws5S6XM/24-FOR-hero-1.webp'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <div className='space-y-1'>
                            <h5 className='font-semibold text-sm md:text-base'>{productTitle.slice(0, 40)}...</h5>
                            <p className="text-xs md:text-base"><span className='font-medium'>Price:</span> <span>$500</span></p>

                            {/* Star Rating Component */}
                            <p className='flex items-center gap-1 text-xs md:text-base'>
                                <span className='font-medium'>Ratings:</span>
                                <span className='flex gap-1 text-orange-400'>
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                    <IoStar />
                                </span>
                            </p>
                        </div>
                        <button className='border border-[#6593fc66] px-2 md:px-3 py-[2px] md:py-1 text-[#6593fc] text-xs md:text-base font-bold'>Buy</button>
                    </div>
                </div>
            </div>
            <div className='block lg:hidden text-center mt-3'>
                <SeeMoreBtn />
            </div>
        </section>
    );
};

export default ForYou;