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
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,  // Ensure SSL is enabled for Atlas connection
    tls: true,
  });
  console.log("connect to mongodb")
} catch (error) {
  console.log(error)

}

//defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});



