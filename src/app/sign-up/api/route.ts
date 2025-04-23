import connectDB from "@/lib/connectDB";
import bcrypt from "bcryptjs";

export const POST = async (request: Request) => {
    const newUser = await request.json();

    // Check whether newUser is exist
    if (!newUser) {
        throw new Error("User is required")
    } else if (!newUser.password) {
        throw new Error("Password is required")
    }

    try {
        const db = await connectDB();
        const userCollection = db.collection('users');

        // First, check if user is exist before creating a new user
        const isExist = await userCollection.findOne({ email: newUser.email });
        if (isExist) {
            return Response.json({ error: 'User already exists' }, {
                status: 409
            })
        }

        // Hash user password with bcryptJS
        const hashPassword = await bcrypt.hash(newUser.password, 12);

        // // Now, save user data to the db
        await userCollection.insertOne({
            ...newUser, 
            password: hashPassword,
            createdAt: new Date()
        });
        return Response.json({message: 'User created successfully'}, {
            status: 200
        });

    } catch (error) {
        console.log(error);
        return Response.json({ error: 'Internal server error' }, {
            status: 500
        })
    }
};