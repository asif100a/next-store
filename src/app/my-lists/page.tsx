import { Metadata } from 'next';
import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export const metadata: Metadata = {
    title: 'My Lists',
    description: 'A list of selected products'
};

const page: React.FC = async() => {
    const session = await getServerSession(authOptions);
    console.log('From my list page:', session);
    
    return (
        <section className='w-auto lg:w-[996px] xl:w-[1248px] mx-auto py-6 min-h-[calc(100vh-445.9px)]'>
            <h1>This is my list page</h1>
        </section>
    );
};

export default page;