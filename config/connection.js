const mysql = require('mysql');
let connection = "";
    
    // connection = mysql.createConnection({
    //     host:'db4free.net:3306',
    //     user:'admin_warehouse',
    //     password:'admin_warehouse',
    //     database:'db_warehouse'
    // });

    connection = mysql.createPool({
        connectionLimit:100,
        host:'db4free.net',
        port:3306,
        user:'admin_warehouse',
        password:'admin_warehouse',
        database:'db_warehouse'
    })
// connection.connect((err)=>{
//     if(err)throw err;
    
//     console.log('Mysql Connected');
// });

module.exports = connection;