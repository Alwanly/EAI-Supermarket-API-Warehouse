"use strict";
const mysql = require('mysql');
require('dotenv').config();
let connection = "";    
    connection = mysql.createPool({
        connectionLimit:100,
        host: process.env.DB_LOCAL_HOST,
        port:3306,
        user: process.env.DB_LOCAL_USER,
        password:process.env.DB_LOCAL_PASSWORD,
        database: process.env.DB_LOCAL_NAME        
    })
    
module.exports = connection;