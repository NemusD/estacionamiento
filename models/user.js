const mongoose = require('mongoose');

//Esquema de usuario 
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['common', 'premium'],
    default: 'common',
  },
  parking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parking',
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
