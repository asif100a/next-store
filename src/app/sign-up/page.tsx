import SignUp from '@/components/Sections/SignUp';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Sign Up',
    description: 'Sign up page of the NextStore app'
};


const page: React.FC = () => {
    return (
        <>
            <SignUp />
        </>
    );
};

export default page;