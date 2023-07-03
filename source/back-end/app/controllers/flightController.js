const Flight = require('../models/flightModel');

exports.getAllFlights = async (req, res) => {
    /* #swagger.responses[200] = {
            description: 'Flight successfully obtained.',
            schema: { $ref: '#/components/schemas/Flight' }
        }
       #swagger.tags = ['Flight']
    */
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve flights' });
  }
};


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

// find all flights by origin and destination IATA codes
exports.getFlightsByOriginAndDestination = async (req, res) => {
    /* #swagger.responses[200] = {
        description: 'Flights successfully obtained.',
        schema: { $ref: '#/components/schemas/Flight' }
    }
    #swagger.tags = ['Flight']
    */
    try {
      const { origin, destination } = req.params;
      const flights = await Flight.find({
        ORIGIN_AIRPORT: origin,
        DESTINATION_AIRPORT: destination
      });

      res.status(200).json(flights);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
