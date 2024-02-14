// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const tasksRoutes = require('./routes/tasks');
const config = require('./config/config');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a la base de datos');
  })
  .catch((err) => {
    console.error('Error de conexión a la base de datos:', err);
  });

app.use('/api/tasks', tasksRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});