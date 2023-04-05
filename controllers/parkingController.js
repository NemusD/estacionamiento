const Parking = require('../models/parking');

//Todos los estacionamientos
exports.getAllParkings = async (req, res, next) => {
  try {
    const parkings = await Parking.find();
    res.status(200).json(parkings);
  } catch (err) {
    next(err);
  }
};
//Recupera un estacionamiento por ID
exports.getParkingById = async (req, res, next) => {
  try {
    const parking = await Parking.findById(req.params.id);
    res.status(200).json(parking);
  } catch (err) {
    next(err);
  }
};
//Crea un estacionamiento
exports.createParking = async (req, res, next) => {
  try {
    const newParking = new Parking({
      ...req.body,
      createdBy: req.user._id // Agregamos el ID del usuario creador
    });
    const savedParking = await newParking.save();
    res.status(201).json(savedParking);
  } catch (err) {
    next(err);
  }
};
//Actualizar un estacionamiento
exports.updateParking = async (req, res, next) => {
  try {
    const updatedParking = await Parking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedParking);
  } catch (err) {
    next(err);
  }
};
//Eliminar un estacionamiento
exports.deleteParking = async (req, res, next) => {
  try {
    await Parking.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
