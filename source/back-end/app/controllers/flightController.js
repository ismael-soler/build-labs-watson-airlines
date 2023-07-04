const Flight = require('../models/flightModel');

exports.getFlightById = async (req, res) => {
    /* #swagger.responses[200] = {
            description: 'Flight successfully obtained.',
            schema: { $ref: '#/components/schemas/Flight' }
        }
       #swagger.tags = ['Flight']
    */
  try {
    const flight = await Flight.findById(req.params.id);
    res.status(200).json(flight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getFlightByNumber = async (req, res) => {
    /* #swagger.responses[200] = {
            description: 'Flight successfully obtained.',
            schema: { $ref: '#/components/schemas/Flight' }
        }
       #swagger.tags = ['Flight']
    */
    try {
        const flightNumber = req.params.flightNumber;
        const flight = await Flight.findOne({ FLIGHT_NUMBER: flightNumber });
        res.status(200).json(flight);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


exports.getFirstFlight = async (req, res) => {
    /* #swagger.responses[200] = {
            description: 'Flight successfully obtained.',
            schema: { $ref: '#/components/schemas/Flight' }
        }
       #swagger.tags = ['Flight']
    */
  try {
    const flight = await Flight.findOne();
    res.json(flight);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving flight' });
  }
};

exports.getFlightsByOriginAndDestinationAndDate = async (req, res) => {
    /* #swagger.responses[200] = {
        description: 'Flights successfully obtained.',
        schema: { $ref: '#/components/schemas/Flight' }
    }
    #swagger.parameters['origin'] = { description: 'Origin IATA code', in: 'path', required: true, type: 'string' }
    #swagger.parameters['destination'] = { description: 'Destination IATA code', in: 'path', required: true, type: 'string' }
    #swagger.parameters['day'] = { description: 'Day of the month', in: 'path', required: true, type: 'integer' }
    #swagger.parameters['month'] = { description: 'Month of the year', in: 'path', required: true, type: 'integer' }
    #swagger.parameters['year'] = { description: 'Year', in: 'path', required: true, type: 'integer' }
    #swagger.tags = ['Flight']
    */
    try {
        const origin = req.params.origin;
        const destination = req.params.destination;
        const day = req.params.day;
        const month = req.params.month;
        const year = req.params.year;

        const startDate = new Date(year, month - 1, day, 0, 0, 0);
        const endDate = new Date(year, month - 1, day, 23, 59, 59);

        const flights = await Flight.find({
            ORIGIN_AIRPORT: origin,
            DESTINATION_AIRPORT: destination,
            DEPARTURE_DATE: { $gte: startDate, $lte: endDate }
        });
        res.status(200).json(flights);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving flights' });
    }
};
