import Image from 'next/image';
import React from 'react';

const Categories: React.FC = () => {

    return (
        <section className='mx-2 md:mx-3 lg:mx-auto mt-4'>
            <h1 className='text-xl lg:text-2xl font-medium mb-2'>Categories</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-fit gap-2 md:gap-3 mx-auto'>
                {/* Card 1 */}
                <div>
                <div className='border border-[#dd37fc4d] w-full lg:w-60 p-2 md:p-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/pWSZJLH/maxresdefault-2.jpg'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <h5 className='text-center font-semibold'>Category name</h5>
                    </div>
                </div>
                {/* Card 2 */}
                <div>
                    <div className='border border-[#dd37fc4d] w-full lg:w-60 p-2 md:p-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/pWSZJLH/maxresdefault-2.jpg'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <h5 className='text-center font-semibold'>Category name</h5>
                    </div>
                </div>
                {/* Card 3 */}
                <div>
                    <div className='border border-[#dd37fc4d] w-full lg:w-60 p-2 md:p-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/pWSZJLH/maxresdefault-2.jpg'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <h5 className='text-center font-semibold'>Category name</h5>
                    </div>
                </div>
                {/* Card 4 */}
                <div>
                    <div className='border border-[#dd37fc4d] w-full lg:w-60 p-2 md:p-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/pWSZJLH/maxresdefault-2.jpg'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <h5 className='text-center font-semibold'>Category name</h5>
                    </div>
                </div>
                {/* Card 5 */}
                <div>
                    <div className='border border-[#dd37fc4d] w-full lg:w-60 p-2 md:p-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/pWSZJLH/maxresdefault-2.jpg'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <h5 className='text-center font-semibold'>Category name</h5>
                    </div>
                </div>
                {/* Card 6 */}
                <div>
                    <div className='border border-[#dd37fc4d] w-full lg:w-60 p-2 md:p-3 space-y-2'>
                        <Image
                            src='https://i.ibb.co/pWSZJLH/maxresdefault-2.jpg'
                            alt='car'
                            width={240}
                            height={180}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                        <h5 className='text-center font-semibold'>Category name</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;