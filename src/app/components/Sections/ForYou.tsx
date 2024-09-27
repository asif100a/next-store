import Image from 'next/image';
import React, { FC } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoStar } from 'react-icons/io5';

const ForYou: FC = () => {
    const productTitle = "Rescue Bots Deformation Transformer Car One-Step Car Robot Vehicle Model Action Figures Toy Transform Car for Kids";

    return (
        <section className=''>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-medium mb-3'>For You</h1>
                <div className='flex justify-between items-center gap-6'>
                    <button><IoIosArrowBack className='hover:text-orange-400 text-lg' /></button>
                    <button><IoIosArrowForward className='hover:text-orange-400 text-lg' /></button>
                </div>
            </div>
            <div className='grid grid-cols-4 xl:grid-cols-5 w-fit gap-3 mx-auto'>
                {/* Card 1 */}
                <div>
                    <div className='border w-60 px-3 py-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/Ws5S6XM/24-FOR-hero-1.webp'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <div className='space-y-1'>
                            <h5 className='font-semibold'>{productTitle.slice(0, 40)}...</h5>
                            <p><span className='font-medium'>Price:</span> <span>$500</span></p>

                            {/* Star Rating Component */}
                            <p className='flex items-center gap-1'>
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
                        <button className='border px-3 py-1 font-bold'>Buy</button>
                    </div>
                </div>
                {/* Card 2 */}
                <div>
                    <div className='border w-60 px-3 py-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/Ws5S6XM/24-FOR-hero-1.webp'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <div className='space-y-1'>
                            <h5 className='font-semibold'>{productTitle.slice(0, 40)}...</h5>
                            <p><span className='font-medium'>Price:</span> <span>$500</span></p>

                            {/* Star Rating Component */}
                            <p className='flex items-center gap-1'>
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
                        <button className='border px-3 py-1 font-bold'>Buy</button>
                    </div>
                </div>
                {/* Card 3 */}
                <div>
                    <div className='border w-60 px-3 py-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/Ws5S6XM/24-FOR-hero-1.webp'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <div className='space-y-1'>
                            <h5 className='font-semibold'>{productTitle.slice(0, 40)}...</h5>
                            <p><span className='font-medium'>Price:</span> <span>$500</span></p>

                            {/* Star Rating Component */}
                            <p className='flex items-center gap-1'>
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
                        <button className='border px-3 py-1 font-bold'>Buy</button>
                    </div>
                </div>
                {/* Card 4 */}
                <div>
                    <div className='border w-60 px-3 py-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/Ws5S6XM/24-FOR-hero-1.webp'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <div className='space-y-1'>
                            <h5 className='font-semibold'>{productTitle.slice(0, 40)}...</h5>
                            <p><span className='font-medium'>Price:</span> <span>$500</span></p>

                            {/* Star Rating Component */}
                            <p className='flex items-center gap-1'>
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
                        <button className='border px-3 py-1 font-bold'>Buy</button>
                    </div>
                </div>
                {/* Card 5 */}
                <div>
                    <div className='border w-60 px-3 py-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/Ws5S6XM/24-FOR-hero-1.webp'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <div className='space-y-1'>
                            <h5 className='font-semibold'>{productTitle.slice(0, 40)}...</h5>
                            <p><span className='font-medium'>Price:</span> <span>$500</span></p>

                            {/* Star Rating Component */}
                            <p className='flex items-center gap-1'>
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
                        <button className='border px-3 py-1 font-bold'>Buy</button>
                    </div>
                </div>
                {/* Card 6 */}
                <div>
                    <div className='border w-60 px-3 py-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/Ws5S6XM/24-FOR-hero-1.webp'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <div className='space-y-1'>
                            <h5 className='font-semibold'>{productTitle.slice(0, 40)}...</h5>
                            <p><span className='font-medium'>Price:</span> <span>$500</span></p>

                            {/* Star Rating Component */}
                            <p className='flex items-center gap-1'>
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
                        <button className='border px-3 py-1 font-bold'>Buy</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForYou;