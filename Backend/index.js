import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();  // Load .env variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB URI (ensure it's correct)
const URI = process.env.MongoDBURI;  // .env mein aapka URI hona chahiye

// Connect to MongoDB Atlas using native MongoDB driver
async function connectToMongoDB() {
  try {
    const client = await MongoClient.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,  // Ensure SSL is enabled for Atlas connection
      tls: true,
    });
    console.log("✅ Connected to MongoDB");

    const db = client.db();  // Access your database

    // Perform other operations with db as needed...
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
}

connectToMongoDB();  // Calling the function to connect to MongoDB

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
