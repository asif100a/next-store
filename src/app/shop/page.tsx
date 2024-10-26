import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Shop',
    description: 'Shop page of the NextStore app'
};

const page: React.FC = () => {
    return (
        <section className='w-auto lg:w-[996px] xl:w-[1248px] mx-auto py-6 min-h-[calc(100vh-445.9px)]'>
            <h1>This is Shop page</h1>
        </section>
    );
};

export default page;