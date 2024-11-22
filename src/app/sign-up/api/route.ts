import connectDB from "@/lib/connectDB";

export const POST = async (request: Request) => {
    const newUser = await request.json();
    console.log(newUser.email);

    try {
        const db = await connectDB();
        const userCollection = db.collection('users');
        
        // First, check if user is exist before creating a new user
        const isExist = await userCollection.findOne({email: newUser.email});
        if(isExist) {
            return Response.json({error: 'User already exists'}, {
                status: 409
            })
        }

        // Now, save user data to the db
        const response = await userCollection.insertOne(newUser);
        return Response.json(response);

    } catch(error) {
        console.log(error);
        return Response.json({error: 'Internal server error'}, {
            status: 500
        })
    }
};