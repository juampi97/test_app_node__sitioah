// Importa Express
const express = require('express');

// Crea una instancia de una aplicación Express
const app = express();

// Define una ruta GET que envía un mensaje de saludo
app.get('/', (req, res) => {
  res.send('¡Hola! Bienvenido a mi API.');
});

// Define el puerto donde correrá la aplicación
const PORT = process.env.PORT || 3000;

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});