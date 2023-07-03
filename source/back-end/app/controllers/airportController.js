const Airport = require('../models/airportModel');

exports.getAllAirports = async (req, res) => {
        /* #swagger.responses[200] = {
            description: 'Airport successfully obtained.',
            schema: { $ref: '#/components/schemas/Airport' }
        }
       #swagger.tags = ['Airport']
    */
    try {
        const airports = await Airport.find();
        res.status(200).json(airports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAirportById = async (req, res) => {
        /* #swagger.responses[200] = {
            description: 'Airport successfully obtained.',
            schema: { $ref: '#/components/schemas/Airport' }
        }
       #swagger.tags = ['Airport']
    */
    try {
        const airport = await Airport.findById(req.params.id);
        res.status(200).json(airports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAirportsByState = async (req, res) => {
    /* #swagger.responses[200] = {
            description: 'Airport successfully obtained.',
            schema: { $ref: '#/components/schemas/Airport' }
        }
       #swagger.tags = ['Airport']
    */
    try {
        const airports = await Airport.find({ STATE: req.params.state });
        res.status(200).json(airports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}