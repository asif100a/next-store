import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Contact us page of the NextStore app'
};

const page = () => {
    return (
        <section>
            <h1>This is About Us page.</h1>
        </section>
    );
};

export default page;