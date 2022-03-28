const Sequelize = require('sequelize');
const system = require('../resource/system');
/**
 * we get all const from system file in resources
 * 
 */
const databaseName = system.database.name;
const username = system.database.username;
const password = system.database.password;
const host = system.database.host;
const dialect = system.database.dialect;
const pool = {};
pool.max   = system.database.pool.max;
pool.min = system.database.pool.min;
pool.idle = system.database.pool.idle;
/**
 * we create our sequelize object
 */
const sequelize = new Sequelize(databaseName,username,password,{
    host:host,
    dialect:dialect,
    pool:{
        max:pool.max,
        min:pool.min,
        idle:pool.idle

    }
});

sequelize.authenticate()
.then(()=>{
    console.log("Authentication Successfull")
})
.catch(()=>{
    console.error("Authentication failed check credentials")
})
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


/**
 * entry of your models here 
 */
db.role = require('./role')(sequelize);


db.sequelize.sync()
.then(()=>{
    console.log("yes")
})
.catch((err)=>{
    console.log(err);
})