const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.product = require('../model/products.model.js')(sequelize, Sequelize);


module.exports = db;




//CLEARDB_DATABASE_URL: mysql://be7150a6fe518a:9949934c@us-cdbr-iron-east-03.cleardb.net/heroku_9caa1a986ef025f?reconnect=true


// be7150a6fe518a

// 9949934c

// us-cdbr-iron-east-03.cleardb.net
