const Airport = require('../models/airportModel');

exports.getAllAirports = async (req, res) => {
    /* #swagger.responses[200] = {
        description: 'Airports successfully obtained.',
        schema: {
            type: 'array',
            items: {
                $ref: '#/components/schemas/Airport'
            }
        }
    }
    #swagger.responses[500] = {
        description: 'Internal server error',
        schema: {
            $ref: '#/components/schemas/Error'
        }
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
    /* #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID of the airport',
        required: true,
        type: 'string'
    }
    #swagger.responses[200] = {
        description: 'Airport successfully obtained.',
        schema: { $ref: '#/components/schemas/Airport' }
    }
    #swagger.responses[500] = {
        description: 'Internal server error',
        schema: { $ref: '#/components/schemas/Error' }
    }
    #swagger.tags = ['Airport']
    */
    try {
        const airport = await Airport.findById(req.params.id);
        res.status(200).json(airport);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAirportsByState = async (req, res) => {
    /* #swagger.parameters['state'] = {
        in: 'path',
        description: 'State code (e.g., NY, CA)',
        required: true,
        type: 'string'
    }
    #swagger.responses[200] = {
        description: 'Airports successfully obtained.',
        schema: {
            type: 'array',
            items: {
                $ref: '#/components/schemas/Airport'
            }
        }
    }
    #swagger.responses[500] = {
        description: 'Internal server error',
        schema: { $ref: '#/components/schemas/Error' }
    }
    #swagger.tags = ['Airport']
    */
    try {
        const airports = await Airport.find({ STATE: req.params.state });
        res.status(200).json(airports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAirportByIataCode = async (req, res) => {
    /* #swagger.parameters['iataCode'] = {
        in: 'path',
        description: 'IATA code of the airport',
        required: true,
        type: 'string'
    }
    #swagger.responses[200] = {
        description: 'Airport successfully obtained.',
        schema: { $ref: '#/components/schemas/Airport' }
    }
    #swagger.responses[500] = {
        description: 'Internal server error',
        schema: { $ref: '#/components/schemas/Error' }
    }
    #swagger.tags = ['Airport']
    */
    try {
        const airport = await Airport.findOne({ IATA_CODE: req.params.iataCode });
        res.status(200).json(airport);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
