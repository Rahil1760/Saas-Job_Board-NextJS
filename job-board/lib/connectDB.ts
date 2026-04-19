import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI
console.log("MongoURI", MONGODB_URI)
if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI in .env.local")
}

interface MongooseCache {
    conn: any;
    promise: any;
}

declare global {
    var mongoose: MongooseCache | undefined; // eslint-disable-line no-var
}

/**
 * Global is used here to maintain a cached connection
 * across hot reloads in development
 */
let cached = global.mongoose as MongooseCache

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }

        console.log("Connecting to MongoDB...");
        cached.promise = mongoose.connect(MONGODB_URI || "", opts).then((mongoose) => {
            console.log("MongoDB connected successfully");
            return mongoose
        }).catch((error) => {
            console.error("MongoDB connection error:", error);
            throw error;
        });
    }

    try {
        cached.conn = await cached.promise
    } catch (e) {
        cached.promise = null; // Reset promise on failure so next attempt tries again
        throw e;
    }
    return cached.conn
}

export default connectDB