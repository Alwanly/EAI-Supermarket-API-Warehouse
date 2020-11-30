const mysql = require('mysql');
let connection = "";
    
    connection = mysql.createPool({
        connectionLimit:100,
        host:'db4free.net',
        port:3306,
        user:'admin_warehouse',
        password:'admin_warehouse',
        database:'db_warehouse'
    })

module.exports = connection;