import connectDB from "@/lib/connectDB";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
import { Db, ObjectId } from "mongodb";

// Define the interface of Current user that are from the db
interface CurrentUser {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: ObjectId;
}

const options: AuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                // Check if the credentials is exist
                if (!credentials) {
                    throw new Error('Email and Password fields are required.');
                }
                const { email, password } = credentials;
                console.log(email, password);
                // Throw an Error if email or password are undefined
                if (!email || !password) {
                    throw new Error('Email and Password fields are required.');
                }

                try {
                    // Match email with db
                    const db: Db = await connectDB();
                    const userCollection = db.collection('users');
                    const currentUser = await userCollection.findOne<CurrentUser>({ email });
                    // Throw an Error if user is not exist in the db
                    if (!currentUser) {
                        throw new Error('User is not found');
                    }
                    console.log({ currentUser});

                    // Now, match provided password to currentUser's password
                    const matchedPassword = await bcrypt.compare(password, currentUser?.password);
                    console.log({ matchedPassword });
                    // Throw an error if the provided password is not correct
                    if (!matchedPassword) {
                        throw new Error('Wrong password');
                    }

                    return currentUser;

                } catch (error) {
                    console.log(error);
                    return null;
                }
            },
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            console.log("Token from callbacks:", token);
            if(user) {
                token.id = user._id;
                console.log("User id from callbacks IF:", user._id);
                token.createdAt = user.createdAt;
            }

            return token;
        },
        async session({session, token}) {
            console.log({session, token});
            // Set Token's _id and createdAt property to the Session
            session.user.id = token.id;
            session.user.createdAt = token.createdAt;

            return session;
        }
    },
    pages: {
        signIn: '/login',
    },
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };