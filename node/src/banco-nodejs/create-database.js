import mysql from 'mysql';
import connection from './connector.js';

let connection = mysql.createConnection({
    host: '172.17.0.2',
    user: 'root',
    password: 'root',
});

connection.connect(function (err) {
    if (err) { throw err };
    console.log("Connected!");

    connection.query("create database nodejs", (err, result) => {
        if (err) { throw err; }
        console.log("Banco de dados criado com sucesso!");
    });
});

