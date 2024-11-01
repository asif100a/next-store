import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Desktops',
    keywords: ['desktops', 'computer', 'electronics'],
    description: 'Desktops page of the NextStore app'
};

const page = () => {
    return (
        <section>
            <h1>This is Desktops page.</h1>
        </section>
    );
};

export default page;