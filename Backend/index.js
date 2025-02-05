import express from "express";
import { MongoClient } from "mongodb";  // Import MongoClient from mongodb
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

dotenv.config();

// Server define
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB using native MongoDB driver
async function connectToMongoDB() {
  try {
    const client = await MongoClient.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,  // Enable SSL
      sslValidate: true,  // Ensure the SSL certificate is valid
    });
    console.log("✅ Connected to MongoDB");

    const db = client.db(); // Access your database (default database is passed)
    // Example of performing database operations:
    // const books = await db.collection("books").find().toArray();

    // You can pass the db to your route if needed
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
}

connectToMongoDB(); // Call the function to connect to MongoDB

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
