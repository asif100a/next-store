import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'Email', type: 'email', required: true, placeholder: 'Your email address' },
                password: { label: 'Password', type: 'password', required: true, placeholder: 'Your password' },
            },
            async authorize(credentials) {
                if(!credentials) {
                    return null;
                }
                else {
                    const user: User = {id: '1', name: 'user', email: credentials?.email};
                    return user;
                }
            }
        })
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };