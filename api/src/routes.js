const express = require('express');
const espController = require('./controllers/espController');


const routes = express.Router();

routes.get('/toogle', espController.setState);
routes.get('/state', espController.verifyState);
routes.get('/', espController.defaulTeste);

module.exports = routes;