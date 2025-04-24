"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoStar } from 'react-icons/io5';

// interface Card {
//     image: string;
//     title: string;
//     price: string;
//     rating: string;
// };

// Define the type of AllProducts component props
interface AllProductsProps {
    productTitle: string;
    cards: number[];
};

const AllProducts: React.FC<AllProductsProps> = ({
    productTitle,
    cards
}) => {
    console.log("cards: ", cards);

    return (
        <section className='mx-2 md:mx-3 lg:mx-auto bg-white p-4 rounded-md'>
            <div className='flex justify-between items-center gap-6 mb-4'>
            <h1 className='text-xl lg:text-2xl font-medium'>All Products</h1>
                <p>Choose your favorite item from here</p>
                {/* <button className='box-border border border-[#dd37fc4d] rounded-sm px-2 md:px-3 py-[2px] md:py-1 text-[#dd37fc] hover:bg-[#dd37fc] hover:text-white text-xs md:text-base font-bold'>See All Products</button> */}
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-fit gap-2 md:gap-3 mx-auto'>
                {cards.map((_, index) => (
                    <div key={index}>
                        <div className='border border-[#dd37fc4d] rounded-sm w-full lg:w-60 p-2 md:p-3 space-y-2 hover:shadow-md hover:shadow-[#dd37fc4d]'>
                            <Image
                                src='https://i.ibb.co/Ws5S6XM/24-FOR-hero-1.webp'
                                alt='car'
                                width={240}
                                height={180}
                                priority
                                style={{ width: 'auto', height: 'auto' }}
                            />
                            <div className='space-y-1'>
                                <Link href={'#'}>
                                    <h5 className='font-semibold text-sm md:text-base hover:text-[#6593fc]'>{productTitle.slice(0, 40)}...</h5>
                                </Link>
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
                            <button className='box-border border border-[#6593fc66] rounded-sm px-2 md:px-3 py-[2px] md:py-1 text-[#6593fc] hover:bg-[#6593fc] hover:text-white text-xs md:text-base font-bold'>Buy</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='block text-center mt-4'>
                <button className='box-border border border-[#dd37fc4d] px-4 py-2 text-base text-[#dd37fc] hover:bg-[#dd37fc] hover:text-white font-bold'>See More</button>
            </div>
        </section>
    );
};

export default AllProducts;