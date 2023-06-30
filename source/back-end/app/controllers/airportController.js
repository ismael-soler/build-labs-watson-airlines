const Airport = require('../models/airportModel');

exports.getAllAirports = async (req, res) => {
    try {
        const airports = await Airport.find();
        res.status(200).json(airports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAirportById = async (req, res) => {
    try {
        const airport = await Airport.findById(req.params.id);
        res.status(200).json(airports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};