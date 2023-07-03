const express = require('express');
const router = express.Router();
const airlineController = require('../controllers/airlineController');

router.get('/', airlineController.getAllAirlines);
router.get('/id/:id', airlineController.getAirlineById);

module.exports = router;