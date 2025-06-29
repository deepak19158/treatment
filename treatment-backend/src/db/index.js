import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// const mongo_url = process.env.MONGODB_URL;
const mongo_url =
  "mongodb+srv://deepak:zATksVZoxgA1TRL0@deepakecom.vybffzz.mongodb.net/test?retryWrites=true&w=majority";
console.log("MongoDB URL:", mongo_url);
const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URL, {
    await mongoose.connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
