"use strict";
const mysql = require('mysql');
require('dotenv').config();
let connection = "";    
    connection = mysql.createPool({
        connectionLimit:100,
        host: "db4free.net"|| process.env.DB_LOCAL_HOST,
        port:3306,
        user: "admin_warehouse" || process.env.DB_LOCAL_USER,
        password:"admin_warehouse" || process.env.DB_LOCAL_PASSWORD,
        database: "db_warehouse" || process.env.DB_LOCAL_NAME        
    })
    
module.exports = connection;