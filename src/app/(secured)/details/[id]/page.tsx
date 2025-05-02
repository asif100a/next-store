import Image from 'next/image';
import React from 'react';
import { GoPlus } from 'react-icons/go';
import { HiMinusSmall } from 'react-icons/hi2';
import '@/css/style.css';

const DetailsPage = () => {
    return (
        <section className='bg-white w-full h-full rounded-sm'>
            <div className="w-full h-full p-4 flex flex-col lg:flex-row gap-8">
                {/* Display Images */}
                <div className='space-y-4'>
                    {/* Main Image */}
                    <div>
                        <Image
                            src={''}
                            alt={''}
                            width={350}
                            height={400}
                            className='rounded-sm'
                        />
                    </div>
                    {/* Thumbnail Images */}
                    <div className='flex gap-4'>
                        <Image
                            src={''}
                            alt={''}
                            width={92}
                            height={112}
                            className='rounded-sm'
                        />
                        <Image
                            src={''}
                            alt={''}
                            width={92}
                            height={112}
                            className='rounded-sm'
                        />
                        <Image
                            src={''}
                            alt={''}
                            width={92}
                            height={112}
                            className='rounded-sm'
                        />
                    </div>
                </div>

                {/* Main content */}
                <div className='space-y-4'>
                    <h4 className='text-xl font-semibold'>Surf Excel Matic Liquid Detergent Top Load 1L</h4>
                    <p><b>Price:</b> </p>
                    <div className="flex gap-4">
                        {/* Ratings */}
                        <div></div>
                        {/* Answered Questions */}
                        <p><small>5 Answered Questions</small></p>
                    </div>
                    <div>
                        <p><b>Brand:</b> Surf Excel{ }</p>
                        {/* Like */}
                        <span></span>
                        {/* Share */}
                        <span></span>
                    </div>

                    {/* Price */}
                    {/* Percentage */}
                    <p><b>Percentage:</b> </p>
                    {/* Weight */}
                    <p><b>Weight:</b> </p>
                    {/* Quantity */}
                    <div className='flex gap-2'>
                        <p><b>Quantity:</b> </p>
                        <div className='flex gap-2'>
                            {/* Minus */}
                            <button className='border px-0.5 rounded-sm'><HiMinusSmall  className='text-xl' /></button>
                            {/* Count */}
                            <p>1</p>
                            {/* Plus */}
                            <button className='border px-0.5 rounded-sm'><GoPlus className='text-xl' /></button>
                        </div>
                    </div>

                    <div className='flex justify-end gap-8'>
                        {/* Buy Now */}
                        <button className='button-primary'>Buy Now</button>
                        {/* Add to Cart */}
                        <button className='button-secondary'>Add to Cart</button>
                    </div>
                </div>

                {/* Delivery Options */}
                <div className='space-y-4'>
                    <p><small>Delivery Options</small></p>
                    <p>
                        {/* Location Icon */}

                        {/* Address */}
                        <span></span>
                    </p>
                    <p>
                        {/* Total Icon */}

                        {/* Total Delivery */}
                        <span><b>Total Delivery:</b></span>
                    </p>
                    <p>
                        {/* Money icon */}

                        {/* Total Price */}
                        <span><b>Total Price:</b></span>
                    </p>
                    <p>
                        {/* Cash Icon */}

                        {/* Cash on Delivery */}
                        <span>Cash on Delivery Available</span>
                    </p>
                    <p>
                        {/* Warranty Icon */}

                        {/* Warranty */}
                        <span>Warranty not available</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DetailsPage;