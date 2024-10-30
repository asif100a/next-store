import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Extend the user interface to include the role
declare module "next-auth" {
    interface Session {
        user: {
            name?: string | null;
            email?: string | null;
            image?: string | null;
            role?: string;
        };
    }

    interface User {
        role?: string;
    }

};

// Extend the jwt to include the role
declare module "next-auth/jwt" {
    interface JWT {
        role?: string;
    }
}

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 20 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'Email', type: 'email', required: true, placeholder: 'Your email address' },
                password: { label: 'Password', type: 'password', required: true, placeholder: 'Your password' },
                image: { label: 'Image', type: 'text', required: true, placeholder: 'Your image url' },
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }
                else {
                    const user: User = { id: '1', name: 'user', role: 'admin', email: credentials?.email, image: credentials?.image };
                    return user;
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            if (account) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            // If session.user exits, add the role
            if (session.user) {
                session.user.role = token.role;
            }
            return session;
        },
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };