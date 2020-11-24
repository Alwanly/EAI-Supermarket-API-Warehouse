const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_warehouse'
});

connection.connect((err)=>{
    if(err)throw err;
    console.log('Mysql Connected');
});

module.exports = connection;