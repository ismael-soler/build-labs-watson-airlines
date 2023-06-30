const mongoose = require('mongoose');

const AirlineSchema = new mongoose.Schema({
    IATA_CODE: String,
    AIRLINE: String
});

const Airline = mongoose.model('Airline', AirlineSchema);

module.exports = Airline;