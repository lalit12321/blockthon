// controllers/energyController.js

const Energy = require('../models/energyModel');

// Create new energy data
const addEnergyData = async (req, res) => {
  const { energyProduced, energyConsumed, userId } = req.body;

  try {
    const newEnergyData = new Energy({
      energyProduced,
      energyConsumed,
      userId
    });

    const savedEnergyData = await newEnergyData.save();
    res.status(201).json(savedEnergyData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, could not save energy data' });
  }
};

// Get all energy data
const getEnergyData = async (req, res) => {
  try {
    const energyData = await Energy.find();
    res.status(200).json(energyData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, could not retrieve energy data' });
  }
};

// Get energy data by user
const getEnergyDataByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const energyData = await Energy.find({ userId });
    if (!energyData) {
      return res.status(404).json({ message: 'No energy data found for this user' });
    }
    res.status(200).json(energyData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, could not retrieve energy data' });
  }
};

module.exports = {
  addEnergyData,
  getEnergyData,
  getEnergyDataByUser,
};
