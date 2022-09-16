const Sequelize = require('sequelize');
const databaseConfiguration = require('../config/database.js');
const Usuario = require('../models/Usuario.js');

const models = [Usuario];

class Database {
    constructor() {
        this.init();
    }

    init() {
        //connection that is expected in the second parameter of the models init method
        this.connection = new Sequelize(databaseConfiguration);
        /* 
            I need to call this connection somewhere for it to be called automatically.
            I will call in the app file 
        */
        models.map(model => model.init(this.connection));
    }
}

module.exports = new Database(), this.sequelize;
