import Login from '@/components/Sections/Login';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login page of the NextStore app'
};

const LoginPage: React.FC = () => {

    return (
        <>
            <Login />
        </>
    );
};

export default LoginPage;