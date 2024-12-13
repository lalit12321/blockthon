// routes/energyRoutes.js

const express = require('express');
const router = express.Router();
const { addEnergyData, getEnergyData, getEnergyDataByUser } = require('../controllers/energyController');

// Route to add new energy data
router.post('/', addEnergyData);

// Route to get all energy data
router.get('/', getEnergyData);

// Route to get energy data by user
router.get('/:userId', getEnergyDataByUser);

module.exports = router;
