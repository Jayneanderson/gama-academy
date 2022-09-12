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
    let myQuery = 
        `
        DELETE FROM nodejs.consumidores
        WHERE nome_consumidor='Rita'
        `
    connection.query(myQuery, (err, result, fields) => {
        if (err) { throw err };
        console.log("Deletado com sucesso!\n");
    });
});


