const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require('./config/db')
const sessionRoutes = require('./routes/sessionRoutes');

// const connectDB = require("./config/db"); // Import the database connection
const userRoutes = require("./routes/userRoutes"); // Import user routes

connectDB()
app.use(express.json()); // Body parsing middleware

// Use the user routes
app.use("", userRoutes);
app.use('', sessionRoutes); 

app.use(cors()); // Allow all origins (not recommended for production)

// Start the server
const port = process.env.PORT || 5000; // Default to 5000 if PORT is not defined
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
