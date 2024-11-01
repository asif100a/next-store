import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Phones',
    keywords: ['phones', 'mobiles', 'electronics'],
    description: 'Phones page of the NextStore app'
};

const page = () => {
    return (
        <section>
            <h1>This is Phones page.</h1>
        </section>
    );
};

export default page;