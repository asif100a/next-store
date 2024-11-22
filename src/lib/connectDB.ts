import { Db, MongoClient, ServerApiVersion } from "mongodb";

let db: Db | undefined;

const connectDB = async(): Promise<Db> => {
    // If db already exists, return the db
    if (db) {
        return db;
    } else {
        try {
            const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
            if(!uri) {
                throw new Error("MongoDB uri is not defined");
            }

            // Create a MongoClient with a MongoClientOptions object to set the Stable API version
            const client = new MongoClient(uri, {
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true,
                }
            });

            // Connect the db
            await client.connect();
            // Now, define the db
            db = client.db("NextStore");
            return db;

        } catch (error) {
            console.log(error);
            throw new Error('Failed to connect to the database');
        }
    }
};

export default connectDB;