import express from "express";
import mongoose from "mongoose";
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

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,                         // Force SSL
  tlsInsecure: true,                 // Disable certificate validation temporarily (only for testing)
  tlsAllowInvalidCertificates: true, // Allow invalid certificates (for testing)
})
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.log("❌ MongoDB connection error:", err));

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
