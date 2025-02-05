import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import bookRoute from './route/book.route.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Server and MongoDB URI
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Declare MongoDB connection variables
let db;
let client;

// Function to connect to MongoDB
async function connectToMongoDB() {
  try {
    client = await MongoClient.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,  // Enable SSL
    });
    db = client.db();  // Save database instance
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
  }
}

connectToMongoDB();  // Call the function to connect to MongoDB

// Routes
app.use('/book', bookRoute);  // Use the book routes
app.use('/user',userRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Closing MongoDB connection...');
  await client.close();
  process.exit();
});
