import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import { ObjectId } from "mongodb";

type ExistedUser = {
    _id: ObjectId,
    email: string,
    password: string
};

// type User = {
//     id: string,
//     email: string
// };

const handler = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials) return null;

                const { email, password } = credentials;
                if (!email || !password) return null;

                try {
                    const DB = await connectDB();
                    const userCollection = DB.collection("users");
                    const existedUser = await userCollection.findOne<ExistedUser>({ email });
                    if (!existedUser ) return null;

                    // Match the user password
                    const matched = await bcrypt.compare(password, existedUser?.password);
                    if (!matched) return null;

                    return {
                        ...existedUser,
                        id: existedUser._id.toString()
                    };
                } catch {
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET
});

export {handler as GET, handler as POST};