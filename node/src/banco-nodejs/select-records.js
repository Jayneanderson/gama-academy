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
            select * from consumidores
        `
    connection.query(myQuery, (err, result, fields) => {
        if (err) { throw err };
        console.log("Reultado da consulta\n");
        console.log(result)
    });
});