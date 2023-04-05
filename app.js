const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const parkingRoutes = require('./routes/parkingRoutes');

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/parking-app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a la base de datos establecida'))
  .catch((err) => console.error(err));

const app = express();

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: false,
}));

// Configuración de las rutas
app.use('/users', userRoutes);
app.use('/parkings', parkingRoutes);

// Configuración de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Configuración del puerto
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
