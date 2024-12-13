// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const energyRoutes = require('./routes/energyRoutes');

// Initialize dotenv to use environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Use energyRoutes for handling energy-related routes
app.use('/api/energy', energyRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
