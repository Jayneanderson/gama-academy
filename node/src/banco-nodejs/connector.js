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
});

function createConfiguration() {
    let configuration = mysql.createConnection({
        host: '172.17.0.2',
        user: 'root',
        password: 'root',
    });
   
    return configuration;
}

function openConnection() {
    var connection = this.createConfiguration();
    connection.connect(function (err) {
        if (err) { throw err };
        console.log("Connected!");
    });
    return connection;
}

export default openConnection();