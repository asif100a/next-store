import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Cars',
    keywords: ['cars', 'motors', 'motor cars'],
    description: 'Cars page of the NextStore app'
};

const page = () => {
    return (
        <section>
            <h1>This is Cars page.</h1>
        </section>
    );
};

export default page;