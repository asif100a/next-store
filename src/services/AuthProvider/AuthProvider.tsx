'use client'
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

// Define the type of the props
interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
};

export default AuthProvider;