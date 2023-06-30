const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

router.get('/', flightController.getFirstFlight);
router.get('/id/:id', flightController.getFlightById);
router.get('/number/:flightNumber', flightController.getFlightByNumber);

module.exports = router;
