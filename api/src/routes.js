const express = require('express');
const espController = require('./controllers/espController');


const routes = express.Router();

routes.get('/toogle', espController.setState);
routes.get('/states', espController.verifyState);
routes.get('/', espController.defaulTeste);

module.exports = routes;