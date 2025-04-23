"use client";

import Login from '@/components/Sections/Login';
// import { Metadata } from 'next';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';
import toast from 'react-hot-toast';

// export const metadata: Metadata = {
//     title: 'Login',
//     description: 'Login page of the NextStore app'
// };

const LoginPage: React.FC = () => {
    const router = useRouter();

    // Handle the form submission
    const handleFormSubmission = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        console.table({ email, password });

        const response = await signIn('credentials', {
            email,
            password,
            redirect: false
        });
        // console.log(response);
        if(response?.error) {
            toast.error('Invalid email or password');
        }else if(response?.status === 200) {
            toast.success('Your have logged in successfully');
            router.push('/');
        }
    }

    return (
        <>
            <Login
                handleFormSubmission={handleFormSubmission}
            />
        </>
    );
};

export default LoginPage;