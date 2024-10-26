import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Contact us page of the NextStore app'
};

const page = () => {
    return (
        <section className="w-auto lg:w-[996px] xl:w-[1248px] mx-auto py-6 min-h-[calc(100vh-445.9px)]">
            <h1>This is Contact Us page.</h1>
        </section>
    );
};

export default page;