const mongoose = require('mongoose');

//Esquema de estacionamiento
const parkingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  currentAvailability: {
    type: Number,
    required: true,
  },
  hourlyRate: {
    type: Number,
    required: true,
  },
  premiumHourlyRate: {
    type: Number,
    required: true,
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
}, { timestamps: true });

const Parking = mongoose.model('Parking', parkingSchema);

module.exports = Parking;
