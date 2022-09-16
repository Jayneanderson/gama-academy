//se der pau use module.exports =
module.exports = {
  database: 'gama',
  username: 'root',
  password: 'root',
  host: '172.17.0.2',
  dialect: 'mysql',
  define: {
      timestamps: true,//campos created_at e update_at,
      underscored: true, //forma de criar as tabelas no formato snake_case
      underscoredAll: true,

  },
};