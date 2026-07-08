import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MONGODB_URL = process.env.MONGODB_URL;
    const conn = await mongoose.connect(MONGODB_URL);
    console.log("Mongo DB Connected Successfully");
    console.log("DB Host", conn.connection.host);
    console.log("DB Name", conn.connection.name);
  } catch (error) {
    console.log("Error while connecting to DB", MONGODB_URL);
    process.exit(1);
  }
};

export default connectDB;
