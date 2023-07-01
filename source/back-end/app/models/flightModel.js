const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    unique: true
  },
  AIRLINE: {
    type: String,
    required: true
  },
  FLIGHT_NUMBER: {
    type: Number,
    required: true
  },
  ORIGIN_AIRPORT: {
    type: String,
    required: true
  },
  DESTINATION_AIRPORT: {
    type: String,
    required: true
  },
  CANCELLED: {
    type: Boolean,
    required: true
  },
  DEPARTURE_DATE: {
    type: Date,
    required: true
  },
  ARRIVAL_DATE: {
    type: Date,
    required: true
  }
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
