const express = require("express");
const app = express();
const connectDB = require("./config/db"); // Import the database connection
const cors = require("cors");
const userRoutes = require("./routes/userRoutes"); // Import user routes

// Connect to the database
connectDB();

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // Allow requests from this origin
  methods: ["GET", "POST"], // Allow specific HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
}));

app.use(express.json()); // Body parsing middleware

// Use the user routes
app.use("", userRoutes); // Mount user routes at /api/users

// Start the server
const port = process.env.PORT || 5000; // Default to 5000 if PORT is not defined
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
