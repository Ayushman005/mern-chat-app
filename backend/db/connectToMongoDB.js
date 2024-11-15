import mongoose from "mongoose";

const connectToMongoDB = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongodb")
    } catch (error) {
        console.log("error connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB;