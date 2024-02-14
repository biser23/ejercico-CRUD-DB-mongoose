const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Servidor está escuchando en el puerto ${PORT}`);
});