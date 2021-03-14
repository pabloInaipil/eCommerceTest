const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({

    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    user: "bsale_test",
    password: "bsale_test",
    database: "bsale_test",
    port: "3306"
});

mysqlConnection.connect((err) => {

    if (err) {
        throw err
    } else {
        console.log("conexion exitosa")
    }
});

module.exports = mysqlConnection;