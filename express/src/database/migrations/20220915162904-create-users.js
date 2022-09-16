'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      sexo: {
        type: Sequelize.ENUM('masculino', 'feminino'),
        allowNull: false,
      },
      genero: {
        type: Sequelize.ENUM('transgênero', 'cisgênero', 'não-binário', 'prefiro não informar'),
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      isEstudante: {
        type: Sequelize.CHAR(1),
        defaultValue: false,
        allowNull: false,
        field: 'is_estudante',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at',
      },

    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('alunos');
  }
};
