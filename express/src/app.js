const express = require('express');
const routes = require('./routes.js');
require('./database/index.js');

class App {
    constructor() {
        this.server = express();
        //called before using routes
        this.resolveFormats();
        this.routes();
        
    }

    resolveFormats() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.static(__dirname + '/public'));
    }

    routes() {
        this.server.use(routes);
    }
}

module.exports = new App().server;
