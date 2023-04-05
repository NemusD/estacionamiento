const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

//Recuperar el usuario actual por token
router.get('/', authMiddleware.authenticateUser, userController.getCurrentUser);
//Registra un usuario nuevo
router.post('/register', userController.registerUser);
//Iniciar sesión en un usuario
router.post('/login', userController.loginUser);
//Recuperar usuario existente por ID
router.get('/:id', authMiddleware.authenticateUser, userController.getUserById);
//Actualizar usuario existente por ID
router.patch('/:id', authMiddleware.authenticateUser, userController.updateUser);
//Eliminar usuario existente por ID
router.delete('/:id', authMiddleware.authenticateUser, userController.deleteUser);

module.exports = router;
