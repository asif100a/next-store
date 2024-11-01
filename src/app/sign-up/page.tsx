import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Sign Up',
    description: 'Sign up page of the NextStore app'
};


const page: React.FC = () => {
    return (
        <section>
            <h1>This is Sign Un page</h1>
        </section>
    );
};

export default page;