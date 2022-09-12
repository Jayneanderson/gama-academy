import mysql from 'mysql';
let connection = mysql.createConnection({
    database: 'nodejs',
    host: '172.17.0.2',
    user: 'root',
    password: 'root',
});

connection.connect(function (err) {
    if (err) { throw err };
    console.log("Connected!");

    let sql = `create table consumidores (
            nome_consumidor varchar(50) not null,
            endereco_consumidor varchar(100))
            `
    connection.query(sql, (err, result) => {
        if (err) { throw err };
        console.log("Tabela criada com sucesso!");
    });
});

function createTable(tableName, sql) {

}


