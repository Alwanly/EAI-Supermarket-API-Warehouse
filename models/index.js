const { match } = require('../config/connection');

if(!global.hasOwnProperty('db')){
    let Sequelize = require('sequelize'),sequelize = null;

    if(process.env.DATABASE_URL){
        sequelize = new Sequelize(process.env.DATABASE_URL,{
            dialect:'postgres',
            protocol:'postgres',
            port: match[4],
            port: match[3],
            logging:true
        })
    }else{
        sequelize = new Sequelize('localhost','root',null);
    }
}