import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Motorbikes',
    keywords: ['motorbikes', 'bikes', 'motor cycle'],
    description: 'Motorbikes page of the NextStore app'
};

const page = () => {
    return (
        <section>
            <h1>This is Motorbikes page.</h1>
        </section>
    );
};

export default page;