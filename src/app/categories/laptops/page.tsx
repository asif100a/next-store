import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Laptops',
    keywords: ['laptops', 'computer', 'electronics'],
    description: 'Laptops page of the NextStore app'
};

const page = () => {
    return (
        <section className="w-auto lg:w-[996px] xl:w-[1248px] mx-auto py-6 min-h-[calc(100vh-445.9px)]">
            <h1>This is Laptops page.</h1>
        </section>
    );
};

export default page;