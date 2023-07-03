const Airline = require('../models/airlineModel');

exports.getAllAirlines = async (req, res, next) => {
        /* #swagger.responses[200] = {
            description: 'Airline successfully obtained.',
            schema: { $ref: '#/components/schemas/Airline' }
    } */
    try {
        const airports = await Airline.find({});
        res.status(200).json(airports);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAirlineById = async (req, res, next) => {
        /* #swagger.responses[200] = {
            description: 'Airline successfully obtained.',
            schema: { $ref: '#/components/schemas/Airline' }
    } */
    try {
        const airline = await Airline.findById(req.params.id);
        res.status(200).json(airline);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
