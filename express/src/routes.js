const { Router } = require('express');

const UsuarioController = require('./controller/UsuarioController.js');

const routes = new Router();

routes.post('/', UsuarioController.store);

routes.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/index.html');
});


module.exports = routes;
