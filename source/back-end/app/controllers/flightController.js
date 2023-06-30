const Flight = require('../models/flightModel');
const Flights = require('../models/flightModel');

// Retrieve all flights
exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flights.find();
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve flights' });
  }
};

// Find a single Flight by id
exports.getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    res.status(200).json(flight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Find a single Flight by flight number
exports.getFlightByNumber = async (req, res) => {
    try {
        const flightNumber = req.params.flightNumber;
        const flight = await Flights.findOne({ FLIGHT_NUMBER: flightNumber });
        res.status(200).json(flight);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Retrieve the first flight
exports.getFirstFlight = async (req, res) => {
  try {
    const flight = await Flights.findOne();
    res.json(flight);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving flight' });
  }
};
