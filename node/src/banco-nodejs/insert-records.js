const people = [
    {
        name: "Rita",
        address: "Rua Fábia, 100",
    },
    {
        name: "Ana",
        address: "Rua Catão, 902"
    },
    {
        name: "Nicole",
        address: "Rua Taipas, 920"
    },
    {
        name: "Romulo",
        address: "Rua das Cruzes, 100"
    }
];

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
    
    people.forEach(person => {

        let sql = `insert into consumidores values ('${person.name}','${person.address}')`
            
            connection.query(sql, (err, result) => {
                if (err) { throw err };
                console.log("Registro inserido com sucesso!");
            });
        });
});