const express = require('express');
const router = express.Router();
const parkingController = require('../controllers/parkingController');
const authMiddleware = require('../middlewares/authMiddleware');

//Todos los estacionamientos disponibles
router.get('/', authMiddleware.authenticateUser, parkingController.getAllParkings);
//Crea un nuevo estacionamiento
router.post('/', authMiddleware.authenticateUser, parkingController.createParking);
//Recuperar un estacionamiento existente por ID
router.get('/:id', authMiddleware.authenticateUser, parkingController.getParkingById);
//Actualiza un estacionamiento existente por ID
router.patch('/:id', authMiddleware.authenticateUser, parkingController.updateParking);
//Elimina un estacionamiento existente por ID
router.delete('/:id', authMiddleware.authenticateUser, parkingController.deleteParking);

module.exports = router;
