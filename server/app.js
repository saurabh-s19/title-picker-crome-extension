// app.js
const express = require('express');
const app = express();
const sequelize = require('./config/sequelize');
const profileRoutes = require('./routes/profileroutes');
const cors=require("cors");

// Middleware setup, e.g., body parsing

app.use(express.json());
app.use(cors());

// Use student routes
app.use('/profile', profileRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
