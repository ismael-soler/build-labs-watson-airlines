const express = require('express');
const router = express.Router();
const airportController = require('../controllers/airportController');

router.get('/', airportController.getAllAirports);
router.get('/id/:id', airportController.getAirportById);
router.get('/state/:state', airportController.getAirportsByState);
router.get('/iata/:iataCode', airportController.getAirportByIataCode);

module.exports = router;
