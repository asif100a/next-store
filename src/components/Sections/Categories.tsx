import Image from 'next/image';
import React from 'react';

const Categories: React.FC = () => {
    const cards = Array.from(Array(6));

    return (
        <section className='mx-2 md:mx-3 lg:mx-auto mt-8 bg-white p-4 rounded-md'>
            <h1 className='text-xl lg:text-2xl font-medium mb-2'>Categories</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-fit gap-2 md:gap-3 mx-auto'>
                {/* Cards */}
                {cards.map((_, idx) => (
                    <div key={idx}>
                        <div className='border border-[#dd37fc4d] rounded-sm w-full lg:w-60 p-2 md:p-3 space-y-2'>
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
                ))}
            </div>
        </section>
    );
};

export default Categories;