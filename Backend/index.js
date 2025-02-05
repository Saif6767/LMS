import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express();

//middle ware
app.use(cors());
app.use(express.json());

dotenv.config()

// server difine
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongodb
mongoose.connect(URI, {
  useNewUrlParser: true,        // Use the new URL parser
  useUnifiedTopology: true,     // Use the new topology engine
  ssl: true,                    // Enabling SSL/TLS
  tls: true,                    // Enabling TLS
  serverSelectionTimeoutMS: 5000,   // Timeout for server selection
  connectTimeoutMS: 10000,      // Timeout for establishing connection
})
  .then(() => console.log("✅ Successfully connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

//defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});
