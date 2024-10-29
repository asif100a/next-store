import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler: NextAuthOptions = NextAuth({
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
});

export { handler as GET, handler as POST };