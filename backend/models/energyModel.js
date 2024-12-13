// models/energyModel.js

const mongoose = require('mongoose');

// Define the schema for energy data
const energySchema = new mongoose.Schema({
  energyProduced: { type: Number, required: true },  // Energy produced in kWh
  energyConsumed: { type: Number, required: true },  // Energy consumed in kWh
  timestamp: { type: Date, default: Date.now },      // Timestamp when data was recorded
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Assuming a User model exists
});

// Create and export the model based on the schema
const Energy = mongoose.model('Energy', energySchema);
module.exports = Energy;
