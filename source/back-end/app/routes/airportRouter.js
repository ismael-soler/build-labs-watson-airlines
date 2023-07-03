const express = require('express');
const router = express.Router();
const airportController = require('../controllers/airportController');

router.get('/', airportController.getAllAirports);
router.get('/id/:id', airportController.getAirportById);
router.get('/state/:state', airportController.getAirportsByState);

module.exports = router;
