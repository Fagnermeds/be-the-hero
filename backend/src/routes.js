const express = require('express');

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// Rotas de login
routes.post('/sessions', SessionController.create);

// Rotas para a entidade ong
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.get('/profile', ProfileController.index);


// Rotas para a entidade casos
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;