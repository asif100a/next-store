import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Laptops',
    keywords: ['laptops', 'computer', 'electronics'],
    description: 'Laptops page of the NextStore app'
};

const page = () => {
    return (
        <section>
            <h1>This is Laptops page.</h1>
        </section>
    );
};

export default page;