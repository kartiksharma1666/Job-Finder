import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// DB Connection
const dbConnection = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI; // Ensure this matches your .env file
    console.log('MongoDB URI:', mongoUri);

    if (!mongoUri) {
      console.error('MongoDB URI is not defined in .env');
      return;
    }
    

    await mongoose.connect(mongoUri);

    console.log("DB Connected Successfully");
  } catch (error) {
    console.error("DB Error: " + error);
  }
};

export default dbConnection;
