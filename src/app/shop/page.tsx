import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Shop',
    description: 'Shop page of the NextStore app'
};

const page: React.FC = () => {
    return (
        <section>
            <h1>This is Shop page</h1>
        </section>
    );
};

export default page;