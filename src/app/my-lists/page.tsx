import { Metadata } from 'next';
import React from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Image from 'next/image';

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
            <div>
                <h4>Name: {session?.user?.name}</h4>
                <p><small>Email: {session?.user?.email}</small></p>
                <Image src={session?.user?.image} alt={session?.user?.name} height={100} width={100} />
            </div>
        </section>
    );
};

export default page;