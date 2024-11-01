import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Login',
    description: 'Login page of the NextStore app'
};

const LoginPage: React.FC = () => {
    return (
        <section>
            <h1>This is Login Page</h1>
        </section>
    );
};

export default LoginPage;