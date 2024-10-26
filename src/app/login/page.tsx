import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login page of the NextStore app'
};

const LoginPage: React.FC = () => {
    return (
        <section className="w-auto lg:w-[996px] xl:w-[1248px] mx-auto py-6 min-h-[calc(100vh-445.9px)]">
            <h1>This is Login Page</h1>
        </section>
    );
};

export default LoginPage;