"use client";

import SignUp from '@/components/Sections/SignUp';
import axios from 'axios';
// import { Metadata } from 'next';
import React, { FormEvent } from 'react';
import toast from 'react-hot-toast';

// export const metadata: Metadata = {
//     title: 'Sign Up',
//     description: 'Sign up page of the NextStore app'
// };

interface ErrorResponse {
    error: string;
}

const page: React.FC = () => {
    // Handle the form submission
    const handleFormSubmission = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        console.table({ email, password });

        try {
            // Sign up the user
            const response = await axios.post('http://localhost:3000/sign-up/api', { name, email, password });

            // Now, reset the input fields
            if (response.status === 200) {
                const form = event.target as HTMLFormElement;
                form.reset();
                toast.success('You have signed up successfully');
            }
        } catch (error) {
            if (axios.isAxiosError<ErrorResponse>(error) && error.response) {
                if (error.response.status === 409) {
                    console.log(error.response.data.error); // Accessing 'error' directly
                    toast.error(error.response.data.error);
                }
            }
        }
    }

    return (
        <>
            <SignUp
                handleFormSubmission={handleFormSubmission}
            />
        </>
    );
};

export default page;