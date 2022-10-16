import mongoose from 'mongoose';

export async function connectDb() {
    try {
        await mongoose.connect("mongodb://mongodb/notesdb");
        console.log("🚀 DB connected successfully");
    } catch (error) {
        console.log("DB connection failed");
        console.log(error);
        process.exit(1);
    }
}