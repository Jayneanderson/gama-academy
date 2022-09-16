const { Model, Sequelize} = require('sequelize');

class Usuario extends Model {
    static init(sequelize) {
        super.init({
          nome: Sequelize.STRING,
          email: Sequelize.STRING,
          sexo: Sequelize.ENUM('masculino', 'feminino'),
          genero: Sequelize.ENUM('transgênero', 'cisgênero', 'não-binário', 'prefiro não informar'),
          telefone: Sequelize.STRING,
          isEstudante: Sequelize.CHAR,
        },
        {
            sequelize,
        }
        );
    }
}

module.exports = Usuario;
