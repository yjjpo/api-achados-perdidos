const express = require('express');
const objetoDao = require('./rotas/objetoDao');

const app = express();

app.use(express.json());

app.use(objetoDao);

module.exports = app;
