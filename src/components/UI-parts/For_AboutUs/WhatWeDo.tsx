import Image from 'next/image';
import React from 'react';

const WhatWeDo = () => {
    return (
        <div className='border border-[#dd37fc] rounded-lg p-3 flex gap-8 w-fit'>
            <div>
                <Image src='/images/who_we_are.jpg' alt='What We Do' width={400} height={60} />
            </div>
            <div className='w-1/2'>
                <h1 className='text-3xl font-semibold'>What We Do</h1>
                <p>
                    Although our business has evolved over the years, one constant is {"customers'"} desire for lower prices, better selection, and convenient services. Today, Amazon shoppers can find what {"they're"} looking for online and in person. From delivering fresh produce to their doorstep to creating and distributing movies, music, and more, we are always finding new ways to delight our customers.</p>
            </div>
        </div>
    );
};

export default WhatWeDo;